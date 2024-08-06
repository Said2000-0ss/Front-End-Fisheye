function photographerTemplate(data) {
    // Ajout des donnees sur la premiere page
    // const { name, portrait } = data;
    const { name,id, city, country, tagline, price ,  portrait } = data;
    const picture = `assets/photographers/${portrait}`;
   
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement('a'); // Création de la balise <a> pour le lien
        link.setAttribute('href', `photographer.html?id=${id}`); // URL avec l'id du photographe
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const villePays= document.createElement('p');
        villePays.id="descriptionVillePays";
        villePays.textContent = city+", "+country;
        villePays.setAttribute('aria-label', 'Paragraphe : Ceci est le paragraphe de la ville est du pays');
        const description = document.createElement('p');
        description.textContent=tagline; 
        description.id="descriptionParagraphe";
        description.setAttribute('aria-label', 'Paragraphe : Ceci est la description de mes passions');
        const prix=document.createElement('p');
        prix.id="descriptionPrix"
        prix.textContent=price+"€/jour"; 
        prix.setAttribute('aria-label', 'Paragraphe : Ceci est le prix de mes prestations journalieres');
        link.appendChild(img); // Ajoutez l'image à la balise <a>
        article.appendChild(link); // Ajoutez le lien à l'article
        article.appendChild(h2);
        article.appendChild(villePays);
        article.appendChild(description);
        article.appendChild(prix);
        console.log(name + " "+ id + " "+ city+ " "+  country+ " "+  tagline+ " "+  price + " "+ portrait )
        //=============================================================================================================================================
        return (article);
    }
    return { name, picture, getUserCardDOM }
    
}

