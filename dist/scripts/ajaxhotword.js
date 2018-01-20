'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
* @Author: 周海明
* @Date:   2018-01-19 10:03:57
* @Last Modified by:   周海明
* @Last Modified time: 2018-01-19 21:36:49
*/
define(["jquery"], function ($) {
	// console.log(1)
	var Hotword = function () {
		function Hotword() {
			_classCallCheck(this, Hotword);

			this.init();
			// console.log(1)
		}

		_createClass(Hotword, [{
			key: 'init',
			value: function init() {
				this.ajax();
				// console.log(1)
			}
		}, {
			key: 'ajax',
			value: function ajax() {
				//http://mce.mogucdn.com/jsonp/multiget/3?pids=5604,5571&callback=jQuery1124003330284249809656_1516327663315&_=1516327663316
				var that = this;
				// console.log(this)
				$.ajax({
					url: 'http://mce.mogucdn.com/jsonp/multiget/3?pids=5604,5571',
					dataType: 'jsonp'
				}).done(function (res) {
					// console.log(that)
					$.proxy(that.load(res), that);
				});
			}
		}, {
			key: 'load',
			value: function load(res) {
				var re = 5571;
				// console.log(res.data.(5571))   
				var html = "";
				$(res.data[5571].list).each(function (index, el) {
					// console.log(el)
					html += '<a style = \'color:' + el.color + '\' href="">' + el.word + '</a>';
				});
				$(".hotword").append(html);
			}
		}]);

		return Hotword;
	}();

	new Hotword();
});