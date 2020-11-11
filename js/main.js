import { fetchData } from "./modules/DataMiner.js";

(()=> {

    console.log('loaded');
  
    let lightbox = document.querySelector(".lightboxes"),
        lbClose = lightbox.querySelector("span"),
        //lbVideo = lightBox.querySelector("video"),
  
        things = document.querySelectorAll(".thing"),
        //houseImages = document.querySelector("#houseImages"),
        thequote = document.querySelector(".quote"),
        thereco = document.querySelector(".recome");
  
  
  
        function retrieveProjectInfo(event){
            //test for an ID
            // check for an id, and if there isn't one, then don't try the fetch call
            // because it will break (the PHP will choke)
            if (!event.target.id) {return}
    
            fetchData(`./includes/index.php?id=${event.target.id}`).then(data => console.log(data)).catch(err => console.log(err));
        }
  
    function showHideLightbox() {

        console.log('parcerito');
      setTimeout(function(){lightbox.classList.toggle('show-lightbox');}, 200);
    
  }

  function renderPortfolioThumbnails(thumbs) {
    let  thingsSection = document.querySelector('.things-section');
    let thingTemplate = document.querySelector('#things-template').content;
    //let template = document.querySelector('.thingy').children;
        

   
    for (let thing in thumbs) {
        let currentThing = thingTemplate.cloneNode(true),
            currentThingText = currentThing.querySelector('.thing').children;
            let usuario = document.querySelectorAll(".thing");

            

        currentThingText[1].src = `images/${thumbs[thing].avatar}`; 
        currentThingText[1].id = thumbs[thing].id;  // Esta mierda es para obtener los datos (se ven en la consola), no se ven en la pantalla.

        currentThingText[1].innerHTML = `${thumbs[thing].Thing}`;
        currentThingText[3].innerHTML = `${thumbs[thing].nickname}`;
        currentThingText[4].innerHTML = `${thumbs[thing].role}`;

        //  function showtext(){
                
        //     currentThingText[2].classList.toggle('show-name');
        //      currentThingText[3].classList.toggle('show-nickname');  // TREVOR - I need to find out how to indicate JS that I want this function
        //     currentThingText[4].classList.toggle('show-role');      // to happen in the selected user. I tried ${this} but did not work.
        //  }
        //     usuario.forEach(useri =>useri.addEventListener("click", showtext)); 

    
        // add this new user to the view
        thingsSection.appendChild(currentThing);
    }

    thingsSection.addEventListener("click", retrieveProjectInfo);   
      

}
  
    fetchData('./includes/index.php').then(data => renderPortfolioThumbnails(data)).catch(err => console.log(err));  

    things.forEach(sigil => sigil.addEventListener('click', showHideLightbox));
  
    lbClose.addEventListener("click", showHideLightbox);
  
  })();