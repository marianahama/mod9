//Adicionamos um pop um de Ola Jquery de teste.
//$(document).ready(function() {
  //  alert ("Ola Jquery")
//})
//ou seja: $(seletor).ready(quando estiver pronto) (deve executar a função(){abrir alerta})

$(document).ready(function() {
 //   console.log (document.querySelector('header button'));
  //  console.log ($('#botao-cancelar'));

//para fazer a aba expandir, (add evento a elemento) no java seria

//document.queryselector('header button').addEventListener('clic', function(e){

//}) 

$('header button').click(function() {
   $('form').slideDown();
})

$('#botao-cancelar').click(function (){
    $('form').slideUp();
})

 $('form').on('submit', function(e) {
    console.log('submit');
    e.preventDefault();
 })
})