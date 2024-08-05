document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('order-by');

    selectElement.addEventListener('change', (event) => {
        const sortBy = event.target.value;
        sortMedia(sortBy);
    });

    function sortMedia(criteria) {
        const media = [
            { id: 342550, photographerId: 82, title: "Fashion Yellow Beach", image: "Fashion_Yellow_Beach.jpg", likes: 62, date: "2011-12-08", price: 55 },
            { id: 8520927, photographerId: 82, title: "Fashion Urban Jungle", image: "Fashion_Urban_Jungle.jpg", likes: 11, date: "2011-11-06", price: 55 },
            { id: 9025895, photographerId: 82, title: "Fashion Pattern on a Pattern", image: "Fashion_Pattern_on_Pattern.jpg", likes: 72, date: "2013-08-12", price: 55 },
            { id: 9275938, photographerId: 82, title: "Wedding Gazebo", image: "Event_WeddingGazebo.jpg", likes: 69, date: "2018-02-22", price: 55 },
            { id: 2053494, photographerId: 82, title: "Sparkles", image: "Event_Sparklers.jpg", likes: 2, date: "2020-05-25", price: 55 },
            { id: 7324238, photographerId: 82, title: "18th Anniversary", image: "Event_18thAnniversary.jpg", likes: 33, date: "2019-06-12", price: 55 },
            { id: 8328953, photographerId: 82, title: "Wooden sculpture of a horse", video: "Art_Wooden_Horse_Sculpture.mp4", likes: 24, date: "2011-12-08", price: 100 },
            { id: 7502053, photographerId: 82, title: "Triangle Man", image: "Art_Triangle_Man.jpg", likes: 88, date: "2007-05-07", price: 55 },
            { id: 8523492, photographerId: 82, title: "Purple Tunnel", image: "Art_Purple_light.jpg", likes: 24, date: "2018-05-05", price: 55 },
            { id: 75902334, photographerId: 82, title: "Art Mine", image: "Art_Mine.jpg", likes: 75, date: "2019-11-25", price: 55 },
            { id: 73852953, photographerId: 925, title: "8 Rows", image: "Sport_2000_with_8.jpg", likes: 52, date: "2013-02-30", price: 70 },
            { id: 92758372, photographerId: 925, title: "Fashion Wings", image: "Fashion_Wings.jpg", likes: 58, date: "2018-07-17", price: 70 },
            { id: 32958383, photographerId: 925, title: "Melody Red on Stripes", image: "Fashion_Melody_Red_on_Stripes.jpg", likes: 11, date: "2019-08-12", price: 70 },
            { id: 928587383, photographerId: 925, title: "Venture Conference", image: "Event_VentureConference.jpg", likes: 2, date: "2019-01-02", price: 70 },
            { id: 725639493, photographerId: 925, title: "Product Pitch", image: "Event_ProductPitch.jpg", likes: 3, date: "2019-05-20", price: 70 },
            { id: 23394384, photographerId: 925, title: "Musical Festival Keyboard", image: "Event_KeyboardCheck.jpg", likes: 52, date: "2019-07-18", price: 70 },
            { id: 87367293, photographerId: 925, title: "Musical Festival Singer", image: "Event_Emcee.jpg", likes: 23, date: "2018-02-22", price: 70 },
            { id: 593834784, photographerId: 925, title: "Animal Majesty", image: "Animals_Majesty.jpg", likes: 52, date: "2017-03-13", price: 70 },
            { id: 83958935, photographerId: 925, title: "Cute puppy on sunset", video: "Animals_Puppiness.mp4", likes: 52, date: "2016-06-12", price: 70 },
            { id: 394583434, photographerId: 527, title: "Rocky mountains from the air", video: "Travel_Rock_Mountains.mp4", likes: 23, date: "2017-03-18", price: 45 },
            { id: 343423425, photographerId: 527, title: "Outdoor Baths", image: "Travel_Outdoor_Baths.jpg", likes: 101, date: "2017-04-03", price: 45 },
            { id: 73434243, photographerId: 527, title: "Road into the Hill", image: "Travel_Road_into_Hill.jpg", likes: 99, date: "2018-04-30", price: 45 },
            { id: 23425523, photographerId: 527, title: "Bridge into the Forest", image: "Travel_Bridge_into_Forest.jpg", likes: 34, date: "2016-04-05", price: 45 },
            { id: 23134513, photographerId: 527, title: "Boat Wonderer", image: "Travel_Boat_Wanderer.jpg", likes: 23, date: "2017-03-18", price: 45 },
            { id: 92352352, photographerId: 527, title: "Portrait Sunkiss", image: "Portrait_Sunkissed.jpg", likes: 66, date: "2018-05-24", price: 45 },
            { id: 34513453, photographerId: 527, title: "Shaw Potrait", image: "Portrait_Shaw.jpg", likes: 52, date: "2017-04-21", price: 45 },
            { id: 23523533, photographerId: 527, title: "Alexandra", image: "Portrait_Alexandra.jpg", likes: 95, date: "2018-11-02", price: 45 },
            { id: 525834234, photographerId: 527, title: "Afternoon Break", image: "Portrait_AfternoonBreak.jpg", likes: 25, date: "2019-01-02", price: 45 },
            { id: 623534343, photographerId: 243, title: "Lonesome", image: "Travel_Lonesome.jpg", likes: 88, date: "2019-02-03", price: 45 },
            { id: 625025343, photographerId: 243, title: "Hillside Color", image: "Travel_HillsideColor.jpg", likes: 85, date: "2019-04-03", price: 45 },
            { id: 2525345343, photographerId: 243, title: "Wednesday Potrait", image: "Portrait_Wednesday.jpg", likes: 34, date: "2019-04-07", price: 45 },
            { id: 2523434634, photographerId: 243, title: "Nora Portrait", image: "Portrait_Nora.jpg", likes: 63, date: "2019-04-07", price: 45 },
            { id: 398847109, photographerId: 243, title: "Raw Black Portrait", image: "Portrait_Background.jpg", likes: 55, date: "2019-06-20", price: 45 },
            { id: 2534342, photographerId: 243, title: "Seaside Wedding", image: "Event_SeasideWedding.jpg", likes: 25, date: "2019-06-21", price: 45 },
            { id: 23552543, photographerId: 243, title: "Boulder Wildlife", image: "Animals_Boulder.jpg", likes: 65, date: "2019-06-25", price: 45 },
            { id: 52452953, photographerId: 243, title: "Cute Puppy on a blue blanket", image: "Animals_Kitten_1.jpg", likes: 52, date: "2019-07-17", price: 45 },
            { id: 95234343, photographerId: 243, title: "Cute Kittens cuddling", image: "Animals_Kitten_2.jpg", likes: 52, date: "2019-07-17", price: 45 },
            { id: 5234343, photographerId: 243, title: "White kitten with green eyes", image: "Animals_Kitten_3.jpg", likes: 52, date: "2019-07-17", price: 45 },
            { id: 9523432, photographerId: 243, title: "Puppy and the Light", image: "Animals_Puppy.jpg", likes: 52, date: "2019-07-17", price: 45 }
        ];

        if (criteria === 'popularity') {
            media.sort((a, b) => b.likes - a.likes);
        } else if (criteria === 'date') {
            media.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (criteria === 'title') {
            media.sort((a, b) => a.title.localeCompare(b.title));
        }

        console.log(`Sorted by ${criteria}:`, media);
    }

    // Initial sort by popularity
    sortMedia('popularity');
});

//============================================== MON ECOUTEURS D'EVENEMENT SUR LE FORMULAIRE DE TRI ========================================================
// document.addEventListener("DOMContentLoaded", function() {
//     // Accéder à l'élément select
//     const orderBySelect = document.getElementById('order-by');

//     // Écouter l'événement de changement
//     orderBySelect.addEventListener('change', function(event) {
//         // Obtenir la valeur sélectionnée
//         const selectedValue = event.target.value;

//         // Afficher la valeur sélectionnée dans la console
//         console.log('Vous avez sélectionné :', selectedValue);

//         // Effectuer une action en fonction de la valeur sélectionnée
//         if (selectedValue === 'popularity') {
//             // Code pour trier par popularité
//             console.log('Tri par popularité');
//         } else if (selectedValue === 'date') {
//             // Code pour trier par date
//             console.log('Tri par date');
//         } else if (selectedValue === 'title') {
//             // Code pour trier par titre
//             console.log('Tri par titre');
//         }
//     });
// });

//=========================================================== CODE DE MA MODAL CONTACT ===================================================================