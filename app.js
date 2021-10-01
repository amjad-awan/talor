window.addEventListener("scroll",reveal);


function reveal()
{
    var revealFromBottom =document.querySelectorAll(".reveal-from-bottom");
    var revealFromTop =document.querySelectorAll(".reveal-from-top");
    console.log(revealFromBottom);
    console.log(revealFromTop);
    for(var i=0; i<revealFromBottom.length; i++)
    {
      var windowHeight = window.innerHeight;
      console.log(windowHeight);
      var revealTop = revealFromBottom[i].getBoundingClientRect().top;
      var revealsPoint = 200;
      var revealIf = windowHeight - revealsPoint;
      if(revealTop<revealIf)
      {
          revealFromBottom[i].classList.add("active");
      }
      else{
          revealFromBottom[i].classList.remove("active");
      }
    }


         for(var t=0; t<revealFromTop.length; t++)
    {
      var windowHeight2 =window.innerHeight;
      //console.log(windowHeight);
      var revealTop2 = revealFromTop[t].getBoundingClientRect().top;
      var revealsPoint2 = 200;
      var revealIf2 = windowHeight2- revealsPoint2;
      if(revealTop2<revealIf2)
      {
          revealFromTop[t].classList.add("active-2");
      }
      else{
          revealFromTop[t].classList.remove("active-2");
      }

    }


}



