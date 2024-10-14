import React, { useRef, useState } from 'react';
import Navbar from '../../componentes/Navbar';
import backgroundImage from '../../img/background.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/estilo.css';
import NavBarLanding from '../../components/NavBarLanding';
import { EllipsisOutlined } from '@ant-design/icons';
import { Divider, Tour } from 'antd';
import { Fade } from "react-awesome-reveal";
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Container,
    Button,
} from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { MdCall } from "react-icons/md"

import { FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { RiArrowDownSLine, } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { PiArrowRightThin } from "react-icons/pi";


const Noticies = () => {
    const mobile = useBreakpointValue({ base: true, md: false });
    const [slider, setSlider] = useState(null)

    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '30%', md: '40px' })

    const ref1 = useRef(null);
    const [open, setOpen] = useState(false);
    const steps = [
        {
            cover: (
                <iframe
                    className="islands__popup-video"
                    src="https://www.youtube.com/embed/Nvg4CamInuA?autoplay=1"
                    frameborder="0"
                    //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />
            ),
            target: () => ref1.current,
        },
    ];

    const openLink = () => {
        window.open('https://www.youtube.com/embed/Nvg4CamInuA', '_blank');
    };
    return (
        <div style={{ width: '100%' }}>
            <NavBarLanding>
                <Box
                    position={'relative'}
                    height={'98vh'}
                    width={'full'}
                    overflow={'hidden'}
                >
                    <Box>
                        <div className="image-container">
                            <div
                                className="image-part"
                                style={{
                                    objectFit: 'cover',
                                    backgroundColor: "#03296a99",
                                    backgroundImage: `url('/img/background.jpg')`,
                                    //transition: 'opacity 1s ease-in-out',
                                    backgroundBlendMode: "soft-light",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundAttachment: 'fixed'
                                }}
                            />
                        </div>

                        <Box
                            className='box-text'
                            zIndex={10}
                            height='98vh'
                            width='100%'
                            position="relative"
                            top={mobile ? '-25rem' : '-23rem'}
                            style={{
                                top: "-50vh",
                                display: "flex",
                            }}
                        >
                            <Stack
                                w={'full'}
                                maxW={'100%'}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <h2 className="text-shadow" style={{ lineHeight: 0, fontSize: 18, fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center' }}>{'card.place'}</h2>
                                <h1 className="col-about-title text-shadow" style={{ fontWeight: 'bold', textAlign: 'center', lineHeight: 1, textTransform: 'uppercase' }}>{'card.name'}</h1>
                                <p className="text-shadow" style={{ textAlign: 'center', lineHeight: 1 }}>{'card.description'}</p>

                                <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: 6 }}>
                                    <Button
                                        colorScheme="blue"
                                        bg={'orange'}
                                        rounded={5}
                                        color="white"
                                        //onClick={() => mobile ? openLink() : handleVideo()}
                                        rightIcon={<div />}
                                        leftIcon={<div />}
                                        fontWeight={'bold'}
                                        title="Ver video de Introducción"
                                        className='cursor-crosshair'
                                    >
                                        Introducción n
                                    </Button>
                                    <Button
                                        bg={'transparent'}
                                        rounded={50}
                                        color="white"
                                        fontWeight={'300'}
                                        leftIcon={<div />}
                                        rightIcon={<PiArrowRightThin className='text-3xl' color="white" />}
                                        //_hover={{ bg: 'transparent' }}
                                        _hover={"none"}
                                        onClick={() => window.location.href = '/contacto'}
                                        //aria-label="Redirigir a Contacto"
                                        title="Redirigir a Contacto"
                                        className='cursor-crosshair'
                                    >
                                        Contáctanos
                                    </Button>
                                </div>

                                <div className="animated-accordion">
                                    <RiArrowDownSLine className='text-3xl' color="white" />
                                </div>

                            </Stack>
                        </Box>
                    </Box>
                </Box>
                <section className="_main container" id="#id">
                    <section className="section-5" id='about-me'>
                        <div className="mx-auto max-w-2xl lg:text-center">
                            <h2 className="text-base font-semibold leading-7" style={{ color: 'red' }}>Construimos experiencia, solidez y confianza</h2>
                        </div>
                        <Fade direction="down">
                            <section className="text-center">
                                <h2 className="section-title">Sobre Nosotros <span className="text-primary-blue">GRUPO TICONSA<sup>®</sup></span></h2>
                            </section>
                        </Fade>
                        <div className="row-base row">
                            <div className="col-base col-sm-6 col-md-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h3 className="col-about-title" style={{ textAlign: 'center' }}>Concreto, Prefabricado y <span className="text-primary-blue">Presforzado</span></h3>
                                <div className="col-about-info">
                                    <p><strong>Ticonsa Inmobiliaria</strong>, <strong>Sociedad Anónima de Capital Variable</strong> (en lo sucesivo <strong>GRUPO TICONSA<sup>®</sup></strong>) en una empresa con <strong>50 años de experiencia desarrollando soluciones innovadoras</strong> que aportan valor agregado a los proyectos de nuestros clientes.</p>
                                    <p className={mobile && "text-center"}><strong>Cancún: </strong> (998) 892-3143 <br /> <strong>México: </strong>(55) 5484-8355<br /> <strong>Teotihuacán: </strong>(594) 956-1645</p>
                                    <p className={mobile && "text-center"}><strong>Grupo Ticonsa </strong> - Desde el 15 de febrero de 1971</p>
                                </div>
                            </div>
                            <div className="col-base col-sm-6 col-md-6 content-img-round"
                            /*style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                gap: 0.2,
                            }}*/
                            >
                                <img src={`/grua.jpg`} className="img-round" />
                                <img src={`/1.jpg`} className="img-round" />
                                <img src={`/ticonsa1.avif`} className="img-round" />
                            </div>
                        </div>
                    </section>
                </section>
            </NavBarLanding>
        </div>
    );
}


export default Noticies;



