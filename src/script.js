/*
* @Author: 周海明
* @Date:   2018-01-16 22:03:33
* @Last Modified by:   周海明
* @Last Modified time: 2018-01-18 20:26:49
*/
//callback=jQuery112408703731435959745_1516246745898&type=mrsx&cid=mrsx&offset=0&limit=20&_=1516246745899
define(["jquery"],function ($) {
	$(".banner_box").on("mouseover",(function(event) {
		$(".b_btn a").css({
			display:"inline"
		})
		// .end()
		.stop()
		.animate({
			opacity:.3
		},300 )
	}));
	$(".banner_box").on("mouseout",(function(event) {
		$(".b_btn a").css({
			display:"none"
		})
		.stop()
		.animate({
			opacity:0
		},300)
	}));
	
})   
//  /^jQuery\d+/i.test("jQuery1516254819144")
// true
// /^\/\*{2}\//i.test("/**/jQuery1516254819144")
// true