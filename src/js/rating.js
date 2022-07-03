/**
 * Génère une l'affichage dynamique d'étoiles pour définir une note
 * en utilisant l'attribut [data-rating]
 * @module
 */
const rating = () => {
  // Classe CSS à attribuer lorsqu'une étoile est `active` (i.e est comprise dans la note globale).
  const starClassActive = 'rating__star--active';
  // Classe CSS à attribuer lorsqu'une étoile est à moitié remplie (pour les notes décimales).
  const starHalfActive = 'rating__star--half';

  // On récupère un tableau de chaque élément [data-rating]
  const arrRating = document.querySelectorAll('[data-rating]');
  // On boucle à travers ce tableau pour récupérer chaque valeur de note
  const valRating = [...arrRating].map((r) => {
    return r.dataset.rating;
  });

  // Liste de tous les enfants (les étoiles individuelles) de chaque élément [data-rating]
  const listChildren = [...arrRating].map((x) => Array.from(x.children));
  // On retourne un tableau pour chaque enfant (groupe d'étoiles) et la note qui lui est associé
  const listStars = listChildren.map((x, y) => {
    const num = Math.floor(valRating[y]);
    return [x, num];
  });
  // On boucle à travers chaque boucle d'étoiles pour attribuer les classes actives
  // aux étoiles en fonction de la note individuelle
  listStars.map((n, i) => {
    const num = Math.floor(valRating[i]);
    return n[0].forEach((x, y) => {
      if (y + 1 <= num) {
        x.classList.add(starClassActive);
      }
    });
  });
  // Si la note est décimale (i.e 4.5), on récupère la dernière étoile à l'arrondi supérieur de la note
  // pour lui attribuer la classe `starHalfActive`
  listStars.map((n, i) => {
    const lastStar = n[1];
    const node = n[0][lastStar];
    if (valRating[i] % 1 !== 0) {
      node.classList.remove(starClassActive);
      node.classList.add(starHalfActive);
      node.innerHTML += `
<svg class="svg-inline--fa fa-star-half" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star-half" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M288 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.995 275.8 .0131 287.1-.0391L288 439.8zM433.2 512C432.1 512.1 431 512.1 429.9 512H433.2z"></path></svg>`;
    }
    return node;
  });
};

window.addEventListener('load', rating);
export default rating;
