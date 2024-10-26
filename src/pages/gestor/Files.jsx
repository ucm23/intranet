import React, { useState, useEffect, useRef } from 'react';
import { FiSearch, FiDownload, FiFolder, FiFile, FiChevronRight, FiChevronDown } from "react-icons/fi";
import { FaFolder, FaFile, FaList, FaThLarge, FaChevronRight, FaFileImage, FaFilePowerpoint, FaFileAlt } from 'react-icons/fa';
import { AiOutlineFile } from 'react-icons/ai';
import { BiSortAlt2 } from "react-icons/bi";
import { CiCircleCheck } from "react-icons/ci";
import { VscError } from "react-icons/vsc";
import { FaFilePdf, FaFileWord, FaFileExcel } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { motion } from 'framer-motion';
import { Button as ButtonAntd } from 'antd';
import { IoChevronForwardSharp } from "react-icons/io5";
import {
    PlusOutlined
} from '@ant-design/icons';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Portal,
    Button,
    Box,
} from '@chakra-ui/react'
import { FaSearch, FaSpinner } from "react-icons/fa";
import { IconButton } from '@chakra-ui/react'
import { IoMdArrowDropdown } from "react-icons/io";
import color from '../../color';
import { Empty, Typography } from 'antd';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

import {
    CloseOutlined
} from '@ant-design/icons';
import { createDocs, indexDocuments } from '../../api/docs/docs';
import { indexDepartments } from '../../api/departamentos/departments';
import { indexProjects } from '../../api/project/projects';

const getFileIcon = (type) => {
    switch (type) {
        case "PDF":
            return <FaFilePdf className="text-md text-red-500" />;
        case "DOCX":
            return <FaFileWord className="text-md text-blue-500" />;
        case "XLSX":
            return <FaFileExcel className="text-md text-green-500" />;
        default:
            return <FaFile className="text-md text-gray-500" />;
    }
};


