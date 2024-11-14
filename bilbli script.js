bibli:
//a) Opérateurs arithmétiques
+ : addition
    - : soustraction
        * : multiplication
            / : division
                % : modulo(reste de la division)
                    ** : puissance(ex: 2 ** 3 donne 8)
//Exemple:


let x = 10;
let y = 5;
let result = x + y;  // result vaut 15


b) Opérateurs de comparaison
Ils comparent deux valeurs et renvoient un booléen(true ou false).

== : égalité(vérifie la valeur sans se soucier du type)
    === : stricte égalité(vérifie la valeur et le type)
        != : inégalité(vérifie la valeur sans se soucier du type)
            !== : stricte inégalité(vérifie la valeur et le type)
                <, >, <=, >= : infériorité, supériorité, etc.
                    Exemple :


let a = 5;
let b = "5";
console.log(a == b);  // true
console.log(a === b); // false

c) Opérateurs logiques
Utilisés pour les conditions.

&& : ET logique(vrai si toutes les conditions sont vraies)
    || : OU logique(vrai si au moins une condition est vraie)
! : NON logique(inverse le booléen)
//Exemple:


let isLogged = true;
let isAdmin = false;
console.log(isLogged && isAdmin);  // false
console.log(isLogged || isAdmin);  // true
console.log(!isLogged);            // false



//1. Les Opérateurs en JavaScript
//Les opérateurs sont des symboles ou des mots qui permettent d'effectuer des opérations sur des valeurs.

/*a) Opérateurs arithmétiques
    + : addition
        - : soustraction
            * : multiplication
                / : division
                    % : modulo(reste de la division)
                        ** : puissance(ex: 2 ** 3 donne 8)
*/Exemple:


let x = 10;
let y = 5;
let result = x + y;  // result vaut 15
/*b) Opérateurs de comparaison
Ils comparent deux valeurs et renvoient un booléen(true ou false).

== : égalité(vérifie la valeur sans se soucier du type)
    === : stricte égalité(vérifie la valeur et le type)
        != : inégalité(vérifie la valeur sans se soucier du type)
            !== : stricte inégalité(vérifie la valeur et le type)
                <, >, <=, >= : infériorité, supériorité, etc.
                    Exemple :
*/

let a = 5;
let b = "5";
console.log(a == b);  // true
console.log(a === b); // false
/*c) Opérateurs logiques
Utilisés pour les conditions.

&& : ET logique(vrai si toutes les conditions sont vraies)
    || : OU logique(vrai si au moins une condition est vraie)
! : NON logique(inverse le booléen)
//Exemple:
*/

let isLogged = true;
let isAdmin = false;
console.log(isLogged && isAdmin);  // false
console.log(isLogged || isAdmin);  // true
console.log(!isLogged);            // false
d) Opérateurs d’affectation
    = : affecte une valeur
        +=, -=, *=, /=, %= : affectation combinée avec un opérateur arithmétique
//Exemple:


let num = 10;
num += 5;  // num vaut 15
2. Les Méthodes pour Récupérer un Élément HTML
Pour manipuler un élément HTML en JavaScript, il faut d'abord le récupérer dans le code. Voici les méthodes les plus courantes :

/*a) document.getElementById()
Récupère un élément HTML par son id.Cette méthode est rapide et idéale pour récupérer un élément unique.
*/
let element = document.getElementById("monId");

//b) document.getElementsByClassName()
//Récupère tous les éléments ayant une classe spécifique.Cela renvoie une collection d’éléments(HTMLCollection), même s'il n'y a qu'un seul élément.


let elements = document.getElementsByClassName("maClasse");

//c) document.getElementsByTagName()
//Récupère tous les éléments ayant un nom de balise spécifique(div, p, etc.).Cela renvoie également une collection.


let divs = document.getElementsByTagName("div");

//d) document.querySelector()
//Récupère le premier élément qui correspond au sélecteur CSS fourni.Cela peut être un id, une classe, ou un sélecteur plus complexe.


let element = document.querySelector("#monId");  // par id
let element = document.querySelector(".maClasse");  // par classe
let element = document.querySelector("div > p");  // selecteur CSS complexe

//e) document.querySelectorAll()
//Récupère tous les éléments qui correspondent au sélecteur CSS donné.Renvoie une NodeList(une collection similaire à un tableau).


let elements = document.querySelectorAll(".maClasse");

//Exemple d'utilisation :
//Supposons qu'on ait un élément HTML :

html

    < div id = "conteneur" class="maClasse" >
        <p>Bonjour !</p>
</ >
    En JavaScript:


// Récupération par id
let conteneur = document.getElementById("conteneur");

// Récupération par classe
let elementsClasse = document.getElementsByClassName("maClasse");

// Récupération par balise
let paragraphs = document.getElementsByTagName("p");

// Récupération avec querySelector
let premierParagraphe = document.querySelector("#conteneur p");

// Récupération avec querySelectorAll
let allParagraphs = document.querySelectorAll("div p");

//Supposons qu’on ait cette structure HTML de base:

<div id="conteneur" class="maClasse" >
    <p id="texte">Bonjour, je suis un paragraphe.</p>
</div >
//    1. Modifier le Contenu d’un Élément
/*Pour modifier le contenu d’un élément, on peut utiliser la propriété.innerHTML ou.textContent en JavaScript.

.innerHTML : modifie le contenu HTML, y compris les balises HTML si on en ajoute.
.textContent : modifie le texte uniquement, sans interpréter les balises HTML.
    Exemple
*/
// Sélectionne l'élément avec l'id "texte"
let paragraphe = document.getElementById("texte");

// Modifie le contenu en HTML (peut inclure du HTML)
paragraphe.innerHTML = "<strong>Bonjour, je suis modifié en HTML !</strong>";

