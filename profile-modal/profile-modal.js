const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');
const reset_password = document.getElementById('loginHere');
const password_change = document.getElementById('password');
const oldpassword_change = document.getElementById('oldPassword');
const confirmPassword_change = document.getElementById('confirmPassword');
const form2 = document.getElementById('form_signin');
const popup = document.getElementById('myPopup');

//buttons
const edit = document.getElementById('_displayBtn');
const change = document.getElementById('_displayBtn2');
const close_btn = document.getElementById('_close1');
const close_btn2 = document.getElementById('_close2');


edit.addEventListener('click', ()=>{
    slide1.style.display='flex';
})

change.addEventListener('click', ()=>{
    slide2.style.display='flex';
})

reset_password.addEventListener('click', ()=>{
    slide2.style.display='flex';
})

//modal closes after clicking on (x)
close_btn.addEventListener('click', () => {
    slide1.style.display = "none";
})

close_btn2.addEventListener('click', () => {
    slide2.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it (edit profile)
window.addEventListener('click', function(event){
    if (event.target == slide1) {
    slide1.style.display = "none";
    }
})

// When the user clicks anywhere outside of the modal, close it (chanage password)
window.addEventListener('click', function(event){
    if (event.target == slide2) {
    slide2.style.display = "none";
    }
})

////////////////////////////////////
/////Validate change password form//////////
////////////////////////////////////

form2.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkInputs_change();
});

function checkInputs_change(){
    const password_change_value = password_change.value.trim();
    const oldpassword_change_value = oldpassword_change.value.trim();
    const confirmPassword_change_value = confirmPassword_change.value.trim();

       //////validate oldpassword field     
       if(oldpassword_change_value === ""){
        oldpassword_change.className = 'error'
    } else{
        oldpassword_change.className = 'success'
    };

     //////validate password field     
     if(password_change_value === ""){
        password_change.className = 'error'
    } else{
        password_change.className = 'success'
    };
 //////validate confirm password field     
    if(confirmPassword_change_value === ""){
        confirmPassword_change.className = 'error'
    }else if(confirmPassword_change_value !== password_change_value){
        confirmPassword_change.className = 'error'
        popup.classList.add('showpopup')
    }
    else{
        confirmPassword_change.className = 'success'
        popup.classList.remove('showpopup')
    };
}


//show and hide password 
const showNhide = document.querySelector('._expand_')
showNhide.addEventListener('click', () => {
    if(showNhide.src.match('hidden.png') && password_change.type === 'password'){
        showNhide.src = "revealed.png"
        password_change.type='text'   
    }else{
        showNhide.src = "hidden.png"
        password_change.type='password'   
    }
});


// validate edit info form
const firstname_login = document.getElementById('firstname_login');
const lastname_login = document.getElementById('lastname_login');
const form = document.getElementById('form_login');
const popup1 = document.getElementById('myPopup1');


form.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkInputs();
})

checkInputs = () =>{
    const firstname_login_value = firstname_login.value.trim();
    const lastname_login_value = lastname_login.value.trim();

       //////validate first name field
       if(firstname_login_value === ""){
        firstname_login.className = 'error'
    } else if (!isOnlyText(firstname_login_value)){
        firstname_login.className = 'error';
    }else{
        firstname_login.className = 'success'
        };
 //////validate last name field     
    if(lastname_login_value === ""){
        lastname_login.className = 'error'
    }else if (!isOnlyText_lastname(lastname_login_value)){
        lastname_login.className = 'error';
    } else{
        lastname_login.className = 'success'
    };
    
}

//check if special characters exist in name fields

isOnlyText = () => {
    return /^[a-zA-Z ]*$/.test(firstname_login.value)
};

isOnlyText_lastname = () => {
    return /^[a-zA-Z ]*$/.test(lastname_login.value)
};
