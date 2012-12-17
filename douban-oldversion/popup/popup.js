
var radioEls = document.querySelectorAll("#dbOption input");

if (localStorage.dbCSS == "true") {
  radioEls[0].checked = true;
} else {
  radioEls[1].checked = true;
}

radioEls[0].onclick = function() {
  localStorage.dbCSS = "true";
  chrome.extension.sendMessage({"dbCSS": "true"});
};
radioEls[1].onclick = function() {
  localStorage.dbCSS = "false";
  chrome.extension.sendMessage({"dbCSS": "false"});
};

