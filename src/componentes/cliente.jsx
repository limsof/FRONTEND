import React from "react";
import backgroundImage from "../assets/image/ce.jpg"; // Asegúrate de tener esta imagen en tu proyecto
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CuerpoD } from "./Content";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AboutPage } from "./acercaDe";
import { ListadoDifuntos } from "./difuntos";
import { ReporteProblemas } from "./ReporteProblemas";
import { ContactArea } from "./contacto";
import { ServicesArea } from "./Services";
import { CemeteryLocation } from "./Ubicacion";
import Login from "./Login";

const Clientess = ({userId}) => {
  return (
    <>
    <Header />
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Routes>
        <Route exact path="/" element={<CuerpoD />} />
        <Route path="/acerca" element={<AboutPage />} />
        <Route path="/listadodif" element={<ListadoDifuntos />} />
        <Route path="/feedback" element={<ReporteProblemas userId={userId} />} />
        <Route path="/contact" element={<ContactArea/>} />
        <Route path="/services" element={<ServicesArea/>} />
        <Route path="/ubicacion" element={<CemeteryLocation/>} />
        

      </Routes>
    </div>
      <Footer />
    </>
  );
};

export default Clientess;
