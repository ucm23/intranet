import React, { useEffect, useState } from "react";
import { FaNewspaper, FaGlobeAmericas, FaLandmark, FaFlask, FaFootballBall, FaMusic, FaChevronRight, FaTh, FaThLarge, FaList, FaPlus, FaTable } from "react-icons/fa";
import { indexIMGByID, indexNews } from "../../api/news/news";
import { indexUsers } from "../../api/users/users";
import { useNavigate } from 'react-router-dom';
import moment from "moment/moment";

const categories = [
    "Todos",
    "Actualizaciones de Productos",
    "Innovación y Tecnología",
    "Proyectos y Casos de Éxito",
    "Responsabilidad digital",
    "Cultura y Valores",
    "Anuncios Corporativos",
    "Eventos y Webinars",
    "Reconocimientos y Premios",
    "Capacitación y Desarrollo",
    "Seguridad Informática",
    "Responsabilidad Social y Sustentabilidad",
    "responsabilidad",
    "digital"
]

const viewModes = [
    { mode: 1, icon: <FaThLarge /> },
    { mode: 2, icon: <FaTh /> },
    { mode: 3, icon: <FaList /> },
    { mode: 4, icon: <FaTable /> },
];

const NewsList = () => {

    const [data, setData] = useState([]);
    const [users, setUsers] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const user = await indexUsers({})
        console.log("🚀 ~ getDocuments ~ user:", user)
        if (user?.status) setUsers(user?.data)
    }

    useEffect(() => {
        if (users) getDocuments()
    }, [users])

    const getDocuments = async () => {
        const docs = await indexNews({})
        console.log("🚀 ~ getDocuments ~ docs:", docs)
        if (docs?.status) setData(docs?.data)
    }

    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [viewMode, setViewMode] = useState(1);

    const handleCategoryClick = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredNews = selectedCategory === "Todos"
        ? data
        : data.filter(item => item.categories.find((item_) => item_ === selectedCategory));

    const handleViewModeChange = (mode) => {
        setViewMode(mode);
    };

    const findUser = ({ id }) => users.find(item => item?.id == id);

    const ImageLoader = ({ id, className }) => {
        const [imageUrl, setImageUrl] = useState(null);

        useEffect(() => {
            loadURL();
        }, [id]);

        const loadURL = async () => {
            const img = await indexIMGByID({ id, thumbnail: true });
            setImageUrl(img?.data);
        };
        return imageUrl ? <img src={imageUrl} alt={`img-${id}`} className={className} loading="lazy" /> : <p>Cargando...</p>;
    };

    const handleDetails = ({ item, user }) => {
        navigate("/newDetails", { state: { item, user } });
    };


    const renderNewsItems = () => {
        switch (viewMode) {
            case 1:
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredNews.map((item, index) => {
                            const user = findUser({ id: item.user_id });
                            return (
                                <div key={index} onClick={() => handleDetails({ item, user })} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <ImageLoader id={item?.id} className={"w-full h-55 object-cover"} />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">{item.summary}</p>
                                        <div className="flex justify-between items-center">
                                            <div className="flex flex-row">
                                                {item?.categories.map((item, index) => <span key={`${item}-${index}`} className="bg-blue-200 text-blue-600 py-1 px-2 ml-0.5 rounded-full text-xs">{item}</span>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                );
            case 2:
                return (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {filteredNews.map((item, index) => {
                            const user = findUser({ id: item.user_id });
                            return (
                                <div key={index} onClick={() => handleDetails({ item, user })} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <ImageLoader id={item?.id} className={"w-full h-32 object-cover"} />
                                    <div className="p-2">
                                        <h3 className="text-sm font-semibold mb-1 text-gray-800">{item.title}</h3>
                                        {item?.categories.map((item, index) => <span key={`${item}-${index}`} className="bg-blue-200 text-blue-600 py-1 px-3 ml-1 rounded-full text-xs">{item}</span>)}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-4">
                        {filteredNews.map((item, index) => {
                            const user = findUser({ id: item.user_id });
                            return (
                                <div key={index} onClick={() => handleDetails({ item, user })} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex">
                                    <ImageLoader id={item?.id} className={"w-32.h-32.object-cover"} />
                                    <div className="p-4 flex-grow">
                                        <h3 className="text-lg font-semibold mb-1 text-gray-800">{item.title}</h3>
                                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.summary}</p>
                                        <span className="text-xs text-blue-600 font-medium">{user?.first_name} {user?.last_name}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                );
            case 4:
                return (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className="bg-white text-black-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-2 text-left">Titulo</th>
                                    <th className="py-3 px-2 text-left">Categoria</th>
                                    <th className="py-3 px-2 text-left">Publicación</th>
                                    <th className="py-3 px-2 text-left">Resumen</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {filteredNews.map((item, index) => {
                                    const user = findUser({ id: item.user_id });
                                    return (
                                        <tr key={index} onClick={() => handleDetails({ item, user })} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-3 px-2 text-left whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex flex-col">
                                                        <span className="font-medium">{item.title}</span>
                                                        <span>{user?.first_name} {user?.last_name}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-3 px-2 text-left">
                                                {item?.categories.map((item, index) => <span key={`${item}-${index}`} className="bg-blue-200 text-blue-600 py-1 px-3 ml-1 rounded-full text-xs">{item}</span>)}
                                            </td>
                                            <td className="py-3 px-2 text-left">
                                                <span>{item?.created_at}</span>
                                            </td>
                                            <td className="py-3 px-2 text-left">
                                                <span className="truncate block max-w-xs">{item?.summary}</span>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                );
        }
    };

    return (
        <div className="mx-auto px-4 py-8 bg-gray-100 bg-white scroll">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Noticias</h2>
                <button onClick={() => navigate("/addnews")} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center transition-colors duration-300">
                    <FaPlus className="mr-2" /> Añadir
                </button>
            </div>

            <div className="mb-8 flex flex-wrap gap-4 justify-between">
                <div className="flex flex-wrap gap-4 items-center">
                    <label htmlFor="category-select" className="text-gray-700 font-medium">Categoría</label>
                    <select
                        id="category-select"
                        name="select"
                        value={selectedCategory}
                        onChange={handleCategoryClick}
                        aria-label={"category-select"}
                        className="bg-white border border-gray-300 text-gray-700 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                <div className="flex gap-2">
                    {viewModes.map(({ mode, icon }) => (
                        <button
                            key={mode}
                            onClick={() => handleViewModeChange(mode)}
                            className={`p-2 rounded-md ${viewMode === mode ? "bg-blue-600 text-white" : "bg-white text-gray-800 hover:bg-gray-200"}`}
                        >
                            {icon}
                        </button>
                    ))}
                </div>
            </div>

            {renderNewsItems()}

            {filteredNews.length === 0 && (
                <p className="text-center text-gray-600 mt-8">
                    No news articles found for the selected category.
                </p>
            )}
        </div>
    );
};

export default NewsList;
