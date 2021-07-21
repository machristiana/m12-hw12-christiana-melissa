"use strict";

var netflixShows = ["Greys Anatomy", "Bridgeton", "Vampire Diaries", "New Girl", "Gilmore Girls", "Orange is the New Black", "NCIS", "Schitts Creek", "Criminal Minds", "The Queen's Gambit"];

var netflixShow = document.getElementById("netflix-show");

document.getElementById("button").addEventListener("click", function () {
    netflixShows.sort(function (a, b) {
        return 0.5 - Math.random();
    });
    netflixShow.innerHTML = netflixShows[0];
}, false);