const DocumentManager = () => {
    const [level, setLevel] = useState(0);
    const [projects, setProjects] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [documents, setDocuments] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [modal1Open, setModal1Open] = useState(false);
    const [uploadResults, setUploadResults] = useState([]);

    useEffect(() => {
        getProjects()
        getDepartments()
        getDocuments()
    }, [])

    const getDocuments = async () => {
        try {
            const docs = await indexDocuments({})
            if (docs?.status) setDocuments(docs?.data)
        } catch (error) {
            console.error("🚀 ~ getDocuments ~ error:", error)
        } finally {
            setIsLoading(false);
        }
    }

    const getProjects = async () => {
        try {
            const projects = await indexProjects({})
            if (projects?.status) setProjects(projects?.data)
        } catch (error) {
            console.error("🚀 ~ getProjects ~ error:", error)
        }
    }
    const getDepartments = async () => {
        try {
            const depas = await indexDepartments({})
            if (depas?.status) setDepartments(depas?.data)
        } catch (error) {
            console.error("🚀 ~ getDepartments ~ error:", error)
        }
    }

    const handleProjectSelect = (project) => {
        setIsLoading(true);
        setSelectedProject(project);
        setLevel(1);
        setIsLoading(false);
    };

    const handleDepartmentSelect = (department) => {
        setSelectedDepartment(department);
        setLevel(2);
    };

    const handleNavigateBack = (targetLevel) => {
        setLevel(targetLevel);
        if (targetLevel === 0) {
            setSelectedProject(null);
            setSelectedDepartment(null);
        } else if (targetLevel === 1) setSelectedDepartment(null);
    };

    const filteredDocumentsForLevel = () => {
        if (level === 0) {
            return documents.filter(doc => doc.project_id === null && doc.department_id === null);
        }
        if (level === 1) {
            return documents.filter(doc => doc.project_id === selectedProject?.id && doc.department_id === null);
        }
        if (level === 2) {
            return documents.filter(doc => doc.project_id === selectedProject?.id && doc.department_id === selectedDepartment?.id);
        }
        return [];
    };

    const menus = {
        project: [
            { option: 'Proyecto nuevo' },
            { option: 'Subir archivo en este nivel' },
        ],
        department: [
            { option: 'Departamento nuevo' },
            { option: 'Subir archivo en este nivel' },
        ],
        documents: [
            { option: 'Subir archivo' },
        ]
    }

    const MenuGeneric = ({ type }) => {
        return (
            <MenuList>
                {menus[type].map((item, index) => (
                    <MenuItem key={`menus-${index}`}>{item?.option}</MenuItem>
                ))}
            </MenuList>
        )
    }

    const Breadcrumbs = ({ level, projectName, departmentName, onNavigateBack }) => {

        const goBack = (index) => {
            onNavigateBack(index)
            setPreviewFile(index ? selectedProject : null)
        }

        return (
            <div className="text-sm text-gray-500 space-x-2 mb-0 flex flex-row items-center content-center pl-0" style={{ marginLeft: 8 }}>
                <Menu isLazy>
                    <MenuButton style={{ marginLeft: -16 }} _hover={{ bg: 'transparent' }} onClick={() => goBack(0)} as={Button} colorScheme='teal' variant='ghost' rightIcon={level === 0 ? <IoMdArrowDropdown /> : null}>
                        Proyectos
                    </MenuButton>
                    {level === 0 && <MenuGeneric type={'project'} />}
                </Menu>
                {level > 0 && (
                    <>
                        <IoChevronForwardSharp />
                        <Menu isLazy>
                            <MenuButton onClick={() => level != 1 && goBack(1)} as={Button} colorScheme='teal' variant='ghost' rightIcon={level === 1 ? <IoMdArrowDropdown /> : null}>
                                {projectName}
                            </MenuButton>
                            {level == 1 && <MenuGeneric type={'department'} />}
                        </Menu>
                    </>
                )}
                {level > 1 && (
                    <>
                        <IoChevronForwardSharp />
                        <Menu isLazy>
                            <MenuButton /*onClick={() => level < 2 && onNavigateBack(2)}*/ as={Button} colorScheme='teal' variant='ghost' rightIcon={level === 2 ? <IoMdArrowDropdown /> : null}>
                                {departmentName}
                            </MenuButton>
                            {level == 2 && <MenuGeneric type={'documents'} />}
                        </Menu>
                    </>
                )}
                {/*level === 2 && (
                    <>
                        <IoChevronForwardSharp />
                        <Menu isLazy>
                            <MenuButton as={Button} colorScheme='teal' variant='ghost' rightIcon={level === 2 ? <IoMdArrowDropdown /> : null}>
                                Documentos
                            </MenuButton>
                            {level == 2 && <MenuGeneric />}
                        </Menu>
                    </>
                )*/}
            </div>
        );
    };

    const ProjectList = ({ isLoading, projects, onProjectSelect, project_id }) => {
        return (
            <div>
                <h2 className="text-sm font-semibold text-gray-800 mb-3">Proyectos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                    {projects.map((folder) => (
                        <div
                            key={folder.id}
                            className="px-3 py-4 rounded hover:shadow-md transition-shadow duration-200 cursor-pointer"
                            style={{ backgroundColor: color?.bgGray }}
                            onDoubleClick={() => {
                                handleFilePreview(folder)
                                onProjectSelect(folder)
                            }}
                            onClick={() => handleFilePreview(folder)}
                        >
                            <div className="flex items-center space-x-2">
                                <FaFolder style={{ fontSize: 18 }} className="text-yellow-400" />
                                <div className="flex-1">
                                    <h3 className="font-normal text-sm text-gray-800 line-clamp-1">{folder.name}</h3>
                                    <p className="text-sm text-gray-500 pb-0 line-clamp-1">{departments.length} elementos</p>
                                </div>
                                <BsThreeDotsVertical className="text-gray-400 pl-0 ml-0" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const DepartmentList_ = ({ isLoading, departments, documents, project_id, department_id, onDepartmentSelect }) => {
        return (
            <div>
                <h2 className="text-sm font-semibold text-gray-800 mb-3">Departamentos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {departments.map((folder) => {
                        const linkedDocs = documents.filter(doc => doc.department_id === folder.id && doc.project_id === project_id);
                        return (
                            <div
                                key={folder.id}
                                className="px-3 py-4 rounded hover:shadow-md transition-shadow duration-200 cursor-pointer"
                                style={{ backgroundColor: color?.bgGray }}
                                onClick={() => handleFilePreview(folder)}
                                onDoubleClick={() => {
                                    handleFilePreview(folder);
                                    onDepartmentSelect(folder);
                                }}
                            >
                                <div className="flex items-center space-x-2">
                                    <FaFolder style={{ fontSize: 18, color: folder?.color }}/* className="text-yellow-400" */ />
                                    <div className="flex-1">
                                        <h3 className="font-normal text-sm text-gray-800 line-clamp-1">{folder.name}</h3>
                                        <p className="text-sm text-gray-500 pb-0 line-clamp-1">{linkedDocs.length} elementos</p>
                                    </div>
                                    <BsThreeDotsVertical className="text-gray-400" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    };

    const [previewFile, setPreviewFile] = useState(null);
    const handleFilePreview = (file) => {
        setPreviewFile(file);
    };

    const DocumentList = ({ isLoading, documents }) => {
        return (
            isLoading ? <div className="flex justify-center items-center" style={{ height: '40vh' }}> <FaSpinner className="animate-spin text-2xl text-blue-400" /> </div> :
                <div>
                    {documents.length === 0 ?
                        <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                            <Empty
                                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                                imageStyle={{
                                    height: 60,
                                }}
                                description={
                                    <Typography.Text>
                                        <p className="text-center font-bold text-lg text-black mt-8 mb-0">Arrastra y suelta los archivos aquí</p>
                                        <p className="text-center text-gray-600 mt-0">o usa el botón "Nuevo"</p>
                                    </Typography.Text>
                                }
                            >
                            </Empty>
                        </div>
                        : <div>
                            <h2 className="text-sm font-semibold text-gray-800 my-3">Documentos</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 pb-24">
                                {documents.map((file) => (
                                    <div
                                        key={file.id}
                                        className="rounded hover:shadow-md transition-shadow duration-200 cursor-pointer overflow-hidden"
                                        style={{ backgroundColor: color?.bgGray }}
                                        onClick={() => handleFilePreview(file)}
                                    >
                                        <div className="p-3">
                                            <img
                                                src={file.thumbnail}
                                                alt={file.name}
                                                className="w-full h-32 object-cover rounded"
                                            />
                                        </div>
                                        <div className="p-3">
                                            <div className="flex items-center justify-between space-x-2">
                                                <div className="flex items-center space-x-2 flex-1 min-w-0">
                                                    {getFileIcon(file.type)}
                                                    <span className="font-medium text-gray-800 truncate line-clamp-1">{file.name}</span>
                                                </div>
                                                <BsThreeDotsVertical className="text-gray-400 flex-shrink-0" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                </div>
        );
    };

    const SkeletonItem = () => (
        <div className="bg-gray-300 h-6 w-48 mb-4 animate-pulse rounded-md"></div>
    );

    const [filesLoad, setFilesLoad] = useState([])

    const handleDrop = async (event) => {
        setUploadResults([])
        event.preventDefault();
        const files = Array.from(event.dataTransfer.files);
        let count = 0;
        if (files.length > 0) {
            setFilesLoad(files);
            setVisibleDrog(false);
            setIsLoading(true);
            setVisibleList(true)
            try {
                for (const file of files || []) {
                    let data = new FormData();
                    data.append("file", file);
                    data.append("name", file.name);
                    data.append("type", file.type);

                    if (level === 1) data.append("project_id", selectedProject?.id);
                    if (level === 2) {
                        data.append("project_id", selectedProject?.id);
                        data.append("department_id", selectedDepartment?.id);
                    }
                    let success = false;
                    try {
                        const get_data = await createDocs({ data });
                        console.log("🚀🚀 🚀 ~ Archivo cargado:", get_data);
                        if (get_data?.status == 413 || get_data?.status == 0) success = 2
                        if (get_data?.status == 201) success = 1
                        count += 1;
                    } catch (error) {
                        console.error("Error al subir archivo:", error);
                        success = 2
                    } finally {
                        setUploadResults((prevResults) => [...prevResults, { fileName: file.name, success }]);
                    }
                }
            } catch (error) {
                console.log("🚀 ~ handleDrop ~ error general:", error);
            } finally {
                await getDocuments();
                setIsLoading(false);
                //if (count == files.length) {
                /*setTimeout(function () {
                    setVisibleList(false)
                }, 10000);*/
                //}
            }
        }
    };

    const [visibleDrog, setVisibleDrog] = useState(false)
    const [visibleList, setVisibleList] = useState(false)

    const handleDragOver = (event) => {
        setVisibleDrog(true)
        event.preventDefault();
    };

    const handleDragLeave = () => {
        setVisibleDrog(false)
    };

    const icons = {
        "image/png": <FaFileImage style={{ fontSize: 15 }} color="red" />,
        "image/jpeg": <FaFileImage style={{ fontSize: 15 }} color="red" />,
        "image/svg+xml": <FaFileImage style={{ fontSize: 15 }} color="red" />,
        "application/pdf": <FaFilePdf style={{ fontSize: 15 }} color="red" />,
        "application/msword": <FaFileWord style={{ fontSize: 15 }} color="blue" />,
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": <FaFileWord style={{ fontSize: 15 }} color="blue" />,
        "application/vnd.ms-powerpoint": <FaFilePowerpoint style={{ fontSize: 15 }} color="orange" />,
        "application/vnd.openxmlformats-officedocument.presentationml.presentation": <FaFilePowerpoint style={{ fontSize: 15 }} color="orange" />,
        "application/vnd.ms-excel": <FaFileExcel style={{ fontSize: 15 }} color="green" />,
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": <FaFileExcel style={{ fontSize: 15 }} color="green" />,
        "default": <AiOutlineFile style={{ fontSize: 15 }} color="gray" />,
    };

    const getFileIcon = (fileType) => icons[fileType] || icons["default"];

    return (
        <div className="mx-auto pr-4 pb-8 bg-white">
            <div className="flex" style={{ width: '100%' }}>
                <div className="mx-auto pb-8 content-scroll-auto" style={{ flex: '1' }}>
                    <div className="flex justify-between items-center mb-2 pl-6 mt-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-0 pb-0 mt-8" style={{ paddingLeft: 8 }}>Gestor de archivos</h2>
                        {/*<ButtonAntd
                            icon={<PlusOutlined />}
                            //onClick={() => navigate("/addnews")}
                            type="primary">
                            Añadir
                        </ButtonAntd>*/}
                    </div>
                    <div className="p-4 pt-0 pb-0">
                        <Breadcrumbs
                            level={level}
                            projectName={selectedProject?.name}
                            departmentName={selectedDepartment?.name}
                            onNavigateBack={handleNavigateBack}
                        />
                        {isLoading ? <div className="flex justify-center items-center h-full"> <FaSpinner className="animate-spin text-2xl text-blue-400" /> </div> :
                            <Box
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                className={`${visibleDrog && 'bg-border-blue'} height-75vh`}
                                style={{ padding: 8, }}
                            >
                                {level === 0 && (
                                    <>
                                        <ProjectList isLoading={isLoading} projects={projects} onProjectSelect={handleProjectSelect} project_id={selectedProject?.id} />
                                        <DocumentList isLoading={isLoading} documents={filteredDocumentsForLevel()} />
                                    </>
                                )}
                                {level === 1 && (
                                    <>
                                        <DepartmentList_ isLoading={isLoading} departments={departments} documents={documents} department_id={selectedDepartment?.id} project_id={selectedProject?.id} onDepartmentSelect={handleDepartmentSelect} />
                                        <DocumentList isLoading={isLoading} documents={filteredDocumentsForLevel()} />
                                    </>
                                )}
                                {level === 2 && <DocumentList isLoading={isLoading} documents={filteredDocumentsForLevel()} />}
                            </Box>}
                    </div>
                </div>
                <div className="border-l pl-6" style={{ width: '250px' }}>
                    {previewFile ? (
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">File Preview</h3>
                            <div className="aspect-video bg-gray-100 rounded overflow-hidden">
                                <img
                                    src={previewFile.url}
                                    alt={previewFile.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-2">
                                <p>
                                    <span className="font-medium">Name:</span> {previewFile.name}
                                </p>
                                <p>
                                    <span className="font-medium">Type:</span>{" "}
                                    {previewFile.type}
                                </p>
                                <p>
                                    <span className="font-medium">Created:</span>{" "}
                                    {previewFile.createdAt}
                                </p>
                                <p>
                                    <span className="font-medium">Updated:</span>{" "}
                                    {previewFile.updatedAt}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                            Select a file to preview
                        </div>
                    )}
                </div>
            </div>
            <div
                style={{
                    position: 'absolute',
                    right: 20,
                    bottom: 20,
                    backgroundColor: 'white',
                    border: '0.5px solid gray',
                    borderRadius: 5,
                    display: visibleList ? 'flex' : 'none',
                    flexDirection: 'column',
                    width: 330
                }}
            >
                <div className='head-bottom'>
                    <h1 style={{ fontSize: '1rem' }} className='font-semibold'>{filesLoad.length} elementos</h1>
                    <CloseOutlined onClick={() => setVisibleList(false)} />
                </div>
                <div>
                    {filesLoad.map((file, index) => (
                        <div key={index} className='flex items-center flex-row p-2.5 justify-between'>
                            <div className='flex items-center flex-row'>
                                {getFileIcon(file?.type)}
                                <h1 style={{ fontSize: '1rem' }} className='font-semibold mb-0 pl-2.5 line-clamp-1'>
                                    {file.name}
                                </h1>
                            </div>
                            <h1 style={{ fontSize: 13 }}>
                                {!uploadResults[index]?.success ? <FaSpinner className="animate-spin text-blue-400" /> :
                                    uploadResults[index]?.success == 1 ? <CiCircleCheck color='green' /> : <VscError color='blue' />
                                }
                            </h1>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};
export default DocumentManager;
