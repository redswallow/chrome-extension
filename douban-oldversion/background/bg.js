var updateTab = function(tab) {
  if (!/http(.+)douban\.com/.test(tab.url)) return;
  file = localStorage.dbCSS === "true" ? "./content_script/renderCSS.js" : "./content_script/removeCSS.js";
  chrome.tabs.executeScript(tab.id, {
    file : file,
    runAt: "document_start"
  }, function() {});
};

if (localStorage.dbCSS != "false") {
  localStorage.dbCSS = "true";
}

chrome.tabs.getAllInWindow(function(tabs) {
  tabs.forEach(updateTab);
});

chrome.extension.onMessage.addListener(function(req) {
  chrome.tabs.getAllInWindow(function(tabs) {
    tabs.forEach(updateTab);
  });
});

chrome.tabs.onUpdated.addListener(function(id, data, tab) {
  updateTab(tab);
});
