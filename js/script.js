// Copyright (c) 2022 Maria Goemans All rights reserved
//
// Created by: Maria G
// Created on: April 20, 2022
// This file contains the JS functions for index.html

"use strict"

function valuesSent() {
  let pageCount = document.getElementById("book-pages").value;
  let fontSize = parseInt(document.getElementById("font-size").value);
  
  //First if/then scenario: what to calculate if fontSize is 10 (less than 11)
  if (fontSize < 11) {
    let wordCount = pageCount * 400;
    document.getElementById("results").innerHTML = "The approximate word count of the book is " + wordCount + " words.";
  } 
  //Second if/then scenario: what to calculate/display if fontSize is 12 (greater than 11)
  else if (fontSize > 11) {
    let wordCount = pageCount * 300;
    document.getElementById("results").innerHTML = "The approximate word count of the book is " + wordCount + " words.";
  } 

  //Third if/then scenario: what to calculate/display if fontSize is 11 (neither of the other scenarios)
  else {
    let wordCount = pageCount * 350;
    document.getElementById("results").innerHTML = "The approximate word count of the book is " + wordCount + " words.";
  }
}