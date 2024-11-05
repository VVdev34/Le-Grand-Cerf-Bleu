import React, { useState } from 'react';
import "../../style/components/creationsComponents/sm.css"
import BicromieSm from '../../assets/BICHROMIE-DE-LUMIERE.png'
import HoveredImage from '../../assets/COULEURS-DE-LUMIERE.png';

const Dl = () => {
    
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    
    const [isHovered, setIsHovered] = useState(false); 

    return (

      <div className="SmCont">
      <div className="texteCompanie">
        <article className="creationsEnCours" onClick={() => setIsVisible(!isVisible)} >
        {isVisible ? 'CREATION EN COURS' : 'CREATION EN COURS'}
          {isVisible && (
          <div>
            <p>
                C’est le récit d’une enfance dans une ville du sud
                <br/>de la France, à la tradition taurine, une ville proche 
                de la <br/>mer, de la garrigue et des élevages de taureaux. <br/>C’est l’histoire d’un jeune homme qui décide 
                de devenir <br/>artiste, de fuir la culture du territoire 
                d’où il vient pour <br/>monter à la capitale, comme on dit, 
                pour faire <br/>carrière. Choqué par la mort soudaine 
                de son père <br/>ancien torero, il décide d’abandonner tous ses projets <br/>pour faire un documentaire sur 
                le monde taurin.
            </p>
          </div>
        )}
        </article>
        <article className="distribution" onClick={() => setIsVisible2(!isVisible2)} >
        {isVisible2 ? 'DISTRIBUTION' : 'DISTRIBUTION'}
          {isVisible2 && (
          <div>
            <p>
            TEXTE : <span>Azilys Tanneau & Jean-Baptiste Tur •</span>   MISE EN <br/>SCÈNE :<span>Jean-Baptiste Tur •</span>  COLLABORATION ARTISTIQUE :<br/>
            <span>Gabriel Tur •</span> ASSISTANT À LA MISE EN SCÈNE : <span>Joris <br/>Rodriguez •</span> AVEC : <span>David Ayala •</span> MUSICIENS : <span>Thomas <br/>Delpérié, Pierre Borel & la participation d'une fanfare <br/>amateure •</span> SCÉNOGRAPHIE : <span>Cécile Marc •</span>  LUMIÈRE : <span>Jimmy <br/>Boury •</span> SON : <span>Jules Tremoy •</span> VIDÉO : <span>Marine Cerles  •</span><br/>IMAGES : <span>Clément Delpérié •</span> COSTUMES : <span>Cathy Sardi •</span><br/> DIRECTION DE PRODUCTION : <span>Nathalie Carcenac</span> 
            </p>
          </div>
        )}
        </article>
        <article className="production" onClick={() => setIsVisible3(!isVisible3)} >
        {isVisible3 ? 'PRODUCTION' : 'PRODUCTION'}
          {isVisible3 && (
          <div>
            <p>
                PRODUCTION : <span>Le Grand Cerf Bleu </span><br/>
                COPRODUCTION : <span>Le Cratère scène nationale d'Alès /<br/>
                Le Printemps des comédiens / Domaine d'O</span><br/>
                SOUTIENS ET ACCUEILS EN RÉSIDENCE DE CRÉATION :<br/>
                <span>Le Cratère scène nationale d'Alès  / Scène de Bayssan <br/>— Hérault Culture  / La Maison de L'Eau CDC — Allègre-Les-<br/>Fumades</span><br/>
                AIDE À LA RÉSIDENCE : <span>Théâtre des franciscains à Béziers</span><br/>
                Avec le soutien et la collaboration <span>des Écoles taurines<br/> d'Arles, de Nîmes et de Béziers</span><br/>
                AIDES SPÉCIFIQUES : <span>La création DE LUMIÈRE a obtenu l'aide<br/> à la production de la DRAC Occitanie / l'Aide au Compagnonnage Auteur.trice du Ministère de la <br/>Culture DGCA •</span> La création a obtenu l'Aide à la <br/>production de La <span>Région Occitanie</span> 
            </p>
          </div>
        )}
        </article>
      </div>
        <img 
          src={isHovered ? HoveredImage : BicromieSm} 
          alt="Bicromie" 
          className='imgbi'
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>

    )
};
export default Dl;