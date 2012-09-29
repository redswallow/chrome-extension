// ==UserScript==
// @name          a new navigation of Douban
// @author        redswallow
// @include       http://www.douban.com/*
// @match         http://www.douban.com/*
// @include       http://book.douban.com/*
// @match         http://book.douban.com/*
// @include       http://music.douban.com/*
// @match         http://music.douban.com/*
// @include       http://movie.douban.com/*
// @match         http://movie.douban.com/*
// @version       0.1
// ==/UserScript==

function main($) {
	function delete_ad(){
		$('.db-ad').css("display","none");
		$('#dale_group_topic_new_top_right').css("display","none");
		$('#dale_group_home_middle_right').css("display","none");
	};

	function loved(){
		$('.btn-like').text("爱过");
		$('.btn-fav').text("爱过");
		$('.like').text("爱过");
		$('.btn-action-reply').text("來一發");
	}

	function hover(){
		$('.obu').hover(
				function () {
					$(this).append($("<span>**</span>"));
				}, 
				function () {
					$(this).find("span:last").remove();
				}

			       )
	}

	function pic_hover(){
		$('.attachments > .media >img').hover(function() {
			$(this).css({
				width: function(index, value) {
					       return parseFloat(value) * 1.2;
				}, 
				height: function(index, value) {
					return parseFloat(value) * 1.2;
				}

			});
		});
	}

	function read_by_cate(){
		$('.status-item').filter(function (index){return $(this).attr("data-object-kind") != "1002";}).css("display","none")
	}

	'use strict';
	jQuery.noConflict();
	loved();
	delete_ad();
	//hover();
	//pic_click()
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

