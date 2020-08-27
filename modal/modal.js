const modal = document.querySelector('.bg-modal');
const login = document.getElementById('_displayBtn');
const signin = document.getElementById('_displayBtn2');
const login_here = document.getElementById('loginHere');
const reg = document.getElementById('register');
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');

// Display first slide only
displayFirstSlide = () => {
    slide1.style.display='block';
    slide2.style.display='none';
}

// Display Second slide only
displaySecondSlide = () => {
    slide2.style.display='block';
    slide1.style.display='none';
}

//Display modal and first slide on clicking the button
login.addEventListener('click', function(){
    modal.style.display='flex';
    displayFirstSlide()
})

login_here.addEventListener('click', function(){
    displaySecondSlide()
})

reg.addEventListener('click', function(){
    displayFirstSlide()
})

signin.addEventListener('click', function(){
    modal.style.display='flex';
    displaySecondSlide()
})

// When the user clicks anywhere outside of the modal, close it 
window.addEventListener('click', function(event){
    if (event.target == modal) {
    modal.style.display = "none";
    }
})