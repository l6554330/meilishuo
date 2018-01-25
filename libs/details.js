/*
* @Author: 周海明
* @Date:   2018-01-23 12:26:08
* @Last Modified by:   周海明
* @Last Modified time: 2018-01-25 10:16:27
*/
require(["scripts/config.js"],function ($) {
	// console.log(1)
	require(["jquery","list","ajaxmh","shoppingCar","script","magnifying"],function($,list,ajaxmh,shoppingCar,script,magnifying) {
		list.init();
		// 模糊搜索
		ajaxmh.init();
		// 加入购物车
		shoppingCar.init();                                             
	})
})