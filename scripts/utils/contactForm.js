// // import { getPhotographers } from "../pages/index.js";

//============================================== MON ECOUTEURS D'EVENEMENT SUR LE FORMULAIRE DE TRI ========================================================
document.addEventListener("DOMContentLoaded", function() {
    // Accéder à l'élément select
    const orderBySelect = document.getElementById('order-by');

    // Écouter l'événement de changement
    orderBySelect.addEventListener('change', function(event) {
        // Obtenir la valeur sélectionnée
        const selectedValue = event.target.value;
        
        // Afficher la valeur sélectionnée dans la console
        console.log('Vous avez sélectionné :', selectedValue);
        
        // Effectuer une action en fonction de la valeur sélectionnée
        if (selectedValue === 'popularity') {
            // Code pour trier par popularité
            console.log('Tri par popularité');
        } else if (selectedValue === 'date') {
            // Code pour trier par date
            console.log('Tri par date');
        } else if (selectedValue === 'title') {
            // Code pour trier par titre
            console.log('Tri par titre');
        }
    });
});

//=========================================================== CODE DE MA MODAL CONTACT ===================================================================
// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner le formulaire
    const form = document.getElementById('contactForm');

    // Ajouter un écouteur d'événement pour la soumission du formulaire
    form.addEventListener('submit', (event) => {
        // Empêcher le comportement par défaut de la soumission du formulaire
        event.preventDefault();

        // Récupérer les valeurs des champs
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Afficher les valeurs dans la console
        console.log('================================== INFORMATIONS DE MA CONSOLE LOG ================================')
        console.log('Prénom:', firstName);
        console.log('Nom:', lastName);
        console.log('Email:', email);
        console.log('Message:', message);
        console.log('============================= FIN DES INFORMATIONS DE MA CONSOLE LOG =============================')
        closeModal();
    });
});
//==================================================== MES FONCTIONS OUVERTURE/FERMETURE MODAL=============================================================

// Afficher le modal
function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}
// Fermer le modal
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    console.log("je viens de fermer la close modal"); 
}
//==================================================== MES FONCTIONS OUVERTURE/FERMETURE LIGHTBOX =========================================================
//Mes fonctions , afin d'afficher la lightBox
function displayLightBox() {
    const modal = document.getElementById("light_box");
    modal.style.display = "block";
    console.log("je viens d'ouvrir la light box"); 
}

function closeLightBox() {
    const modal = document.getElementById("light_box");
    modal.style.display = "none";
    const maLightBox = document.querySelector('.lightBox');
    while (maLightBox.firstChild) {
        maLightBox.removeChild(maLightBox.firstChild);
        }
    console.log("je viens de fermer la lightbox")
}
//====================== ECOUTEUR D'EVENEMENT SUR LA LIGHTBOX ======================================
const lighBox= document.getElementById("light_box");
lighBox.addEventListener('click', () => {
    console.log("je suis : "+ lighBox);
    // Vous pouvez ajouter ici la logique pour afficher une fenêtre modale ou une action spécifique
    closeLightBox();
});
//========================================================================================================================================================
// Récupérer les paramètres de l'URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log("Mon id est le : "+id); // Affiche l'ID récupéré (par exemple, '123')
// console.log("je suis passé par le fichier contactForm.js");

