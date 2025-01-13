function showResult(message, isError = false, validTests = []) {
    const resultDiv = document.getElementById('result');
    let html = `<div style="color: ${isError ? 'red' : 'green'}">${message}</div>`;
    
    if (validTests.length > 0) {
        html += '<br><div style="color: green">Tests validés :</div>';
        html += validTests.map(test => `<div style="color: green">✓ ${test}</div>`).join('');
    }
    
    resultDiv.innerHTML = html;
}

function validateQuery(query, requiredElements) {
    const normalizedQuery = query.toLowerCase().replace(/\s+/g, ' ');
    return requiredElements.every(element => {
        const normalizedElement = element.toLowerCase();
        return normalizedQuery.includes(normalizedElement);
    });
}

function test2() {
    console.log("test2");
    let results = [];
    
    // Question 1
    const sql1 = document.getElementById('sqlCode1').value;
    if (validateQuery(sql1, [
        'FROM villes_france_free',
        'WHERE ville_population_2012 >= ville_population_1999 * 1.5'
    ])) {
        console.log("Question 1: validé");
        results.push("Question 1: Augmentation population de 50%");
    } else {
        console.log("Question 1: non validé");
    }

    // Question 2
    const sql2 = document.getElementById('sqlCode2').value;
    if (validateQuery(sql2, [
        'FROM villes_france_free',
        'WHERE ville_population_2012 >= ville_population_1999 * 1.5',
        'ville_surface',
        'ORDER BY'
    ])) {
        results.push("Question 2: Calcul densité de population");
    }

    // Question 3
    const sql3 = document.getElementById('sqlCode3').value;
    if (validateQuery(sql3, [
        'FROM villes_france_free',
        'JOIN departement',
        'GROUP BY',
        'HAVING',
        '> 100'
    ])) {
        results.push("Question 3: Départements avec plus de 100 communes");
    }

    // Question 4
    const sql4 = document.getElementById('sqlCode4').value;
    if (validateQuery(sql4, [
        'FROM villes_france_free',
        'ORDER BY ville_surface DESC',
        'LIMIT 5'
    ])) {
        results.push("Question 4: Top 5 des villes par surface");
    }

    // Question 5
    const sql5 = document.getElementById('sqlCode5').value;
    if (validateQuery(sql5, [
        'FROM villes_france_free',
        'JOIN departement',
        'GROUP BY',
        'ORDER BY',
        'LIMIT 5'
    ])) {
        results.push("Question 5: Top 5 départements par nombre de villes");
    }

    // Question 6
    const sql6 = document.getElementById('sqlCode6').value;
    if (validateQuery(sql6, [
        'FROM villes_france_free',
        "LIKE '%ville'",
        'ville_population_2012 > 10000'
    ])) {
        results.push("Question 6: Villes terminant par 'ville' avec plus de 10000 habitants");
    }

    // Question 7
    const sql7 = document.getElementById('sqlCode7').value;
    if (validateQuery(sql7, [
        'FROM villes_france_free',
        'GROUP BY ville_nom',
        'ORDER BY',
        'LIMIT 5'
    ])) {
        results.push("Question 7: Top 5 des villes homonymes");
    }

    // Question 8 - Distance Pythagore
    const sql8 = document.getElementById('sqlCode8').value;
    const distance8 = parseFloat(sql8);
    if (!isNaN(distance8) && distance8 >= 441 && distance8 <= 443) {
        results.push("Question 8: Distance Lyon-Paris (Pythagore)");
    }

    // Question 9 - Distance Haversine
    const sql9 = document.getElementById('sqlCode9').value;
    const distance9 = parseFloat(sql9);
    if (!isNaN(distance9) && distance9 >= 392 && distance9 <= 394) {
        results.push("Question 9: Distance Lyon-Paris (Haversine)");
    }

    // Affichage des résultats
    if (results.length === 0) {
        showResult("Aucune requête n'est correcte. Vérifiez vos requêtes et réessayez.", true);
    } else if (results.length === 9) {
        showResult("Félicitations ! Toutes les requêtes sont correctes !", false, results);
    } else {
        showResult(`${results.length} requêtes sur 9 sont correctes.`, false, results);
    }
}