// Modifie uniquement le texte
paragraphe.textContent = "Bonjour, je suis modifié en texte uniquement !";

/*2. Modifier la Couleur de Texte d’un Élément
Pour changer la couleur du texte d’un élément, on utilise la propriété.style.color.

    Exemple
*/
// Sélectionne l'élément avec l'id "texte"
let paragraphe = document.getElementById("texte");

// Change la couleur du texte en rouge
paragraphe.style.color = "red";

// Change la couleur du texte en utilisant une couleur en code hexadécimal
paragraphe.style.color = "#00FF00";  // Vert

/*3. Modifier la Couleur de Fond d’un Élément
Pour modifier la couleur de fond d’un élément, on utilise la propriété.style.backgroundColor.
*/

// Sélectionne l'élément avec l'id "conteneur"
let conteneur = document.getElementById("conteneur");

// Change la couleur de fond en bleu
conteneur.style.backgroundColor = "blue";

// Change la couleur de fond en utilisant un code hexadécimal
conteneur.style.backgroundColor = "#FFD700";  // Doré

/*4. Combinaison: Modifier le Texte, la Couleur et le Fond
On peut combiner plusieurs modifications sur le même élément.

    Exemple
*/
// Sélectionne l'élément avec l'id "texte"
let paragraphe = document.getElementById("texte");

// Modifie le texte
paragraphe.textContent = "Voici un paragraphe modifié !";

// Modifie la couleur du texte et le fond
paragraphe.style.color = "white";          // texte en blanc
paragraphe.style.backgroundColor = "blue"; // fond en bleu
paragraphe.style.fontSize = "20px";        // augmente la taille du texte

/*5. Changer plusieurs éléments avec querySelectorAll
On peut aussi modifier plusieurs éléments en même temps, par exemple tous les paragraphes.

    Exemple
*/
// Sélectionne tous les paragraphes de la page
let paragraphs = document.querySelectorAll("p");

// Applique des styles à chaque paragraphe
paragraphs.forEach((para) => {
    para.style.color = "purple";
    para.style.backgroundColor = "#EEE";
    para.textContent = "Ce texte a été mis à jour.";
});

/*
1. Ajouter un Nouvel Élément HTML
Pour ajouter un élément, il faut généralement:

Créer l'élément avec document.createElement().
Lui donner un contenu ou des attributs.
    L'ajouter au DOM avec des méthodes comme .appendChild() ou .insertBefore().
//Exemple: Ajouter un paragraphe dans un conteneur
Supposons qu'on a ce conteneur dans notre HTML :
*/

<div id="conteneur" >
    <p>Paragraphe existant.</p>
</div >
    En JavaScript, pour ajouter un nouveau paragraphe:


// Sélectionne le conteneur
let conteneur = document.getElementById("conteneur");

// Crée un nouvel élément paragraphe
let nouveauParagraphe = document.createElement("p");

// Ajoute du texte au paragraphe
nouveauParagraphe.textContent = "Je suis un nouveau paragraphe ajouté par JavaScript.";

// Ajoute le paragraphe au conteneur
conteneur.appendChild(nouveauParagraphe);
Ce code ajoute un nouveau paragraphe à la fin du conteneur.

    Exemple : Ajouter un élément en début de conteneur avec.prepend()

// Crée un nouvel élément paragraphe
let paragrapheDebut = document.createElement("p");
paragrapheDebut.textContent = "Je suis un paragraphe ajouté en premier.";

// Ajoute le paragraphe au début du conteneur
conteneur.prepend(paragrapheDebut);

/*2. Supprimer un Élément HTML
Pour supprimer un élément, on peut utiliser la méthode.remove() sur cet élément directement.Sinon, on peut aussi utiliser.removeChild() sur son parent.

    Exemple : Supprimer un élément spécifique
Supposons qu'on souhaite supprimer le paragraphe avec id="texte" :
*/

<p id="texte" > Paragraphe à supprimer.</p>
        En JavaScript:


// Sélectionne le paragraphe à supprimer
let paragraphe = document.getElementById("texte");

// Supprime le paragraphe
paragraphe.remove();
//Exemple: Supprimer un élément enfant d’un conteneur
html
Copier le code
    < div id = "conteneur" >
        <p id="texte">Paragraphe à supprimer via son parent.</p>
    </ >
    En JavaScript:


// Sélectionne le conteneur et le paragraphe
let conteneur = document.getElementById("conteneur");
let paragraphe = document.getElementById("texte");

// Supprime le paragraphe en passant par le conteneur
conteneur.removeChild(paragraphe);

/*3. Insérer un Élément Avant un Autre Élément
On peut insérer un élément avant un autre en utilisant.insertBefore().

    Exemple
*/
// Crée un nouveau paragraphe
let nouveauParagraphe = document.createElement("p");
nouveauParagraphe.textContent = "Je suis un paragraphe inséré avant un autre.";

// Sélectionne le paragraphe de référence dans le conteneur
let paragrapheReference = document.getElementById("texte");

/* Insère le nouveau paragraphe avant le paragraphe de référence
conteneur.insertBefore(nouveauParagraphe, paragrapheReference);
En Résumé
Ajouter un élément: createElement(), puis appendChild(), prepend(), ou insertBefore().
Supprimer un élément: .remove() ou.removeChild()
*/


// ramdom JS Bilbli
// Exemple de code JavaScript pour générer un nombre aléatoire entre 1 et 10
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);
// Exemple de code JavaScript pour générer un nombre aléatoire entre 1 et 3
let random = Math.floor(Math.random() * 3) + 1;
console.log(random);


//Function JS
function multiply(a, b) {
    return a * b;
}