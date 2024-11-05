import "../../style/components/actualiteComponents/monade.css";
import mTitle from "../../assets/titre_m.png";
import mlImg from "../../assets/monade.png";

const Monade = () => {
  return (
    <>
      <div className="componentContainer">
        <div className="textContainer">
          <img src={mTitle} alt="" className="imgTitle2" />
          <h1>création 2024</h1>
          <p className="subTitle">représentation</p>
          <p>Le Cratère scène nationale d’Alès</p>
          <ul className="firstList">
            <li>10/01/2025</li>
            <li>11/01/2025</li>
          </ul>
          <p>CENTQUATRE PARIS</p>
          <ul>
            <li>13/02/2025</li>
            <li>14/02/2025</li>
            <li>15/02/2025</li>
          </ul>
          <p>La Passerelle scène nationale de Saint-Brieuc</p>
          <ul className="secondList">
            <li>
            11/03/2025
            </li>
          </ul>
          <p className="miseEnScene">
                CONCEPTION / COMÉDIEN / MUSICIEN-COMPOSITEUR / CHANT : <span>Gabriel Tur</span> • COMÉDIENNE / MUSICIENNE / CLAVIER / PERCUSSIONS / CHŒURS : <span>Inès Damaris</span> • COMÉDIEN /MUSICIEN / GUITARE, LUTH & PERCUSSIONS : <span>Thomas Delpérié</span> • MUSICIENNE / BATTERIE & CLAVIER / cHŒURS : <span>Doriane Gamba</span> • COLLABORATRICE ARTISTIQUE / CONSEIL ÉCRITURE ET DRAMA-TURGIE : <span>Noëlla Bugni-Dubois</span> (Nos alliés les hommes) • REGARD EXTÉRIEUR / MISE EN SCÈNE : <span>Jean-Baptiste Tur</span> • COACH SCÉNIQUE : <span>Joris Avodo</span> • SON : <span>Maxime Brayer</span> • LUMIÈRE : <span>Daphné Papadopoulos</span> •
                DIRECTION DE PRODUCTION : <span>Nathalie Carcenac</span>
                Production : <span>Le Grand Cerf Bleu & disque Label AIRFONO</span> 
                COPRODUCTION : <span>Le Cratère scène nationale d'Alès /
                La Passerelle Scène nationale de Saint-Brieuc / Paloma Smac Nîmes / CENTQUATRE Paris</span> 
          </p>
          <article className="descriptionComponent">
          Le Chevalier nu ou la quête d’une nouvelle masculinité
          Monade raconte la quête d’un chevalier qui est enfermé dans son armure et qui se dit qu’il aurait bien besoin d’en sortir. Il se rappelle qu’il s’était soudainement arrêté de pleurer autour de ses douze ans, à l’âge où l’on devient un garçon. Il s’en souvient car c’était à la mort de son chat, puis plus aucune larme jusqu’à ses trente ans où il s’est remis à pleurer par dépit amoureux. 
          </article>
        </div>
        <div className="imgContainer2">
          <img src={mlImg} />
        </div>
      </div>
    </>
  );
};
export default Monade;
