/*************************
jQuery AutoSquare v.1.0
@Website: http://http://www.eduardoallegrini.com/autosquare/
@Author: Eduardo Allegrini
@Copyright: 22/06/2015
************************/
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
