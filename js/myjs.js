
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}







function shop(){
  var a=1;
  if(a==1){
    document.getElementById("shoping").style.transform="translatey(250px)";
    a=2;
  }
   
}

function closeto(){
  var a=1;
  if(a==1){
    document.getElementById("shoping").style.transform="translatey(0)";
    a=2;
  }
   
}




var bannnerstatus=1;
var bannertimer=4000;

window.onload=function(){
  nextto();
}
 var stattbanerloop=setInterval(function(){
  nextto();
 }, bannertimer);

 document.getElementById("slider_contant").onmouseenter= function(){
    clearInterval(stattbanerloop);
 }

 document.getElementById("slider_contant").onmouseleave= function(){
  stattbanerloop=setInterval(function(){
    nextto();
   }, bannertimer);
}
document.getElementById("next").onclick= function(){
  nextto ();
}

document.getElementById("prav").onclick= function(){
  if (bannnerstatus==1) {
    bannnerstatus=2;
  }else if(bannnerstatus==2){
    bannnerstatus=3;
  }else if(bannnerstatus==3){
    bannnerstatus=1;
  }
  nextto ();
}


function nextto () {

  if (bannnerstatus==1) {
    document.getElementById("slid_image2").style.opacity="0";

    setTimeout(function()  {
    document.getElementById("slid_image1").style.right="0px";
    document.getElementById("slid_image1").style.zIndex="1000"; 
    document.getElementById("slid_image2").style.right="-100%";
    document.getElementById("slid_image2").style.zIndex="1500";
    document.getElementById("slid_image3").style.right="1200px";
    document.getElementById("slid_image3").style.zIndex="500"; 
    }, 500);

    setTimeout(function()  {
      document.getElementById("slid_image2").style.opacity="1";
      }, 1500);
      bannnerstatus=2;

  }else if (bannnerstatus==2) {
    document.getElementById("slid_image3").style.opacity="0";
    setTimeout(function()  {
    document.getElementById("slid_image2").style.right="0px";
    document.getElementById("slid_image2").style.zIndex="1000"; 
    document.getElementById("slid_image3").style.right="-100%";
    document.getElementById("slid_image3").style.zIndex="1500";
    document.getElementById("slid_image1").style.right="1200px";
    document.getElementById("slid_image1").style.zIndex="500";
     }, 500);


     setTimeout(function()  {
      document.getElementById("slid_image3").style.opacity="1";
      }, 1500);
      bannnerstatus=3;

  }else if (bannnerstatus==3) {
    
  
  document.getElementById("slid_image1").style.opacity="0";
  setTimeout(function()  {
  document.getElementById("slid_image3").style.right="0px";
  document.getElementById("slid_image3").style.zIndex="1000"; 
  document.getElementById("slid_image1").style.right="-100%";
  document.getElementById("slid_image1").style.zIndex="1500";
  document.getElementById("slid_image2").style.right="1200px";
  document.getElementById("slid_image2").style.zIndex="500";
   }, 500);


   setTimeout(function()  {
    document.getElementById("slid_image1").style.opacity="1";
    }, 1500);
    bannnerstatus=1;
   }

}

function prav () {

  if (bannnerstatus==1) {
    document.getElementById("slid_image2").style.opacity="0";

    setTimeout(function()  {
    document.getElementById("slid_image1").style.right="0px";
    document.getElementById("slid_image1").style.zIndex="1000"; 
    document.getElementById("slid_image2").style.right="-100%";
    document.getElementById("slid_image2").style.zIndex="1500";
    document.getElementById("slid_image3").style.right="1200px";
    document.getElementById("slid_image3").style.zIndex="500"; 
    }, 500);

    setTimeout(function()  {
      document.getElementById("slid_image2").style.opacity="1";
      }, 1500);
      bannnerstatus=2;

  }else if (bannnerstatus==2) {
    document.getElementById("slid_image3").style.opacity="0";
    setTimeout(function()  {
    document.getElementById("slid_image2").style.right="0px";
    document.getElementById("slid_image2").style.zIndex="1000"; 
    document.getElementById("slid_image3").style.right="-100%";
    document.getElementById("slid_image3").style.zIndex="1500";
    document.getElementById("slid_image1").style.right="1200px";
    document.getElementById("slid_image1").style.zIndex="500";
     }, 500);


     setTimeout(function()  {
      document.getElementById("slid_image3").style.opacity="1";
      }, 1500);
      bannnerstatus=3;

  }else if (bannnerstatus==3) {
    
  
  document.getElementById("slid_image1").style.opacity="0";
  setTimeout(function()  {
  document.getElementById("slid_image3").style.right="0px";
  document.getElementById("slid_image3").style.zIndex="1000"; 
  document.getElementById("slid_image1").style.right="-100%";
  document.getElementById("slid_image1").style.zIndex="1500";
  document.getElementById("slid_image2").style.right="1200px";
  document.getElementById("slid_image2").style.zIndex="500";
   }, 500);


   setTimeout(function()  {
    document.getElementById("slid_image1").style.opacity="1";
    }, 1500);
    bannnerstatus=1;
   }

}



/*
var bannnerstatus=1;
var bannertimer=4000;

window.onload=function(){
  nextto();
}
 var stattbanerloop=setInterval(function(){
  nextto();
 }, bannertimer);


function nextto() {

  if (bannnerstatus == 1) {
    document.getElementById("slid_image2").style.opacity="0";

    setTimeout(function() {
    document.getElementById("slid_image1").style.right="0px";
    document.getElementById("slid_image1").style.zIndex="1000"; 
    document.getElementById("slid_image2").style.right="-1200px";
    document.getElementById("slid_image2").style.zIndex="1500";
    document.getElementById("slid_image3").style.right="1200px";
    document.getElementById("slid_image3").style.zIndex="500"; 
    }, 500);

    setTimeout(function() {
      document.getElementById("slid_image2").style.opacity="1";
      }, 1000);
    
    var bannnerstatus=2;
  }else if (bannnerstatus == 2) {
    document.getElementById("slid_image3").style.opacity="0";

    setTimeout(function() {
    document.getElementById("slid_image2").style.right="0px";
    document.getElementById("slid_image2").style.zIndex="1000"; 
    document.getElementById("slid_image3").style.right="-1200px";
    document.getElementById("slid_image3").style.zIndex="1500";
    document.getElementById("slid_image1").style.right="1200px";
    document.getElementById("slid_image1").style.zIndex="500"; 
    }, 500);

    setTimeout(function() {
      document.getElementById("slid_image3").style.opacity="1";
      }, 1000);
    
    var bannnerstatus=3;
  }else if(bannnerstatus == 3) {
    document.getElementById("slid_image1").style.opacity="0";

    setTimeout(function() {
    document.getElementById("slid_image3").style.right="0px";
    document.getElementById("slid_image3").style.zIndex="1000"; 
    document.getElementById("slid_image1").style.right="-1200px";
    document.getElementById("slid_image1").style.zIndex="1500";
    document.getElementById("slid_image2").style.right="1200px";
    document.getElementById("slid_image2").style.zIndex="500"; 
    }, 500);

    setTimeout(function() {
      document.getElementById("slid_image1").style.opacity="1";
      }, 1000);
    
    var bannnerstatus=1;
  }


}
 
    */      
  
    
    
    

    
    filterSelection("all")
    function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("column");
      if (c == "all") c = "";
      for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
      }
    }
    
    function w3AddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
      }
    }
    
    function w3RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
      }
      element.className = arr1.join(" ");
    }
    
    
    // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
   

    function openCity(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("productDiscription");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }
     
       
  



    