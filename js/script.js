// Copyright (c) 2022 Maria Goemans All rights reserved
//
// Created by: Maria G
// Created on: April 20, 2022
// This file contains the JS functions for index.html

"use strict"

function valuesSent() {
  let pageCount = parseFloat(document.getElementById("book-pages").value);
  let fontSize = parseInt(document.getElementById("font-size").value);
  let pageSize = parseInt(document.getElementById("page-size").value);

  //First big if/then question: page size option 1 means page size 5" x 8"
  if (pageSize == 1) {
    //First secondary if/then scenario: what to calculate if fontSize is 10
    if (fontSize == 10) {
      let wordCount = pageCount * 400;
      document.getElementById("results").innerHTML = "The approximate word count of the book is " + wordCount.toFixed(0) + " words.";
    } 
    //Second secondary if/then scenario: what to calculate/display if fontSize is 11
    else if (fontSize == 11) {
      let wordCount = pageCount * 350;
      document.getElementById("results").innerHTML = "The approximate word count of the book is " + wordCount.toFixed(0) + " words.";
    }
    //Third secondary if/then scenario: what to calculate/display if fontSize is 12 (neither of the other scenarios)
    else {
      let wordCount = pageCount * 300;
      document.getElementById("results").innerHTML = "The approximate word count of the book is " + wordCount.toFixed(0) + " words.";
    }
  }
  //Second big if/then option: page size option 2 means page size 6" x 9"
  else if (pageSize == 2) {
    //fontSize is 10
    if (fontSize == 10) {
      let wordCount = pageCount * 600;
      document.getElementById("results").innerHTML = "The approximate word count of the book is " + wordCount.toFixed(0) + " words.";
    } 
    //fontSize is 11
    else if (fontSize == 11) {
      let wordCount = pageCount * 500;
      document.getElementById("results").innerHTML = "The approximate word count of the book is " + wordCount.toFixed(0) + " words.";
    }
    //fontSize is 12 (neither of the other scenarios)
    else {
      let wordCount = pageCount * 425;
      document.getElementById("results").innerHTML = "The approximate word count of the book is " + wordCount.toFixed(0) + " words.";
    }
  }
}
