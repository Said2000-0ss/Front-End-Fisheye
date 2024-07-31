const maBoxMedia = document.querySelector('.mesMedias');
const maSousBoxImgTitle = document.createElement(`div`);
maSousBoxImgTitle.id = 'maSousBox';
//je cree une div qui va englober mes 3 div
const basSousBox = document.createElement('div');
basSousBox.id = 'basSousBox';
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
    console.log("je suis : " + pictureMedia);
    // Vous pouvez ajouter ici la logique pour afficher une fenêtre modale ou une action spécifique
    displayLightBox();
    // si je clique , j'appelle ma lightbox, et dedans je glisse une variable avec l'img, et un tableau qui permet de l'utiliser comme 
    //un caroussel, previous and next, avec deux ecouteurs d'evenement sur chevron ouvrant et chevron fermant, qui permet de parcourir le tableau
    //faire en sorte que la lightboxsoit affiché au-dessus de la page
    // ici je vais passer 
    // malightBox est la div principale : je vais mettre dedans 3 div: une div panneaudeGauche, une div panneauCentral, une div panneau de droite.
    // je cree un div conteneur dans lequel je vais mettre les différentes div, div panneau de gauche, div central et div panneau de droite
    //========================================================== DIV CONTAINER ========================================================================
    const containerLightbox = document.createElement('div');
    containerLightbox.setAttribute("id", "containerLightbox");
    //==========================================================PANNEAU DE GAUCHE =====================================================================
    const panneauDeGauche = document.createElement('div');
    panneauDeGauche.setAttribute("id", "panneauDeGauche");
    let chevronOuvrant = document.createElement('div');
    chevronOuvrant.id = 'chevronOuvrant';
    chevronOuvrant.className = 'fa-solid fa-chevron-left';
    // chevronOuvrant.addEventListener('click', () => {
    //     console.log("j'ai cliqué sur le chevron de gauche");
    // });
    panneauDeGauche.appendChild(chevronOuvrant)
    //========================================================= PANNEAU CENTRAL =======================================================================
    const panneauCentral = document.createElement('div');
    panneauCentral.setAttribute("id", "panneauCentral");
    const containerImgLightbox = document.createElement('div');
    containerImgLightbox.setAttribute("id", "containerImgLightbox");

    const imgMediaLightBox = document.createElement("img");
    imgMediaLightBox.setAttribute("src", pictureMedia);
    imgMediaLightBox.setAttribute("alt", "Photos prises par le photographe"); // Ajoutez un alt pour l'accessibilité
    imgMediaLightBox.setAttribute("id", "imagelightBox");
    // const maLightBox = document.querySelector('.lightBox');
    containerImgLightbox.appendChild(imgMediaLightBox);
    panneauCentral.appendChild(containerImgLightbox);
    console.log("une photo a du etre mise dans la lightbox")
    const containerTitle = document.createElement('div');
    containerTitle.setAttribute("id", "containerTitle");
    const h2SousTitle = document.createElement('span');
    h2SousTitle.textContent = `${media.title}`;
    containerTitle.appendChild(h2SousTitle);

    panneauCentral.appendChild(containerTitle);
    //======================================================== PANNEAU DE DROITE ======================================================================        
    const panneauDeDroite = document.createElement('div');
    panneauDeDroite.setAttribute("id", "panneauDeDroite");
    let containerCroixDeFermeture = document.createElement('div');
    containerCroixDeFermeture.setAttribute("id", "containerCroixDeFermeture");
    let croixFermeture = document.createElement('div');
    croixFermeture.setAttribute("id", "croixfermeture");
    // croixFermeture.id = 'croixFermeture';
    croixFermeture.className = 'fa-solid fa-square-xmark';
    containerCroixDeFermeture.appendChild(croixFermeture);
    panneauDeDroite.appendChild(containerCroixDeFermeture);
    let containerChevronFermant = document.createElement('div');
    containerChevronFermant.setAttribute("id", "containerChevronFermant");
    let chevronFermant = document.createElement('div');
    // chevronFermant.id = 'chevronFermant';
    chevronFermant.setAttribute("id", "chevronFermant");
    chevronFermant.className = 'fa-solid fa-chevron-right';
    containerChevronFermant.appendChild(chevronFermant);
    panneauDeDroite.appendChild(containerChevronFermant);
    //======================================================== MISE EN LIEN DES DIV A LA LIGHT BOX ====================================================
    const maBox = document.querySelector('.lightBox');
    containerLightbox.appendChild(panneauDeGauche);
    containerLightbox.appendChild(panneauCentral);
    containerLightbox.appendChild(panneauDeDroite);
    maBox.appendChild(containerLightbox);
    //======================================================= Mise en place des ecouteurs d'evenements sur les chevrons ==================================
    //===================================================== CHEVRON FERMANT ==============================================================================
    chevronFermant.addEventListener('click', () => {
   

        const srcImage = document.getElementById("imagelightBox").src;
        console.log(srcImage);
        const test = srcImage.split('/');
        const fileName = test[test.length - 1]
        index = mediaItems.findIndex((media) => {
            console.log(media.image, fileName, media)
            return media.image == fileName
        });
        console.log(index);


        incrementer(index, 1, photographer);

        // Exemple d'utilisation : afficher les données du média à l'indexExterieur donné
        //  const indexExterieur = 2; // test en dur 
        // afficherMediaParIndex(indexExterieur);
        // indexExterieur=0; 
        // console.log(`IndexExterieur remis à Zéro : ${indexExterieur}`); 
        console.log("je suis la phase de test , je suis bien passé par là");
        console.log(media.image, fileName, media)
        console.log("ici je vais mettre le titre de la photo et voir si ça passe");
    });
    //===================================================== FIN CHEVRON FERMANT ==============================================================================            


    //===================================================== CHEVRON OUVRANT ==================================================================================              
    chevronOuvrant.addEventListener('click', () => {
        // console.log("j'ai cliqué sur la div chevron ouvrant");
        const srcImage = document.getElementById("imagelightBox").src;
        console.log(srcImage);
        const test = srcImage.split('/');
        const fileName = test[test.length - 1]
        index = mediaItems.findIndex((media) => {
            console.log(media.image, fileName, media)
            return media.image == fileName
        });
        console.log(index);
        incrementer(index, -1, photographer);

    });

    croixFermeture.addEventListener('click', () => {
        console.log("j'ai cliqué sur la div croix de fermeture et cela a fermé la lightbox");
        closeLightBox();
    });
});
//===================================================== FIN CHEVRON OUVRANT =============================================================================  

//================================================================================================================================================
//   JE METS ICI LE CODE QUI VA ME PERMETTRE D'INCREMENTER ET DE DECREMENTER       
//================================================================================================================================================


//================================================================================================================================================       
//================================================================================================================================================  

const titleMedia = document.createElement('div');
titleMedia.textContent = `${media.title}`;
const likeMedia = document.createElement('div');
likeMedia.textContent = `${media.likes}`;
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
totalLikes += media.likes;
//=====================================================================================================================================================
// Mise en place de l'encart en bas de page du code html, de maniére dynamique.
const totalLikesElement = document.getElementById('totalLikes');
const dailyRateElement = document.getElementById('dailyRate');
totalLikesElement.textContent = totalLikes + " ";
//Rajouter un font asewhome coeur 
let heartIconEncart = document.createElement('div');
heartIconEncart.id = 'heartIconEncart';
heartIconEncart.className = 'fas fa-heart';
totalLikesElement.appendChild(heartIconEncart);
//dailyRateElement.textContent = "300€/jour"; 
dailyRateElement.textContent = `${photographer.price}€ / jour`;
//=====================================================================================================================================================
