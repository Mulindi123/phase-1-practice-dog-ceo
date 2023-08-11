console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function(){

    //function to fetch dog
    function displayDogs(){

        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
        fetch(imgUrl)
        .then(res => res.json())
        .then(data =>renderImages(data.message))
        .catch(error=> console.log(error))

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

    // function to fetch dog breeds
function dogBreeds (){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(res =>res.json())
    .then(data => renderBreeds(data.message))
    .catch(error=>console.log(error))

}

// render breeds on the web page
function renderBreeds(breeds){
    const breedUl= document.getElementById("dog-breeds");
         breedDiv.appendChild(breedUl)
   for(const breed in breeds){
   
    const breedLi= document.createElement("li")
      breedLi.textContent = breed;


        // Add click event listener to breedLi
        breedLi.addEventListener("click", ()=>{
            console.log("Clicked")
            breedLi.style.color= "yellow";
         })

        breedUl.appendChild(breedLi);

    }
    

}
const breedDiv = document.createElement("div");
    document.body.append(breedDiv);
    
  function filterBreeds(letters) {
        const breedList = breedDiv.querySelector("#dog-breeds");
        const breeds = breedList.querySelectorAll("li");

        breeds.forEach(breed => {
            if (breed.textContent.startsWith(letters)) {
                breed.style.display = "block"; // Show matching breeds
            } else {
                breed.style.display = "none"; // Hide non-matching breeds
            }
        });
    }

    const breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener("change", function(event) {
        const letters = event.target.value;
        filterBreeds(letters);
    });

    dogBreeds()

});

