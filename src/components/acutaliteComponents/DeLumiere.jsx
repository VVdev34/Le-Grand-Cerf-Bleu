import "../../style/components/actualiteComponents/delumiere.css";
import dlTitle from "../../assets/titre_dl.png";
import dlImg from "../../assets/delumiere.png";

const Delumiere = () => {
  return (
    <>
      <div className="componentContainer">
        <div className="textContainer">
          <img src={dlTitle} alt="" className="imgTitle" />
          <h1>création 2024</h1>
          <p className="subTitle">représentation</p>
          <p>Le Cratère scène nationale d’Alès</p>
          <ul className="firstList">
            <li>05/11/2024</li>
            <li>06/11/2024</li>
          </ul>
          <p>Scènes de Bayssan - Hérault Culture</p>
          <ul className="secondList">
            <li>17/01/2025</li>
          </ul>
          <p className="miseEnScene">
            TEXTE : <span>Azilys Tanneau & Jean-Baptiste Tur</span> • MISE EN SCÈNE :
            <span>Jean-Baptiste Tur</span> • COLLABORATION ARTISTIQUE : <span>Gabriel Tur</span> •
            ASSISTANT À LA MISE EN SCÈNE : <span>Joris Rodriguez</span> AVEC : <span>David Ayala</span> •
            MUSICIENS : <span>Thomas Delpérié, Pierre Borel</span>& la participation d'une
            fanfare amateure • SCÉNO-GRAPHIE : <span>Cécile Marc</span> • LUMIÈRE : <span>Jimmy
            Boury</span>  • SON : <span>Jules Tremoy</span> • VIDÉO : <span>Marine Cerles</span> • IMAGES :
            <span>Clément Delpérié</span> • COSTUMES : <span>Cathy Sardi</span> DIRECTION DE PRODUCTION :
            <span>Nathalie Carcenac</span> PRODUCTION : <span>Le Grand Cerf Bleu</span> COPRODUCTION : <span>Le Cratère scène nationale d'Alès / Le Printemps des comédiens /Domaine d'O</span>
          </p>
          <article className="descriptionComponent">
            Récit d’une enfance dans une ville du sud de la France, à la
            tradition taurine, une ville proche de la mer, de la garrigue et des
            élevages de taureaux. C’est l’histoire d’un jeune homme qui décide
            de devenir artiste, de fuir la culture du territoire d’où il vient
            pour monter à la capitale, comme on dit, pour faire carrière. Choqué
            par la mort soudaine de son père ancien torero, il décide
            d’abandonner tous ses projets pour faire un docu-mentaire sur le
            monde taurin.
          </article>
        </div>
        <div className="imgContainer">
          <img src={dlImg} />
        </div>
      </div>
    </>
  );
};
export default Delumiere;
