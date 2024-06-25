// // import { getPhotographers } from "../pages/index.js";


// Afficher le modal
function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

// Fermer le modal
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

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

    // Vérifier et afficher les informations du photographe correspondant à l'ID
    const photographer = data.photographers.find(photographer => photographer.id == id);
    if (photographer) {
        // console.log(`Name: ${photographer.name}`);
        // console.log(`City: ${photographer.city}`);
        // console.log(`Country: ${photographer.country}`);
        // console.log(`Tagline: ${photographer.tagline}`);
        // console.log(`Price: ${photographer.price}`);
        // console.log(`Portrait: ${photographer.portrait}`);
        console.log("je suis de passage ici , maintenant il faut que je mette la photo");
        console.log("mon id url "+id +" mon id dans mon tableau " +  `${photographer.id}`);
        console.log(`Name: ${photographer.name}`+ ` City: ${photographer.city}`+` Country: ${photographer.country}`+` Tagline: ${photographer.tagline}`+` Price: ${photographer.price}`+ ` Portrait: ${photographer.portrait}`);
        //c'est le lien de ma photo qu'il faut que je mette dans un src
        //=======================================================je viens d'ajouter ce code============================================================
        const picture = `assets/photographers/${photographer.portrait}`;
        console.log(picture);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", "Photographer's portrait"); // Ajoutez un alt pour l'accessibilité
        const maBalise = document.querySelector('.photograph-header');
        maBalise.appendChild(img); // Ajoutez l'image à la balise <a> //a verifier et voir si cela fonctionne apres la pause
        //=============================================================================================================================================
        const h2 = document.createElement( 'h2' );
        h2.textContent = `${photographer.name}`;
        maBalise.appendChild(h2);
        const villePays= document.createElement('p');
        // villePays.textContent = city+", "+country;
        villePays.textContent = `${photographer.city}`+", "+`${photographer.country}`;
        villePays.style.color='#901c1c';
        villePays.setAttribute('aria-label', 'Paragraphe : Ceci est le paragraphe de la ville est du pays');
        maBalise.appendChild(villePays);

        const description = document.createElement('p');
        description.textContent=`${photographer.tagline}`; 
        description.style.color="#000000";
        description.style.fontSize='25px';
        maBalise.appendChild(description);

    } else {
        console.log(`Photographe avec cet ID ${id} non trouvé.`);
    }

    // Vérifier et afficher les médias correspondant à l'ID du photographe
    const mediaItems = data.media.filter(media => media.photographerId == id);
    if (mediaItems.length > 0) {
        mediaItems.forEach(media => {
            // console.log(`Title: ${media.title}`);
            // console.log(`Image: ${media.image}`);
            // console.log(`Video: ${media.video}`);
            // console.log(`Likes: ${media.likes}`);
            // console.log(`Date: ${media.date}`);
            // console.log(`Price: ${media.price}`);
            console.log(`Title: ${media.title}`+` Image: ${media.image}`+` Video: ${media.video}`+` Likes: ${media.likes}`+` Date: ${media.date}`+` Price: ${media.price}`);
        });
    } else {
        console.log(`Pas de media trouvé pour le photographe avec cet id ${id}.`);
    }
}

// Exécuter la fonction principale
main();


