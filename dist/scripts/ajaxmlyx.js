"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
* @Author: 周海明
* @Date:   2018-01-18 18:15:48
* @Last Modified by:   周海明
* @Last Modified time: 2018-01-18 23:10:23
*/
//http://mce.meilishuo.com/jsonp/get/3?callback=jQuery112403653239572857543_1516270716722&offset=0&frame=0&trace=0&limit=10&endId=0&pid=78492&page=1&_=1516270716723
define(["jquery"], function ($) {
	// console.log($)
	var Ajaxset = function () {
		function Ajaxset() {
			_classCallCheck(this, Ajaxset);

			// console.log(1)
			this.page = 1;
			this.form = 0;
			this.timer = null;
			this.ajaxs();

			$(window).on("scroll", $.proxy(this.load_img, this));
		}

		_createClass(Ajaxset, [{
			key: "ajaxs",
			value: function ajaxs() {
				// console.log($(".pullup"))
				if (this.page > 7) {
					$(".pullup").css({
						display: "none"
					});
					// console.log(1)
				}
				// console.log(1)
				var that = this;
				$.ajax({
					url: 'http://mce.meilishuo.com/jsonp/get/3',
					dataType: 'jsonp',
					data: {
						offset: 0,
						frame: this.form,
						trace: 0,
						limit: 10,
						endId: 0,
						pid: 78492,
						page: this.page
					}
				}).done(function (res) {
					$.proxy(that.ajaxRes(res), that);
				});
				// console.log(1)
			}
		}, {
			key: "ajaxRes",
			value: function ajaxRes(res) {
				// console.log(res)
				var html = "";
				$(res.data.list).each(function (index, el) {
					html += "<div class=\"item\">\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"pic_box\" style = 'background-image:url(" + el.item_pc_img + ");background-size: cover'>\t\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t<div class=\"part\">\n\t\t\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t\t\t" + el.price + "\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"collect\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"icon_star\"></i>\n\t\t\t\t\t\t\t\t\t\t" + el.itemLikes + "\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<p class=\"title\">\n\t\t\t\t\t\t\t\t\t<i class=\"icon_select\"></i>\n\t\t\t\t\t\t\t\t\t" + el.title + "\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>";
				});
				$(".waterfall-container").append(html);
				$(".item").each(function (index, el) {
					if ((index + 1) % 5 == 0) {
						$($(".waterfall-container .item")[index]).addClass('is-side');
					}
				});
			}
		}, {
			key: "load_img",
			value: function load_img() {
				clearTimeout(this.timer);
				var offset = $(".waterfall-container .item:last").offset();
				var that = this;
				if ($(window).scrollTop() + $(window).height() > offset.top) {
					this.timer = setTimeout(function () {
						if (that.page == 8) {
							return 0;
						} else {
							// console.log(1)
							that.page++;
							that.form++;
							that.ajaxs();
						}
					}, 500);
				}
			}
		}]);

		return Ajaxset;
	}();

	new Ajaxset();
});