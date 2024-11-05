import React, { useState } from "react";
import "../../style/components/creationsComponents/sm.css";
import BicromieSm from "../../assets/BICHROMIE-MONADE.png";
import HoveredImage from "../../assets/COULEUR-MONADE.png";

const Mo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

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
                Monade raconte la quête d’un chevalier qui est<br/> enfermé dans son
                armure et qui se dit qu’il aurait bien <br/>besoin d’en sortir. Il se
                rappelle qu’il s’était soudai-<br/>nement arrêté de pleurer autour de
                ses douze ans,<br/>à l’âge où l’on devient un garçon. Il s’en
                souvient car<br/>c’était à la mort de son chat, puis plus aucune
                larme<br/>jusqu’à ses trente ans où il s’est remis à pleurer par<br/>
                dépit amoureux.
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
                CONCEPTION / COMÉDIEN / MUSICIEN-COMPOSITEUR / CHANT :<br/> <span>Gabriel
                Tur •</span> COMÉDIENNE / MUSICIENNE / CLAVIER /<br/> PERCUSSIONS / CHŒURS :
                <span>Inès Damaris •</span> COMÉDIEN /<br/>MUSICIEN / GUITARE, LUTH & PERCUSSIONS
                : <span>Thomas<br/> Delpérié •</span> MUSICIENNE / BATTERIE & CLAVIER / CHŒURS :<br/>
                 <span>Doriane Gamba •</span> COLLABORATRICE ARTISTIQUE / CONSEIL<br/> ÉCRITURE ET
                DRAMATURGIE : <span>Noëlla Bugni-Dubois</span> (Nos<br/> alliés les hommes) •
                REGARD EXTÉRIEUR / MISE EN SCÈNE :<br/> <span>Jean-Baptiste Tur •</span> COACH
                SCÉNIQUE : <span>Joris Avodo •</span> <br/>SON : <span>Maxime Brayer •</span> LUMIÈRE : Daphné
                <span>Papadopoulos •</span><br/> DIRECTION DE PRODUCTION : <span>Nathalie Carcenac</span> 
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
                Production : <span>Le Grand Cerf Bleu & disque Label AIRFONO</span><br/>
                COPRODUCTION : <span>Le Cratère scène nationale d'Alès /<br/> La Passerelle
                Scène nationale de Saint-Brieuc / Paloma <br/>Smac Nîmes / CENTQUATRE
                Paris </span><br/>La création a obtenu l'aide à la création mutualisée en<br/>
                musiques actuelles du Ministère de La Culture-DGCA.<br/>Elle
                bénéficie du crédit d'impôt musique – CNM.
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
export default Mo;
