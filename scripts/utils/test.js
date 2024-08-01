               
               
       // 1. Mise en place d'une fonction qui permet de mettre un ecouteur d'evenement sur mes images.        


 function creationEvenementSurImages(adresseMedia,mediaItems){
    // picture media est l'adresse sur laquelle je vais pointer mon fichier json 
    // adresseMedia , dans ce cas de figure est soit pictureMedia , soit videomedia, c'est l'adresse
    const imgMedia = document.createElement('img');
    imgMedia.setAttribute("src", adresseMedia);
    imgMedia.setAttribute("alt", "Photos prises par le photographe"); // Ajoutez un alt pour l'accessibilité        
   
   //========================================= MON ECOUTEUR D'EVENEMENTS SUR IMAGES =================================================================
    // Ajouter l'événement click à l'image
    imgMedia.addEventListener('click', () => {
        //===========================================
        const maLightBox = document.querySelector('.lightBox');
        while (maLightBox.firstChild) {
            maLightBox.removeChild(maLightBox.firstChild);
        }
        
    //===========================================================================
        displayLightBox();
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
            // console.log("j'ai cliqué sur la div chevron fermant");
            // console.log(`Title: ${media.title}`+` Image: ${media.image}`+` Video: ${media.video}`+` Likes: ${media.likes}`+` Date: ${media.date}`+` Price: ${media.price}`);
            // console.log(`Index: ${index}`); // Afficher l'index actuel
            // // index=$(index)+1;
            // console.log(`Nouvel Index: ${index}`); // Afficher l'index actuel
            // indexExterieur=index;

            // console.log(`IndexExterieur = index : ${indexExterieur}`); 

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
    //===================================================== FIN ECOUTEUR EVENEMENT SUR IMAGE OUVRANT LIGHTBOX =======================================
 }
                 
 