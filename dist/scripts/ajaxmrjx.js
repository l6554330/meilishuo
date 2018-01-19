'use strict';

/*
* @Author: 周海明
* @Date:   2018-01-16 22:03:33
* @Last Modified by:   周海明
* @Last Modified time: 2018-01-18 20:05:24
*/
//callback=jQuery112408703731435959745_1516246745898&type=mrsx&cid=mrsx&offset=0&limit=20&_=1516246745899
define(["jquery"], function ($) {
	// console.log($)
	$.ajax({
		url: 'http://simba-api.meilishuo.com/mlselection/top/v1/topGoodsList/h5',
		dataType: 'jsonp',
		data: {
			"type": "mrsx",
			"cid": "mrsx",
			"ffset": 0,
			"limit": 20
		}
	}).done(function (res) {
		// console.log(res)
		var html = "";
		$(res.data.rows).each(function (index, el) {
			// console.log(el.title)
			// console.log(el.image) 
			html += '<div class="item">\n\t\t\t\t\t\t<a href="javascript:;" class="pic_box" style = \'background-image:url(' + el.image + ');\n    background-size: cover\'>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class="info">\n\t\t\t\t\t\t\t<div class="part">\n\t\t\t\t\t\t\t\t<div class="price">\n\t\t\t\t\t\t\t\t\t' + el.discountPrice + '\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="collect">\n\t\t\t\t\t\t\t\t\t<i class="icon_star"></i>\n\t\t\t\t\t\t\t\t\t' + el.collectNum + '\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p class="title">\n\t\t\t\t\t\t\t\t<i class="icon_select"></i>\n\t\t\t\t\t\t\t\t' + el.title + '\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>';
		});
		$(".content").append(html);
		$(".item").each(function (index, el) {
			if ((index + 1) % 5 == 0) {
				// console.log()
				$($(".content .item")[index]).addClass('is-side');
			}
		});
	});
});
//  /^jQuery\d+/i.test("jQuery1516254819144")
// true
// /^\/\*{2}\//i.test("/**/jQuery1516254819144")
// true