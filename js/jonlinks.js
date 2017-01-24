// Länkar till Jons filmer
var links = new Array();
links[0]="https://www.youtube.com/embed/sh2M3Buiauo";
links[1]="https://www.youtube.com/embed/sjXKwiSnNF4";

function openLink() {
  // Väljer en random
  var i = Math.floor(Math.random() * links.length);
  return links[i];
}
