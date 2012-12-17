
function removeOldDouban() {
  var el = document.getElementById("old_douban");
  if (el) {
    el.parentNode.removeChild(el);
  }
}

removeOldDouban();
