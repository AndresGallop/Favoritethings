import { fetchData } from "./modules/DataMiner.js";

(() => {

    // let useras = document.querySelector(".user"); 

    console.log('loaded');

    let lightbox = document.querySelector(".lightboxes"),
        lacosa = document.querySelectorAll(".thing"),
        lbClose = lightbox.querySelector("span");

    // this receives the data payload from our AJAX request, parses it (turns the returned JSON object back into a plain JavaScript object) and renders the data to our view (the markup in index.html)
    //  function handleDataSet(thumbs) {
            
    //  }

    

    function retrieveProjectInfo(event){
        //test for an ID
        // check for an id, and if there isn't one, then don't try the fetch call
        // because it will break (the PHP will choke)
        if (!event.target.id) {return}
    
      //let userPieces = event.target.parentElement.children;

        //fetchData(`./includes/index.php?id=${event.target.id}`).then(data => showHideLightbox(data, userPieces)).catch(err => console.log(err));
        fetchData('./includes/index.php').then(data => showHideLightbox(data)).catch(err => console.log(err));
     }

     function showHideLightbox() {

        //let info = document.querySelector('.lightbox').content;

        console.log('parcerito');
      setTimeout(function(){lightbox.classList.toggle('show-lightboxes');}, 200);


      
    
  }

    

    function renderPortfolioThumbnails(thumbs) {
        let  userSection = document.querySelector('.things-section');
        let userTemplate = document.querySelector('#things-template').content;
        //let template = document.querySelector('#user-template').children;
            

       
        for (let thing in thumbs) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.thing').children,
               
                peques = document.querySelector('.lightbox').children;

                peques[1].innerHTML = thumbs[thing].Quote;
                peques[2].src = `images/${thumbs[thing].Img}`;
                peques[3].innerHTML = thumbs[thing].Recommendation; 
                peques[1].id = thumbs[thing].id;
                
                

            

            currentUserText[0].innerHTML = thumbs[thing].Thing; 
            currentUserText[1].src = `images/${thumbs[thing].Img}`; 
            currentUserText[1].id = thumbs[thing].id;  // Esta mierda es para obtener los datos (se ven en la consola), no se ven en la pantalla.





             

        
            // add this new user to the view
            userSection.appendChild(currentUser);
        }

        userSection.addEventListener("click", retrieveProjectInfo);    

    }

    

    fetchData('./includes/index.php').then(data => renderPortfolioThumbnails(data)).catch(err => console.log(err));

    lacosa.forEach(sigil => sigil.addEventListener("click", showHideLightbox));
  
    lbClose.addEventListener("click", showHideLightbox);

})();