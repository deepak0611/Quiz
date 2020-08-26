var pages=document.getElementsByClassName('content');
var i=0,j=0,score=0,k=0;
var sol=["C","A","B","D","C","A","A","D","C","D"];

function startagain(){
  i=0;score=0;k=0;
  document.getElementById("starter").style.display="none";
  for(j=0;j<pages.length;j++){
    if(j==i){pages[i].style.display="block";}
    else{pages[j].style.display="none";}
  }
  
  i++;
}

function pagination(){

  if(i==0){document.getElementById("starter").style.display="none";}
  var x=document.getElementsByName("ans");

  for(j=k;j<k+4;j++){
    if(x[j].checked){
      if(x[j].value == sol[i-1]){
        score++;
      }
    }
  }
  k+=4;
  for(j=0;j<pages.length;j++){
    if(j==i){pages[i].style.display="block";}
    else{pages[j].style.display="none";}
  }        
  i++;
  if(i==pages.length){          
    document.getElementById("res").innerHTML= score.toString()  +"/"+ sol.length.toString();
  }

}