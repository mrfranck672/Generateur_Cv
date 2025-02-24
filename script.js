function genererCV() {
    document.getElementById("cv-nom").textContent = document.getElementById("nom").value || "Nom";
    document.getElementById("cv-email").textContent = document.getElementById("email").value || "Email";
    document.getElementById("cv-telephone").textContent = document.getElementById("telephone").value || "Téléphone";
    document.getElementById("cv-experience").textContent = document.getElementById("experience").value || "Expérience";
    document.getElementById("cv-competences").textContent = document.getElementById("competences").value || "Compétences";
}

function exporterPDF() {
    let element = document.getElementById('cv');
    html2pdf().from(element).save('CV.pdf');
}
