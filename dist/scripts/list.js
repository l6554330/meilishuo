"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
* @Author: 周海明
* @Date:   2018-01-20 21:07:38
* @Last Modified by:   周海明
* @Last Modified time: 2018-01-21 22:59:27
*/
define(["jquery"], function ($) {
	var List = function () {
		function List() {
			_classCallCheck(this, List);

			this.init();
		}
		// 初始化


		_createClass(List, [{
			key: "init",
			value: function init() {
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

				this.all.on("mouseover", $.proxy(this.show, this));
				this.slideer.on("mouseover", $.proxy(this.show, this));
				this.slideer.on("mouseout", $.proxy(this.hide, this));
				this.all.on("mouseout", $.proxy(this.hide, this));
				this.ajax("../json/maoni.json", "GET", $.proxy(this.graphic, this));
				this.$ajax("http://event.meilishuo.com/provider/certificate", "GET", "jsonp", {
					itemId: "1kovcl4"
				}, $.proxy(this.load_goods, this));
				// this.ds = unescape("%7B%22iidE%22%3A%221kovcl4%22%2C%22pid%22%3A7119%2C%22plat%22%3A%22pc%22%2C%22pageSize%22%3A3%7D");
				// this.ds = unescape("ace30ed42f671a046754c42b418ce4b2");
				// console.log(this.ds) 
				this.ajax("../json/tonglei.json", "GET", $.proxy(this.load_class, this));
				this.ajax("../json/klyk.json", "GET", $.proxy(this.load_look, this));
				this.ajax("../json/comment.json", "GET", $.proxy(this.load_comment, this));
				this.ajax("../json/maoni.json", "GET", $.proxy(this.load_table, this));
				this.ajax("../json/maoni.json", "GET", $.proxy(this.load_size, this));
				//http://api.meilishuo.com/h5/mwp.darwin.get/3/?callback=jQuery32105110135339105788_1516536817783&mw-appkey=100066&mw-t=1516533492464&mw-ttid=NMMain%2540mls_pc_1.0&mw-sign=ace30ed42f671a046754c42b418ce4b2&callback=mwpCb5&data%5BiidE%5D=1kovcl4&data%5Bpid%5D=7119&data%5Bplat%5D=pc&data%5BpageSize%5D=3&_=1516536817784
			}
			// 显示

		}, {
			key: "show",
			value: function show() {
				this.slideer.show();
			}
			// 隐藏

		}, {
			key: "hide",
			value: function hide() {
				this.slideer.hide();
			}
			// 获取本地数据

		}, {
			key: "ajax",
			value: function ajax(url, type, callback) {
				// console.log(callback)
				// let cl = callback;
				$.ajax({
					url: url,
					type: type,
					dataTupr: "json",
					success: function success(res) {
						// console.log(res)
						// console.log(callback)
						callback(res);
					}
				});
			}
		}, {
			key: "$ajax",
			value: function $ajax(url, type, dataType, data, callback) {
				$.ajax({
					url: url,
					type: type,
					dataType: dataType,
					data: data
				}).done(function (res) {
					callback(res);
				});
			}
			// 图文详情

		}, {
			key: "graphic",
			value: function graphic(res) {
				// console.log(res) 
				var html = "";
				$(res.data.detailInfos.detailImage[0].list).each(function (index, el) {
					// console.log(el)
					html += "\t<div class=\"graphic-pic\"> \n\t            \t\t\t\t<div class=\"pic-box\" style = 'font-size:0'> \n\t            \t\t\t\t\t<img class=\"lazy\" style=\"left: -350px; display: block;\" src=\"" + el + "\"> \n\t            \t\t\t\t</div> \n\t            \t\t\t</div> ";
				});
				this.J_Graphic.append(html);
			}
		}, {
			key: "load_goods",
			value: function load_goods(res) {
				// console.log(res)
				this.panel_title.html = res.data.title;
				this.img_box.src = res.data.url;
			}
		}, {
			key: "load_comment",
			value: function load_comment(res) {
				// console.log(res)
				var html = "";
				$(res.data.list).each(function (index, el) {
					html += "<li> \n\t\t\t\t\t\t\t<a href=\"javascript:;\" target=\"_blank\"> \n\t\t\t\t\t\t\t\t<img src=\"" + el.image + "\" width=\"120\"> \n\t\t\t\t\t\t\t</a> \n\t\t\t\t\t\t\t<span>\uFFE5" + el.discountPrice + "</span> \n\t\t\t\t\t\t</li>";
				});
				this.list.append(html);
			}
		}, {
			key: "load_look",
			value: function load_look(res) {
				console.log(res);
				var html = "";
				$(res.data.list).each(function (index, el) {
					html += "\t<li> \n\t\t\t\t\t\t\t\t<a class=\"pic\" href=\"javascript:;\" target=\"_blank\"> \n\t\t\t\t\t\t\t\t\t<img class=\"lazy\" src=\"" + el.image + "_220x330.jpg\" style=\"display: block;\"> \n\t\t\t\t\t\t\t\t</a> \n\t\t\t\t\t\t\t\t<a class=\"title\" href=\"javascript:;\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t" + el.title + "\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t\t<div class=\"price\"> \n\t\t\t\t\t\t\t\t\t\t<em class=\"price-u\">\xA5</em> \n\t\t\t\t\t\t\t\t\t\t<span class=\"price-n\">" + el.price + "</span> \n\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t<div class=\"fav\"> \n\t\t\t\t\t\t\t\t\t\t<em class=\"fav-i\"></em>\n\t\t\t\t\t\t\t\t\t\t<span class=\"fav-n\">" + el.cfav + "</span> \n\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t</li>";
				});
				this.repeat_list.append(html);
			}
		}, {
			key: "load_class",
			value: function load_class(res) {
				// console.log(res)
				var html = "";
				$(res.data.list).each(function (index, el) {
					html += "\t<li> \n\t\t\t\t\t\t\t\t<a class=\"pic\" href=\"javascript:;\" target=\"_blank\"> \n\t\t\t\t\t\t\t\t\t<img class=\"lazy\" src=\"" + el.image + "_220x330.jpg\" style=\"display: block;\"> \n\t\t\t\t\t\t\t\t</a> \n\t\t\t\t\t\t\t\t<a class=\"title\" href=\"javascript:;\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t" + el.title + "\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t\t<div class=\"price\"> \n\t\t\t\t\t\t\t\t\t\t<em class=\"price-u\">\xA5</em> \n\t\t\t\t\t\t\t\t\t\t<span class=\"price-n\">" + el.price + "</span> \n\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t<div class=\"fav\"> \n\t\t\t\t\t\t\t\t\t\t<em class=\"fav-i\"></em>\n\t\t\t\t\t\t\t\t\t\t<span class=\"fav-n\">" + el.cfav + "</span> \n\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t</li>";
				});
				this.recommend_list.append(html);
			}
		}, {
			key: "load_comment",
			value: function load_comment(res) {
				var html = "";
				$(res.data.list).each(function (index, el) {
					html += "\t<div class=\"item clear\" data-id=\"1yvlcn6\"> \n\t\t\t            \t\t<div class=\"info\"> \n\t\t\t            \t\t\t<div class=\"info-w\"> \n\t\t\t            \t\t\t\t<!-- \u8BC4\u4EF7\u7528\u6237\u3001\u65F6\u95F4 --> \n\t\t\t            \t\t\t\t<div class=\"info-t clear\">  \n\t\t\t            \t\t\t\t\t<span class=\"name\">" + el.userInfo.uname + "</span>  \n\t\t\t            \t\t\t\t\t<span class=\"date\">" + el.formatDate + "</span> \n\t\t\t            \t\t\t\t</div>  \n\t\t\t            \t\t\t\t<!-- \u8BC4\u4EF7\u5185\u5BB9 --> \n\t\t\t            \t\t\t\t<div class=\"info-m\">" + el.content + "</div>  \n\t\t\t            \t\t\t\t<!-- \u5546\u54C1\u5C5E\u6027 --> \n\t\t\t            \t\t\t\t<div class=\"info-b clear\">   \n\t\t\t            \t\t\t\t\t<span>" + el.stock[0] + "</span>  \n\t\t\t            \t\t\t\t\t<span>" + el.stock[1] + "</span>     \n\t\t\t            \t\t\t\t</div>     \n\t\t\t            \t\t\t</div> \n\t\t\t            \t\t</div> \n\t\t\t            \t\t<div class=\"face\">  \n\t\t\t            \t\t\t<img src=\"" + el.userInfo.avatar + "_64x64.jpg\">  \n\t\t\t            \t\t</div> \n\t\t\t            \t</div> ";
				});
				this.J_RatesBuyerList.append(html);
			}
		}, {
			key: "load_table",
			value: function load_table(res) {
				// console.log(res.data.itemParams.rule.tables[0])
				var html = "";
				$(res.data.itemParams.rule.tables[0]).each(function (index, el) {
					html += "<tr>  \n\t\t\t\t\t\t\t<td>" + el[0] + "</td>  \n\t\t\t\t\t\t\t<td>" + el[1] + "</td>  \n\t\t\t\t\t\t\t<td>" + el[2] + "</td>  \n\t\t\t\t\t\t\t<td>" + el[3] + "</td>  \n\t\t\t\t\t\t</tr>   ";
				});
				// console.log(html)
				this.tables.append(html);
			}
		}, {
			key: "load_size",
			value: function load_size(res) {
				// console.log(res.data.itemParams.rule.tables[0])
				var html = "";
				$(res.data.itemParams.info.images).each(function (index, el) {
					html += "<div class=\"graphic-pic graphic-pic-hf\"> \n    \t\t\t\t\t\t<div class=\"pic-box\"> \n    \t\t\t\t\t\t\t<img class=\"lazy\" style=\"left: -350px; display: block;\" src=\"" + el + "_750x999.jpg\"> \n    \t\t\t\t\t\t</div> \n    \t\t\t\t\t</div>    ";
				});
				// console.log(html)
				this.graphic_block.append(html);
			}
		}]);

		return List;
	}();

	new List();
});