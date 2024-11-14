//1. Déclaration du tableau de produits
// Tableau de produits avec titre, prix et description
const produits = [
  { titre: "Produit A", prix: 19.99, description: "Un excellent produit pour commencer." },
  { titre: "Produit B", prix: 29.99, description: "Un produit de qualité pour les amateurs." },
  { titre: "Produit C", prix: 39.99, description: "Idéal pour les professionnels." },
  { titre: "Produit D", prix: 49.99, description: "Un produit haut de gamme pour les connaisseurs." },
  { titre: "Produit E", prix: 59.99, description: "Le top du top pour les experts." }
];
//2. HTML avec un point d’insertion pour la liste dynamique
//Ajoute cette div à ta page HTML, en dessous de la zone où tu souhaites insérer la liste.

//html :

<div id="listedupanier"></div>

//3. Script JavaScript pour générer le contenu et l’ajouter dans listedupanier
//Ce code va parcourir le tableau produits et insérer dynamiquement chaque produit sous forme de carte Bootstrap après la div avec l’id listedupanier.


// Sélectionne l'élément avec l'ID "listedupanier" pour insérer les produits
const listedupanier = document.getElementById("listedupanier");

// Parcourt le tableau de produits et génère des cartes Bootstrap pour chaque produit
produits.forEach(produit => {
  // Crée une div de type "card" pour chaque produit
  const cardHTML = `
    <div class="card mb-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${produit.titre}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Prix: ${produit.prix}€</h6>
        <p class="card-text">${produit.description}</p>
      </div>
    </div>
  `;

  // Ajoute la carte dans le conteneur "listedupanier"
  listedupanier.insertAdjacentHTML("beforeend", cardHTML);
});
//Explications
//insertAdjacentHTML("beforeend", cardHTML); : ajoute chaque carte générée à la fin de la div avec l’id listedupanier.
//Boucle forEach : permet de parcourir chaque produit dans le tableau produits et de créer une carte avec ses informations.