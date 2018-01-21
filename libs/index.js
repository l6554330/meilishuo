/*
* @Author: 周海明
* @Date:   2018-01-11 11:24:32
* @Last Modified by:   周海明
* @Last Modified time: 2018-01-20 21:08:29
*/
require(["scripts/config.js"],function ($) {
	// console.log(1)
	require(["jquery","script","ajaxmrjx","Carousel","ajaxmlyx","ajaxhotword","formva","ajaxmh","list"],function($,script,ajaxmrjx,Carousel,ajaxmlyx,ajaxhotword,formva,ajaxmh,list) {
		// 搜索框下面的nav
		ajaxhotword.init();
		// 模糊搜索
		ajaxmh.init();
		// 瀑布流加载
 		ajaxmlyx.ajaxs();
		// 加载优选
		ajaxmrjx.init();
		// 表单验证
		formva.init();
		// 轮播图
		Carousel.init();
	})
})