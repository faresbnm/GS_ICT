const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const LoginDark = document.getElementById('login-box');
const googleDark = document.getElementById('google-dark');
const card1Dark = document.getElementById('card1');
const card2Dark = document.getElementById('card2');
const card3Dark = document.getElementById('card3');
const card4Dark = document.getElementById('card4');
const darkInput1 = document.getElementById('input1');
const darkInput2 = document.getElementById('input2');
const darkInput3 = document.getElementById('input3');


darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode', darkModeToggle.checked);
  LoginDark.classList.toggle('login-box-dark', darkModeToggle.checked);
  googleDark.classList.toggle('ggDark', darkModeToggle.checked);
  card1Dark.classList.toggle('card1Dark', darkModeToggle.checked);
  card2Dark.classList.toggle('card2Dark', darkModeToggle.checked);
  card3Dark.classList.toggle('card3Dark', darkModeToggle.checked);
  card4Dark.classList.toggle('card4Dark', darkModeToggle.checked);
  darkInput1.classList.toggle('input-dark', darkModeToggle.checked);
  darkInput2.classList.toggle('input-dark', darkModeToggle.checked);
  darkInput3.classList.toggle('input-dark', darkModeToggle.checked);
 




});

  //styling the toggler:



  
  
  
  
  