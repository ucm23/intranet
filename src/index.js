import React, { StrictMode } from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { ImageCacheProvider } from './redux/ImageCacheProvider';
import { PreviewFileProvider } from './redux/PreviewFileContext';

import { pdfjs } from 'react-pdf';

// Configura el worker de PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js', // Usa .js aquí
  window.location.href,
).toString();


// Create a theme instance.
const theme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
});

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ChakraProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>
);*/

ReactDOM.render(
    <StrictMode>
        <ChakraProvider>
            <BrowserRouter>
                <ImageCacheProvider>
                    <PreviewFileProvider>
                        <App />
                    </PreviewFileProvider>
                </ImageCacheProvider>
            </BrowserRouter>
        </ChakraProvider>
    </StrictMode>,
    document.getElementById('root')
);