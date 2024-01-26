var pacientes = document.querySelectorAll(".paciente");


var tabela = document.querySelector("table");

tabela.addEventListener("click", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    },500);

    //var alvoEvento = event.target;
   // var paiDoAlvo = alvoEvento.parentNode;

   // paiDoAlvo.remove();
})

//pacientes.forEach(function(paciente){
//    paciente.addEventListener("click", function(){
//        this.remove();
//    })
//});