// Fonction pour obtenir les photographes
async function getPhotographers() {
    const response = await fetch("../../data/photographers.json");
    const data = await response.json();
    return data;
}
//====A effacer , une fois utilisé========================
// const { name,id, city, country, tagline, price ,  portrait } = data;
// const picture = `assets/photographers/${portrait}`;
//========================================================
// Fonction principale pour traiter les données
async function main() {
    const data = await getPhotographers();
    let totalLikes= 0;
    // Vérifier et afficher les informations du photographe correspondant à l'ID
    const photographer = data.photographers.find(photographer => photographer.id == id);
    if (photographer) {
        console.log('================================== INFORMATIONS SUR LE PHOTOGRAPHE ===============================');
        console.log("je suis de passage ici , maintenant il faut que je mette la photo");
        console.log("mon id url "+id +" mon id dans mon tableau " +  `${photographer.id}`);
        console.log(`Name: ${photographer.name}`+ ` City: ${photographer.city}`+` Country: ${photographer.country}`+` Tagline: ${photographer.tagline}`+` Price: ${photographer.price}`+ ` Portrait: ${photographer.portrait}`);
        console.log('=========================== FIN DES INFORMATIONS SUR LE PHOTOGRAPHE ==============================');
        //c'est le lien de ma photo qu'il faut que je mette dans un src
        //=======================================================je viens d'ajouter ce code============================================================
        const maBalise = document.querySelector('.photograph-header');
        // Création de mes 3 div avec le nom de classe .griditem **************************************************************************************
        const newDivA=document.createElement('div');
        newDivA.classList.add('gridItem');
        const newDivB=document.createElement('div');
        newDivB.classList.add('gridItem');
        const newDivC=document.createElement('div');
        newDivC.classList.add('gridItem');
        //*********************************************************************************************************************************************
  
        //=============================================================================================================================================
       
        //********************************************* MES TEXTES ***********************************************************************************
        const newDivAA=document.createElement('div');
        // newDivAA.classList.add('gridItem');
        const h2 = document.createElement( 'h2' );
        h2.textContent = `${photographer.name}`;
        newDivAA.appendChild(h2);
        newDivAA.classList.add('sousDivDeDivA');
        const villePays= document.createElement('p');
        villePays.textContent = `${photographer.city}`+", "+`${photographer.country}`;
        villePays.style.color='#901c1c';
        villePays.setAttribute('aria-label', 'Paragraphe : Ceci est le paragraphe de la ville est du pays');
        newDivAA.appendChild(villePays);
        const description = document.createElement('p');
        description.textContent=`${photographer.tagline}`; 
        description.style.color="#000000";
        description.style.fontSize='25px';
        newDivAA.appendChild(description);
        newDivA.appendChild(newDivAA);
        maBalise.appendChild(newDivA);
        //********************************************* MON BOUTON ***********************************************************************************
        const monBouton = document.querySelector('.contact_button');
        newDivB.appendChild(monBouton);
        maBalise.appendChild(newDivB);
        //********************************************* MON IMAGE ************************************************************************************
        const picture = `assets/photographers/${photographer.portrait}`;
        console.log(picture);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", "Photographer's portrait"); // Ajoutez un alt pour l'accessibilité
        newDivC.appendChild(img);
        maBalise.appendChild(newDivC); 
        //****************************************************************************************************************************************** */
        const labelNomPhotographe= document.querySelector('.labelNomPhotographe'); 
        labelNomPhotographe.textContent=`${photographer.name}`;// voir avec Marie , pourquoi cela se centre au milieu, je l'ai mis dans un label , 
        //pratique peu recommandable
        // const h2A = document.createElement( 'h2' );
        // h2A.textContent = `${photographer.name}`;
        // const said= document.querySelector('.said'); 
        // said.appendChild(h2A);

    } else {
        console.log(`Photographe avec cet ID ${id} non trouvé.`);
    }

    // Vérifier et afficher les médias correspondant à l'ID du photographe
    const mediaItems = data.media.filter(media => media.photographerId == id);
    if (mediaItems.length > 0) {
        mediaItems.forEach(media => {
            console.log(`Title: ${media.title}`+` Image: ${media.image}`+` Video: ${media.video}`+` Likes: ${media.likes}`+` Date: ${media.date}`+` Price: ${media.price}`);
            
        //====================================== mon code crée pour afficher mes productions médiatiques================
        let pictureMedia = "";
        const test = media.image;
       
        if (test === undefined || test === "") {
          
            console.log("================================== MON IMAGE EST PAS DEFINIE =====================================");
        } else {
            
            const maBoxMedia = document.querySelector('.mesMedias');
            pictureMedia = `assets/images/Sample Photos/${photographer.name}/${media.image}`;
            //=============================================================================================================
            // pictureMedia.addEventListener('click', () => {
            //     // // afficherModalMedia(item);
            //     // console.log("je suis une image clickable , je suis : ")
            //     // console.log(pictureMedia); 
            // });
            //=============================================================================================================
            const maSousBoxImgTitle= document.createElement(`div`);
            maSousBoxImgTitle.id='maSousBox';
            //je cree une div qui va englober mes 3 div
            const basSousBox=document.createElement('div');
            basSousBox.id='basSousBox';
            console.log(pictureMedia);
            const imgMedia = document.createElement('img');
            imgMedia.setAttribute("src", pictureMedia);
            imgMedia.setAttribute("alt", "Photos prises par le photographe"); // Ajoutez un alt pour l'accessibilité
 //========================================= MON ECOUTEUR D'EVENEMENTS SUR IMAGES =================================================================
               // Ajouter l'événement click à l'image
            imgMedia.addEventListener('click', () => {
                //===========================================
                const maLightBox = document.querySelector('.lightBox');
                while (maLightBox.firstChild) {
                    maLightBox.removeChild(maLightBox.firstChild);
                    }
                //===========================================
            console.log("je suis : "+ pictureMedia);
            // Vous pouvez ajouter ici la logique pour afficher une fenêtre modale ou une action spécifique
            displayLightBox();
            // si je clique , j'appelle ma lightbox, et dedans je glisse une variable avec l'img, et un tableau qui permet de l'utiliser comme 
            //un caroussel, previous and next, avec deux ecouteurs d'evenement sur chevron ouvrant et chevron fermant, qui permet de parcourir le tableau
            //faire en sorte que la lightboxsoit affiché au-dessus de la page
            // ici je vais passer 
            // malightBox est la div principale : je vais mettre dedans 3 div: une div panneaudeGauche, une div panneauCentral, une div panneau de droite.
            //==========================================================PANNEAU DE GAUCHE =====================================================================
            const panneauDeGauche=document.createElement('div');
            panneauDeGauche.setAttribute("id", "panneauDeGauche");
             let chevronOuvrant = document.createElement('div');
             chevronOuvrant.id = 'chevronOuvrant';
            chevronOuvrant.className = 'fa-solid fa-chevron-left';
            panneauDeGauche.appendChild(chevronOuvrant)
            //========================================================= PANNEAU CENTRAL =======================================================================
            const panneauCentral=document.createElement('div');
            panneauCentral.setAttribute("id", "panneauCentral");
            const imgMediaLightBox=document.createElement("img");
            imgMediaLightBox.setAttribute("src", pictureMedia);
            imgMediaLightBox.setAttribute("alt", "Photos prises par le photographe"); // Ajoutez un alt pour l'accessibilité
            imgMediaLightBox.setAttribute("id", "imagelightBox");
            // const maLightBox = document.querySelector('.lightBox');
            panneauCentral.appendChild(imgMediaLightBox);
            console.log("une photo a du etre mise dans la lightbox")
            const h2SousTitle = document.createElement( 'span' );
            h2SousTitle.textContent = `${media.title}`;
            panneauCentral.appendChild(h2SousTitle);
            //======================================================== PANNEAU DE DROITE ======================================================================        
            const panneauDeDroite=document.createElement('div');
            panneauDeDroite.setAttribute("id", "panneauDeDroite");
            let croixFermeture = document.createElement('div');
            croixFermeture.setAttribute("id", "croixfermeture");
            // croixFermeture.id = 'croixFermeture';
            croixFermeture.className = 'fa-solid fa-square-xmark';
            panneauDeDroite.appendChild(croixFermeture)
            let chevronFermant = document.createElement('div');
            // chevronFermant.id = 'chevronFermant';
            chevronFermant.setAttribute("id", "chevronFermant");
            chevronFermant.className = 'fa-solid fa-chevron-right';
            panneauDeDroite.appendChild(chevronFermant); 
           //======================================================== MISE EN LIEN DES DIV A LA LIGHT BOX ====================================================
           const maBox = document.querySelector('.lightBox');
           maBox.appendChild(panneauDeGauche);
           maBox.appendChild(panneauCentral);
           maBox.appendChild(panneauDeDroite);
           

        });
 //================================================================================================================================================           
      
            const titleMedia = document.createElement('div');
            titleMedia.textContent=`${media.title}`; 
            const likeMedia = document.createElement('div');
            likeMedia.textContent=`${media.likes}`; 
            // je mets ici mon coeur
            let heartIcon = document.createElement('div');
            heartIcon.id = 'heartIcon';
            heartIcon.className = 'fas fa-heart';
            maSousBoxImgTitle.appendChild(imgMedia);
            basSousBox.appendChild(titleMedia);
            basSousBox.appendChild(likeMedia);
            basSousBox.appendChild(heartIcon);
            maSousBoxImgTitle.appendChild(basSousBox);
            maBoxMedia.appendChild(maSousBoxImgTitle);
            console.log(heartIcon);
           // calculer le total de mes likes
            totalLikes +=media.likes;
 //=====================================================================================================================================================
// Mise en place de l'encart en bas de page du code html, de maniére dynamique.
const totalLikesElement = document.getElementById('totalLikes');
const dailyRateElement = document.getElementById('dailyRate');
totalLikesElement.textContent =totalLikes+" "; 
//Rajouter un font asewhome coeur 
let heartIconEncart = document.createElement('div');
heartIconEncart.id = 'heartIconEncart';
heartIconEncart.className = 'fas fa-heart';
totalLikesElement.appendChild(heartIconEncart);
//dailyRateElement.textContent = "300€/jour"; 
dailyRateElement.textContent = `${photographer.price}€ / jour`;
//=====================================================================================================================================================

        }
        
        // const imgMedia = document.createElement('img');
        // imgMedia.setAttribute("src", pictureMedia);
        // imgMedia.setAttribute("alt", "Photos prises par le photographe"); // Ajoutez un alt pour l'accessibilité
        // const saidTest = document.querySelector('.mesMedias');
        // saidTest.appendChild(imgMedia);
        //============================================================================================================
        });
    } else {
        console.log(`Pas de media trouvé pour le photographe avec cet id ${id}.`);
    }
    console.log("Mon total de like : "+totalLikes+ ` Price: ${photographer.price} euros`);
}
//***************************************************************************************************************************************************** 
/* // CODE POUR LE CARROUSSEL DU SELECT 
  document.addEventListener('DOMContentLoaded', () => {
            const selectElement = document.getElementById('order-by');

            selectElement.addEventListener('change', (event) => {
                const selectedValue = event.target.value;
                console.log(`Selected order: ${selectedValue}`);
                // Vous pouvez ajouter ici votre logique de tri en fonction de selectedValue
            });
        });

        /* 
DOMContentLoaded : Attendre que le DOM soit complètement chargé avant d'exécuter le script.
selectElement : Sélectionne l'élément <select> par son identifiant.
change : Ajoute un écouteur d'événement pour l'événement change, qui est déclenché lorsque 
l'utilisateur sélectionne une nouvelle option.
selectedValue : Récupère la valeur de l'option sélectionnée et l'affiche dans la console.
 Vous pouvez remplacer la ligne de console.log par votre propre logique pour trier les éléments en fonction de la sélection de l'utilisateur.
        */
//*****************************************************************************************************************************************************

// Exécuter la fonction principale
main();
