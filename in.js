
var btn = document.querySelector('#btn');
var out = document.querySelector('#out');
var cena = document.querySelector('#cena');
var kol = document.querySelector('#kol');
//var c=cena.value;
//var k=kol.value;

function oc()
{  document.querySelector('#cena').style.borderColor="red";}
function ok()
{  document.querySelector('#kol').style.borderColor="red";}
function nc()
{  document.querySelector('#cena').style.borderColor="black";}
function nk()
{  document.querySelector('#kol').style.borderColor="black";}
function ob()
{  document.querySelector('#cena').style.borderColor="black";document.querySelector('#kol').style.borderColor="black";}

window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
btn.onclick = function()
 { const reg = /-+?|\b0[0-9]+/;
  const reg1 = /\D+/;
  const reg2 = /^$/;
  var pro = parseInt(cena.value) *parseInt(kol.value);
    if((reg.test(cena.value) ||reg.test(kol.value))===true ) {
      alert("Ошибка: Число отрицательное или начинается с 0!");
    if(reg.test(cena.value)===true && reg.test(kol.value)===true) {oc();ok();}
   else if(reg.test(cena.value)===true)
   {oc();nk();}
    else if(reg.test(kol.value)===true) {nc();ok();}
}
 else if((reg1.test(cena.value) ||reg1.test(kol.value))===true ) {
  alert(" Ошибка: Вы ввели букву, а не число!");
if(reg1.test(cena.value)===true && reg1.test(kol.value)===true) {oc();ok();}
else if(reg1.test(cena.value)===true)
{oc();nk();}
else if(reg1.test(kol.value)===true) {ok();nс();}
}
else if((reg2.test(cena.value) ||reg2.test(kol.value))===true ) {
  alert(" Ошибка: Введите цифру в соответствующее поле!");
if(reg2.test(cena.value)===true && reg2.test(kol.value)===true) {oc();ok();}
else if(reg2.test(cena.value)===true)
{oc();nk();}
else if(reg2.test(kol.value)===true) {on();ok();}
}
    else {out.innerHTML = pro;ob();} }
 });

 function nar()
 {  document.querySelector('.num').style.backgroundImage='url("https://i.ytimg.com/vi/EfhyJFz2OwQ/hqdefault.jpg")';}
 function pion()
 {  document.querySelector('.num').style.backgroundImage='url("https://s1.babiki.ru/uploads/images/topics/2020/06/22/15/cfb0c0de2f.jpg")';}
 function rose()
 {  document.querySelector('.num').style.backgroundImage='url("https://i1.rozetka.ua/goods/14194195/125478678_images_14194195921.jpg")';}
// Элементы формы
const squareInput = document.querySelector('#square-input');
const inputs = document.querySelectorAll('input');

//селектор
const select = document.getElementsByName('myselect')

// Радиокнопки
const radioType = document.querySelectorAll('input[name="type"]');
const chType = document.querySelectorAll('input[name="ceiling"]');

// Чекбокс
const ceilings = document.querySelector('input[name="ceiling"]');

const basePrice = 0;
const totalPriceElement = document.querySelector('#total-price');

let selectnow=1;
nar();
let radios = document.getElementById('radios');
let checkbox = document.getElementById('checkbox');

function calculate() {
let totalPrice
const reg = /[^0-9]|\b0[0-9]+/;
let price = document.getElementsByName("field1");
let amount = document.getElementsByName("field2");
if(reg.test(parseInt(squareInput.value)) === true){
alert("Повторите ввод данных");
totalPriceElement.innerText = "0";
}
else{
if(selectnow==1){ //велосипед
totalPrice=50;
totalPrice *= parseInt(squareInput.value);
}
else if(selectnow==2){ //автомобиль
totalPrice=70;
for (const radio of radioType) {
if (radio.checked) {
totalPrice = totalPrice + parseFloat(radio.value);
}
}
totalPrice *= parseInt(squareInput.value);
}
else if(selectnow==3){ //дом
totalPrice=100;
for (const ceilings of chType) {
if (ceilings.checked) {
totalPrice = totalPrice + parseInt(ceilings.value);
}}
totalPrice *= parseInt(squareInput.value);
}
const formatter = new Intl.NumberFormat('ru');
totalPriceElement.innerText = formatter.format(totalPrice);
}
}

