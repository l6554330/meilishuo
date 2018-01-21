/*
* @Author: 周海明
* @Date:   2018-01-19 20:50:59
* @Last Modified by:   周海明
* @Last Modified time: 2018-01-20 21:04:24
*/
define(["jquery"],function ($) {
	class Formva{
		constructor(){
		}
		// 初始化
		init(){
			this.tip = $(".error_tip");
			this.uip = $('#ui_input');
			this.list = $(".list_mod");
			this.mb = $(".mobile");
			// console.log(this.tip)
			this.psw = $("#psw")
			this.uip.on("blur",$.proxy(this.textBlur,this))
			this.psw.on("blur",$.proxy(this.pass,this))
			this.mb.on("blur",$.proxy(this.mobile,this))
			this.list.on("click",$.proxy(this.active,this))
		}
		// 表单验证
		textBlur(){
			let val = this.uip.val();
			// console.log($(val).length)
			// console.log(val.length)
			// console.log(val.length) 
			let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
			// console.log(val.length) 
			// console.log(if (val.match(reg)))
			if (val.match(reg) || val.length == 11 && val != "") { 
				console.log(1) 
				$(this.tip).hide();
			}else {
				this.tip.html("请输入正确的账号");
				$(this.tip).show();  
			}
			// if (val.match(reg2)) {  
			// 	console.log(2)
			// 	$(this.tip).hide(); 
			// }else {
			// 	this.tip.html("请输入至少一个字母开头的账号");
			// 	$(this.tip).show();
			// }
			// if () {
			// 	// console.log(val.length) 
			// 	$(this.tip).hide();
			// }else {
			// 	console.log(1)
			// 	this.tip.html("请输入正确的手机账号");
			// 	$(this.tip).show();
			// }
		}
		// 手机号验证
		mobile(){
			let val = this.mb.val();
			if (val.length == 11 && val != "") {
				// console.log(val.length) 
				$(this.tip).hide();  	
			}else {
				console.log(1)
				this.tip.html("请输入正确的手机账号");
				$(this.tip).show();
			}
		}
		// 密码验证
		pass(){
			let str = this.psw.val();
				
			if (str.length != "") {
				$(this.tip).hide();
			}else {
				this.tip.html("请输入密码");
				$(this.tip).show();  
			}
		}
		// 样式调整
		active(e){
			for (var i = 0; i < this.list.length; i++) {
				this.list[i].index = i;
				$(this.list[i]).removeClass('tab_on')
				$($(".mod_box")[i]).hide();
			}
			$(this.list[e.target.index]).addClass('tab_on');
			$($(".mod_box")[e.target.index]).show();
		}
	}
	return new Formva();
})