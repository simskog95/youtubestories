// Länkar till Caseys filmer
var links = new Array();
links[0]="https://www.youtube.com/embed/At3xcj-pTjg";
links[1]="https://www.youtube.com/embed/7QpJ_VDbIPA";
links[2]="https://www.youtube.com/embed/84WIaK3bl_s";
links[3]="https://www.youtube.com/embed/dtm_tIkEbMc";
links[4]="https://www.youtube.com/embed/8sqY6QXtTsI";

function openLink() {
  // Väljer en random
  var i = Math.floor(Math.random() * links.length);
  return links[i];
}
