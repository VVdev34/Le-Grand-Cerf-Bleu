import React, { useState } from "react";
import "../../style/components/creationsComponents/sm.css";
import BicromieSm from "../../assets/BICHROMIE-LES-OISEAUX.png";
import HoveredImage from "../../assets/COULEUR-LES-OISEAUX.png";

const Ofc = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const [isHovered, setIsHovered] = useState(false); // Nouvel état pour le hover

  return (
    <div className="SmCont">
      <div className="texteCompanie">
        <article
          className="creationsEnCours"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "CREATION EN COURS" : "CREATION EN COURS"}
          {isVisible && (
            <div>
              <p>
                Une chambre, au centre une jeune femme,<br/>prisonnière de son
                propre corps. Elle est malade, <br/>condamnée. C’est son dernier
                jour. Dans un coin, <br/>deux hommes. Puis entre le frère,
                discrètement, pour <br/>que personne ne le remarque. Nous plongeons
                dans <br/>L’Arbre des tropiques pour en sortir les thèmes <br/>actuels et
                archaïques, pour les faire nôtres, porter <br/>la langue de Mishima
                dans la tension des corps butô. <br/>Un spectacle entre concert,
                danse et mots. <br/><br/>Les oiseaux meurent facilement dans cette chambre<br/>
                est un objet singulier dans le travail du Grand Cerf <br/>Bleu, il
                explore une forme pluridisciplinaire (danse, <br/>musique, texte) un
                autre rapport au texte (préexistant <br/>et poétique) aux spectateurs
                (dispositif immersif) <br/>et aux espaces de diffusion. La dimension
                sonore <br/>et musicale, présente dans les spectacles du Grand <br/>Cerf
                Bleu, est ici la base et le cadre, son importance <br/>dramaturgique
                est égale à celle des mots et des corps.<br/>Le processus de création
                se fait de façon collective <br/>avec l’ensemble de l’équipe du
                projet tant dans <br/>la réflexion dramaturgique que dans la
                recherche <br/>chorégraphique et musicale.
              </p>
            </div>
          )}
        </article>
        <article
          className="distribution"
          onClick={() => setIsVisible2(!isVisible2)}
        >
          {isVisible2 ? "DISTRIBUTION" : "DISTRIBUTION"}
          {isVisible2 && (
            <div>
              <p>
                D’après L’arbre des tropiques de <span>Yukio Mishima •</span> Forme <br/>Hybride —
                musique / danse / théâtre <span>•</span> Mise en scène : <span><br/>Jean-Baptiste Tur •</span>
                Avec : <span>Heidi-Eva Clavier, Clément <br/>Delperié, Gabriel Tur, Thomas
                Delperié •</span> Chorégraphie : <span><br/>Nitya Peterschmitt •</span> Conseil
                dramaturgique : <span>Clément <br/>Delperié •</span> Lumière : <span>Valentin Paul •</span> Son
                : <span>Ludovic Enderlen</span>
              </p>
            </div>
          )}
        </article>
        <article
          className="production"
          onClick={() => setIsVisible3(!isVisible3)}
        >
          {isVisible3 ? "PRODUCTION" : "PRODUCTION"}
          {isVisible3 && (
            <div>
              <p>
                Production : <span>Le Grand Cerf Bleu</span> <br/>Coproduction : <span>Théâtre de L’Union
                — Centre dramatique <br/>national du Limousin / Scène nationale
                d’Aubusson</span> <br/>Le spectacle a bénéficié du programme «90m2 créatif»<br/>
                <span>(La Loge — CENTQUATRE-Paris)</span> <br/>Avec le soutien du <span>Théâtre de
                Vanves</span> / du <span>CENTQUATRE</span> -<br/>Paris / de La <span>Comédie Française</span> / de la
                <span>Péniche Opéra</span> / de <br/>la <span>MJC Laënnec-Mermoz</span>/<br/> Le spectacle a été
                soutenu à la diffusion par la Ville de <br/>Paris pour l’exploitation
                à l’Etoile du Nord <br/>(novembre 2020 — reporté saison 2022-2023)
              </p>
            </div>
          )}
        </article>
      </div>
      <img
        src={isHovered ? HoveredImage : BicromieSm}
        alt="Bicromie"
        className="imgbi"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};
export default Ofc;
