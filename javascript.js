
  let photoRow = 5
  let load = 0
  let loading = 5
  let total = 21

  let int = setInterval(countNum, 30)

  function countNum(){  
    if(photoRow = 5) {
        load += 1
          if( load == loading) { 
            //console.log("this is smallload",load)
            photoRow = 0 
            loading += 5  
            
            //console.log("This is loading", loading)
            clearInterval(int)
          }    
        createAlbum() 
        //console.log("This is main photoRow",photoRow)
      } 
      console.log("This is main load", load)
  }
  function createAlbum(){
    let mainDiv = document.getElementById("main-album")
    let newDiv = document.createElement("div")
    let newA = document.createElement("a")
    let newImg = document.createElement("img")
    let showmorebtn = document.getElementById("addalbum")
    let showlessbtn = document.getElementById("lessalbum")
    let myload = `${load}`

    //console.log("this is my load", myload)
    //console.log("this is total", total)
    if ( myload <= total) {
      
        newDiv.setAttribute("id", "albumphoto")
        newImg.setAttribute("id", "myimg");
        //console.log("this is my load jpg", myload)
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
      
      if  (mainDiv.childElementCount > 5 ) {
          
       
        mainDiv.removeChild(mainDiv.lastChild);
        mainDiv.removeChild(mainDiv.lastChild);
        mainDiv.removeChild(mainDiv.lastChild);
        mainDiv.removeChild(mainDiv.lastChild);
        //mainDiv.removeChild(mainDiv.lastChild);
        // mainDiv.removeChild(mainDiv.lastChild);
        // load = 0
        // console.log("This is child load", load)
        clearInterval(int)
         if (mainDiv.childElementCount == 5) {
        // showmorebtn.style.display = "block"
        // showlessbtn.style.display = "none"
          int = setInterval(countNum, 30)
         
         }
          console.log("This is ChildCount",mainDiv.childElementCount)
      
      }else{
          showlessbtn.style.display = "none"
          showmorebtn.style.display = "block"
          
          load = 0
          loading = 5
           //console.log("This is else load",load)
           //console.log("This is else loading",loading)
           mainDiv.removeChild(mainDiv.lastChild);
           mainDiv.removeChild(mainDiv.lastChild);
           mainDiv.removeChild(mainDiv.lastChild);
           mainDiv.removeChild(mainDiv.lastChild);
           mainDiv.removeChild(mainDiv.lastChild);
          
        }  
      }

// sider block
let disableBtn = true
function catMore() {
      if (disableBtn) {
  let albumYears = ["2017 Album", "2016 Album", "2015 Album"]
  let ul = document.getElementById("catUL")
        albumYears.forEach(albumYear => {
        let li = document.createElement("li")
        li.textContent = albumYear
        ul.appendChild(li)
      })
      disableBtn = false
    }
}

// Main Biography

let bioPar1 = document.getElementById("bio1")
let bioPar2 = document.getElementById("bio2")
let bioPar3 = document.getElementById("bio3")
let bioBtn1 = document.getElementById("bioBtn1")
let bioBtn2 = document.getElementById("bioBtn2")

function bioMore() {
 
    bioPar2.style.display = "block";
    bioPar3.style.display = "none";
    bioBtn1.style.display = "block";
    bioBtn2.style.display = "none";

    bioPar2.style.display = "block";
    bioPar3.style.display = "block";
    bioBtn1.style.display = "none";
    bioBtn2.style.display = "block";
  }

function bioLess() {
  
  bioPar2.style.display = "none";
  bioPar3.style.display = "none";
  bioBtn1.style.display = "block";
  bioBtn2.style.display = "none";

}
       




    
     


    







      
      

    
    
