console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function(){

    //function to fetch dog
    function displayDogs(){

        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
        fetch(imgUrl)
        .then(res => res.json())
        .then(data =>renderImages(data.message))

    }

    function renderImages(images){
        
        const renderDiv= document.getElementById("dog-image-container");
        const imagesContainer = document.getElementById("dog-images");

        images.forEach(imageUrl =>{
            
        const listDogs = document.createElement("li");
        listDogs.innerHTML=`<img src=${imageUrl}>`;
        imagesContainer.appendChild(listDogs);
    })


       
        renderDiv.appendChild(imagesContainer);
    }

    displayDogs();
});
