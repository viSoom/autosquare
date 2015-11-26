/*************************
jQuery AutoSquare v.1.0 
@Website: AutoSquare - http://free.epeo.it/autosquare
@Author: Eduardo Allegrini - http://www.eduardoallegrini.com/
@Copyright: 07/08/2015
************************/
(function ($) {
    $.fn.autoSquare = function() {
		var thisElement = this;
		thisElement.each(function(){
			var thisOnly = $(this);
			var thisProportion = $.trim(thisOnly.attr('data-proportion'));
			if(!thisProportion || !$.isNumeric(thisProportion) || thisProportion < 0 || thisProportion > 6) {
				thisProportion = 1;
			}
			thisOnly.height(thisOnly.width()*thisProportion);
		});
	}
}(jQuery));
