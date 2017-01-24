// Länkar till Caseys filmer
var links = new Array();
links[0]="https://www.youtube.com/embed/At3xcj-pTjg";
links[1]="https://www.youtube.com/embed/7QpJ_VDbIPA";

function openLink() {
  // Väljer en random
  var i = Math.floor(Math.random() * links.length);
  return links[i];
}
