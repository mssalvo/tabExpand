/* tabExpand
 * version 1.0 (12-05-2012)
 * @author Salvatore Mariniello
 * Built on top of the jQuery library
 * http://jquery.com
 * 
 * https://github.com/mssalvo/tabExpand
 * */



+function($) {
    "use strict";
    $.fn.tabExpand = function(option) {

        var defaults = {
            colorSelect: '#FFCC00',
            colorDeselect: '#91B5FF',
            color: '#91B5FF',
            cssClass: "mese",
            cssActive: "active-ms",
            setVisible: ""

        };

        var options = $.extend(defaults, option), tableID = "";

        return this.each(function() {
            var tr = $(this);
            tr.bind('mouseenter mouseleave click', function(event) {
                if (event.type == "click") {
                    if ($(this).hasClass(options.cssActive)) {
                        $(this).removeClass(options.cssActive);
                        var father = $('.' + tr.attr("id"));
                        if (father)
                            father.removeClass(options.cssActive);
                        if (father.attr("id"))
                            var son = $('.' + father.attr("id"));
                        if (son)
                            son.removeClass(options.cssActive);
                        if (father)
                            father.each(function() {
                                if ($(this).attr("id"))
                                    $('.' + $(this).attr("id")).each(function() {
                                        $(this).hide();
                                        $('.' + $(this).attr("id")).hide();
                                    });

                            });
                        if (father.attr("id"))
                            $('.' + father.attr("id")).hide();
                        $('.' + tr.attr("id")).hide();
                        $(this).css('background', options.colorDeselect);
                    } else {
                        $(this).addClass(options.cssActive);
                        $('.' + tr.attr("id")).toggle();
                        tr.css('background', options.colorSelect);
                    }

                }
                else if (event.type == "mouseenter") {
                    $(this).css('background', options.colorSelect);
                }
                else if (event.type == "mouseleave") {
                    if (!$(this).hasClass(options.cssActive)) {
                        $(this).css('background', options.colorDeselect);
                    }
                }

            });


            tr.css('background', options.colorDeselect);


            if (tableID == "" && options.setVisible != "") {
                tableID = tr;
                console.log(tr)
                $('tbody tr', tableID.parents('table')).toggle();
                $("." + options.setVisible).toggle();
                console.log(tableID.parents('table'))
            }
        });

        return false;
    };

    $.fn.removeColumn = function(option) {
        var options = $.extend({th: 0, td: []}, option);
        return this.each(function() {
            var cld = $(this);
            cld.bind('click', function(event) {
                if (options.td.length > 0) {

                    for (var i = 0; i < options.td.length; i++) {
                        $('td:nth-child(' + options.td[i] + ')').hide();

                    }
                    if (options.th) {
                        $('th:nth-child(' + options.th + ')').hide();
                    }

                }

            });

        });

        return false;

    };

    $.fn.addRow = function(option) {
        var options = $.extend({td: 0}, option);
        return this.each(function() {
            var row = $(this);
            row.bind('click', function(event) {
                tRows = "<tr class='trNew'>";
                if (options.td) {
                    for (var i = 0; i < options.td; i++) {
                        tRows += "<td> </td>";
                    }
                }
                tRows += "</tr>";

                $('table tbody').append(tRows);

            });

        });

        return false;

    };

}(jQuery)
