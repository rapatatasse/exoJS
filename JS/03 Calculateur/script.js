
function surfacetotale() {
    let longueur = parseFloat(document.getElementById("longueur").value);
    let largeur = parseFloat(document.getElementById("largeur").value);
    return Math.round((longueur * largeur) * 100) / 100;
}

function nbcarreaux(surfacetotale) {
    let carreauLongueur = parseFloat(document.getElementById("carreauLongueur").value);
    let carreauLargeur = parseFloat(document.getElementById("carreauLargeur").value);
    return Math.ceil(surfacetotale / (carreauLongueur/1000 * carreauLargeur/1000));

}

function nbpaquets(nbcarreaux) {
    return Math.ceil(nbcarreaux / 4);
}

function nbm2(nbpaquets) {
    let carreauLongueur = parseFloat(document.getElementById("carreauLongueur").value);
    let carreauLargeur = parseFloat(document.getElementById("carreauLargeur").value);
    return nbpaquets * (carreauLongueur/1000 * carreauLargeur/1000) * 4;
}





function calculerSurface() {
    let varsurfacetotale = surfacetotale();
    let varnbcarreaux = nbcarreaux(varsurfacetotale);
    let varnbpaquets = nbpaquets(varnbcarreaux);
    let varnbm2 = nbm2(varnbpaquets);

    //modification des valeurs
    document.getElementById("surface").textContent = varsurfacetotale;
    document.getElementById("nbcarreaux").textContent = varnbcarreaux;
    document.getElementById("nbpaquets").textContent = varnbpaquets;
    document.getElementById("nbm2").textContent = varnbm2;
}