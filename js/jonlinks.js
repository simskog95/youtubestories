// Länkar till Jons filmer
var links = new Array();
links[0]="https://www.youtube.com/embed/sh2M3Buiauo";
links[1]="https://www.youtube.com/embed/sjXKwiSnNF4";
links[2]="https://www.youtube.com/embed/kaEGcUvVLFA";
links[3]="https://www.youtube.com/embed/uz87owfoXOQ";
links[4]="https://www.youtube.com/embed/SzKtEMcTZfQ";

function openLink() {
  // Väljer en random
  var i = Math.floor(Math.random() * links.length);
  return links[i];
}
