import React, { useState } from "react";
import "../../style/components/creationsComponents/sm.css";
import BicromieSm from "../../assets/BICHROMIE-BREFS-ENTRETIENS.png";
import HoveredImage from "../../assets/COULEUR-BREFS-ENTRETIENS.png";

const Bfe = () => {
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
                Comme le titre l’indique, chacune des cinq scènes <br/>
                de la pièce prend la forme d’un entretien mené par <br/> une voix d’homme avec une
                femme dont l’existence <br/> s’avère hors du commun en cela qu’elle
                rompt<br/>, d’une manière ou d’une autre, avec une certaine<br/> norme
                sociale. Ces portraits de femmes extrêmes,<br/> monstres
                contemporains, représentent des <br/>problématiques paradoxales de
                notre société <br/>(question du tout-sain, de l’image, de la
                sécurité,<br/> du transhumanisme, du genre, de la sexualité...)<br/>
                surprennent et démontent nos préjugés.<br/> Une désorientation qui
                nous oblige à nous défier<br/> de nos propres certitudes.<br/><br/> Brefs
                entretiens avec des femmes exceptionnelles <br/>constitue à n’en pas
                douter une œuvre formellement<br/> minimaliste qui nous touche par sa
                nature empa-<br/>thique. La pièce rappelle à bien des égards <br/>les
                Conversationals portraits de Truman Capote.<br/> On y retrouve une
                sensibilité semblable qui échappe<br/> à tout jugement moral. La
                différence dont autrui<br/> est porteur devient alors, pour Joan
                Yago,<br/> le miroir déformant où se reflète notre propre <br/>différence.
                L’œuvre nous invite ainsi à ausculter<br/> les paradoxes dont nous
                sommes, nous-mêmes,<br/> pétris et qui, ce faisant, nous rendent
                sensibles <br/>à la différence d’autrui.
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
                texte : <span>Joan Yago •</span>  direction artistique : <span>Gabriel Tur •</span> <br/>
                collaboration artistique : <span>Laureline Le Bris-Cep & Jean-<br/>Baptiste
                Tur •</span> avec : <span>Anna Bouguereau, Etienne Jaumet,<br/>Laureline Le
                Bris-Cep, Juliette Prier & Jean-Baptiste Tur •</span><br/> création Lumière
                : <span>Kelig Le Bars •</span> création vidéo : <span>Pierre <br/>Martin Oriol •</span>
                scénographie : <span>Gabriel Tur & Kelig Le Bars</span> <br/>• régie générale,
                lumière et vidéo : <span>Guillaume Gherrak •</span><br/>régie son : <span>Robin Sellier •</span> 
                 musique : <span>Etienne Jaumet & <br/>Gabriel Tur</span>
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
                Production déléguée 2020 Théâtre Ouvert <span>Centre <br/>National des
                dramaturgies contemporaines — Paris</span><br/>Avec le soutien de
                <span>Fabulamundi</span> — Playwriting Europe, <br/>du programme Culture de
                l’Union Européenne<br/>Texte traduit avec le soutien de <span>Fabulamundi</span> —<br/>
                Playwriting Europe et de <span>la Maison Antoine Vitez,<br/> Centre
                international de la traduction théâtrale</span>
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
export default Bfe;
