function about(){
  document.getElementById("explore").style.letterSpacing = "150px";
  document.getElementById("explore").style.opacity = "0";
  document.getElementById("explore").style.zIndex = "0";

  document.getElementsByClassName("info")[0].style.opacity = "1";
  document.getElementsByClassName("summary")[0].style.opacity = "1";
  let len = document.getElementsByClassName("bubble");
  let i;
  for (i=0; i < len.length; i++){
    len[i].style.opacity = "0.75";
    len[i].style.zIndex = "0";
  }
}

function clicked(){
    let elem = document.getElementsByName("bubbleCheck");
    let bub = document.getElementsByClassName("bubble");
    let bubble = document.getElementsByClassName("bubbleTitleLabel");
    let i;
    for (i = 0; i < elem.length; i++){
      if (elem[i].checked ==  true){
        bub[i].style.backgroundColor = "#d1cdcc";
        bubble[i].style.letterSpacing = "4px";
        bubble[i].style.color = "white";
        document.getElementsByClassName("info")[0].style.opacity = "0";
        document.getElementsByClassName("summary")[0].style.opacity = "0";
        document.getElementsByClassName("info")[i+1].style.opacity = "1";
        document.getElementsByClassName("summary")[i+1].style.opacity = "1";
        document.getElementsByClassName("info")[i+1].style.zIndex = "1";
      } else {
        bub[i].style.backgroundColor = "";
        bubble[i].style.letterSpacing = "";
        bubble[i].style.color = "";
        document.getElementsByClassName("info")[i+1].style.opacity = "0";
        document.getElementsByClassName("summary")[i+1].style.opacity = "0";
        document.getElementsByClassName("info")[i+1].style.zIndex = "0";
      }
    }
}

function reset(){
  let elem = document.getElementsByName("bubbleCheck");
  let bub = document.getElementsByClassName("bubble");
  let bubble = document.getElementsByClassName("bubbleTitleLabel");
  let i;
  for (i = 0; i < elem.length; i++){
    if (elem[i].checked ==  true){
      bub[i].style.backgroundColor = "";
      bubble[i].style.letterSpacing = "";
      bubble[i].style.color = "";
      document.getElementsByClassName("info")[i+1].style.opacity = "0";
      document.getElementsByClassName("summary")[i+1].style.opacity = "0";
      document.getElementsByClassName("info")[i+1].style.zIndex = "0";
    }
  }
  document.getElementsByClassName("info")[0].style.opacity = "1";
  document.getElementsByClassName("summary")[0].style.opacity = "1";
}
