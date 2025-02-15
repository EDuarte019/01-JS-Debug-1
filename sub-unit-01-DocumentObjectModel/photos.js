/*    Exercise 01_05_01
 *    Photo gallery
 *    Variables and functions
 *    Author: Evelyn Duarte
 *    Date: 8/14/19
 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
   
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   // for (var i = 0; i < 5; i++) {
   //    if ((photoOrder[i] - 1) === 0) {
   //       photoOrder[i] = 5;
   //    } else {
   //       photoOrder[i] -= 1;
   //    }
   //    populateFigures();
   // }
   alert("left asdfsgdsf");
   
}

function populateFigures() {
   
}

function previewFive() {
   
}
/* open center figure in separate window */


/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}

function createEventListeners() {
var leftArrow = document.getElementById("leftarrow");

if(leftarrow.addEventListener){
   leftarrow.addEventListener("click", leftArrow, false);
}else if (leftarrow.attachEvent){
   leftarrow.attachEvent("onclick", leftArrow);
}

if(rightarrow.addEventListener){
   rightarrow.addEventListener("click", rightArrow, false);
}else if (rightarrow.attachEvent){
   rightarrow.attachEvent("onclick", rightArrow);
}

var mainFig = document.getElementsByTagName("img")[1];

if(mainFig.addEventListener){
   mainFig.addEventListener("click", zoomFig, false);
} else if (mainFig.attachEvent){
   mainFig.attachEvent("onclick", zoomFig);
}

}

function zoomFig() {
   
}


function populateFigures() {
   var filename;
   var currentFig;

   for(var i = 1; i < 4; i++){
      filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
      currentFig = document.getElementsByTagName("img")[i - 1];
      currentFig.src = filename;
      alert(currentFig.src);
   }
}
/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}