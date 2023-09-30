$(document).ready(function(){
   let openModal = $('.openModal');
   let modal = $('.modal');
   let modalCloseBtn = $('.modal .close');

   openModal.click(function(){
        modal.fadeIn(200);
   });

   modalCloseBtn.click(function(){
        modal.fadeOut(200);
   });
   
});