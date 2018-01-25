"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(["jquery"], function ($) {
	// 点击跳转详情页
	var Particulars = function () {
		function Particulars() {
			_classCallCheck(this, Particulars);

			var that = this;
			setTimeout(function () {
				that.init();
			}, 300);
		}

		_createClass(Particulars, [{
			key: "init",
			value: function init() {
				this.item = $(".item").parent();
				this.cart_goods_t = $(".cart_goods_t").parent();
				this.titleLoca = $(".titleLoca");

				// 购物结算
				// 全选
				this.s_all_h = $("#s_all_h");
				// 店铺全选
				this.s_shopall = $(".s_shopall");
				// 单选
				this.cart_thcheck = $(".cart_thcheck");

				this.md_process_sd = $(".md_process_sd");

				// 单选框选中
				this.s_all_h.on("click", $.proxy(this.cheack, this));
				this.s_shopall.on("click", $.proxy(this.cheackStore, this));
				this.cart_thcheck.on("click", $.proxy(this.cheackOne, this));

				// 和
				this.pop;
				this.goodsSum = $(".goodsSum");

				// 点击删除
				this.del_cart_goods = $(".del-cart-goods");
				this.clones = $(".clones");
				this.clones.on("click", $.proxy(this.coles, this));
				this.del_cart_goods.on("click", $.proxy(this.coles, this));

				// 清空购物车
				this.cartRemoveChecked = $("#cartRemoveChecked");
				this.cartRemoveChecked.on("click", $.proxy(this.cart, this));
				// 结算
				this.payBtn = $("#payBtn");
				this.cart_nobdbtm = $(".cart_nobdbtm");
				this.J_productPay = $("#J_productPay");
				this.payhover = $(".payhover .num");

				this.item.on("click", $.proxy(this.list, this));
				this.cart_goods_t.on("click", $.proxy(this.listShopping, this));
				this.payBtn.on("click", $.proxy(this.sum, this));
				this.titleLoca.on("click", $.proxy(this.listSmllShopping, this));
			}
		}, {
			key: "cart",
			value: function cart() {
				if (!$.cookie("shopping")) {
					return 0;
				}
				var oCookie = JSON.parse($.cookie("shopping"));
				if ($(this.s_all_h).prop("checked") == true) {
					$.cookie("shopping", "");
					location.reload();
				} else {
					var flag = false;
					$(this.cart_thcheck).each(function (index, el) {
						if ($(el).prop("checked") == true) {
							oCookie.splice(index, 1);
							flag = true;
						}
					});
					var aCookie = JSON.stringify(oCookie);
					if (flag) {
						$.cookie("shopping", aCookie, {
							"path": "/",
							"expires": new Date("2019-8-8")
						});
						location.reload();
					}
				}
			}
		}, {
			key: "list",
			value: function list(e) {
				$.cookie("list", $(e.target).attr("data-id"));
				location.href = "details.html";
			}
		}, {
			key: "listShopping",
			value: function listShopping(e) {
				$.cookie("list", $(e.target).parent().attr("data-id"));
				location.href = "details.html";
			}
		}, {
			key: "listSmllShopping",
			value: function listSmllShopping(e) {
				$.cookie("list", $(e.target).parent().attr("data-id"));
				location.href = "details.html";
			}
		}, {
			key: "coles",
			value: function coles(e) {
				var id = $(e.target).attr("data-id");
				var color = $(e.target).attr("data-color");
				var size = $(e.target).attr("data-size");
				if (!$.cookie("shopping")) {
					return 0;
				}
				var oCookie = JSON.parse($.cookie("shopping"));
				$(oCookie).each(function (index, el) {
					if (el.id == id && el.color == color && el.size == size) {
						oCookie.splice(index, 1);
					}
				});
				var aCookie = JSON.stringify(oCookie);
				$.cookie("shopping", aCookie, {
					"path": "/",
					"expires": new Date("2019-8-8")
				});
				location.reload();
			}
		}, {
			key: "cheack",
			value: function cheack(e) {
				if ($(e.target).prop("checked") != true) {
					this.s_all_h.prop("checked", false);
					this.cart_thcheck.prop("checked", false);
					this.s_shopall.prop("checked", false);
					return 0;
				}
				this.s_all_h.prop("checked", true);
				this.s_shopall.prop("checked", true);
				this.cart_thcheck.prop("checked", true);
				if (!$.cookie("shopping")) {
					return 0;
				}
				var pop = 0;
				var oCookie = JSON.parse($.cookie("shopping"));
				$(oCookie).each(function (index, el) {
					pop += parseFloat(el.priceSum);
				});
				this.goodsSum.html("¥" + pop);
			}
		}, {
			key: "cheackStore",
			value: function cheackStore(e) {
				if ($(e.target).prop("checked") != true) {
					this.cart_thcheck.prop("checked", false);
					return 0;
				}
				this.cart_thcheck.prop("checked", true);
				this.s_shopall.prop("checked", true);
				if (!$.cookie("shopping")) {
					return 0;
				}
				var pop = 0;
				var oCookie = JSON.parse($.cookie("shopping"));
				$(oCookie).each(function (index, el) {
					pop += parseFloat(el.priceSum);
				});
				this.goodsSum.html("¥" + pop);
			}
		}, {
			key: "cheackOne",
			value: function cheackOne() {
				if (!$.cookie("shopping")) {
					return 0;
				}
				var pop = 0;
				var oCookie = JSON.parse($.cookie("shopping"));
				var that = this;
				$(oCookie).each(function (index, el) {
					if ($(that.cart_thcheck[index]).prop("checked") == true) {
						if (el.id == $(that.cart_thcheck).attr("data-stockid")) {
							pop += parseFloat(el.priceSum);
						}
					}
				});
				this.goodsSum.html("¥" + pop.toFixed(2));
			}
		}, {
			key: "sum",
			value: function sum() {
				this.cart_nobdbtm.hide();
				this.J_productPay.show();
				this.payhover.html(this.goodsSum.html());

				this.md_process_sd.width("500");
			}
		}]);

		return Particulars;
	}();

	new Particulars();
});