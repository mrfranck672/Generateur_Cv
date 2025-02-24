function genererCV() {
    //infos Personnelles
    document.getElementById("cv-nom").textContent = document.getElementById("nom2").value || "Nom Complet";
    document.getElementById("cv-nom2").textContent = document.getElementById("nom3").value || "Age";
    document.getElementById("cv-nom3").textContent = document.getElementById("nom4").value || "Titre du poste";
    document.getElementById("cv-nom4").textContent = document.getElementById("nom5").value || "Situation actuelle";
    document.getElementById("cv-nom5").textContent = document.getElementById("nom6").value || "Sexe";
    document.getElementById("cv-nom6").textContent = document.getElementById("nom7").value || "Email";
    document.getElementById("cv-nom7").textContent = document.getElementById("nom8").value || "Telephone";

    // Experiences Pro
    document.getElementById("cv-experience1").textContent = document.getElementById("experience1").value || "Nom de l'entreprise";
    document.getElementById("cv-experience2").textContent = document.getElementById("experience2").value || "Poste occupé";
    document.getElementById("cv-experience3").textContent = document.getElementById("experience3").value || "Duree d'occupation";
    document.getElementById("cv-experience4").textContent = document.getElementById("experience4").value || "Description du poste";


    // formations

    document.getElementById("cv-formation1").textContent = document.getElementById("formation1").value || "diplome obtenu";
    document.getElementById("cv-formation2").textContent = document.getElementById("formation2").value || "Nom de l'etablissement";
    document.getElementById("cv-formation3").textContent = document.getElementById("formation3").value || "Annee d'obtention";

    // Competences
    document.getElementById("cv-competences").textContent = document.getElementById("competences").value || "Compétences";

    // interets
    document.getElementById("cv-interet1").textContent = document.getElementById("interet1").value || "loisir";
    document.getElementById("cv-interet2").textContent = document.getElementById("interet1").value || "passions";

    //  REferences
    document.getElementById("cv-ref1").textContent = document.getElementById("ref1").value || "Nom de la References";
    document.getElementById("cv-ref2").textContent = document.getElementById("ref2").value || "Poste de la reference";
    document.getElementById("cv-ref3").textContent = document.getElementById("ref3").value || "Contact de la reference";

    // langue
    document.getElementById("cv-lan1").textContent = document.getElementById("l1").value || "Langues maîtrisées";
    document.getElementById("cv-lan2").textContent = document.getElementById("l2").value || "Niveau de maîtrise";

    // image

}

function exporterPDF() {
    let element = document.getElementById('cv');
    html2pdf().from(element).save('CV.pdf');
}

// fonction pour image
function addEventListener() {

    document.getElementById("im").addEventListener("change", function (event) {
        let file = event.target.files[0];

        if (file) {
            let reader = new FileReader();
            reader.onload = function (e) {
                let img = document.getElementById("image");
                img.src = e.target.result;
                img.style.display = "block"; // Afficher l'image
            }
            reader.readAsDataURL(file);
        }
    });
}

// function addEventListener() {
//     const d1 = document.getElementById('d1');
//     const d2 = document.getElementById('d2');
//     const d3 = document.getElementById('d3');

//     d2.addEventListener('click', () => {
//         d1.click();
//     });

//     d1.addEventListener('change', (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function (e) {
//                 d3.src = e.target.result;
//             };
//             reader.readAsDataURL(file);
//         }
//     });

// }

