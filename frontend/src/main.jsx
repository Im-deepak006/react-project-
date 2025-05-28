import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import LandingTester from './LandingTester.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter><App/></BrowserRouter>
    
  </StrictMode>,
)
