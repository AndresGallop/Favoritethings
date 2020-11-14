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
    
      let userPieces = event.target.parentElement.children;

        fetchData(`./includes/index.php?id=${event.target.id}`).then(data => showHideLightbox(data, userPieces)).catch(err => console.log(err));
     }

     function showHideLightbox() {

        

        console.log('parcerito');
      setTimeout(function(){lightbox.classList.toggle('show-lightboxes');}, 200);
      
    
  }

    

    function renderPortfolioThumbnails(thumbs) {
        let  userSection = document.querySelector('.things-section');
        let userTemplate = document.querySelector('#things-template').content;
        let lacosa = document.querySelectorAll(".thing");
        //let template = document.querySelector('#user-template').children;
            

       
        for (let thing in thumbs) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.thing').children;

            

            currentUserText[0].innerHTML = thumbs[thing].Thing; 
            currentUserText[1].src = `images/${thumbs[thing].Img}`; 
            currentUserText[1].id = thumbs[thing].id;  // Esta mierda es para obtener los datos (se ven en la consola), no se ven en la pantalla.
           //    lacosa.style.background = `images/${thumbs[thing].Img}`;




             

        
            // add this new user to the view
            userSection.appendChild(currentUser);
        }

        userSection.addEventListener("click", retrieveProjectInfo);    

    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // function renderLightBoxinfo(datos) {
    //     let  userSection = document.querySelector('.things-section');
    //     let userTemplate = document.querySelector('#things-template').content;
    //     let lacosa = document.querySelectorAll(".thing");
    //     //let template = document.querySelector('#user-template').children;
            

       
    //     for (let pedazos in datos) {
    //         let currentUser = userTemplate.cloneNode(true),
    //             currentUserText = currentUser.querySelector('.thing').children;

            

    //         currentUserText[0].innerHTML = datos[pedazos].Thing; 
    //         currentUserText[1].src = `images/${datos[pedazos].Img}`; 
    //         currentUserText[1].id = datos[pedazos].id;  // Esta mierda es para obtener los datos (se ven en la consola), no se ven en la pantalla.
    //        //    lacosa.style.background = `images/${thumbs[thing].Img}`;

           


             

        
    //         // add this new user to the view
    //         userSection.appendChild(currentUser);
    //     }

    //     userSection.addEventListener("click", retrieveProjectInfo);    

    // }

    // function showtext(person, elements) {
    //     // debugger;

    //     elements[2].innerHTML = person[0].name;  
    //     elements[3].innerHTML = person[0].nickname;
    //     elements[4].innerHTML = person[0].role;

    //     elements[2].classList.toggle('show-name');
    //     elements[3].classList.toggle('show-nickname');  // TREVOR - I need to find out how to indicate JS that I want this function
    //     elements[4].classList.toggle('show-role');      // to happen in the selected user. I tried ${this} but did not work.
    // }
    // function showtext(){

    //     let name = document.querySelector(".user-name"),
    //         nickname = document.querySelector(".user-nickname"),
    //         role = document.querySelector(".user-role");
            

    //     name.classList.toggle('show-name');
    //     nickname.classList.toggle('show-nickname');
    //     role.classList.toggle('show-role');
    // }

    // useras.addEventListener("click", showtext);

    

    fetchData('./includes/index.php').then(data => renderPortfolioThumbnails(data)).catch(err => console.log(err));

    //fetchData('./includes/index.php').then(data => renderLightBoxinfo(data)).catch(err => console.log(err));

    lacosa.forEach(sigil => sigil.addEventListener("click", showHideLightbox));
  
    lbClose.addEventListener("click", showHideLightbox);

})();