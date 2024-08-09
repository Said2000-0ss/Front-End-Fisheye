// import { getPhotographers } from "../pages/index.js";
let photographer = {};
let currentIndex = 0;
let mediaItems = [];
// //================================================= function incrementer() =====================================================================
// function incrementer(currentIndex, modificator, photographer) {// modificator=-1 ou +1 (selon si on incrémente ou on décrémente)
//  indexSearch = currentIndex + modificator
//     if (indexSearch >= mediaItems.length) {
//         indexSearch = 0
//     } else if (indexSearch < 0) {
//         indexSearch = mediaItems.length - 1
//     }// const monImage = mediaItems.find((media,index) => index === indexSearch);
//     const monImage = mediaItems[indexSearch]; // console.log("test1")  // console.log(monImage);
//     const elementImg = document.getElementById("imagelightBox");// console.log(`assets/images/Sample Photos/${photographer.name}/` + monImage.image);
//     elementImg.src = `assets/images/Sample Photos/${photographer.name}/` + monImage.image// console.log("je suis le titre : " + monImage.title);
//     const containerTitle = document.getElementById("containerTitle");// console.log(photographer);
//     containerTitle.setAttribute("id", "containerTitle");
//     containerTitle.textContent = "";
//     const h2SousTitle = document.createElement('span');
//     h2SousTitle.textContent = monImage.title;
//     containerTitle.appendChild(h2SousTitle);// console.log(monImage);
//     panneauCentral.appendChild(containerTitle);   // console.log("test2");
// }//================================================= Fin de la function incrementer() =========================================================
function incrementer(currentIndex, modificator, photographer) {
    indexSearch = currentIndex + modificator;
    if (indexSearch >= mediaItems.length) {
        indexSearch = 0;
    } else if (indexSearch < 0) {
        indexSearch = mediaItems.length - 1;
    }

    const monImage = mediaItems[indexSearch];
    const elementMedia = document.getElementById("imagelightBox");

    if (monImage.image) {
        // Si c'est une image
        const newImage = document.createElement('img');
        newImage.setAttribute("src", `assets/images/Sample Photos/${photographer.name}/${monImage.image}`);
        newImage.setAttribute("alt", monImage.title);
        newImage.setAttribute("id", "imagelightBox");
        elementMedia.replaceWith(newImage);
    } else if (monImage.video) {
        // Si c'est une vidéo
        const newVideo = document.createElement('video');
        newVideo.setAttribute("src", `assets/images/Sample Photos/${photographer.name}/${monImage.video}`);
        newVideo.setAttribute("controls", true);
        newVideo.setAttribute("id", "imagelightBox");
        elementMedia.replaceWith(newVideo);
    }

    const containerTitle = document.getElementById("containerTitle");
    containerTitle.textContent = "";
    const h2SousTitle = document.createElement('span');
    h2SousTitle.textContent = monImage.title;
    containerTitle.appendChild(h2SousTitle);
}


