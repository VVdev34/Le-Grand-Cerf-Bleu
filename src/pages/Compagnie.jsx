import "../style/pages/compagnie.css";
import Gabriel from "../assets/GABRIEL-TUR.png";
import JB from "../assets/JB-TUR.png";
import Layout from "../components/Layout.jsx"


export default function Compagnie() {
 

  return (
    <>
    <Layout/>
      <div className="description">
        <p>
          “Avec ses nouveaux projets, le Grand Cerf Bleu <br />
          affirme la dimension musicale comme primordiale <br />
          dans sa ligne artistique. Gabriel et Jean-Baptiste <br />
          défendent leur désir de créer des spectacles festifs,
          <br />
          sensibles, définitivement accessibles, et d’enraciner <br />
          leur démarche dans leur territoire.”
        </p>
      </div>
      <div className="container">
        <div className="texte">
          <article
            className="biographie">
              <div>
                <p>BIOGRAPHIE</p>
                <p className="bioDesc"> 
                  Le Grand Cerf Bleu créé en 2014 est implanté <br />
                  à Béziers ville d’origine et de formation théâtrale <br />
                  initiale de deux membres fondateurs, Gabriel <br />
                  et Jean-Baptiste Tur.
                  <br />
                  <br />
                  En collaboration avec Laureline Le Bris Cep, ils créent
                  <br />
                  de 2015 à 2021, un cycle de trois spectacles qu’ils
                  <br />
                  écrivent et mettent en scène à trois : Non c’est pas ça
                  <br />
                  !(2016 - Prix du public Impatience), Jusqu’ici tout va
                  <br />
                  bien (2018) et Robins - Expérience Sherwood (2021).
                  <br />
                  Ces trois créations explorent, chacune à leur façon,
                  <br />
                  la rencontre entre un élément populaire et une
                  <br />
                  problématique sociétale actuelle.
                  <br />
                  <br />
                  Ces trois écritures de plateau quêtent la mise en
                  <br />
                  échec de la représentation avec humour et joie,
                  <br />
                  jouent avec les contours des théâtralités, cherchent
                  <br />
                  la rencontre entre le quotidien et l’onirisme, le banal
                  <br />
                  et la poésie, la naïveté et l’inconscient collectif.
                  <br />
                  <br />
                  Jean-Baptiste et Gabriel sont artistes résidents
                  <br />
                  au 104 à Paris depuis l’obtention du prix du public <br />
                  au festival Impatience en 2016, Jusqu’ici tout va bien <br />
                  (décembre 2018), Robins - expérience Sherwood <br />
                  (octobre 2021), Brefs entretiens avec des femmes exception-
                  nelles de Joan Yago (création en février <br />
                  2022 – Production déléguée de Théâtre Ouvert), <br />
                  Monade (2024/2025).
                  <br />
                  <br />
                  À partir de 2022, le Grand Cerf Bleu porte les <br />
                  projets menés par Gabriel et Jean-Baptiste <br />
                  Tur. Depuis, la compagnie est associée au Cratère, <br />
                  scène nationale d’Alès, program- mation de Les <br />
                  oiseaux meurent facilement dans cette chambre <br />
                  d’après Mishima (créé en 2020 à la scène nationale <br />
                  en partenariat avec le CDN de Limoges d’Aubusson <br />
                  et repris au Cratère en octobre 2022) et de Robins - <br />
                  expérience Sherwood (mars 2023), soutiens en <br />
                  coproduction pour les créations 2024 / 2025, <br />
                  Monade et De Lumière.
                  <br />
                  Avec ses nouveaux projets, le Grand Cerf Bleu <br />
                  affirme la dimension musicale comme primordiale <br />
                  dans sa ligne artistique, Gabriel et Jean-Baptiste <br />
                  défendent leur désir de créer des spectacles festifs, <br />
                  sensibles, définitivement accessibles, et d’enraciner <br />
                  leur démarche dans leur territoire.
                  <br />
                  <br />
                  Sur leur territoire d’ancrage, à Béziers, dans le <br />
                  quartier historique et populaire du faubourg, <br />
                  avec l’appui de financements Politique de la ville, <br />
                  ils créent une première édition du Festival Les Lunes <br />
                  bleues, en juin 2023. Fort de son succès populaire et <br />
                  de la qualité des propositions artistiques, le festival <br />
                  reconduira une édition début juin 2024 dans le même <br />
                  quartier.
                </p>
              </div>
          </article>
        </div>
        <div className="images">
          <div className="img1">
          <img src={JB} alt=""/>
          <span>Jean-Baptiste Tur</span>
          </div>
          <div className="img2">
          <img src={Gabriel} alt=""/>
          <span>Gabriel Tur</span>
          </div>
        </div>
      </div>
    </>
  );
}
