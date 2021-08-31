  


  for ( let i = 1 ; i <6; i ++ ) {
    let mainDiv = document.getElementById("main-album")
    let newDiv = document.createElement("div")
    let newA = document.createElement("a")
    let newImg = document.createElement("img")
    //console.log("This is for loop", i)
    myload = `${i}`;
    newDiv.setAttribute("id", "album-item")
    newImg.setAttribute("id", "album-photo");
    //console.log("this is my load jpg", myload)
    newImg.setAttribute("src", "img/gallary2/up (" + myload + ").jpg");
    newA.setAttribute("href", "img/gallary2/up (" + myload + ").jpg");
    newA.setAttribute("target", "_blank");
    newA.appendChild(newImg)
    newDiv.appendChild(newA)
    mainDiv.appendChild(newDiv)

  }
  let photoRow = 5
  let load = 5
  let loading = 10
  let total = 21

  let int = setInterval(countNum, 30)
  clearInterval(int)

  let photoRow1 = false
  function addAlbum() {
    // console.log("This is addAlbum phrow",photoRow)
    photoRow1 = true
    clearInterval(int)
    int = setInterval(countNum, 30)
    //console.log("This is addAlbum load", load)
  }

  
  function countNum(){  

    if(photoRow1 == true) {
        load += 1
          if( load == loading) { 
            //console.log("this is smallload",load)
            photoRow = 0 
            loading += 4  
            
            //console.log("This is loading", loading)
            clearInterval(int)
          }    
        createAlbum() 
        //console.log("This is main photoRow",photoRow)
      } 
      //console.log("This is main load", load)
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
           
        newDiv.setAttribute("id", "album-item")
        newImg.setAttribute("id", "album-photo");
        //console.log("this is my load jpg", myload)
        newImg.setAttribute("src", "img/gallary2/up (" + myload + ").jpg");
        newA.setAttribute("href", "img/gallary2/up (" + myload + ").jpg");
        newA.setAttribute("target", "_blank");
        newA.appendChild(newImg)
        newDiv.appendChild(newA)
        mainDiv.appendChild(newDiv)
      } else {
        showmorebtn.style.display = "none"
        showlessbtn.style.display = "block"
      }
    }   
  function lessAlbum() {
      let mainDiv = document.getElementById("main-album")
      let multiDiv = document.getElementById("album-item")
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
        //clearInterval(int)
       
        //console.log("This is MainDivChildCount",mainDiv.childElementCount)
      
      }else{
          showlessbtn.style.display = "none"
          showmorebtn.style.display = "block"
          
          load = 5
          loading = 10
           //console.log("This is else load",load)
           //console.log("This is else loading",loading)
          //  mainDiv.removeChild(mainDiv.lastChild);
          //  mainDiv.removeChild(mainDiv.lastChild);
          //  mainDiv.removeChild(mainDiv.lastChild);
          //  mainDiv.removeChild(mainDiv.lastChild);
          //  mainDiv.removeChild(mainDiv.lastChild);
        }  
      }

// sider block
let disableBtn = true
let catBtn1 = document.getElementById("catBtn1")
let catBtn2 = document.getElementById("catBtn2")
let albumYears = ["2017 Album", "2016 Album", "2015 Album"]

//console.log("This is array", albumYears)
let ul = document.getElementById("catUL")

 function catMore() {
      if (disableBtn){
    //    console.log("This is array", albumYears)
        albumYears.forEach(albumYear => {
         let li = document.createElement("li")
         li.textContent = albumYear
         ul.appendChild(li)
        })
       disableBtn = false
     } else {
      catBtn1.style.display = "none"
      catBtn2.style.display = "block"
     }
}

 function catLess() {
     catArrayTotal = albumYears.length  
    
    // console.log("This is ArrayTotal", catArrayTotal) 
    //console.log("This is ul ChildElementCount", ul.childElementCount)
     if (ul.childElementCount > 5 ) { 
  
         ul.removeChild(ul.lastChild)
     } else {

         catBtn1.style.display = "block"
         catBtn2.style.display = "none"
         disableBtn = true
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
       




    
     


    







      
      

    
    
