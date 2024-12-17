function test() {
    //test surface totale
     console.log( "########### 1/Test de la surface totale ###########");
    var longueur = 10;
    var largeur = 5;
    document.getElementById("longueur").value = longueur
    document.getElementById("largeur").value = largeur
    calculerSurface();
    surfacetotalresultat = document.getElementById("surface").textContent
    if (surfacetotalresultat == longueur * largeur) {
        console.log( "Calcule basique de la surface total : correcte 😍");
    } else {
        console.log( "Calcule basique de la surface total : incorrecte 😡");
        return
    }
    //test virgule
    var longueur = 1.2136;
    var largeur = 2.12;
    document.getElementById("longueur").value = longueur
    document.getElementById("largeur").value = largeur
    calculerSurface();
    surfacetotalresultat = parseFloat(document.getElementById("surface").textContent)
    if (surfacetotalresultat === Math.round((longueur * largeur) * 100) / 100) {
        console.log( "Calcule  de la surface total avec decimales :correcte 🥰");
    } else {
        console.log( "Calcule  de la surface total avec decimales :incorrecte arrondir a 2 decimales 🤬");
        return
    }
    //test nb carreaux
    console.log( "########### 2/Test du nb de carreaux ###########");
    var longueur = 1;
    var largeur = 1;
    var carreauLongueur = 500;
    var carreauLargeur = 500;
    document.getElementById("longueur").value = longueur
    document.getElementById("largeur").value = largeur
    document.getElementById("carreauLongueur").value = carreauLongueur
    document.getElementById("carreauLargeur").value = carreauLargeur
    calculerSurface();
    nbcarreauxresultat = parseFloat(document.getElementById("nbcarreaux").textContent)
    if (nbcarreauxresultat === Math.ceil((longueur * largeur) / (carreauLongueur/1000 * carreauLargeur/1000))) {
        console.log( "Calcule basique du nb de carreaux : correcte 😍");
    } else {
        console.log( "Calcule basique du nb de carreaux : incorrecte 🤬");
        return
    }
    //test virgule
    var longueur = 1;
    var largeur = 1;
    var carreauLongueur = 300;
    var carreauLargeur = 300;
    document.getElementById("longueur").value = longueur
    document.getElementById("largeur").value = largeur
    document.getElementById("carreauLongueur").value = carreauLongueur
    document.getElementById("carreauLargeur").value = carreauLargeur
    calculerSurface();
    nbcarreauxresultat = parseFloat(document.getElementById("nbcarreaux").textContent)
    if (nbcarreauxresultat === Math.ceil((longueur * largeur) / (carreauLongueur/1000 * carreauLargeur/1000))) {
        console.log( "Calcule  du nb de carreaux entiers : correcte 😍");
    } else {
        console.log( "Calcule  du nb de carreaux entiers : incorrecte arrondir au carreau supérieur 🤬");
        return
    }
    //test nb paquets
    console.log( "########### 3/Test du nb de paquets ###########");
    var longueur = 0.5;
    var largeur = 2.5;
    var carreauLongueur = 500;
    var carreauLargeur = 500;
    document.getElementById("longueur").value = longueur
    document.getElementById("largeur").value = largeur
    document.getElementById("carreauLongueur").value = carreauLongueur
    document.getElementById("carreauLargeur").value = carreauLargeur
    calculerSurface();
    nbpaquetsresultat = parseFloat(document.getElementById("nbpaquets").textContent)
    if (nbpaquetsresultat === Math.ceil(Math.ceil((longueur * largeur) / (carreauLongueur/1000 * carreauLargeur/1000)) / 4)) {
        console.log( "Calcule basique du nb de paquets : correcte 😍");
    } else {
        console.log( "Calcule basique du nb de paquets : incorrecte arrondir au paquet supérieur 🤬");
        return
    }

    //test nb m2
    console.log( "########### 4/Test du nb de m2 a commander###########");
    var longueur = 0.5;
    var largeur = 2.5;
    var carreauLongueur = 500;
    var carreauLargeur = 500;
    document.getElementById("longueur").value = longueur
    document.getElementById("largeur").value = largeur
    document.getElementById("carreauLongueur").value = carreauLongueur
    document.getElementById("carreauLargeur").value = carreauLargeur
    nbpaquetsresultat = parseFloat(document.getElementById("nbpaquets").textContent)
    calculerSurface();
    nbm2resultat = parseFloat(document.getElementById("nbm2").textContent)
    if (nbm2resultat === nbpaquetsresultat * (carreauLongueur/1000 * carreauLargeur/1000) * 4) {
        console.log( "Calcule basique du nb de m2 : correcte 😍");
        console.log( "🎉🎉🎉🎉🎉🎉BRAVO vous avez fini l'exercice. 🎉🎉🎉🎉🎉🎉");
        console.log( "Si il vous reste des neuronnes vous pourriez améliorer le fichier afin de pouvoir calculer des surfaces à partir de selection de produits ayant leur dimention largeur et longueur....Comment vous feriez ceci ?");
    } else {
        console.log( "Calcule basique du nb de m2 : incorrecte arrondir au m2 supérieur 🤬");
        return
    }
}
