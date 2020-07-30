const modal = document.querySelector('.bg-modal');
const close_btn = document.getElementById('_close1');
const close_btn2 = document.getElementById('_close2');
const login = document.getElementById('_displayBtn');
const signin = document.getElementById('_displayBtn2');
const login_here = document.getElementById('loginHere');
const reg = document.getElementById('register');
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const inputs = document.querySelectorAll('.forminput');
const form = document.getElementById('form_login');
const form2 = document.getElementById('form_signin');
const firstname_login = document.getElementById('firstname_login');
const lastname_login = document.getElementById('lastname_login');
const email_login = document.getElementById('email_login');
const password_login = document.getElementById('password_login');
const confirmPassword_login = document.getElementById('confirmPassword_login');
const username_signin = document.getElementById('username_signin');
const password_signin = document.getElementById('password_signin');
const popup = document.getElementById('myPopup');
const popup1 = document.getElementById('myPopup1');
const popup2 = document.getElementById('myPopup2');
const popup3 = document.getElementById('myPopup3');
const check = document.getElementById('agreed');



////////////////////////////////////
/////open and close modals//////////
////////////////////////////////////

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

//modal closes after clicking on (x)
close_btn.addEventListener('click', () => {
    modal.style.display = "none";
})

close_btn2.addEventListener('click', () => {
    modal.style.display = "none";
})

////////////////////////////////////
/////Validate log in form//////////
////////////////////////////////////
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkInputs();
})

checkInputs = () => {
    const firstname_login_value = firstname_login.value.trim();
    const lastname_login_value = lastname_login.value.trim();
    const email_login_value = email_login.value.trim();
    const password_login_value = password_login.value.trim();
    const confirmPassword_login_value = confirmPassword_login.value.trim();
    const radio_btns = document.querySelectorAll("input[name='gender']");

    //////validate first name field
    if(firstname_login_value === ""){
            firstname_login.className = 'error'
        } else if (!isOnlyText(firstname_login_value)){
            popup1.classList.add('showpopup')
            firstname_login.className = 'error';
        }else{
            popup1.classList.remove('showpopup')
            firstname_login.className = 'success'
            };
     //////validate last name field     
        if(lastname_login_value === ""){
            lastname_login.className = 'error'
        }else if (!isOnlyText_lastname(lastname_login_value)){
            popup1.classList.add('showpopup')
            lastname_login.className = 'error';
        } else{
            popup1.classList.remove('showpopup')
            lastname_login.className = 'success'
        };
     //////validate email field     
        if(email_login_value === ""){
            email_login.className = 'error'
        } 
        else if(!isEmail(email_login_value)){
            email_login.className = 'error'
        }
        else{
            email_login.className = 'success'
        };
     //////validate password field     
        if(password_login_value === ""){
            password_login.className = 'error'
        } else{
            password_login.className = 'success'
        };
     //////validate confirm password field     
        if(confirmPassword_login_value === ""){
            confirmPassword_login.className = 'error'
        }else if(confirmPassword_login_value !== password_login_value){
            confirmPassword_login.className = 'error'
            popup.classList.add('showpopup')
        }
        else{
            confirmPassword_login.className = 'success'
            popup.classList.remove('showpopup')
        };

        //terms of use must be checked
        if(check.checked !== true){
            popup2.classList.add('showpopup')
        }else{
            popup2.classList.remove('showpopup')
        };

        //validate radio buttons
        radio_btns[0] = (radio_btns.value==='male')
        radio_btns[1] = (radio_btns.value==='female')

        if(radio_btns[0].checked){
            popup3.classList.remove('showpopup')
        }else if(radio_btns[1].checked){
            popup3.classList.remove('showpopup')
        }else{
            popup3.classList.add('showpopup')
        };

        return true
}

 //Check if email is valid using regular expression
isEmail = () => {
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email_login.value)
};
//check if special characters exist in name fields

isOnlyText = () => {
    return /^[a-zA-Z ]*$/.test(firstname_login.value)
};

isOnlyText_lastname = () => {
    return /^[a-zA-Z ]*$/.test(lastname_login.value)
};

//show and hide password 
const showNhide = document.querySelector('._expand_')
showNhide.addEventListener('click', () => {
    if(showNhide.src.match('hidden.png') && password_login.type === 'password'){
        showNhide.src = "revealed.png"
        password_login.type='text'   
    }else{
        showNhide.src = "hidden.png"
        password_login.type='password'   
    }
});


////////////////////////////////////
/////Validate sign in form//////////
////////////////////////////////////

form2.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkInputs_signin();
});

checkInputs_signin = () => {
    const username_signin_value = username_signin.value.trim();
    const password_signin_value = password_signin.value.trim();

   //validate username or email field
    if(username_signin_value === ""){
        username_signin.className = 'error'
    }else{
        username_signin.className = 'success'
        }

   //validate password field
    if(password_signin_value === ""){
        password_signin.className = 'error'
    }else{
        password_signin.className  = 'success'
        }
};