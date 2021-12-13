const prev = document.getElementById('gallery_prev');
const next = document.getElementById('gallery_next');
const images = document.querySelectorAll('.images img');
const eventElement = document.querySelector('#event_name')
const allImages = images.length - 1;
let currentImage = images.length - 1;

const nextImage = function (images) {
    if(currentImage > 0){
        images[currentImage].style.display = "none";
        currentImage--;
        
        let eventName = images[currentImage].attributes[0].nodeValue;
        setEventName(eventName); 
    }
      
}

const prevImage = function (images) {
    if(allImages >= currentImage){
        images[currentImage].style.display = "block";
        if(currentImage < allImages){
            currentImage++;

            let eventName = images[currentImage].attributes[0].nodeValue;
            setEventName(eventName); 
        }
    }
      
}

next.addEventListener('click', function () {
    nextImage(images);
})

prev.addEventListener('click', function () {
    prevImage(images);
})


const setEventName = (eventName) => {
    eventElement.innerHTML = eventName;
}