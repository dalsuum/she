
  let photoRow = 5
  let load = 0
  let loading = 5
  let total = 20

  let int = setInterval(countNum, 30)

  function countNum(){  
    if(photoRow == 5 ) {
        load++ 
       
        if( load == loading) { 
          photoRow = 0 
          loading +=5  
        }    
        createAlbum()
      } 
  }

  function createAlbum(){
      
    let mainDiv = document.getElementById("main-album")
    let newDiv = document.createElement("div")
    let newImg = document.createElement("img")
    let showmorebtn = document.getElementById("addalbum")
    let showlessbtn = document.getElementById("lessalbum")
    let myload = `${load}`

    if ( myload < total) {
        newDiv.setAttribute("id", "albumphoto")
        newImg.setAttribute("id", "myimg");
        newImg.setAttribute("src", "img/gallary2/up (" + myload + ").jpg");
        newDiv.appendChild(newImg)
        mainDiv.appendChild(newDiv)
      } else {
        showmorebtn.style.display = "none"
        showlessbtn.style.display = "block"
      }
    }   

    function addAlbum() {
     
      photoRow = 5
      int = setInterval(countNum, 30)
     
    }
    // let myint = setInterval(lessAlbum, 30)
    function lessAlbum() {
      if(load > 0 ) {
        load-- 
        }    
        removeAlbum()}
     
    
      function removeAlbum(){
        let mainDiv = document.getElementById("main-album")
        let multiDiv = document.getElementById("albumphoto")
        let showmorebtn = document.getElementById("addalbum")
        let showlessbtn = document.getElementById("lessalbum")
       
        if  (mainDiv.childElementCount > 5) {
        
          mainDiv.removeChild(mainDiv.lastChild);
          mainDiv.removeChild(mainDiv.lastChild);
          mainDiv.removeChild(mainDiv.lastChild);
          mainDiv.removeChild(mainDiv.lastChild);
          
      
          }else{ 
            
            showmorebtn.style.display = "block"
            showlessbtn.style.display = "none"
           
           
            }
        }   

function catMore() {
  let albumYears = ["2010 Album", "2020 Album", "2021 Album"]
  let ul = document.getElementById("catUL")

        albumYears.forEach(albumYear => {
        let li = document.createElement("li")
        li.textContent = albumYear
        ul.appendChild(li)
      })

   
}
       

document.getElementById("myImg")


    
     


    







      
      

    
    
