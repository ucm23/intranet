import React, { useState } from 'react';
import {
    MenuOutlined,
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Layout } from 'antd';
import { useBreakpointValue } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;

const AppBar = ({ children, page, extra }) => {

    const navigate = useNavigate();
    const mobile = useBreakpointValue({ base: true, md: false });

    const handleBackToList = () => {
        navigate(`/${page}`, { state: { updated: true }, replace: true, });
    };

    return (
        <Layout style={{ height: '100vh', overflow: 'hidden' }}>
            <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#03296A', height: 46, padding: 0, paddingRight: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="btn-menu-header" onClick={handleBackToList} >
                        <ArrowLeftOutlined color='white' style={{ color: 'white' }} />
                    </div>
                    <img src="/img/logo-white-removebg.png" alt="/img/logo-blue-removebg.png" style={{ height: 40, marginLeft: !mobile ? 12 : 0 }} />
                </div>
            </Header>
            {extra &&
                <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'white', padding: '0px 12px' }}>
                    {extra}
                </Header>
            }
            <Layout>
                <Content className=''>
                    {children}
                </Content>
            </Layout>
        </Layout>

    )
}

export default AppBar;