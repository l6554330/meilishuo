/*
* @Author: 周海明
* @Date:   2018-01-20 11:13:23
* @Last Modified by:   周海明
* @Last Modified time: 2018-01-20 20:44:37
*/
define(["jquery"],function ($) {
	// console.log(1)
	 class Ajaxmh{
	 	constructor(){
	 		// console.log(1)
	 	}
	 	// 初始化
	 	init(){
	 		// 获取元素
	 		this.seach = $("#search_txt");
	 		this.suggest = $(".suggest-box");
	 		this.seach.on("input",$.proxy(this.mh,this))
	 	}
	 	// ajax获取
	 	ajax(){
	 		//https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&json=1&p=3&sid=25565_1420_21100_20927&req=2&csor=1&cb=jQuery110206067212340752766_1516422870800&_=1516422870803
	 		let val = this.seach.val();
	 		let that = this;
	 		$.ajax({
	 			url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+val+'&cb=callback',
	 			type:"GET", 
	 			dataType:"jsonp",
	 			jsonpCallback:"callback",
	 			data:{
	 				wd:val,  
	 				
	 			},
	 			// 成功时返回
	 			success:function (res) {
 					that.content(res)
 					// console.log(res)
 				}
	 		})

	 		
	 	}
	 	// 事件触发
	 	mh(){
	 		// console.log(1)
	 		this.ajax()
	 	}
	 	// 加载数据
	 	content(res){
	 		// console.log(res.s)
	 		// res.s
	 		this.suggest.show()
	 		this.suggest.html("");
			var html = "";
	 		$(res.s).each(function(index, el) {
	 			html += `<div>${el}</div>`;
	 			// console.log(html)
	 		});
	 		// console.log(html)
	 		this.suggest.append(html)
	 	}
	 }
	 return new Ajaxmh()
})