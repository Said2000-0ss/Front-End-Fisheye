function photographerTemplate(data) {
    // Ajout des donnees 
    // const { name, portrait } = data;
    const { name,id, city, country, tagline, price ,  portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        //================================================================================
        const link = document.createElement('a'); // Création de la balise <a> pour le lien
        link.setAttribute('href', `photographer.html?id=${id}`); // URL avec l'id du photographe
        //================================================================================

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        //=============================================================================================================================================
        const villePays= document.createElement('p');
        villePays.textContent = city+", "+country;
        villePays.style.color='#901c1c';
        villePays.setAttribute('aria-label', 'Paragraphe : Ceci est le paragraphe de la ville est du pays');
        // villePays.style.fontWeight='bold';
        const description = document.createElement('p');
        description.textContent=tagline; 
        description.style.color="#000000";
        description.style.fontSize='25px';
        // description.style.fontWeight="bold"; 
        description.setAttribute('aria-label', 'Paragraphe : Ceci est la description de mes passions');
        const prix=document.createElement('p');
        prix.textContent=price+"€/jour"; 
        prix.style.color="#848484"; 
        // prix.style.fontWeight="bold";
        prix.setAttribute('aria-label', 'Paragraphe : Ceci est le prix de mes prestations journalieres');
        
        //=====================================================================================================
   //tu peux effacer , c'est juste à titre d'exemple     
   // ici j'ai mis mon aria-label 
   // Ajoute des attributs aria-label aux paragraphes pour l'accessibilité
//    p1.setAttribute('aria-label', 'Paragraphe stylisé : Ceci est le premier paragraphe');
//    p2.setAttribute('aria-label', 'Paragraphe : Ceci est le deuxième paragraphe');
//    p3.setAttribute('aria-label', 'Paragraphe : Ceci est le troisième paragraphe');
//         p1.style.color = 'blue';  // Change la couleur du texte
// p1.style.fontSize = '20px';  // Change la taille de la police
// p1.style.fontWeight = 'bold';  // Rend le texte en gras
// p1.style.backgroundColor = 'lightyellow';  // Change la couleur de fond
//===================================================================================================
        // const p = document.createElement( 'p' );
        // const p1 = document.createElement( 'p' );
        // const p2 = document.createElement( 'p' );
        // const p3 = document.createElement( 'p' );
        // const p4 = document.createElement( 'p' );
        // p.textContent = id;
        // p1.textContent=city;
        // p2.textContent=country;
        // p3.textContent=tagline;
        // p4.textContent=price;
        //=============================================================================================================================================
        //================================================================================
        link.appendChild(img); // Ajoutez l'image à la balise <a>
        article.appendChild(link); // Ajoutez le lien à l'article
        //================================================================================
        //article.appendChild(img);// j'ai ajouté audessus l'image au lien 
        article.appendChild(h2);
        article.appendChild(villePays);
        article.appendChild(description);
        article.appendChild(prix);
        //=============================================================================================================================================
        // article.appendChild(p);
        // article.appendChild(p1);
        // article.appendChild(p2);
        // article.appendChild(p3);
        // article.appendChild(p4);
        console.log(name + " "+ id + " "+ city+ " "+  country+ " "+  tagline+ " "+  price + " "+ portrait )
        //=============================================================================================================================================
        return (article);
    }
    return { name, picture, getUserCardDOM }
}
//==============================================================================================================================
// function photographerTemplate(data) {
//     // Ajout des donnees 
//     // const { name, portrait } = data;
//     const { name, portrait } = data;

//     const picture = `assets/photographers/${portrait}`;

//     function getUserCardDOM() {
//         const article = document.createElement( 'article' );
//         const img = document.createElement( 'img' );
//         img.setAttribute("src", picture)
//         const h2 = document.createElement( 'h2' );
//         h2.textContent = name;
        
//         article.appendChild(img);
//         article.appendChild(h2);
      
//         return (article);
//     }
//     return { name, picture, getUserCardDOM }
// }