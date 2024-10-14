import React, { useState, useContext } from 'react';
import {
    HomeOutlined,
    UserOutlined,
    ApartmentOutlined,
    SettingFilled,
    LoginOutlined,
    MenuOutlined,
    TruckOutlined,
    CalendarOutlined,
    MailOutlined,
    ArrowLeftOutlined,
    ToolOutlined,
    SettingOutlined,
    AppstoreOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Divider, useBreakpointValue } from '@chakra-ui/react'
import { useNavigate, Link } from 'react-router-dom';
import { Avatar, List, Button } from "antd";
import { useSelector } from 'react-redux';
//import LabelProfile from './LabelProfile';
import Context from '../redux/Context';

const { Header, Content, Sider } = Layout;
const routes = [
    { id: 1, href: "/", content: "Inicio", icon: "fa-home" },
    { id: 2, href: "/noticias", content: "Noticias", icon: "fa-newspaper" },
    { id: 3, href: "/colaboradores", content: "Colaboradores", icon: "fa-users" },
    { id: 4, href: "/tramites", content: "Trámites y Servicios", icon: "fa-tachometer-alt" },
    {
        id: 5, href: "/gestor-contenidos", content: "Gestor de Contenidos", icon: "fa-cogs",
        subRoutes: [
            { id: 5.1, href: "/gestor-contenidos/administracion", content: "Administración" },
            { id: 5.2, href: "/gestor-contenidos/recursosHumanos", content: "Recursos Humanos" },
            { id: 5.3, href: "/gestor-contenidos/areaItsTelepeaje", content: "Área ITS y Telepeaje" },
            { id: 5.4, href: "/gestor-contenidos/desarrolloAplicaciones", content: "Desarrollo de Aplicaciones" },
            { id: 5.5, href: "/gestor-contenidos/mesaAyuda", content: "Mesa de Ayuda" },
        ]
    },
    { id: 6, href: "/indicadores", content: "Indicadores", icon: "fa-chart-line" },
    { id: 7, href: "/calendario", content: "Calendario de Eventos", icon: "fa-calendar-alt" }
];
const items = [
    {
        key: 'sub1', label: 'Inicio', icon: React.createElement(HomeOutlined), href: '/',
    },
    {
        key: 'sub2', label: 'Noticias', icon: <AppstoreOutlined />, href: '/newslist',
    },

    {
        key: 'sub3', label: 'Colaboradores', icon: <AppstoreOutlined />, href: '/collaborator',
    },
    {
        key: 'sub4', label: 'Trámites y Servicios', icon: <AppstoreOutlined />, href: '/docs',
    },
    {
        key: 'sub5', label: 'Gestor de Contenidos', icon: <AppstoreOutlined />, href: '/files',
    },
    {
        key: 'sub6', label: 'Gestor de Contenidos', icon: <AppstoreOutlined />, href: '/finder',
    },
    {
        key: 'sub7', label: 'Indicadores', icon: <SettingOutlined />, href: '/ind',
    },
    {
        key: 'sub8', label: 'Calendario', icon: React.createElement(CalendarOutlined), href: '/calendar',
    },
    {
        key: 'sub9', label: 'Calendario', icon: React.createElement(CalendarOutlined), href: '/newDetails',
    },

];

const NavBarVertical = ({ children, menu }) => {

    const { token: { colorBgContainer } } = theme.useToken();
    const navigate = useNavigate();
    //const information_user = useSelector(state => state.login.information_user);
    //const { company } = information_user;
    const { signOut } = useContext(Context);
    const [collapsed, setCollapsed] = useState(false);
    const [menuCog, setMenuCog] = useState(true);
    const mobile = useBreakpointValue({ base: true, md: false });

    const onClick = (e) => {
        const clickedItem = items.find(child => child.key === e.key);
        if (clickedItem && 'href' in clickedItem) window.location.href = clickedItem.href;
    };

    return (
        <Layout style={{ height: '100vh', overflow: 'hidden' }}>
            <Header style={{ display: 'flex', alignItems: 'center', background: '#03296A', height: 46, padding: !collapsed ? 0 : 14 }}>
                <div className="btn-menu-header" onClick={() => setCollapsed(!collapsed)} >
                    <MenuOutlined color='white' style={{ color: 'white' }} />
                </div>
                <img src="/img/logo-white-removebg.png" alt="/img/logo-blue-removebg.png" style={{ height: 40, marginLeft: !mobile ? 12 : 0 }} />
            </Header>
            <Layout>
                {menu &&
                    <Sider
                        collapsed={collapsed}
                        style={{ borderRightWidth: 0.6, backgroundColor: '#f0f0f0', background: '#f0f0f0' }}
                    >
                        <Menu
                            onClick={onClick}
                            className='menu-vertical'
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            //mode="inline"
                            //theme='light'
                            inlineCollapsed={collapsed}
                            items={items}
                        />
                    </Sider>
                }

                <Content className=''>
                    {children}
                </Content>
            </Layout>
        </Layout>

    )
}

export default NavBarVertical;