// import { getPhotographers } from "../pages/index.js";

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
//==================================================================================
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id); // Affiche l'ID récupéré (par exemple, '123')
console.log("je suis passé par le fichier contactForm.js")
//==================================================================================
// ==============je vais afficher ici mes différents id et autres propriétés
/// je teste ce code pour voir si il fonctionne ====================================
// Vérifier si l'objet photographe a été trouvé
//=========================================================================================================================
async function getPhotographers() {
    //================================================================ MON CODE ======================================================================
    const reponse = await fetch("../../data/photographers.json");
    const photographers = await reponse.json();
    console.log(photographers); 
    // return photographers; 
    
    //================================================================================================================================================
    return photographers; }
if (id !== null) {
    // Faire quelque chose si id est différent de null
    
    console.log("L'ID n'est pas null : " + id);
    const said = getPhotographers();
    console.log(said);
    // data.id=id;
    // console.log(data.id +"je suis")
    // console.log(`Name: ${data.name}`);
    // console.log(`City: ${photographer.city}`);
//     const reponse = fetch("../../data/photographers.json");
// const photographers = await reponse.json();
// console.log(photographers); 
console.log("test")
} else {
    // Faire quelque chose si id est null
    console.log("L'ID est null.");
}
// getPhotographers(); 
// const reponse = await fetch("../../data/photographers.json");
// const photographers = await reponse.json();
// console.log(photographers); 
// console.log("je passe avant");
// const said = getPhotographers();
// console.log(said);
// console.log("je passe apres");
// if (id) {
//     // Afficher les propriétés dans la console
//     console.log(`Name: ${data.name}`);
//     console.log(`City: ${photographer.city}`);
//     console.log(`Country: ${photographer.country}`);
//     console.log(`Tagline: ${photographer.tagline}`);
//     console.log(`Price: ${photographer.price}`);
//     console.log(`Portrait: ${photographer.portrait}`);
// } else {
//     console.log(`Photographer with ID ${id} not found.`);
// }