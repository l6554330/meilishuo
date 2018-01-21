/*
* @Author: 周海明
* @Date:   2018-01-16 22:03:33
* @Last Modified by:   周海明
* @Last Modified time: 2018-01-20 21:00:49
*/
//callback=jQuery112408703731435959745_1516246745898&type=mrsx&cid=mrsx&offset=0&limit=20&_=1516246745899
 define(["jquery"],function ($) {
 	// console.log($)
 	class Mljx{
 		constructor(){

 		}
 		// c初始化
 		init(){
 			this.html = "";
 			this.ajax();
 		}
 		// 加载数据
 		ajax(){
 			let that = this;
 			$.ajax({
				url: 'http://simba-api.meilishuo.com/mlselection/top/v1/topGoodsList/h5',
				dataType: 'jsonp',
				data: {
					"type" : "mrsx",
					"cid" : "mrsx",
					"ffset" : 0,
					"limit" : 20
				}
			})
			// 加载成功
			.done(function(res) {
				// console.log(res)
				$.proxy(that.load_img(res),that)
					
			})
 		}
 		// 添加到页面
 		load_img(res){
 			// console.log(this)
 			let that = this;
			$(res.data.rows).each(function(index, el) {
				that.html += `<div class="item">
							<a href="javascript:;" class="pic_box" style = 'background-image:url(${el.image});
	    background-size: cover'>
								
							</a>
							<div class="info">
								<div class="part">
									<div class="price">
										${el.discountPrice}
									</div>
									<div class="collect">
										<i class="icon_star"></i>
										${el.collectNum}
									</div>
								</div>
								<p class="title">
									<i class="icon_select"></i>
									${el.title}
								</p>
							</div>
						</div>`;

			});
			$(".content").append(this.html);
			// 样式调整
			$(".item").each(function(index, el) {
				if ((index + 1)%5 == 0) {
					// console.log()
					$($(".content .item")[index]).addClass('is-side')
				}
			});
 		}
 	}
	return new Mljx();
	
})   
//  /^jQuery\d+/i.test("jQuery1516254819144")
// true
// /^\/\*{2}\//i.test("/**/jQuery1516254819144")
// true