import React, { useState } from 'react';
import "../../style/components/creationsComponents/sm.css"
import BicromieSm from '../../assets/BICHROMIE-SANS-MODE.png'
import HoveredImage from '../../assets/COULEUR-SANS-MODE.png';

const Sm = () => {
    
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    
    const [isHovered, setIsHovered] = useState(false); // Nouvel état pour le hover

    return (

      <div className="SmCont">
      <div className="texteCompanie">
        <article className="creationsEnCours" onClick={() => setIsVisible(!isVisible)} >
        {isVisible ? 'CREATION EN COURS' : 'CREATION EN COURS'}
          {isVisible && (
          <div>
            <p>
                Quelque chose s’est brisé dans la mécanique bien huilée de la vie d’Alexa, modératrice de contenus pour un grand réseau social dont le fondateur semble visiblement dé— passé par son succès. Comment tenter d’expliquer qu’elle en arrive à cacher la nature de son travail à son compagnon et à virer elle-même dans une violence irrépressible ? <br/>
                <br/>
                Dans le huis clos du bureau sous tension où elle travaille, elle n’est pourtant pas la seule à subir moralement les conséquences de cette prise directe et incessante avec les sept péchés capitaux numérisés. Lili, Marc, ses collègues les plus proches, ont tous leur stratégie pour supporter la violence quotidienne et les apparitions qui envahissent l’open space pour jouer devant leurs yeux ce que l’on tient d’habitude à distance, loin derrière nos écrans.<br/>
                <br/>
                Alexa, elle, puisait sa force dans son histoire d’amour. Mais quand elle apprend qu’elle est enceinte, sa grossesse lui fait totalement reconsidérer la violence à la- quelle l’expose son travail et la culture du secret imposée par l’entreprise. Une question l’obsède : a-t-elle le droit de faire naître un enfant dans un monde dont elle connaît à ce point tous les vices ? Poussée à bout, elle commet un geste extrême : la prise d’otage de son manager, retransmise en direct sur le réseau social qui les embauche.<br/>
                <br/>
                À travers des témoignages recueillis discrètement auprès des collègues d’Alexa, une journaliste qui investigue sur cet incident ayant provoqué son départ brutal accède à un univers confidentiel où l’exposition aux pires images de notre monde déforme les contours de l’acceptable, sur les écrans comme dans les pratiques de travail.<br/>
            </p>
          </div>
        )}
        </article>
        <article className="distribution" onClick={() => setIsVisible2(!isVisible2)} >
        {isVisible2 ? 'DISTRIBUTION' : 'DISTRIBUTION'}
          {isVisible2 && (
          <div>
            <p>
                TEXTE : <span>Azilys Tanneau •</span> MISE EN SCÈNE : <span>Jean-Baptiste Tur</span> <br/>
                AVEC 3 comédien.nes en cours de distribution 
            </p>
          </div>
        )}
        </article>
        <article className="production" onClick={() => setIsVisible3(!isVisible3)} >
        {isVisible3 ? 'PRODUCTION' : 'PRODUCTION'}
          {isVisible3 && (
          <div>
            <p>
            PRODUCTION : <span>LE GRAND CERF BLEU</span><br/>
            COPRODUCTION : <span>Équinoxe Scène Nationale de Châteauroux / En cours de recherche</span> 
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
export default Sm;