//=================================================== Fonction displayMedia ===================================================================
function displayMedia(mediaTri) {
    const maBoxMedia = document.querySelector('.mesMedias');
    maBoxMedia.textContent="";
for (let i = 0; i < mediaTri.length; i++) {
    console.log("je suis mediatri", mediaTri[i]);
    
    const maBoxMedia = document.querySelector('.mesMedias');
    
    const mediaElement = mediaFactory(mediaTri[i]);
    const maSousBoxImgTitle = document.createElement('div');
    maSousBoxImgTitle.id = 'maSousBox';

    const basSousBox = document.createElement('div');
    basSousBox.id = 'basSousBox';
    
    const titleMedia = document.createElement('div');
    titleMedia.textContent = `${mediaTri[i].title}`;
    const likeMedia = document.createElement('div');
    likeMedia.textContent = `${mediaTri[i].likes}`;
    let heartIcon = document.createElement('div');
    heartIcon.id = 'heartIcon';
    heartIcon.className = 'fas fa-heart';

    maSousBoxImgTitle.appendChild(mediaElement);
    basSousBox.appendChild(titleMedia);
    basSousBox.appendChild(likeMedia);
    basSousBox.appendChild(heartIcon);
    maSousBoxImgTitle.appendChild(basSousBox);
    maBoxMedia.appendChild(maSousBoxImgTitle);

    mediaElement.addEventListener('click', () => {
        const maLightBox = document.querySelector('.lightBox');
        while (maLightBox.firstChild) {
            maLightBox.removeChild(maLightBox.firstChild);
        }

        displayLightBox();

        const containerLightbox = document.createElement('div');
        containerLightbox.setAttribute("id", "containerLightbox");
        const panneauDeGauche = document.createElement('div');
        panneauDeGauche.setAttribute("id", "panneauDeGauche");
        let chevronOuvrant = document.createElement('div');
        chevronOuvrant.id = 'chevronOuvrant';
        chevronOuvrant.className = 'fa-solid fa-chevron-left';
        panneauDeGauche.appendChild(chevronOuvrant);

        const panneauCentral = document.createElement('div');
        panneauCentral.setAttribute("id", "panneauCentral");
        const containerImgLightbox = document.createElement('div');
        containerImgLightbox.setAttribute("id", "containerImgLightbox");

        let mediaElementLightbox;

        if (mediaTri[i].image) {
            mediaElementLightbox = document.createElement('img');
            mediaElementLightbox.setAttribute("src", `assets/images/Sample Photos/${photographer.name}/${mediaTri[i].image}`);
            mediaElementLightbox.setAttribute("alt", mediaTri[i].title);
            mediaElementLightbox.setAttribute("id", "imagelightBox");
        } else if (mediaTri[i].video) {
            mediaElementLightbox = document.createElement('video');
            mediaElementLightbox.setAttribute("src", `assets/images/Sample Photos/${photographer.name}/${mediaTri[i].video}`);
            mediaElementLightbox.setAttribute("controls", true);
            mediaElementLightbox.setAttribute("id", "videoMedia"); 
        }

        containerImgLightbox.appendChild(mediaElementLightbox);
        panneauCentral.appendChild(containerImgLightbox);

        const containerTitle = document.createElement('div');
        containerTitle.setAttribute("id", "containerTitle");
        const h2SousTitle = document.createElement('span');
        h2SousTitle.textContent = `${mediaTri[i].title}`;
        containerTitle.appendChild(h2SousTitle);
        panneauCentral.appendChild(containerTitle);

        const panneauDeDroite = document.createElement('div');
        panneauDeDroite.setAttribute("id", "panneauDeDroite");
        let containerCroixDeFermeture = document.createElement('div');
        containerCroixDeFermeture.setAttribute("id", "containerCroixDeFermeture");
        let croixFermeture = document.createElement('div');
        croixFermeture.setAttribute("id", "croixfermeture");
        croixFermeture.className = 'fa-solid fa-square-xmark';
        containerCroixDeFermeture.appendChild(croixFermeture);
        panneauDeDroite.appendChild(containerCroixDeFermeture);
        let containerChevronFermant = document.createElement('div');
        containerChevronFermant.setAttribute("id", "containerChevronFermant");
        let chevronFermant = document.createElement('div');
        chevronFermant.setAttribute("id", "chevronFermant");
        chevronFermant.className = 'fa-solid fa-chevron-right';
        containerChevronFermant.appendChild(chevronFermant);
        panneauDeDroite.appendChild(containerChevronFermant);
        const maBox = document.querySelector('.lightBox');
        containerLightbox.appendChild(panneauDeGauche);
        containerLightbox.appendChild(panneauCentral);
        containerLightbox.appendChild(panneauDeDroite);
        maBox.appendChild(containerLightbox);

        chevronFermant.addEventListener('click', () => {
            handleChevronClick(1);
        });

        chevronOuvrant.addEventListener('click', () => {
            handleChevronClick(-1);
        });

        croixFermeture.addEventListener('click', () => {
            console.log("j'ai cliqué sur la div croix de fermeture et cela a fermé la lightbox");
            closeLightBox();
        });
    });
}

function handleChevronClick(modificator) {
    const srcMedia = document.getElementById("imagelightBox")?.src || document.getElementById("videoMedia")?.src;
    const test = srcMedia.split('/');
    const fileName = test[test.length - 1];
    
    let currentIndex = mediaTri.findIndex((media) => {
        return media.image == fileName || media.video == fileName;
    });

    currentIndex += modificator;
    if (currentIndex >= mediaTri.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = mediaTri.length - 1;
    }

    const newMedia = mediaTri[currentIndex];
    const mediaContainer = document.getElementById("containerImgLightbox");
    mediaContainer.innerHTML = ''; // Efface l'ancien contenu

    let mediaElement;
    if (newMedia.image) {
        mediaElement = document.createElement('img');
        mediaElement.src = `assets/images/Sample Photos/${photographer.name}/${newMedia.image}`;
        mediaElement.id = "imagelightBox";
    } else if (newMedia.video) {
        mediaElement = document.createElement('video');
        mediaElement.src = `assets/images/Sample Photos/${photographer.name}/${newMedia.video}`;
        mediaElement.controls = true;
        mediaElement.id = "videoMedia";
    }

    mediaContainer.appendChild(mediaElement);

    const containerTitle = document.getElementById("containerTitle");
    containerTitle.textContent = "";
    const h2SousTitle = document.createElement('span');
    h2SousTitle.textContent = newMedia.title;
    containerTitle.appendChild(h2SousTitle);
}

    
    
    
    
    
    
    
    
}//=================================================== Fin de la Fonction displayMedia ==========================================================

