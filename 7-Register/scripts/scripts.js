// select eye image
let eyeImg = document.querySelector('.pass-visibility');

// select input password
let passInput = document.querySelector('.pass-input');

passInput.addEventListener('keyup', function(){
    let passInputLength = passInput.value.length;
    
    if(passInputLength == 0){
        eyeImg.style.display = 'none';
    } else {
        eyeImg.style.display = 'inline-block';
    }

});


eyeImg.addEventListener('click', function(){
    // console.log('eye image clicked');
    let passInputType = passInput.getAttribute('type');
    
    // toggle between password/text input types
    if(passInputType == 'password'){
        passInput.setAttribute('type', 'text');
        eyeImg.setAttribute('src', 'images/invisible-eye.png');
    } else {
        passInput.setAttribute('type', 'password');
        eyeImg.setAttribute('src', 'images/visible-eye.png');
    }
});