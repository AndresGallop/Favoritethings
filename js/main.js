(()=> {
    console.log('fired!');
  
    let lightbox = document.querySelector(".lightboxes"),
        lbClose = lightbox.querySelector("span"),
        //lbVideo = lightBox.querySelector("video"),
  
        things = document.querySelectorAll(".thing"),
        //houseImages = document.querySelector("#houseImages"),
        thequote = document.querySelector(".quote"),
        thereco = document.querySelector(".recome");
  
  
  
  
    function showHideLightbox() {

        console.log('parcerito');
      setTimeout(function(){lightbox.classList.toggle('show-lightbox');}, 200);
  
      //lbVideo.src = `video/House${this.dataset.vid}.mp4`;
    
  }
  
  
//   function animateBanner() {
  
//     //and also show the house name
//     thequote.textContent = `House ${houseInfo[this.dataset.offset][0]}`;
//     thereco.textContent = `${houseInfo[this.dataset.offset][1]}`;
//     //debugger;
//   }
  
    //things.forEach(sigil => sigil.addEventListener("click", showHideLightbox));
  
//things.forEach(sigil => sigil.addEventListener("click", animateBanner));
    things.forEach(sigil => sigil.addEventListener('click', showHideLightbox));
  
    lbClose.addEventListener("click", showHideLightbox);
    // lbClose.addEventListener("click", again);
  
  })();