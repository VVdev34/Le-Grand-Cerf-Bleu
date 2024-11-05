import React from "react";
import Letter from "../assets/gcb-18.png";
import "../style/pages/contact.css";
import Layout from "../components/Layout.jsx";

export default function Contacts() {
  return (
    <>
      <Layout />
      <div className="main">
        <div className="contacts  ">
        <img src={Letter} alt="" className="enveloppe" />
        <div className="details">
        <div className="production ensemble">
            <p className="titre">direction artistique</p>
            <p className="name">Jean-Baptiste et Grabriel Tur</p>
            <a href="mailto:grandcerfbleu@gmail.com" className="mail">grandcerfbleu@gmail.com</a>
          </div>
          <div className="compagnie ensemble">
            <p className="titre">direction de production - developpement</p>
            <p className="name">Nathalie Carcenac</p>
            <a href="tel:+336480923">06 48 09 23 </a>
            <a href="mailto:production.grandcerfbleu@gmail.com"className="mail">production.grandcerfbleu@gmail.com</a>
          </div>
          <div className="communication ensemble ">
            <p className="titre">COMMUNICATION</p>
            <p className="name">Marie-Pierre Jean</p>
            <a href="tel:+33637678312">06 74 78 31 66</a>
            <a href="mailto:adm.grandcerfbleu@gmail.com" className="mail">adm.grandcerfbleu@gmail.com</a>
          </div>
        </div>
        </div> 
        <footer>
          <p>Siège social 35 rue Édouard Branly, 34500 Béziers</p>
          <p>N° SIRET : 809 946 874 00025 - APE : 9001Z</p>
          <p>Licence d’entrepreneur de spectacles : PLATESV-R-2021-006034</p>
        </footer>
      </div>
    </>
  );
}
