  

// Tabs
$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
$('.tab ul.tabs li a').on('click', function (g) {
    var tab = $(this).closest('.tab'), 
    index = $(this).closest('li').index();
    tab.find('ul.tabs > li').removeClass('current');
    $(this).closest('li').addClass('current');
    tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
    tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
    g.preventDefault();
});
// validation
function Validate_email(event) {
    var regex = new RegExp("^[a-z0-9.@_-]");
    var key = String.fromCharCode(event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
}
function Validate_name(event) {
    var regex = new RegExp("^[a-z ]");
    var key = String.fromCharCode(event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
}
function Validate_number(event) {
    var regex = new RegExp("^[0-9]");
    var key = String.fromCharCode(event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
}
function Validate_message(event) {
    var regex = new RegExp("^[a-zA-Z0-9 ]");
    var key = String.fromCharCode(event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
}
$(document).ready(function(){
   $('input').on("cut copy paste",function(e) {
      e.preventDefault();
   });
   $('textarea').on("cut copy paste",function(e) {
      e.preventDefault();
   });
});


$(function () { 
$('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});  

// $( window ).scroll(function() {   
// if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
$(".progress-bar").each(function(){
each_bar_width = $(this).attr('aria-valuenow');
$(this).width(each_bar_width + '%');
});
   
//  }  
// });



// menu
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

// owl

$("#owl-demo1").owlCarousel({
  autoplay: true,
  autoPlay: 5000, 
  items : 2,
  itemsDesktop: [1000, 3],
  itemsDesktopSmall: [900, 1],
  itemsTablet: [600,1],
  center: true,
  loop:true,
  autoplayHoverPause:true,
  martSpeed : 1200,
  navigation : true,
  pagination : false,
});
$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-left"></i>');
$("#owl-demo2").owlCarousel({
  autoplay: true,
  autoPlay: 5000, 
  items : 3,
  itemsDesktop: [1000, 3],
  itemsDesktopSmall: [900, 2],
  itemsTablet: [600,1],
  center: true,
  loop:true,
  autoplayHoverPause:true,
  martSpeed : 1200,
  navigation : true,
  pagination : false,
});
$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-left"></i>');
$("#owl-demo3").owlCarousel({
  autoplay: true,
  autoPlay: 5000, 
  items : 5,
  itemsDesktop: [1000, 3],
  itemsDesktopSmall: [900, 2],
  itemsTablet: [600,1],
  center: true,
  loop:true,
  autoplayHoverPause:true,
  martSpeed : 1200,
  navigation : true,
  pagination : false,
});
$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-left"></i>');
$("#owl-demo4").owlCarousel({
  autoplay: true,
  autoPlay: 5000, 
  items : 3,
  itemsDesktop: [1000, 3],
  itemsDesktopSmall: [900, 3],
  itemsTablet: [600,1],
  center: true,
  loop:true,
  autoplayHoverPause:true,
  martSpeed : 1200,
  navigation : true,
  pagination : false,
});


// counter
$('.counter').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 5000,
        step: function (func) {
           $(this).text(parseFloat(func).toFixed(size));
        }
      });
});


// portfolio
$(document).ready(function() {
$(".gallery a").fancybox();
});

// captcha

function checkform0(theform){
var why = "";
if(theform.CaptchaInput0.value == ""){
why += "- Please Enter CAPTCHA Code.\n";
}
if(theform.CaptchaInput0.value != ""){
if(ValidCaptcha(theform.CaptchaInput2.value) == false){
why += "- The CAPTCHA Code Does Not Match.\n";
}
}
if(why != ""){
alert(why);
return false;
}
}
var a = Math.ceil(Math.random() * 9)+ '';
var b = Math.ceil(Math.random() * 9)+ '';
var c = Math.ceil(Math.random() * 9)+ '';
var d = Math.ceil(Math.random() * 9)+ '';
var e = Math.ceil(Math.random() * 9)+ '';
var code = a + b + c + d + e;
document.getElementById("txtCaptcha0").value = code;
document.getElementById("CaptchaDiv0").innerHTML = code;
// Validate input against the generated number
function ValidCaptcha(){
var str1 = removeSpaces(document.getElementById('txtCaptcha0').value);
var str2 = removeSpaces(document.getElementById('CaptchaInput0').value);
if (str1 == str2){
return true;
}else{
return false;
}
}
function removeSpaces(string){
return string.split(' ').join('');
}



