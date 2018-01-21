/*
* @Author: 周海明
* @Date:   2018-01-19 10:03:57
* @Last Modified by:   周海明
* @Last Modified time: 2018-01-20 20:41:05
*/
define(["jquery"],function ($) {
	// console.log(1)
	class Hotword{
		constructor(){
			// this.init()
			// console.log(1)
		}
		// 初始化
		init(){
			this.ajax();
			// console.log(1)
		}
		// AJAX获取
		ajax(){
			//http://mce.mogucdn.com/jsonp/multiget/3?pids=5604,5571&callback=jQuery1124003330284249809656_1516327663315&_=1516327663316
			var that = this;
			// console.log(this)
			$.ajax({
				url: 'http://mce.mogucdn.com/jsonp/multiget/3?pids=5604,5571',
				dataType: 'jsonp'
			})
			.done(function(res) {
				// console.log(that)
				$.proxy(that.load(res),that);
			})
			
		}
		// 商品加载
		load(res){
			// var re = 5571;
			// console.log(res.data.(5571))   
			var html = "";
			$(res.data[5571].list).each(function(index, el) { 
				// console.log(el)
				html += `<a style = 'color:${el.color}' href="">${el.word}</a>`;
			});
			$(".hotword").append(html);  
		}
	}
	return new Hotword();
})