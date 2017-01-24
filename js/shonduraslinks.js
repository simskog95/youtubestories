// Länkar till Shonduras filmer
var links = new Array();
links[0]="https://www.youtube.com/embed/Z3IkpvTAVUg";
links[1]="https://www.youtube.com/embed/EppzA9y9Mkc";

function openLink() {
  // Väljer en random
  var i = Math.floor(Math.random() * links.length);
  return links[i];
}