/*
* @Author: 周海明
* @Date:   2018-01-18 18:15:48
* @Last Modified by:   周海明
* @Last Modified time: 2018-01-18 23:10:23
*/
//http://mce.meilishuo.com/jsonp/get/3?callback=jQuery112403653239572857543_1516270716722&offset=0&frame=0&trace=0&limit=10&endId=0&pid=78492&page=1&_=1516270716723
define(["jquery"],function ($) {
 	// console.log($)
 	class Ajaxset {
 		constructor(){
 			// console.log(1)
 			this.page = 1;
 			this.form = 0;
 			this.timer = null;
 			this.ajaxs();
 			
 			$(window).on("scroll",$.proxy(this.load_img,this)) 
 		} 
 		ajaxs(){
 			// console.log($(".pullup"))
 			if (this.page > 7) {
 				$(".pullup").css({
					display : "none"
				})
				// console.log(1)
 			}
 			// console.log(1)
 			var that = this;
 			$.ajax({
				url: 'http://mce.meilishuo.com/jsonp/get/3', 
				dataType: 'jsonp',
				data: {
					offset : 0,
					frame : this.form ,
					trace : 0,
					limit : 10,
					endId : 0,
					pid : 78492,
					page : this.page
				}
			})
			.done(function (res) {
				$.proxy(that.ajaxRes(res),that)
			})
			// console.log(1)
 		}
 		ajaxRes(res) { 
			// console.log(res)
			var html = "";
			$(res.data.list).each(function(index, el) {
				html += `<div class="item">
							<a href="javascript:;" class="pic_box" style = 'background-image:url(${el.item_pc_img});background-size: cover'>	
							</a>
							<div class="info">
								<div class="part">
									<div class="price">
										${el.price}
									</div>
									<div class="collect">
										<i class="icon_star"></i>
										${el.itemLikes}
									</div>
								</div>
								<p class="title">
									<i class="icon_select"></i>
									${el.title}
								</p>
							</div>
						</div>`;

			});
			$(".waterfall-container").append(html);
			$(".item").each(function(index, el) {
				if ((index + 1)%5 == 0) {
					$($(".waterfall-container .item")[index]).addClass('is-side')
				}
			});
			
			
		}
		load_img(){
			clearTimeout(this.timer)
			var offset = $(".waterfall-container .item:last").offset();
			var that = this;
			if (($(window).scrollTop() + $(window).height()) > offset.top) {
					this.timer = setTimeout(function () {
						if (that.page == 8) {
							return 0;
						}else{
							// console.log(1)
							that.page++;
							that.form++;
							that.ajaxs()
						}
					},500)
			}
		}
 	}
 	new Ajaxset();
}) 