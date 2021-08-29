//  img/gallary2/up (1).jpg



  let load = 0

  let int = setInterval(countNum, 30)

  function countNum(){
      load++

      if (load > 18){
          clearInterval(int)
      }

    let mainDiv = document.getElementById("main-album");
    let newDiv = document.createElement("div");
    let newImg = document.createElement("img");

    let myload = `${load}`
        
        newDiv.setAttribute("id", "albumphoto")
        newImg.setAttribute("src", "img/gallary2/up (" + myload + ").jpg");
        newDiv.appendChild(newImg);

        mainDiv.appendChild(newDiv);
}
      
   






      
      

    
    
