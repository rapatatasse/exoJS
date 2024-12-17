function showResult(message, isError = false, validTests = []) {
    const resultDiv = document.getElementById('result');
    let html = `<div style="color: ${isError ? 'red' : 'green'}">${message}</div>`;
    
    if (validTests.length > 0) {
        html += '<br><div style="color: green">Tests validés :</div>';
        html += validTests.map(test => `<div style="color: green">✓ ${test}</div>`).join('');
    }
    
    resultDiv.innerHTML = html;
}

function test() {
    try {
        const sqlTextarea = document.getElementById('sqlCode');
        const content = sqlTextarea.value;
        let results = [];
        
        if (!content || content.trim() === '') {
            showResult('Erreur : La zone de texte est vide. Veuillez y ajouter votre code SQL.', true);
            return false;
        }

        // Test 3: Vérifier le nombre de tables
        const tableCount = (content.match(/CREATE TABLE/g) || []).length;
        if (tableCount !== 4) {
            showResult(`Test nombre de tables : Erreur - Il doit y avoir exactement 4 tables. Actuellement, il y en a ${tableCount}.`, true, results);
            return false;
        } else {
            results.push("Test nombre de tables : validé");
        }

        // Test 1: Vérifier les noms des tables
        const expectedTables = ['Communes', 'Services', 'Employes', 'ServiceEmployes'];
        const tableNames = content.match(/CREATE TABLE "([^"]+)"/g)
            .map(match => match.match(/CREATE TABLE "([^"]+)"/)[1]);

        let namesValid = true;
        for (const expectedTable of expectedTables) {
            if (!tableNames.includes(expectedTable)) {
                showResult(`Test noms des tables : Erreur - La table "${expectedTable}" n'est pas trouvée ou mal nommée.`, true, results);
                return false;
            }
        }
        results.push("Test noms des tables (majuscule et S final) : validé");

        // Test 2: Vérifier la présence du champ "nom"
        const tablesNeedingNom = ['Communes', 'Services', 'Employes'];
        for (const tableName of tablesNeedingNom) {
            const tableContent = content.match(new RegExp(`CREATE TABLE "${tableName}"[^;]+;`))[0];
            if (!tableContent.includes('"nom"')) {
                showResult(`Test champ 'nom' : Erreur - Le champ "nom" est manquant dans la table "${tableName}".`, true, results);
                return false;
            }
        }
        results.push("Test présence du champ 'nom' dans les tables : validé");

        // Test 4: Vérifier la présence de commune_id dans Employes
        const employesTable = content.match(/CREATE TABLE "Employes"[^;]+;/)[0];
        if (!employesTable.includes('"commune_id"')) {
            showResult('Test commune_id : Erreur - Le champ "commune_id" est manquant dans la table "Employes".', true, results);
            return false;
        } else {
            results.push("Test présence du champ 'commune_id' : validé");
        }

        // Test 5: Vérifier la présence de employe_id et service_id
        const serviceEmployesTable = content.match(/CREATE TABLE "ServiceEmployes"[^;]+;/)[0];
        if (!serviceEmployesTable.includes('"employe_id"') || !serviceEmployesTable.includes('"service_id"')) {
            showResult('Test champs de liaison : Erreur - Les champs "employe_id" et "service_id" sont requis dans la table "ServiceEmployes".', true, results);
            return false;
        } else {
            results.push("Test présence des champs 'employe_id' et 'service_id' : validé");
        }

        // Test 6: Vérifier le nombre de ALTER TABLE
        const alterCount = (content.match(/ALTER TABLE/g) || []).length;
        if (alterCount !== 3) {
            showResult(`Test ALTER TABLE : Erreur - Il doit y avoir exactement 3 ALTER TABLE. Actuellement, il y en a ${alterCount}.`, true, results);
            return false;
        } else {
            results.push("Test nombre d'ALTER TABLE : validé");
        }

        showResult('Félicitations ! Tous les tests sont passés avec succès. Vous pouvez maintenant vous entrainer dans les requetes SQL en allant sur ce petit jeu https://www.codewars.com/kata/5802e32dd8c944e562000020/train/sql', false, results);
        return true;
    } catch (error) {
        showResult('Erreur lors de la vérification du code SQL : ' + error.message, true);
        return false;
    }
}