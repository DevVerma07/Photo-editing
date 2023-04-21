/***********************
Big Gallery
Author: Jan Skwara
version: 01.05.2013
***********************/

var slideSizeHome = 'fill'; //Size of a photo on front page: Values: 'fill' - fill all browser width, 'uncut' - prevent images from beeing cut, 'width' - browser widht, 'height' - browser height, integer eg. 500 - height in px.
var slideSize = 'uncut'; //Size of a photo: Values: 'fill' - fill all browser width, 'uncut' - prevent images from beeing cut, 'width' - browser widht, 'height' - browser height, integer eg. 500 - height in px.
var autoplayHome = true; //autoplay on start on fornt page. Values: bolean - true or false
var autoplay = true; //autoplay on start. Values: bolean - true or false
var autoplaySpeed = 5000; //speed of main slideshow autoplay in miliseconds
var logoHide = 2; //hide logo, menu, arrows after number of seconds with no mouse move. Set 0 for dispableing it.
var twitterUsr = 'envato' //insert your twitter username
var videopattern = true; //Shows video overlay pattern. Values: bolean - true or false
var imgpattern = true; //Shows image overlay pattern. Values: bolean - true or false
var soundplayHome = true; //music auto play at start on home page. Values: bolean - true or false
var soundplay = false; //music auto play at start. Values: bolean - true or false
var sound_mp3 = "http://chart.civ.pl/themes/big_gallery/dark/media/audio/music.mp3"; //url to sound in mp3 format or false to turn music off
var menuShown = 0; //if set to true then menu is shown all the time or autohiding. Values: 0 - Autohide on fullscreen slideshow/video pages, shown on text pages; 1 - Shown on all pages; 2 - Autohide on all pages