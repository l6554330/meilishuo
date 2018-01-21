/*
* @Author: 周海明
* @Date:   2018-01-20 21:07:38
* @Last Modified by:   周海明
* @Last Modified time: 2018-01-21 22:59:27
*/
define(["jquery"],function ($) {
	class List{
		constructor(){
			this.init()
		}
		// 初始化
		init(){
			this.all = $(".all");
			this.slideer = $(".slideer");
			this.J_Graphic = $("#J_Graphic");
			this.panel_title = $(".panel-title h1");
			this.img_box = $(".img-box title");
			this.list = $(".list .box ul");
			this.repeat_list = $(".repeat-list");
			this.recommend_list = $(".recommend-list ul");
			this.J_RatesBuyerList = $("#J_RatesBuyerList");
			this.tables = $(".size-table");
			this.graphic_block = $(".graphic-block");

			this.all.on("mouseover",$.proxy(this.show,this));
			this.slideer.on("mouseover",$.proxy(this.show,this));
			this.slideer.on("mouseout",$.proxy(this.hide,this));
			this.all.on("mouseout",$.proxy(this.hide,this));
			this.ajax("../json/maoni.json","GET",$.proxy(this.graphic,this))
			this.$ajax("http://event.meilishuo.com/provider/certificate","GET","jsonp",{
				itemId:"1kovcl4"
			},$.proxy(this.load_goods,this))
			// this.ds = unescape("%7B%22iidE%22%3A%221kovcl4%22%2C%22pid%22%3A7119%2C%22plat%22%3A%22pc%22%2C%22pageSize%22%3A3%7D");
			// this.ds = unescape("ace30ed42f671a046754c42b418ce4b2");
			// console.log(this.ds) 
			this.ajax("../json/tonglei.json","GET",$.proxy(this.load_class,this)) 
			this.ajax("../json/klyk.json","GET",$.proxy(this.load_look,this)) 
			this.ajax("../json/comment.json","GET",$.proxy(this.load_comment,this)) 
			this.ajax("../json/maoni.json","GET",$.proxy(this.load_table,this)) 
			this.ajax("../json/maoni.json","GET",$.proxy(this.load_size,this)) 
			//http://api.meilishuo.com/h5/mwp.darwin.get/3/?callback=jQuery32105110135339105788_1516536817783&mw-appkey=100066&mw-t=1516533492464&mw-ttid=NMMain%2540mls_pc_1.0&mw-sign=ace30ed42f671a046754c42b418ce4b2&callback=mwpCb5&data%5BiidE%5D=1kovcl4&data%5Bpid%5D=7119&data%5Bplat%5D=pc&data%5BpageSize%5D=3&_=1516536817784
		}
		// 显示
		show(){
			this.slideer.show();
		}
		// 隐藏
		hide(){
			this.slideer.hide();
		}
		// 获取本地数据
		ajax(url,type,callback){
			// console.log(callback)
			// let cl = callback;
			$.ajax({
				url: url,  
				type: type,
				dataTupr:"json",
				success:function (res) {
					// console.log(res)
					// console.log(callback)
					callback(res) 
				}
			})
			
		}
		$ajax(url,type,dataType,data,callback){
			$.ajax({
				url: url,
				type: type,
				dataType: dataType,
				data: data,
			})
			.done(function(res) {
				callback(res)
			})
			
		}
		// 图文详情
		graphic(res){
			// console.log(res) 
			let html = "";
			$(res.data.detailInfos.detailImage[0].list).each(function(index, el) { 
				// console.log(el)
				html += `	<div class="graphic-pic"> 
	            				<div class="pic-box" style = 'font-size:0'> 
	            					<img class="lazy" style="left: -350px; display: block;" src="${el}"> 
	            				</div> 
	            			</div> `
			});
			this.J_Graphic.append(html);
		}
		load_goods(res){
			// console.log(res)
			this.panel_title.html = res.data.title;
			this.img_box.src = res.data.url;
		}
		load_comment(res){
			// console.log(res)
			let html = "";
			$(res.data.list).each(function(index, el) {
				html += `<li> 
							<a href="javascript:;" target="_blank"> 
								<img src="${el.image}" width="120"> 
							</a> 
							<span>￥${el.discountPrice}</span> 
						</li>`;
			});
			this.list.append(html);
			
		}
		load_look(res){
			console.log(res)
			let html = "";
			$(res.data.list).each(function(index, el) {
				html += `	<li> 
								<a class="pic" href="javascript:;" target="_blank"> 
									<img class="lazy" src="${el.image}_220x330.jpg" style="display: block;"> 
								</a> 
								<a class="title" href="javascript:;" target="_blank">
									${el.title}
								</a>
								<div class="info">
									<div class="price"> 
										<em class="price-u">¥</em> 
										<span class="price-n">${el.price}</span> 
									</div> 
									<div class="fav"> 
										<em class="fav-i"></em>
										<span class="fav-n">${el.cfav}</span> 
									</div> 
								</div> 
							</li>`
			});
			this.repeat_list.append(html)

		}
		load_class(res){
			// console.log(res)
			let html = "";
			$(res.data.list).each(function(index, el) {
				html += `	<li> 
								<a class="pic" href="javascript:;" target="_blank"> 
									<img class="lazy" src="${el.image}_220x330.jpg" style="display: block;"> 
								</a> 
								<a class="title" href="javascript:;" target="_blank">
									${el.title}
								</a>
								<div class="info">
									<div class="price"> 
										<em class="price-u">¥</em> 
										<span class="price-n">${el.price}</span> 
									</div> 
									<div class="fav"> 
										<em class="fav-i"></em>
										<span class="fav-n">${el.cfav}</span> 
									</div> 
								</div> 
							</li>`
			});
			this.recommend_list.append(html)
		}
		load_comment(res){
			let html = "";
			$(res.data.list).each(function(index, el) {
				html += `	<div class="item clear" data-id="1yvlcn6"> 
			            		<div class="info"> 
			            			<div class="info-w"> 
			            				<!-- 评价用户、时间 --> 
			            				<div class="info-t clear">  
			            					<span class="name">${el.userInfo.uname}</span>  
			            					<span class="date">${el.formatDate}</span> 
			            				</div>  
			            				<!-- 评价内容 --> 
			            				<div class="info-m">${el.content}</div>  
			            				<!-- 商品属性 --> 
			            				<div class="info-b clear">   
			            					<span>${el.stock[0]}</span>  
			            					<span>${el.stock[1]}</span>     
			            				</div>     
			            			</div> 
			            		</div> 
			            		<div class="face">  
			            			<img src="${el.userInfo.avatar}_64x64.jpg">  
			            		</div> 
			            	</div> `
			});
			this.J_RatesBuyerList.append(html)
		}
		load_table(res){
			// console.log(res.data.itemParams.rule.tables[0])
			let html = "";
			$(res.data.itemParams.rule.tables[0]).each(function(index, el) {
				html += `<tr>  
							<td>${el[0]}</td>  
							<td>${el[1]}</td>  
							<td>${el[2]}</td>  
							<td>${el[3]}</td>  
						</tr>   `
			});
			// console.log(html)
			this.tables.append(html);
		}
		load_size(res){
			// console.log(res.data.itemParams.rule.tables[0])
			let html = "";
			$(res.data.itemParams.info.images).each(function(index, el) {
				html += `<div class="graphic-pic graphic-pic-hf"> 
    						<div class="pic-box"> 
    							<img class="lazy" style="left: -350px; display: block;" src="${el}_750x999.jpg"> 
    						</div> 
    					</div>    `
			});
			// console.log(html)
			this.graphic_block.append(html);
		}
	}
	new List();
})