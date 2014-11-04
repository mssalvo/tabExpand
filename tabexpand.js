  /* tabExpand
  * version 1.0 (12-05-2012)
  * @author Salvatore Mariniello
  * Built on top of the jQuery library
  * http://jquery.com
  *
  * */



+function($){
  "use strict";
  $.fn.tabExpand = function(option) {

		var defaults = {
			colorSelect : '#FFCC00',
			colorDeselect : '#91B5FF',
			color : '#91B5FF',
			cssClass:"mese",
			cssActive:"active-ms",
			setVisible:""

		};

		var options = $.extend(defaults, option),tableID="";

		return this.each(function() {
			var tr = $(this);
			tr.bind('mouseenter mouseleave click', function(event) {
				if (event.type == "click") {
				if($(this).hasClass(options.cssActive)){
				$(this).removeClass(options.cssActive);
				var	father=$('.'+tr.attr("id"));
				var	son=$('.'+father.attr("id"));
				father.removeClass(options.cssActive);
				son.removeClass(options.cssActive);
				father.each(function(){
					$('.'+$(this).attr("id")).each(function(){
				  $(this).hide();
					$('.'+$(this).attr("id")).hide();
					});

				  });

					$('.'+father.attr("id")).hide();
					$('.'+tr.attr("id")).hide();
					$(this).css('backgroundColor', options.colorDeselect);
					} else {
					$(this).addClass(options.cssActive);
					$('.'+tr.attr("id")).toggle();
					tr.css('backgroundColor', options.colorSelect);
				}

				}
          else if (event.type == "mouseenter") {
					$(this).css('backgroundColor', options.colorSelect);
			  	}
				  else if (event.type == "mouseleave") {
					 if(!$(this).hasClass(options.cssActive)){
					$(this).css('backgroundColor', options.colorDeselect);
					 }
				}

			});


        tr.css('backgroundColor', options.colorDeselect);


			if(tableID=="" && options.setVisible!=""){
	   	   tableID=tr;
	   	    console.log(tr)
			 $('tbody tr',tableID.parents('table')).toggle();
       $("."+options.setVisible).toggle();
       console.log(tableID.parents('table'))
			}
		});

		return false;
	};

	$.fn.removeColumn = function(option) {
		var options = $.extend({th:0,td:[]}, option);
		return this.each(function() {
			var cld = $(this);
			cld.bind('click', function(event) {
				if(options.td.length>0){

					for(var i=0;i<options.td.length;i++){
					$('td:nth-child('+options.td[i]+')').hide();

					}
					if(options.th){
						$('th:nth-child('+options.th+')').hide();
					}

				}

			});

		});

		return false;

	};

	$.fn.addRow = function(option) {
		var options = $.extend({td:0}, option);
				return this.each(function() {
					var row = $(this);
					row.bind('click', function(event) {
					tRows="<tr class='trNew'>";
						if(options.td){
							for(var i=0;i<options.td;i++){
							tRows+="<td> </td>";
							}
						}
						tRows+="</tr>";

						$('table tbody').append(tRows);

					});

				});

				return false;

			};

}(jQuery)
