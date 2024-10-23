import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import React, { useState, useContext, useRef } from 'react';
import { useNavigate } from "react-router-dom"
import { notification, } from 'antd';
import { connect } from "react-redux";
import { EyeOutlined, EyeInvisibleOutlined, UserOutlined, LockOutlined, } from '@ant-design/icons';
import Context from '../redux/Context';
import { TailSpin, ThreeDots } from 'react-loader-spinner';

/*const openNotificationWithIcon = (api, type, description) => {
    api[type]({
        message: messagesNotificationLogin[type].message,
        description: messagesNotificationLogin[type].description || description,
    });
};*/

export default function ModalCenter(props) {
    const { mobile } = props;
    const navigate = useNavigate();
    const { signIn } = useContext(Context);
    const [isSubmitting, setSubmitting] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [api, contextHolder] = notification.useNotification();
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { value, name } = event.currentTarget;
        setData({ ...data, [name]: value });
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        setSubmitting(true)
        if (!data.email.trim() || !data.password.trim()) {
            //openNotification('warning', 'Debe rellenar los campos de correo y contraseña')
            return;
        }
        if (!regexEmail.test(data.email)) {
            //openNotification('warning', 'Correo electrónico no valido')
            return;
        }
        /*
        
        const { data: user_ } = await supabase.from('user').select(`*, company:company_id (*)`).eq('email', data?.email.trim()).eq('password', data?.password.trim());
        //console.log("🚀 ~ handleLogin ~ user_:", user_)
        
        if (user_[0]) {
            //openNotification('success')
            openSession('OPEN_', user_[0])
            setTimeout(() => {
                signIn()
                navigate(`/home`);
            }, 1000);
        } //else openNotification('error')
         */
        signIn()
        setSubmitting(false)
    };

    return (
        <Modal
            {...props}
            //size="lg"
            //aria-labelledby="contained-modal-title-vcenter"
            centered
            
        >
            <div
                //allowfullscreen
                //style={{ borderRadius: 6, height: "480px", width: "100%" }}
            >
                <div>
                    <div className="flex flex-col">
                        <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                            <img
                                className="mx-auto h-10 w-auto"
                                src="/img/logo-blue-removebg.png"
                                alt="/img/logo-blue-removebg.png"
                                style={{ objectFit: 'scale-down', height: 125 }}
                            />
                            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form onSubmit={handleLogin} className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Correo electrónico
                                        </label>
                                        <div className="mt-2">
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-3 pr-3 flex items-center cursor-pointer">
                                                    <h1 className="text-gray-500 hover:text-gray-700" style={{ fontSize: 15 }}>@</h1>
                                                </div>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="text"
                                                    autoComplete="text"
                                                    required
                                                    value={data.email}
                                                    onChange={handleChange}
                                                    style={{ borderRadius: 2 }}
                                                    className="block w-full rounded-md border-0 py-1.5 p-left text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                Contraseña
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-3 pr-3 flex items-center cursor-pointer">
                                                    <LockOutlined className="text-gray-500 hover:text-gray-700" />
                                                </div>
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    autoComplete="current-password"
                                                    required
                                                    value={data.password}
                                                    onChange={handleChange}
                                                    style={{ borderRadius: 2 }}
                                                    className="block w-full rounded-md border-0 py-1.5 p-left text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                                <div
                                                    onClick={togglePasswordVisibility}
                                                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                                >
                                                    {showPassword ? <EyeInvisibleOutlined className="text-gray-500 hover:text-gray-700" /> : <EyeOutlined className="text-gray-500 hover:text-gray-700" />}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        onClick={handleLogin}
                                        style={{ backgroundColor: '#1e7fc3', borderRadius: 2, }}
                                        className="flex w-full justify-center rounded-md-5 px-3 py-2 text-sm font-semibold shadow-sm leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        {isSubmitting ? (
                                            <ThreeDots
                                                height="20"
                                                width="20"
                                                color="#ffffff"
                                                ariaLabel="loading"
                                            />
                                        ) : (
                                            'Ingresar'
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <h1 style={{ fontSize: 12, fontStyle: 'italic', color: 'gray', textAlign: 'center', marginBottom: 15 }}>
                            ©Todos los derechos reservados. Grupo CTI Tech-IN POS 2024
                        </h1>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

ModalCenter.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func,
}