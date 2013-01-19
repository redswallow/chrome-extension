// ==UserScript==
// @name          a new navigation of Dmm
// @author        redswallow
// @version       0.1
// ==/UserScript==

load=function () {
	if($('.pd-3>a').length){
		$('.tdmm').replaceWith("<img src='"+$('.pd-3>a').attr("href")+"' />")
	}
}

load()
