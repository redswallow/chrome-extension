// ==UserScript==
// @name          a new navigation of Dmm
// @author        redswallow
// @version       0.1
// ==/UserScript==

function main($) {
	'use strict';
	jQuery.noConflict();
	$('.tdmm').replaceWith("<img src='"+$('.pd-3>a').attr("href")+"' />")
}

!
function loader(i) {
	var script, requires = ['http://img3.douban.com/js/packed_jquery.min6301986802.js'],
	    head = document.getElementsByTagName('head')[0],
	    makeScript = function () {
		    script = document.createElement('script');
		    script.type = 'text/javascript';
	    },
	    loadLocal = function (fn) {
		    makeScript();
		    script.textContent = '(' + fn.toString() + ')(jQuery);';
		    head.appendChild(script);
	    };
	(function (i) {
		makeScript();
		script.src = requires[i];
		script.addEventListener('load', function () {
			++i !== requires.length ? loader(i):loadLocal(main);
		}, true);
		head.appendChild(script);
	})(i || 0);
}();

