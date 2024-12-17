console.log("Hello World");
const panier = document.getElementById("panier");
// Fonction pour ajouter le texte dans le panier
function ajouterAuPanier(idpanier, prix) {
    const produitHTML = `<p>Produit ` + idpanier + ` <b>Prix ` + prix + `€</b></p>`;
    panier.insertAdjacentHTML("beforeend", produitHTML);
}

// Écouteur d'événement sur le bouton
