function ValiderCV() {

    //infos Personnelles
    document.getElementById("cv-nom").textContent = document.getElementById("nom2").value || "";
    document.getElementById("cv-nom2").textContent = document.getElementById("nom3").value || "";
    document.getElementById("cv-nom3").textContent = document.getElementById("nom4").value || "";
    document.getElementById("cv-nom4").textContent = document.getElementById("nom5").value || "";
    document.getElementById("cv-nom5").textContent = document.getElementById("nom6").value || "";
    document.getElementById("cv-nom6").textContent = document.getElementById("nom7").value || "";
    document.getElementById("cv-nom7").textContent = document.getElementById("nom8").value || "";

    // Experiences Pro
    document.getElementById("cv-experience1").textContent = document.getElementById("experience1").value || "";
    document.getElementById("cv-experience2").textContent = document.getElementById("experience2").value || "";
    document.getElementById("cv-experience3").textContent = document.getElementById("experience3").value || "";
    document.getElementById("cv-experience4").textContent = document.getElementById("experience4").value || "";

    // formations
    document.getElementById("cv-formation1").textContent = document.getElementById("formation1").value || "";
    document.getElementById("cv-formation2").textContent = document.getElementById("formation2").value || "";
    document.getElementById("cv-formation3").textContent = document.getElementById("formation3").value || "";

    // Competences
    document.getElementById("cv-competences").textContent = document.getElementById("competences").value || "";

    // interets
    document.getElementById("cv-interet1").textContent = document.getElementById("interet1").value || "";
    document.getElementById("cv-interet2").textContent = document.getElementById("interet1").value || "";

    //  REferences
    document.getElementById("cv-ref1").textContent = document.getElementById("ref1").value || "";
    document.getElementById("cv-ref2").textContent = document.getElementById("ref2").value || "";
    document.getElementById("cv-ref3").textContent = document.getElementById("ref3").value || "";

    // langue
    document.getElementById("cv-lan1").textContent = document.getElementById("l1").value || "";
    document.getElementById("cv-lan2").textContent = document.getElementById("l2").value || "";


<<<<<<< HEAD
=======
    // Verifier que les champs ne sont pas vide

>>>>>>> abac8fface9ba17f7b99c03a82c0050068f7259b
    let champs = document.querySelectorAll("#V12 input, #V12 textarea");
    let champsVides = [];

    champs.forEach(champ => {
        if (champ.value.trim() === "") {
            champsVides.push(champ);
            champ.style.border = "2px solid red";
        } else {
            champ.style.border = "1px solid #ccc";
        }
    });

    if (champsVides.length > 0) {
        alert("  Veuillez remplir tous les champs Correctement  ");
        return false;
    }

    alert(" Votre CV est a jour ! ");
    return true;
}

// Pdf

<<<<<<< HEAD
function exporterPDF() {
    const content = document.getElementById("CVP").innerHTML;  // Récupère le contenu de la div
    // Ouvre une nouvelle fenêtre
    const pdf3 = window.open('', '', 'height=1700,width=900');
    // Écrit le contenu dans la fenêtre de l'impression
    pdf3.document.write('<html><head><title> CV-pdf </title></head><body>');
    pdf3.document.write(content);  // Écrit le contenu HTML de la div dans le document de la fenêtre
    pdf3.document.write('CVP>');
    // Fermeture du document et lancement de l'impression
    pdf3.document.close();
    pdf3.print();  // Lancement de l'impression

}function exporterPDF() {
    const content = document.getElementById("CVP").innerHTML;  // Récupère le contenu de la div
    // Ouvre une nouvelle fenêtre
    const pdf3 = window.open('', '', 'height=1700,width=900');
    // Écrit le contenu dans la fenêtre de l'impression
    pdf3.document.write('<html><head><title> CV-pdf </title></head><body>');
    pdf3.document.write(content);  // Écrit le contenu HTML de la div dans le document de la fenêtre
    pdf3.document.write('CVP>');
    // Fermeture du document et lancement de l'impression
    pdf3.document.close();
    pdf3.print();  // Lancement de l'impression

}
=======
// function exporterPDF() {
//     let CV = document.getElementById('cv');
//     html5pdf().from(CV).save('CV.pdf');
// }

>>>>>>> abac8fface9ba17f7b99c03a82c0050068f7259b


// fonction pour image
function addEventListener() {

    document.getElementById("im").addEventListener("change", function (event) {
        let file = event.target.files[0];

        if (file) {
            let reader = new FileReader();
            reader.onload = function (e) {
                let img = document.getElementById("image");
                img.src = e.target.result;
                img.style.display = "block";
            }
            reader.readAsDataURL(file);
        }
    });
}

// verification de l'age
function verifieAge() {


}

// Fonctions pour ajouter de nouveaux elements

// experiences
function newChamp() {
    let container = document.getElementById("EX");
    let nouvelleExperience = document.createElement("div");
    nouvelleExperience.classList.add("experience");

    nouvelleExperience.innerHTML = `
        <label>Nom de l'entreprise :</label>
        <input id="experience1" type="text"  placeholder="Entrer le nom de l'entreprise">

        <label>Poste occupé:</label>
        <input id="experience2" type="text"  placeholder="Poste">

        <label>Durée d'occupation :</label>
        <input id="experience3" type="text"  placeholder="Durée d'occupation">

        <label>Description du poste :</label>
        <input id="experience4" type="text"  placeholder="Entrer une description">

        <button class="remove-btn" onclick="supprimerChamp(this)">Supprimer</button>
    `;
    container.appendChild(nouvelleExperience);
}

