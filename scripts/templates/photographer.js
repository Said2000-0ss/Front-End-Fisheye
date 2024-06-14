function photographerTemplate(data) {
    // Ajout des donnees 
    // const { name, portrait } = data;
    const { name,id, city, country, tagline, price ,  portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        //=============================================================================================================================================
        const p = document.createElement( 'p' );
        const p1 = document.createElement( 'p' );
        const p2 = document.createElement( 'p' );
        const p3 = document.createElement( 'p' );
        const p4 = document.createElement( 'p' );
        p.textContent = id;
        p1.textContent=city;
        p2.textContent=country;
        p3.textContent=tagline;
        p4.textContent=price;
        //=============================================================================================================================================
        article.appendChild(img);
        article.appendChild(h2);
        //=============================================================================================================================================
        article.appendChild(p);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(p4);
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