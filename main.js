var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

 


document.getElementById("Modo").addEventListener("click",function(){
  if ( document.getElementById("Modo").innerHTML === "Dia"){
    document.getElementById("Modo").innerHTML = "Noche"
    
    
    document.body.style.backgroundColor = "#525558"
    document.body.style.color ="#0303b5"
    
    document.getElementById("Info" ).style.backgroundColor =  "#ffa43a"
    
    document.getElementById("Portfolio" ).style.backgroundColor =  "#ffbf75"
    document.getElementById("Experiencia" ).style.backgroundColor =  "#ffbf75"
    document.getElementById("Contacto" ).style.backgroundColor =  "#ffbf75"
    document.getElementById("nav").style.backgroundColor =  "#ffa43a"    
    document.getElementById("nav").style.boxShadow="5px 5px 10px 5px #c06500"    
    document.getElementById("SkillSet").style.backgroundColor =  "#ffa43a"    
    
    const collection = document.getElementsByClassName("ico")
    for (let i= 0; i < collection.length; i++){
      collection[i].style.backgroundColor =  "#ffbf75"
      collection[i].style.border =  "5px solid #ffbf75"

    }

    const collection2 = document.getElementsByClassName("proy")
    for (let i= 0; i < collection2.length; i++){
      collection2[i].style.backgroundColor =  "#ffbf75"
      collection2[i].style.border =  "5px solid #ffbf75"

    }
    
  }
  else{
    document.getElementById("Modo").innerHTML = "Dia"
   
    document.body.style.color = "#04293A"
    document.body.style.color ="#097188"
    
    
    document.getElementById("Portfolio" ).style.backgroundColor =  "#082032"
    document.getElementById("Experiencia" ).style.backgroundColor =  "#082032"
    document.getElementById("Contacto" ).style.backgroundColor =  "#082032"
    document.getElementById("Info" ).style.backgroundColor =  "#04293A"
    document.getElementById("nav").style.backgroundColor =  "#04293A"    
    document.getElementById("nav").style.boxShadow= "5px 5px 15px 5px #3E065F"
    document.getElementById("SkillSet").style.backgroundColor =  "#04293A"    
    
    const collection = document.getElementsByClassName("ico")
    for (let i= 0; i < collection.length; i++){
      collection[i].style.backgroundColor =  "#097188"
      collection[i].style.border =  "5px solid #097188"

    }

    const collection2 = document.getElementsByClassName("proy")
    for (let i= 0; i < collection2.length; i++){
      collection2[i].style.backgroundColor =  "#097188"
      collection2[i].style.border =  "5px solid #097188"

    }
  }
})