window.addEventListener('DOMContentLoaded', function (event) {
calculate();
radios.style.display = "none";
checkbox.style.display = "none";
select[0].addEventListener("change", function(event) {
let select = event.target;
if (select.value == "1") {
radios.style.display = "none";
checkbox.style.display = "none";
selectnow = 1;
nar();
}
else if(select.value == "2") {
radios.style.display = "block";
checkbox.style.display = "none";
selectnow = 2;
pion();
}
else {
radios.style.display = "none";
checkbox.style.display = "block";
selectnow = 3;
rose();
}
calculate();
});

for (const input of inputs) {
input.addEventListener('input', function () {
calculate();
});
}
});
$(document).ready(function(){
$('.slider').slick({
  arrows:true,
   dots: true,
   adaptiveHeight:true,
   slidesToShow:4,
   slidesToScroll:4,
   easing: 'ease',
   infinite:true,
   autoplay:true,
   autoplaySpeed:2500,
   pauseOnFocus:true,
   pauseOnHover: true,
   pauseOnDotsHover:true,
   touchThreshold:10,
   waitForAnimate:false,
   responsive:[
     {
       breakpoint: 480,
      settings:{
        slidesToShow:2,
        slidesToScroll:2,
      }
     }
   ],
});
});
  "use strict"

  var $popOverlay = $(".popup-overlay");
  var $popWindow = $(".popWindow");
  var $popupMainWindow = $(".popup-main-window");
  var $popThankYouWindow = $(".thank-you-window");
  var $popClose = $(".close-btn");
  var $popOpen = $("#for-popup-form");
  
  $(function() {
  // Close Pop-Up after clicking on the button "Close"
  $popClose.on("click", function() {
  history.replaceState(null, null, ' ');
  $popOverlay.fadeOut();
  $popWindow.fadeOut();
  $popThankYouWindow.fadeOut();
  });
  
  // Close Pop-Up after clicking on the Overlay
  $(document).on("click", function(event) {
  if ($(event.target).closest($popWindow).length) return;
  history.replaceState(null, null, ' ');
  $popOverlay.fadeOut();
  $popWindow.fadeOut();
  $popThankYouWindow.fadeOut();
  event.stopPropagation();
  });
  
  //сохраним в localstorage данные формы
  // localStorage.setItem("name", $('[name = "popup-name"]'));
  // localStorage.setItem("email", $('[name = "popup-email"]'));
  // localStorage.setItem("textarea", $('[name = "popup-message"]'));
  
  // popup form
  $(".popup-form").submit(function() {
      var th = $(this);
      $(".popup-submit").prop('disabled', true);
      $.ajax({
      type: "POST",
      url: "https://formcarry.com/s/eCvKm6T8t7n",
      data: th.serialize(),
      })
      //.done(function() {
      // после успешной отправки скрываем форму подписки и выводим окно с благодарностью за заполнение формы
      $popupMainWindow.fadeOut();
      $popThankYouWindow.fadeIn();
      // очищаем форму
      setTimeout(function() {
      $(".popup-submit").prop('disabled', false);
      th.trigger("reset");
      }, 1000);
      //});
      return false;
      });
  });
  
  $(document).ready(function() {
  $popOpen.click(function(){
  window.location.hash = "#popup";
  $popOverlay.fadeIn();
  $popupMainWindow.fadeIn();
  return false;
  });
  });
  
  $(window).on('hashchange', function (event) { //при клике на "назад" скрывать форму
  if(window.location.hash == "#popup"){
  $popOverlay.fadeIn();
  $popupMainWindow.fadeIn();
  }
  else{
  if(window.location.hash != "#popup") {
  $popOverlay.fadeOut();
  $popupMainWindow.fadeOut();
  $popThankYouWindow.fadeOut();
  }
  }
  });