//============================================== MediaFactory ===================================
// Fonction pour créer les éléments HTML en fonction du type de média
function mediaFactory(media) {
    // Vérifie si l'objet media contient une propriété 'video'
    // console.log("AAAAAAAAAAA")
    // console.log (media)
    if (media.video) {
        // console.log("Ceci est un fichier vidéo.");
        // console.log(media.video)
        const videoElement = document.createElement('video');
        videoElement.src =  `assets/images/Sample Photos/${photographer.name}/${media.video}`;
        videoElement.id = 'myVideoElement';
         // Appliquer les styles CSS pour la taille
        //  videoElement.style.width = '100%';
        //  videoElement.style.height = '250px';
        videoElement.controls = true;
        return videoElement; // Retourne l'élément vidéo
    } else if (media.image) {
        // console.log("Ceci est un fichier image.");
        const imageElement = document.createElement('img');
        imageElement.src =  `assets/images/Sample Photos/${photographer.name}/${media.image}`;
        imageElement.alt = media.title; // Ajouter un attribut alt pour l'accessibilité
        return imageElement; // Retourne l'élément image
    } else {
        // console.log("Format de fichier non pris en charge.");
        const errorElement = document.createElement('div');
        errorElement.textContent = "Format de fichier non pris en charge.";
        return errorElement; // Retourne un élément div pour les formats non pris en charge
    }
}//============================================fin de la mediafactory =============================

