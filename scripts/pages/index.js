// import photographers from '../../data/photographers.json'  assert { type: "json" }// j'importe mon fichier json
// const { default: photographers } = await import("../../data/photographers.json", { assert: { type: "json" } })
// const photographers = require('../../data/photographers.json');
//======================================== LES ATTENDUS PEDAGOGIQUES D'OPENCLASSROOM : ===========================================================        
 /* Dans scripts/pages/index.js vous allez :
1- Ajouter fetch dans la fonction getPhotographers pour récupérer vos datas, et faire un console.log de ces datas
2- Retourner les datas
3- Modifier `scripts/templates/photographer.js` pour récupérer les données nécessaires (id, tagline, city, etc.)
Ici, vous pouvez utiliser l'API native de JavaScript Fetch afin de récupérer des données.*/
//================================================================================================================================================
// j'ai rajouté le mot clé export devant cette fonction , afin qu'elle soit exportable dans un autre fichier.
//    export  async function getPhotographers() {
   async function getPhotographers() {
//================================================================ MON CODE ======================================================================
const reponse = await fetch("../../data/photographers.json");
const photographers = await reponse.json();
console.log(photographers); 
// return photographers; 

//================================================================================================================================================
return photographers; 
        // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
        // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
        // let photographers = [
        //     {
        //         "name": "Ma data test",
        //         "id": 1,
        //         "city": "Paris",
        //         "country": "France",
        //         "tagline": "Ceci est ma data test",
        //         "price": 400,
        //         "portrait": "account.png"
        //     },
        //     {
        //         "name": "Autre data test",
        //         "id": 2,
        //         "city": "Londres",
        //         "country": "UK",
        //         "tagline": "Ceci est ma data test 2",
        //         "price": 500,
        //         "portrait": "account.png"
        //     },
        // ]
        // // et bien retourner le tableau photographers seulement une fois récupéré
        // return ({
        //     photographers: [...photographers, ...photographers, ...photographers]})
    }
//==============================================================================================================================
// Appel de la fonction pour vérifier qu'elle fonctionne correctement
// getPhotographers();
//==============================================================================================================================
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    
