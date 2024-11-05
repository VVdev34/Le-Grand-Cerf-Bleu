import "../../style/components/actualiteComponents/croireSurParole.css";
import cspTitle from "../../assets/titre_csp.png";
import cspImg from "../../assets/croire_sur_parole.png";


const CroireSurParole = () => {
  return (
    <>
      <div className="componentContainer">
        <div className="textContainer">
        <img src={cspTitle} alt="" className="imgTitle1" />
          <h1>création 2024</h1>
          <p className="subTitle">représentation</p>
          <p>Au Studio de l'esca</p>
          <p>3 Rue Edmond Fantin, Asnières</p>
          <ul className="liste">
            <li>03/10/2024 → 20h</li>
            <li>04/10/2024 → 20h</li>
            <li>05/10/2024 → 18h</li>
            <li>07/10/2024 → 19h</li>
            <li>08/10/2024 → 20h</li>
          </ul>
          <p className="miseEnScene">
            MISE EN SCÈNE : <span>Gabriel & Jean-Baptiste Tur</span> •
            CONCEPTION ET ADAPTATION : <span>Gabriel Tur</span> • CRÉATION
            SONORE : <span>Thomas Delpérié</span> • ASSISTANCE À LA MISE EN
            SCÈNE : <span>Milena Sansonetti</span> • Avec :
            <span>
              Vincent Arfa, Branwen Corbett, Jeanne Guinebretière, Maïa Laiter,
              Maxime Lambert, Noémie Moncel, Mariana Montoya Yepes, Omar Mounir
              Alaoui, Joris Mugica, Rose Noël, Alexis Ruotolo, Milena Sansonetti
              et Fiona Stellino
            </span>
            COPRODUCTION : <span>Atelier | ESCA / Le grand cerf bleu</span>
          </p>
          <article className="descriptionComponent">
            Croire sur parole(s) est une pièce documentaire qui s'appuie sur des
            entretiens réalisés lors d'une étude de terrain anthropologique.
            C'est une matière brute, du verbatim que les acteurs présagent à
            l'épreuve du plateau pour les révéler comme des scènes d'une grande
            pertinence sur notre humanité. Ce sont des consultations
            médico-éthiques au cours desquelles différents·es patients·es
            sollicitent·es viennent voir le même médecin afin de prendre des
            renseignements ou simplement pour qu'ils les accompagnent dans leur
            démarche euthanasique. Grâce à un stage avec les apprentis de l'ESCA
            à Asnières en juin 2023 et un autre laboratoire avec les étudiants
            en master pro théâtre de la Fac de Montpellier, nous avons pu
            explorer tout le spectre humain et théâtral de ces textes poignants,
            drôles et transcendantaux. Le travail avec de jeunes acteurs et
            actrices, leur vitalité pour incarner ces destins, ces paroles, ces
            colères, ces mots qui deviennent déjà des actes dans leurs bouches
            pour passer de vie à trépas, est plein d'une évidence contradictoire
            entre leur jeunesse et le proposer. Notre recherche formelle s'est
            prolongée avec la danse Butô et l'écoute en chœur : les acteurs et
            actrices seront en permanence présents au plateau et en écoute des
            entretiens même s'ils ne jouent pas un des protagonistes. Ainsi
            malgré l'apparente lourdeur du sujet, nous quêterons la légèreté de
            l'être et de sa représentation.
          </article>
        </div>
        <div className="imgContainer1">
          <img src={cspImg} />
        </div>
      </div>
    </>
  );
};
export default CroireSurParole;
