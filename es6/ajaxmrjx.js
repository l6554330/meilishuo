/*
* @Author: 周海明
* @Date:   2018-01-16 22:03:33
* @Last Modified by:   周海明
* @Last Modified time: 2018-01-18 20:05:24
*/
//callback=jQuery112408703731435959745_1516246745898&type=mrsx&cid=mrsx&offset=0&limit=20&_=1516246745899
 define(["jquery"],function ($) {
 	// console.log($)
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
	.done(function(res) {
		// console.log(res)
		var html = "";
		$(res.data.rows).each(function(index, el) {
			// console.log(el.title)
			// console.log(el.image) 
			html += `<div class="item">
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
		$(".content").append(html);
		$(".item").each(function(index, el) {
			if ((index + 1)%5 == 0) {
				// console.log()
				$($(".content .item")[index]).addClass('is-side')
			}
		});
			
	})
	
})   
//  /^jQuery\d+/i.test("jQuery1516254819144")
// true
// /^\/\*{2}\//i.test("/**/jQuery1516254819144")
// true