// Länkar till Caseys filmer
var links = new Array();
links[0]="https://www.youtube.com/embed/At3xcj-pTjg";
links[1]="https://www.youtube.com/embed/7QpJ_VDbIPA";

function openLink() {
  // Väljer en random
  var i = Math.floor(Math.random() * links.length);
  return links[i];
}

// Länkar till Jons filmer
var jonLinks = new jonArray();
links[0]="https://www.youtube.com/embed/sh2M3Buiauo";
links[1]="https://www.youtube.com/embed/sjXKwiSnNF4";

function openJonLink() {
  // Väljer en random
  var i = Math.floor(Math.random() * jonLinks.length);
  return jonLinks[i];
}

// Länkar till Shonduras filmer
var shondurasLinks = new shondurasArray();
links[0]="https://www.youtube.com/embed/Z3IkpvTAVUg";
links[1]="https://www.youtube.com/embed/EppzA9y9Mkc";

function openShondurasLink() {
  // Väljer en random
  var i = Math.floor(Math.random() * shondurasLinks.length);
  return shondurasLinks[i];
}