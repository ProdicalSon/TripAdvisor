

document.querySelector("#signup").addEventListener("click", function(){
  document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close").addEventListener("click", function(){
  document.querySelector(".popup").classList.remove("active");
});


function myFun(){
  document.getElementById("show").style.display= "block"
  var names = document.getElementsByClassName("names");
  let i = 0
  let length = names.length
  for(i = 0 ; i< length ; i++){
    var name = names[i].innerText.toUpperCase()
    var search = document.getElementById("input").value.toUpperCase()
    if(search=="" || search==" "){
      document.getElementById("show").style.display= "none"
    }
    if(name.includes(search)){
      names[i].style.display = "block"
    }else{
      names[i].style.display = "none"
    }
  }

}
function logInWithGoogle() {
 
  alert("Still under development")
}

function logInWithFacebook() {
  
alert("window not created yet")
}

