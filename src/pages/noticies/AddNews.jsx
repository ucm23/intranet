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


const ImageLoader = ({ id, picture, className }) => {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        loadURL();
    }, [id]);

    const loadURL = async () => {
        const img = await indexIMGByID({ id, picture });
        setImageUrl(img?.data);
    };

    return imageUrl ? <img src={imageUrl} alt={`img-${id}-${picture}`} className={className} loading="lazy" /> :
        <div className={`flex items-start justify-center ${className}`}>
            <FallingLines color="#03296a" width="100" visible={true} />
        </div>
};

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
            // Manejar el envío del formulario aquí
        }
    };

    const isTitleEmpty = formData.title.trim() === "";

    const toggleEditing = (index) => {
        setEditingIndex(editingIndex === index ? null : index);
    };

    return (
        <>
            <AppBar page={page}>
                <div className="bg-white scroll-100">
                    <div className="relative w-full">
                        <div className="relative_ hover-border-form" onClick={onOpenBanner}>
                            <button
                                type="button"
                                onClick={onOpenBanner}
                                className="text-white hover:text-blue-700 transition-colors duration-200 absolute left-5 top-5"
                            >
                                <FiEdit2 size={20} />
                            </button>
                            <img src={`img/news/banner/${banner}.png`} alt={`img-banner-add-news`} className={"max-h-64 h-fit w-full md:h-95 object-cover news-banner-img"} loading="lazy" />
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 pt-4 rounded-lg max-w-[850px] w-full position-2">
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Agregar un título"
                                className="w-full bg-transparent text-white text-3xl font-medium placeholder-white placeholder-opacity-90 border-none outline-none focus:ring-0 p-2"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="hover-border-form">
                            <div className="max-w-[850px] mx-auto px-4 py-6">
                                <h1 class="flex-auto text-lg font-semibold text-blue-100">
                                    Resumen
                                </h1>
                                {/*<input
                                    type="text"
                                    name="nombre"
                                    placeholder="Agregar resumen"
                                    className="w-full bg-transparent leading-relaxed mb-6 text-black placeholder-opacity-70 border-none outline-none py-2 px-0 focus:ring-0"
                                />*/}
                                <div className="mb-6">
                                    <ReactQuill modules={modules} formats={formats} theme="snow" value={summary} onChange={setSummary} placeholder="Agregar resumen..." />
                                    {/*<div dangerouslySetInnerHTML={{ __html: summary }} />*/}
                                </div>
                            </div>
                        </div>
                        <div className="hover-border-form">
                            <div className="max-w-[850px] mx-auto px-4 py-6">
                                <h1 class="flex-auto text-lg font-semibold text-blue-100">
                                    Cuerpo del contenido
                                </h1>
                                {/*<input
                                    type="text"
                                    name="nombre"
                                    placeholder="Agregar resumen"
                                    className="w-full bg-transparent leading-relaxed mb-6 text-black placeholder-opacity-70 border-none outline-none py-2 px-0 focus:ring-0"
                                />*/}
                                <div className="mb-6">
                                    <ReactQuill modules={modules} formats={formats} theme="snow" value={body} onChange={setBody} placeholder="Agregar contenido..." />
                                    {/*<div dangerouslySetInnerHTML={{ __html: value }} />*/}
                                </div>
                            </div>
                        </div>

                        <div className="hover-border-form">
                            <div className="max-w-[850px] mx-auto px-4 py-6">
                                <h1 class="flex-auto text-lg font-semibold text-blue-100">
                                    Añadir características
                                </h1>
                                {/*<input
                                    type="text"
                                    name="nombre"
                                    placeholder="Agregar resumen"
                                    className="w-full bg-transparent leading-relaxed mb-6 text-black placeholder-opacity-70 border-none outline-none py-2 px-0 focus:ring-0"
                                />*/}
                                <div className="space-y-6">
                                    <div>
                                        <input
                                            type="text"
                                            id="title"
                                            value={formData.title}
                                            onChange={handleTitleChange}
                                            className={`mt-1 block w-full rounded-md focus:ring-0 border-none outline-none border border-gray-300 sm:text-sm ${errors.title ? 'border-red-500' : ''} bg-white px-4 py-2 transition duration-300 ease-in-out hover:bg-purple-50 focus:bg-white`}
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
                                                    {editingIndex !== index && <h3 className="text-lg font-semibold text-purple-600">{item.name || "Sin nombre"}</h3>}
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
                                                            {/*<label htmlFor={`description_${index}`} className="block text-sm font-medium text-purple-700 mb-1">
                                                                Descripción
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id={`description_${index}`}
                                                                value={item.description}
                                                                onChange={(e) => handleDataChange(index, 'description', e.target.value)}
                                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                                                            />*/}
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
                                        <button
                                            type="button"
                                            onClick={addMoreFields}
                                            className={`w-full inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:-translate-y-1 ${isTitleEmpty ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            disabled={isTitleEmpty}
                                        >
                                            <FiPlus className="mr-2" /> Agregar más
                                        </button>
                                        {/*<button
                                            type="submit"
                                            className={`px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:-translate-y-1 ${isTitleEmpty ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            disabled={isTitleEmpty}
                                        >
                                            Enviar
                                        </button>*/}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Galería de imágenes</h2>
                            <img src={''} alt={`img-body-add-news`} className={"w-full h-64 object-cover rounded-lg h-auto"} loading="lazy" />
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Noticias relacionadas</h2>
                            <div className="space-y-4">
                                {item?.list.map((news, index) => (
                                    <div key={index} className="bg-gray-100 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
                                        <div href={news?.url} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                                            <div className="flex items-center mb-2">
                                                <FaNewspaper className="mr-3 text-blue-600 flex-shrink-0" />
                                                <span className="font-semibold">{news?.title}</span>
                                            </div>
                                            <p className="text-sm text-gray-600 ml-7">{news?.title}</p>
                                            <p className="text-sm text-gray-600 ml-7">{news?.summary}</p>
                                            <div className="flex justify-end mt-2">
                                                <FaExternalLinkAlt className="text-blue-600" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Conclusiones</h2>
                            <p className="text-gray-700 leading-relaxed">{item?.conclusion}</p>
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
        </>
    );
};

export default AddNews;

