import React, { useEffect, useState, useRef } from "react";
import { FiPlus, FiX, FiEdit, FiEdit2, FiCheck } from "react-icons/fi";
import { FiBold, FiItalic, FiAlignCenter } from 'react-icons/fi';
import { Modal as ModalBootstrap, Button } from "react-bootstrap";
import { FaCalendarAlt, FaUser, FaComments, FaShareAlt, FaNewspaper, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { indexIMGByID } from "../../api/news/news";
import moment from "moment/moment";
import AppBar from '../../components/AppBar';
import { FallingLines } from 'react-loader-spinner'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button as ButtonAntd, Drawer, Radio, Space } from 'antd';
import { FaCheck } from 'react-icons/fa';
import { FiUpload } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";
import { ShareAltOutlined } from '@ant-design/icons';


const modules = {
    toolbar: [
        ['bold', 'italic', 'underline'],
        ['link', 'video'],
    ]
};

const formats = [
    'bold', 'italic', 'underline', 'blockquote',
    'link', 'video'
];

const AddNews = ({ page }) => {
    const location = useLocation();
    const { item, user } = location?.state || {};
    const { isOpen: isOpenBanner, onOpen: onOpenBanner, onClose: onCloseBanner } = useDisclosure();
    const [showModal, setShowModal] = useState(false);
    const [editingItem, setEditingItem] = useState({ name: "", description: "" });

    const [image, setImage] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setImage(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setImage(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    /*const validateForm = () => {
        let formErrors = {};
        if (!image) formErrors.image = "Image is required";
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsUploading(true);
            // Simulating upload process
            setTimeout(() => {
                setIsUploading(false);
                alert("Image uploaded successfully!");
                setImage(null);
            }, 2000);
        }
    };*/

    const startEditing = (index) => {
        setEditingIndex(index);
        setEditingItem(formData.data[index]);
        setShowModal(true);
    };

    const stopEditing = () => {
        setEditingIndex(null);
        setShowModal(false);
    };

    const saveEdit = () => {
        const newData = [...formData.data];
        newData[editingIndex] = editingItem;
        setFormData({ ...formData, data: newData });
        stopEditing();
    };

    const [inputValue, setInputValue] = useState('');
    const editableDivRef = useRef(null);

    const formatText = (tag) => {
        const selection = window.getSelection();
        const selectedText = selection.toString();

        if (selectedText) {
            const range = selection.getRangeAt(0);
            const newNode = document.createElement(tag);
            newNode.textContent = selectedText;

            // Inserta el nuevo nodo
            range.deleteContents();
            range.insertNode(newNode);
            // Mueve el cursor después del nuevo nodo
            range.setStartAfter(newNode);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);

            // Actualiza el valor del estado con el contenido actual del div editable
            setInputValue(editableDivRef.current.innerHTML);
            editableDivRef.current.focus();
        }
    };

    const handleInput = () => {
        setInputValue(editableDivRef.current.innerHTML);
    };

    const [banner, setBanner] = useState(1);
    const [summary, setSummary] = useState('');
    const [body, setBody] = useState('');
    const [conclusion, setConclusion] = useState('');
    const test = {
        user_id: 1,
        title: "",
        body: "",
        active: true,
        category: [],
        conclusion: "",
        list: {
            title: "",
            list: [
                { title: "", description: "" }
            ]
        },
        banner: ""
    }

    const [formData, setFormData] = useState({
        title: "",
        data: [{ name: "", description: "" }]
    });
    const [errors, setErrors] = useState({});
    const [editingIndex, setEditingIndex] = useState(null);

    const handleTitleChange = (e) => {
        setFormData({ ...formData, title: e.target.value });
        if (e.target.value) {
            setErrors({ ...errors, title: "" });
        }
    };

    const handleDataChange = (index, field, value) => {
        console.log("🚀 ~ handleDataChange ~ index, field, value:", index, field, value)
        const newData = [...formData.data];
        newData[index] = { ...newData[index], [field]: value };
        setFormData({ ...formData, data: newData });
    };

    const addMoreFields = () => {
        setFormData({
            ...formData,
            data: [...formData.data, { name: "", description: "" }]
        });
    };

    const removeFields = (index) => {
        const newData = [...formData.data];
        newData.splice(index, 1);
        setFormData({ ...formData, data: newData });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.title) {
            newErrors.title = "El título es obligatorio";
        }
        formData.data.forEach((item, index) => {
            if (!item.name) {
                newErrors[`name_${index}`] = "El nombre es obligatorio";
            }
            if (!item.description) {
                newErrors[`description_${index}`] = "La descripción es obligatoria";
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Formulario enviado:", formData);
        }
    };

    const isTitleEmpty = formData.title.trim() === "";

    const toggleEditing = (index) => {
        setEditingIndex(editingIndex === index ? null : index);
    };

    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');
    const showDrawer = () => {
        setOpen(true);
    };
    const onChange = (e) => {
        setPlacement(e.target.value);
    };
    const onClose = () => {
        setOpen(false);
    };

    const [selectedBanner, setSelectedBanner] = useState(1);
    const [selectedBody, setSelectedBody] = useState(1);

    const handleBannerClick = (id) => {
        setSelectedBanner(id);
    };

    return (
        <>
            <AppBar
                page={page}
                extra={
                    <ButtonAntd type="primary" icon={<ShareAltOutlined />}>
                        Publicar
                    </ButtonAntd>
                }
            >
                <div className="bg-white scroll-100">
                    <div className="relative w-full">
                        <div className="relative_ hover-border-form" onClick={showDrawer}>
                            <button
                                type="button"
                                onClick={showDrawer}
                                className="text-white hover:text-blue-700 transition-colors duration-200 absolute left-5 top-5"
                            >
                                <FiEdit2 size={20} />
                            </button>
                            <img src={`img/news/banner/${selectedBanner}.png`} alt={`img-banner-add-news`} className={"max-h-64 h-fit w-full md:h-95 object-cover news-banner-img"} loading="lazy" />
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 pt-4 rounded-lg max-w-[850px] w-full position-2">
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Agregar un título"
                                className="w-full bg-transparent text-white text-3xl font-medium placeholder-white placeholder-opacity-90 border-none outline-none focus:ring-0 p-2"
                                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="hover-border-form">
                            <div className="max-w-[850px] mx-auto px-4 py-6">
                                <h1 class="flex-auto text-lg font-semibold text-blue-100">
                                    Resumen
                                </h1>
                                <div className="mb-6">
                                    <ReactQuill modules={modules} formats={formats} theme="snow" value={summary} onChange={setSummary} placeholder="Agregar resumen..." />
                                    {/*<div dangerouslySetInnerHTML={{ __html: summary }} />*/}
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div className="hover-border-form">
                            <div className="max-w-[850px] mx-auto px-4 py-6">
                                <h1 class="flex-auto text-lg font-semibold text-blue-100">
                                    Cuerpo del contenido
                                </h1>
                                <div className="mb-6">
                                    <ReactQuill modules={modules} formats={formats} theme="snow" value={body} onChange={setBody} placeholder="Agregar contenido..." />
                                    {/*<div dangerouslySetInnerHTML={{ __html: value }} />*/}
                                </div>
                                <motion.div
                                    whileHover={{ scale: 1.009 }}
                                    whileTap={{ scale: 1 }}
                                    className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer transition duration-300 ease-in-out hover:border-blue-500"
                                    onDragOver={handleDragOver}
                                    onDrop={handleDrop}
                                    onClick={() => fileInputRef.current.click()}
                                >
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleImageChange}
                                        accept="image/*, .png, .jpeg, .jpg, .gif"
                                        className="hidden"
                                    />
                                    {image ? (
                                        <img
                                            src={image}
                                            alt="img-body-add-news"
                                            //className="mx-auto max-h-48 rounded-md"
                                            className="w-full mx-auto object-cover rounded-sm h-auto"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="text-gray-500">
                                            <FiUpload className="mx-auto text-3xl mb-2" />
                                            <p>Arrastre y suelte una imagen o haga clic para cargar</p>
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        </div>
                        <Divider />

                        <div className="hover-border-form">
                            <div className="max-w-[850px] mx-auto px-4 py-6">
                                <h1 class="flex-auto text-lg font-semibold text-blue-100">
                                    Añadir lista
                                </h1>
                                <div className="space-y-6">
                                    <div>
                                        <input
                                            type="text"
                                            id="title"
                                            value={formData.title}
                                            onChange={handleTitleChange}
                                            className={`mt-1 block w-full rounded-md focus:ring-0 border-none outline-none border border-gray-300 sm:text-sm ${errors.title ? 'border-red-500' : ''} bg-white py-2 transition duration-300 ease-in-out hover:bg-purple-50 focus:bg-white`}
                                            placeholder="Ingrese el título"
                                            aria-label="Título"
                                        />
                                        {errors.title && <p className="mt-2 text-sm text-red-600">{errors.title}</p>}
                                    </div>

                                    <div className="space-y-4">
                                        {formData.data.map((item, index) => (
                                            <div
                                                key={index}
                                                className={`bg-white rounded-lg p-6 border-none outline-none border border-gray-300 transition-all duration-300 ${editingIndex === index ? 'ring-2 ring-primary-100' : ''}`}
                                            >
                                                <div className={`flex ${editingIndex !== index ? "justify-between" : "justify-end"} items-center`}>
                                                    {editingIndex !== index &&
                                                        <h3 className="text-lg font-semibold text-primary-100">
                                                            {item.name || "Sin nombre"}
                                                        </h3>
                                                    }
                                                    <div className="flex space-x-2">
                                                        <button
                                                            type="button"
                                                            onClick={() => toggleEditing(index)}
                                                            className="ring-primary-100 hover:text-blue-700 transition-colors duration-200"
                                                            aria-label={editingIndex === index ? "Guardar cambios" : "Editar campo"}
                                                        >
                                                            {editingIndex === index ? <FiCheck size={20} /> : <FiEdit2 size={20} />}
                                                        </button>
                                                        {index > 0 && (
                                                            <button
                                                                type="button"
                                                                onClick={() => removeFields(index)}
                                                                className="ring-primary-100 hover:text-blue-700 transition-colors duration-200"
                                                                aria-label="Eliminar campo"
                                                                disabled={isTitleEmpty}
                                                            >
                                                                <FiX size={20} />
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                                {editingIndex === index ? (
                                                    <div className="space-y-4">
                                                        <div>
                                                            <input
                                                                type="text"
                                                                id={`name_${index}`}
                                                                value={item.name}
                                                                onChange={(e) => handleDataChange(index, 'name', e.target.value)}
                                                                className="mt-1 block w-full rounded-md sm:text-sm focus:ring-0 border-none outline-none border border-gray-300"
                                                            />
                                                            {errors[`name_${index}`] && <p className="mt-2 text-sm text-red-600">{errors[`name_${index}`]}</p>}
                                                        </div>
                                                        <div>
                                                            <ReactQuill id={`description_${index}`} modules={modules} formats={formats} theme="snow" value={item?.description} onChange={(value) => handleDataChange(index, 'description', value)} placeholder="Agregar descripción..." />
                                                            {errors[`description_${index}`] && <p className="mt-2 text-sm text-red-600">{errors[`description_${index}`]}</p>}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    //<p className="text-gray-600">{item.description || "Sin descripción"}</p>
                                                    <div dangerouslySetInnerHTML={{ __html: item.description }} />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div></div>
                                        <button
                                            type="button"
                                            onClick={addMoreFields}
                                            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-100 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:-translate-y-1 ${isTitleEmpty ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            disabled={isTitleEmpty}
                                        >
                                            <FiPlus className="mr-2" /> Add More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Divider />

                        <div className="hover-border-form">
                            <div className="max-w-[850px] mx-auto px-4 py-6">
                                <h1 class="flex-auto text-lg font-semibold text-blue-100">
                                    Conclusiones
                                </h1>
                                <div className="mb-6">
                                    <ReactQuill modules={modules} formats={formats} theme="snow" value={conclusion} onChange={setConclusion} placeholder="Agregar resumen..." />
                                    {/*<div dangerouslySetInnerHTML={{ __html: summary }} />*/}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-4">
                            {item?.categories.map((category, index) => (
                                <button
                                    key={index}
                                    className={`flex items-center px-4 py-2 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-white text-gray-800 hover:bg-blue-100`}
                                >
                                    <span>{category}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </AppBar>
            <ModalBootstrap show={showModal} onHide={stopEditing}>
                <ModalBootstrap.Header closeButton>
                    <ModalBootstrap.Title>Edit Field</ModalBootstrap.Title>
                </ModalBootstrap.Header>
                <ModalBootstrap.Body>
                    <div className="mb-3">
                        <label htmlFor="editName" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="editName"
                            value={editingItem.name}
                            onChange={(e) => handleDataChange('name', e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="editDescription" className="form-label">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="editDescription"
                            value={editingItem.description}
                            onChange={(e) => handleDataChange('description', e.target.value)}
                        />
                    </div>
                </ModalBootstrap.Body>
                <ModalBootstrap.Footer>
                    <Button variant="secondary" onClick={stopEditing}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveEdit}>
                        Save Changes
                    </Button>
                </ModalBootstrap.Footer>
            </ModalBootstrap>

            <Modal isOpen={isOpenBanner} onClose={onCloseBanner}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <Divider />
                    <ModalBody>
                        <h1>jsjs</h1>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onCloseBanner}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Drawer
                title="Banco de imágenes"
                placement={placement}
                width={500}
                onClose={onClose}
                open={open}
            /*extra={
                <Space>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="primary" onClick={onClose}>
                        OK
                    </Button>
                </Space>
            }*/
            >
                <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((banner) => (
                        <div key={`img-banner-select-${banner}`} className="relative" onClick={() => handleBannerClick(banner)}>
                            <img
                                src={`img/news/banner/${banner}.png`}
                                alt={`img-banner-add-news-select-${banner}`}
                                className={`w-full h-auto cursor-pointer rounded-md border-2 ${selectedBanner === banner ? 'border-blue-500' : 'border-transparent'}`}
                            />
                            {selectedBanner === banner && (
                                <div className="absolute top-2 right-2 bg-blue-600 text-white rounded-full p-1">
                                    <FaCheck />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Drawer>
        </>
    );
};

export default AddNews;

