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
    e.preventDefault();
    const endereçoDaNovaImagem= $('#endereco-imagem-nova').val(); 
   const novoItem= $('<li style="display:none"></li>');
   $(`<img src="${endereçoDaNovaImagem}" />`).appendTo(novoItem);
   $(`
   <div class= "overlay">
   <a href= "${endereçoDaNovaImagem}" target= "_blank" title="Ver imagem em tamanho real">
          Ver imagem em tamanho real
      </a>
   </div>
   `).appendTo(novoItem);
   $(novoItem).appendTo('ul');
   $(novoItem).fadeIn(1000);
   $('#endereco-imagem-nova').val('')
 })
})