//=============================================== FORMULAIRE DE CONTACT ====================================================================================
document.addEventListener('DOMContentLoaded', () => {// Attendre que le DOM soit chargé
   const form = document.getElementById('contactForm'); // Sélectionner le formulaire
form.addEventListener('submit', (event) => {// Ajouter un écouteur d'événement pour la soumission du formulaire
       event.preventDefault(); // Empêcher le comportement par défaut de la soumission du formulaire
       const firstName = document.getElementById('firstName').value; // Récupérer les valeurs des champs
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
});//============================================================ FIN DE FORMULAIRE DE CONTACT ===========================================================

//==================================================== MES FONCTIONS OUVERTURE/FERMETURE MODAL=============================================================
function displayModal() {// Afficher le modal
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}
function closeModal() {// Fermer le modal
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";//  console.log("je viens de fermer la close modal");
}
//==================================================== MES FONCTIONS OUVERTURE/FERMETURE LIGHTBOX =========================================================
function displayLightBox() {//Mes fonctions , afin d'afficher la lightBox
    const modal = document.getElementById("light_box");
    modal.style.display = "block";// console.log("je viens d'ouvrir la light box"); 
}
function closeLightBox() {//Mes fonctions , afin de fermer la lightBox
    const modal = document.getElementById("light_box");
    modal.style.display = "none";
    const maLightBox = document.querySelector('.lightBox');
    while (maLightBox.firstChild) {
        maLightBox.removeChild(maLightBox.firstChild);
    }//console.log("je viens de fermer la lightbox")
}


//=====================================================================================================================================================
// Récupérer les paramètres de l'URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
// console.log("Mon id est le : " + id); // Affiche l'ID récupéré (par exemple, '123')
// console.log("je suis passé par le fichier contactForm.js");

// Fonction pour obtenir les photographes
async function getPhotographers() {
    const response = await fetch("../../data/photographers.json");
    const data = await response.json();
    return data;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=====================================================================================================================================================
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
async function main() {
    // Fonction principale pour traiter les données
    const data = await getPhotographers();
    let totalLikes = 0;

    // Vérifier et afficher les informations du photographe correspondant à l'ID
    photographer = data.photographers.find(photographer => photographer.id == id);
    if (photographer) {
        console.log('================================== INFORMATIONS SUR LE PHOTOGRAPHE ===============================');
        console.log("je suis de passage ici , maintenant il faut que je mette la photo");
        console.log("mon id url " + id + " mon id dans mon tableau " + `${photographer.id}`);
        console.log(`Name: ${photographer.name}` + ` City: ${photographer.city}` + ` Country: ${photographer.country}` + ` Tagline: ${photographer.tagline}` + ` Price: ${photographer.price}` + ` Portrait: ${photographer.portrait}`);
        console.log('=========================== FIN DES INFORMATIONS SUR LE PHOTOGRAPHE ==============================');

        // Création des éléments du photographe
        const maBalise = document.querySelector('.photograph-header');
        const newDivA = document.createElement('div');
        newDivA.classList.add('gridItem');
        const newDivB = document.createElement('div');
        newDivB.classList.add('gridItem');
        const newDivC = document.createElement('div');
        newDivC.classList.add('gridItem');

        // Ajout des textes
        const newDivAA = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.textContent = `${photographer.name}`;
        newDivAA.appendChild(h2);
        newDivAA.classList.add('sousDivDeDivA');
        const villePays = document.createElement('p');
        villePays.textContent = `${photographer.city}, ${photographer.country}`;
        villePays.style.color = '#901c1c';
        villePays.setAttribute('aria-label', 'Paragraphe : Ceci est le paragraphe de la ville et du pays');
        newDivAA.appendChild(villePays);
        const description = document.createElement('p');
        description.textContent = `${photographer.tagline}`;
        description.style.color = "#000000";
        description.style.fontSize = '25px';
        newDivAA.appendChild(description);
        newDivA.appendChild(newDivAA);
        maBalise.appendChild(newDivA);

        // Ajout du bouton contact
        const monBouton = document.querySelector('.contact_button');
        newDivB.appendChild(monBouton);
        maBalise.appendChild(newDivB);

        // Ajout de la photo du photographe
        const picture = `assets/photographers/${photographer.portrait}`;
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", "Photographer's portrait");
        newDivC.appendChild(img);
        maBalise.appendChild(newDivC);

        // Affichage du nom du photographe
        const labelNomPhotographe = document.querySelector('.labelNomPhotographe');
        labelNomPhotographe.textContent = `${photographer.name}`;

    } else {
        console.log(`Photographe avec cet ID ${id} non trouvé.`);
    }

    // Vérifier et afficher les médias correspondant à l'ID du photographe
    mediaItems = data.media.filter(media => media.photographerId == id);
    if (mediaItems.length > 0) {
        mediaItems.forEach((media, index) => {
            const eltMedia = mediaFactory(media);

            // Créer les éléments pour chaque média
            const maSousBoxImgTitle = document.createElement('div');
            maSousBoxImgTitle.id = 'maSousBox';
            const basSousBox = document.createElement('div');
            basSousBox.id = 'basSousBox';

            const titleMedia = document.createElement('div');
            titleMedia.textContent = `${media.title}`;
            const likeMedia = document.createElement('div');
            likeMedia.textContent = `${media.likes}`;
            let heartIcon = document.createElement('div');
            heartIcon.id = 'heartIcon';
            heartIcon.className = 'fas fa-heart';

            maSousBoxImgTitle.appendChild(eltMedia);
            basSousBox.appendChild(titleMedia);
            basSousBox.appendChild(likeMedia);
            basSousBox.appendChild(heartIcon);
            maSousBoxImgTitle.appendChild(basSousBox);

            const maBoxMedia = document.querySelector('.mesMedias');
            maBoxMedia.appendChild(maSousBoxImgTitle);

            // Calculer le total de mes likes
            totalLikes += media.likes;

            // Mise en place de l'encart en bas de page du code HTML de manière dynamique
            const totalLikesElement = document.getElementById('totalLikes');
            const dailyRateElement = document.getElementById('dailyRate');
            totalLikesElement.textContent = totalLikes + " ";
            let heartIconEncart = document.createElement('div');
            heartIconEncart.id = 'heartIconEncart';
            heartIconEncart.className = 'fas fa-heart';
            totalLikesElement.appendChild(heartIconEncart);
            dailyRateElement.textContent = `${photographer.price}€ / jour`;

            // Ajouter l'événement click pour ouvrir la lightbox
            eltMedia.addEventListener('click', () => {
                const maLightBox = document.querySelector('.lightBox');
                while (maLightBox.firstChild) {
                    maLightBox.removeChild(maLightBox.firstChild);
                }

                // Créer les éléments de la lightbox
                const containerLightbox = document.createElement('div');
                containerLightbox.setAttribute("id", "containerLightbox");

                const panneauDeGauche = document.createElement('div');
                panneauDeGauche.setAttribute("id", "panneauDeGauche");
                let chevronOuvrant = document.createElement('div');
                chevronOuvrant.id = 'chevronOuvrant';
                chevronOuvrant.className = 'fa-solid fa-chevron-left';
                panneauDeGauche.appendChild(chevronOuvrant);

                const panneauCentral = document.createElement('div');
                panneauCentral.setAttribute("id", "panneauCentral");
                const containerImgLightbox = document.createElement('div');
                containerImgLightbox.setAttribute("id", "containerImgLightbox");
                const imgMediaLightBox = document.createElement("img");
                imgMediaLightBox.setAttribute("src", eltMedia.src);
                imgMediaLightBox.setAttribute("alt", "Photos prises par le photographe");
                imgMediaLightBox.setAttribute("id", "imagelightBox");
                containerImgLightbox.appendChild(imgMediaLightBox);
                panneauCentral.appendChild(containerImgLightbox);

                const containerTitle = document.createElement('div');
                containerTitle.setAttribute("id", "containerTitle");
                const h2SousTitle = document.createElement('span');
                h2SousTitle.textContent = `${media.title}`;
                containerTitle.appendChild(h2SousTitle);
                panneauCentral.appendChild(containerTitle);

                const panneauDeDroite = document.createElement('div');
                panneauDeDroite.setAttribute("id", "panneauDeDroite");
                let containerCroixDeFermeture = document.createElement('div');
                containerCroixDeFermeture.setAttribute("id", "containerCroixDeFermeture");
                let croixFermeture = document.createElement('div');
                croixFermeture.setAttribute("id", "croixfermeture");
                croixFermeture.className = 'fa-solid fa-square-xmark';
                containerCroixDeFermeture.appendChild(croixFermeture);
                panneauDeDroite.appendChild(containerCroixDeFermeture);
                let containerChevronFermant = document.createElement('div');
                containerChevronFermant.setAttribute("id", "containerChevronFermant");
                let chevronFermant = document.createElement('div');
                chevronFermant.setAttribute("id", "chevronFermant");
                chevronFermant.className = 'fa-solid fa-chevron-right';
                containerChevronFermant.appendChild(chevronFermant);
                panneauDeDroite.appendChild(containerChevronFermant);

                containerLightbox.appendChild(panneauDeGauche);
                containerLightbox.appendChild(panneauCentral);
                containerLightbox.appendChild(panneauDeDroite);
                maLightBox.appendChild(containerLightbox);

                // Fonction pour gérer le changement de média dans la lightbox
                function handleChevronClick(direction) {
                    const imgLightbox = document.getElementById("imagelightBox");
                    if (!imgLightbox) return;

                    const srcImage = imgLightbox.src;
                    const currentIndex = mediaItems.findIndex((media) => {
                        return media.image && srcImage.endsWith(media.image);
                    });

                    if (currentIndex === -1) return;

                    let newIndex = currentIndex + direction;
                    if (newIndex < 0) newIndex = mediaItems.length - 1;
                    if (newIndex >= mediaItems.length) newIndex = 0;

                    const newMedia = mediaItems[newIndex];
                    let newMediaElement;

                    if (newMedia.image) {
                        newMediaElement = document.createElement('img');
                        newMediaElement.setAttribute("src", `assets/images/Sample Photos/${photographer.name}/${newMedia.image}`);
                        newMediaElement.setAttribute("alt", newMedia.title);
                        newMediaElement.setAttribute("id", "imagelightBox");
                    } else if (newMedia.video) {
                        newMediaElement = document.createElement('video');
                        newMediaElement.setAttribute("src", `assets/images/Sample Photos/${photographer.name}/${newMedia.video}`);
                        newMediaElement.setAttribute("controls", true);
                        newMediaElement.setAttribute("id", "videoMedia");
                    }

                    const containerImgLightbox = document.getElementById('containerImgLightbox');
                    containerImgLightbox.innerHTML = '';
                    containerImgLightbox.appendChild(newMediaElement);
                }

                document.getElementById('chevronOuvrant').addEventListener('click', () => handleChevronClick(-1));
                document.getElementById('chevronFermant').addEventListener('click', () => handleChevronClick(1));

                const croixFermetureElement = document.getElementById('croixfermeture');
                croixFermetureElement.addEventListener('click', () => {
                    maLightBox.style.display = 'none';
                });

                // Afficher la lightbox
                //maLightBox.style.display = 'flex';
                displayLightBox();
            });
        });
    } else {
        console.log(`Aucun média trouvé pour le photographe avec l'ID ${id}.`);
    }
}

//***************************************************************************************************************************************************** 


// ============================================================ CODE POUR LE CARROUSSEL DU SELECT ====================================================
document.addEventListener('DOMContentLoaded', () => {

    // let mediaTri = media;
    const selectElement = document.getElementById('order-by');

    selectElement.addEventListener('change', (event) => {
        let mediaTri = mediaItems;
        console.log("mediaitems" + mediaItems);
        console.log("mediaTri" + mediaTri);
        const selectedValue = event.target.value;
        // console.log(`Selected order: ${selectedValue}`);
        // Vous pouvez ajouter ici votre logique de tri en fonction de selectedValue
        if (selectedValue === "date") { 
            mediaTri.sort((a, b) => new Date(b.date) - new Date(a.date));
            displayMedia(mediaTri);
        }
        if (selectedValue === "popularity") {
            mediaTri.sort((a, b) => b.likes - a.likes);
            displayMedia(mediaTri);
        }
        if (selectedValue === "title") {
            mediaTri.sort((a, b) => a.title.localeCompare(b.title));
            displayMedia(mediaTri);
      
        }

    });
});

main();// Exécuter la fonction principale

//============================================================== ACCESIBILITE/VISUALISATION ===============================================================
        // Gérer la fermeture de la lightbox avec la touche Échap
        // croixFermeture.addEventListener('keydown', (e) => {
        //     console.log("je viens d'appuyer sur la touche echap etape 1");
        //     if (e.key === 'Escape') {
        //         console.log("je viens d'appuyer sur la touche echap etape 2");
        //         closeLightBox();
        //         console.log("je viens d'appuyer sur la touche echap etape 3");
        //     }
        //     console.log("je viens d'appuyer sur la touche echap etape 4");
        // });

 //=======================================================================================================================================================
 /* 
DOMContentLoaded : Attendre que le DOM soit complètement chargé avant d'exécuter le script.
selectElement : Sélectionne l'élément <select> par son identifiant.
change : Ajoute un écouteur d'événement pour l'événement change, qui est déclenché lorsque 
l'utilisateur sélectionne une nouvelle option.
selectedValue : Récupère la valeur de l'option sélectionnée et l'affiche dans la console.
Vous pouvez remplacer la ligne de console.log par votre propre logique pour trier les éléments en fonction de la sélection de l'utilisateur.
*/
 //=======================================================================================================================================================
