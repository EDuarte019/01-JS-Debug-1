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
   if(rightArrow.addEventListener){
      rightArrow.addEventListener("click", rightArrow, false);
   }else if (rightArrow.attachEvent){
      rightArrow.attachEvent("onclick", rightArrow);
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
   if(leftArrow.addEventListener){
      leftArrow.addEventListener("click", leftArrow, false);
   }else if (leftArrow.attachEvent){
      leftArrow.attachEvent("onclick", leftArrow);
   }
}

/* open center figure in separate window */
function zoomFig() {
   
}

/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}
function createEventListeners() {
var leftArrow = document.getElementById("leftarrow");
alert(leftArrow);
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}