// formations
function newChamp1() {
    let container = document.getElementById("B3");
    let nouvelleFormations = document.createElement("div");
    nouvelleFormations.classList.add("formation");

    nouvelleFormations.innerHTML = `
        <label> diplome obtenu: </label>
                <textarea id="formation1" placeholder=" Nom du diplome "></textarea>

                <label> Nom de l'etablissement :</label>
                <textarea id="formation2" placeholder=" Entrer le nom de l'etablissement "></textarea>

                <label> Annee d'obtention: </label>
                <textarea id="formation3" placeholder=" Annee "></textarea>

        <button class="remove-btn" onclick="supprimerChamp(this)">Supprimer</button>
    `;
    container.appendChild(nouvelleFormations);
}

// Competences
function newChamp2() {
    let container = document.getElementById("C18");
    let newComp = document.createElement("div");
    newComp.classList.add("Competences");

    newComp.innerHTML = `
    <label> Compétences :</label>
     <textarea id="competences" placeholder="Listez vos compétences"></textarea>

        <button class="remove-btn" onclick="supprimerChamp(this)">Supprimer</button>
    `;
    container.appendChild(newComp);
    saveData();
}

// References
function newChamp3() {
    let container = document.getElementById("C17");
    let newRef = document.createElement("div");
    newRef.classList.add("Reference");

    newRef.innerHTML = `
    <label> Nom de la References:</label>
                <textarea id="ref1" placeholder=" Entrer le nom de la References"></textarea>

                <label> Poste de la reference: </label>
                <textarea id="ref2" placeholder=" Entrer le poste"></textarea>

                <label> Contact de la reference: </label>
                <textarea id="ref3" placeholder=" contact "></textarea>
        <button class="remove-btn" onclick="supprimerChamp(this)">Supprimer</button>
    `;
    container.appendChild(newRef);
}


// Fonction pour supprimer les champs ajouter
function supprimerChamp(button) {
    button.parentElement.remove();
}


// Fonction pour sauvegarder les données dans le localStorage
function saveData() {
    const formData = {
        nomComplet: document.getElementById("nom2").value,
        age: document.getElementById("nom3").value,
        titrePoste: document.getElementById("nom4").value,
        situation: document.getElementById("nom5").value,
        sexe: document.getElementById("nom6").value,
        email: document.getElementById("nom7").value,
        telephone: document.getElementById("nom8").value,
        experience: {
            entreprise: document.getElementById("experience1").value,
            poste: document.getElementById("experience2").value,
            duree: document.getElementById("experience3").value,
            description: document.getElementById("experience4").value
        },
        formation: {
            diplome: document.getElementById("formation1").value,
            etablissement: document.getElementById("formation2").value,
            annee: document.getElementById("formation3").value
        },
        competences: document.getElementById("competences").value,
        interets: {
            loisir: document.getElementById("interet1").value,
            passions: document.getElementById("interet2").value
        },
        references: {
            nom: document.getElementById("ref1").value,
            poste: document.getElementById("ref2").value,
            contact: document.getElementById("ref3").value
        },
        langues: {
            langue: document.getElementById("l1").value,
            niveau: document.getElementById("l2").value
        },


    };

    // Sauvegarde dans le localStorage
    localStorage.setItem("formCV", JSON.stringify(formData));
    alert(" Données sauvegardées ");
}

// Fonction pour charger les données sauvegardées
function chargerDonnees() {
    const storedData = localStorage.getItem("formCV");

    if (storedData) {
        const formData = JSON.parse(storedData);

        document.getElementById("nom2").value = formData.nomComplet || "";
        document.getElementById("nom3").value = formData.age || "";
        document.getElementById("nom4").value = formData.titrePoste || "";
        document.getElementById("nom5").value = formData.situation || "";
        document.getElementById("nom6").value = formData.sexe || "";
        document.getElementById("nom7").value = formData.email || "";
        document.getElementById("nom8").value = formData.telephone || "";

        document.getElementById("experience1").value = formData.experience.entreprise || "";
        document.getElementById("experience2").value = formData.experience.poste || "";
        document.getElementById("experience3").value = formData.experience.duree || "";
        document.getElementById("experience4").value = formData.experience.description || "";

        document.getElementById("formation1").value = formData.formation.diplome || "";
        document.getElementById("formation2").value = formData.formation.etablissement || "";
        document.getElementById("formation3").value = formData.formation.annee || "";

        document.getElementById("competences").value = formData.competences || "";

        document.getElementById("interet1").value = formData.interets.loisir || "";
        document.getElementById("interet2").value = formData.interets.passions || "";

        document.getElementById("ref1").value = formData.references.nom || "";
        document.getElementById("ref2").value = formData.references.poste || "";
        document.getElementById("ref3").value = formData.references.contact || "";

        document.getElementById("l1").value = formData.langues.langue || "";
        document.getElementById("l2").value = formData.langues.niveau || "";
    }
}

// Fonction pour effacer les données du localStorage
function effacerDonnees() {
    localStorage.removeItem("formCV");
    alert(" Données supprimées avec succes ");
    location.reload();
}

// Charger les données automatiquement au chargement de la page
document.addEventListener("DOMContentLoaded", chargerDonnees);

