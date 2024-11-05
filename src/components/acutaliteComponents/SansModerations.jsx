import "../../style/components/actualiteComponents/sansmoderations.css";
import smTitle from "../../assets/titre_sm.png";
import smImg from "../../assets/sans_moderations.png";

const SansModerations = () => {
  return (
    <>
      <div className="componentContainer">
        <div className="textContainer">
          <img src={smTitle} alt="" className="imgTitle3" />
          <h1>création 2024</h1>
          <p className="info">D’avril à juin 2025 Début du travail en résidences immersives dans les collèges du bassin biterroisen construction</p>
          <p className="miseEnScene">
                TEXTE : <span>Azilys Tanneau</span> • MISE EN SCÈNE : <span>Jean-Baptiste Tur</span> • AVEC 3 comédien.nes en cours de distribution  
                PRODUCTION : <span>LE GRAND CERF BLEU</span>
                COPRODUCTION : <span>Équinoxe Scène Nationale de Châteauroux / En cours de recherche</span>
          </p>
          <article className="descriptionComponent">
          Quelque chose s’est brisé dans la mécanique bien huilée de la vie d’Alexa, modératrice de contenus pour un grand réseau social dont le fondateur semble visiblement dé— passé par son succès. Comment tenter d’expliquer qu’elle en arrive à cacher la nature de son travail à son compagnon et à virer elle-même dans une violence irrépressible ?
          Dans le huis clos du bureau sous tension où elle travaille, elle n’est pourtant pas la seule à subir moralement les conséquences de cette prise directe et incessante avec les sept péchés capitaux numérisés. Lili, Marc, ses collègues les plus proches, ont tous leur stratégie pour supporter la violence quotidienne et les apparitions qui envahissent l’open space pour jouer devant leurs yeux ce que l’on tient d’habitude à distance, loin derrière nos écrans.
          Alexa, elle, puisait sa force dans son histoire d’amour. Mais quand elle apprend qu’elle est enceinte, sa grossesse lui fait totalement reconsidérer la violence à la- quelle l’expose son travail et la culture du secret imposée par l’entreprise. Une question l’obsède : a-t-elle le droit de faire naître un enfant dans un monde dont elle connaît à ce point tous les vices ? Poussée à bout, elle commet un geste extrême : la prise d’otage de son manager, retransmise en direct sur le réseau social qui les embauche.
          À travers des témoignages recueillis discrètement auprès des collègues d’Alexa, une journaliste qui investigue sur cet incident ayant provoqué son départ brutal accède à un univers confidentiel où l’exposition aux pires images de notre monde déforme les contours de l’acceptable, sur les écrans comme dans les pratiques de travail.
          </article>
        </div>
        <div className="imgContainer3">
          <img src={smImg} />
        </div>
      </div>
    </>
  );
};
export default SansModerations;
