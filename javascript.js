
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
            // console.log("this is smallload",load)
            // console.log("This is loading", loading)
            clearInterval(int)
          }    
        createAlbum() 
        // console.log("This is main photoRow",photoRow)
      } 
      // console.log("This is main load", load)
  }
  function createAlbum(){
    let mainDiv = document.getElementById("main-album")
    let newDiv = document.createElement("div")
    let newA = document.createElement("a")
    let newImg = document.createElement("img")
    let showmorebtn = document.getElementById("addalbum")
    let showlessbtn = document.getElementById("lessalbum")
    let myload = `${load}`
    if ( myload < total) {
      
        newDiv.setAttribute("id", "albumphoto")
        newImg.setAttribute("id", "myimg");
        newImg.setAttribute("src", "img/gallary2/up (" + myload + ").jpg");
        newA.setAttribute("href", "img/gallary2/up (" + myload + ").jpg");
        newA.appendChild(newImg)
        newDiv.appendChild(newA)
        mainDiv.appendChild(newDiv)

        
      } else {
        showmorebtn.style.display = "none"
        showlessbtn.style.display = "block"
      }
    }   

    function addAlbum() {
      // console.log("This is addAlbum phrow",photoRow)
      photoRow = 5
          
      clearInterval(int)
      int = setInterval(countNum, 30)
      // console.log("This is addAlbum load", load)
    }
   
   
    function lessAlbum() {
   
      let mainDiv = document.getElementById("main-album")
      let multiDiv = document.getElementById("albumphoto")
      let showmorebtn = document.getElementById("addalbum")
      let showlessbtn = document.getElementById("lessalbum")
      
      if  (mainDiv.childElementCount > 5) {
          
       
        mainDiv.removeChild(mainDiv.lastChild);
        mainDiv.removeChild(mainDiv.lastChild);
        mainDiv.removeChild(mainDiv.lastChild);
        // mainDiv.removeChild(mainDiv.lastChild);
        // mainDiv.removeChild(mainDiv.lastChild);
        // load = 0
        // console.log("This is child load", load)
        clearInterval(int)
        //  console.log("This is ChildCount",mainDiv.childElementCount)
      
      }else{
          load = 4
          loading = 5

          showmorebtn.style.display = "block"
          showlessbtn.style.display = "none"
          // console.log("This is else load",load)
          // console.log("This is else loading",loading)
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
       




    
     


    







      
      

    
    
