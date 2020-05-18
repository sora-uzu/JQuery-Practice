;(function($) {
	$.fn.showsize = function(options) {

		var elements = this;

		elements.each(function() {
			var opts = $.extend({}, $.fn.showsize.defaults, options);
			$(this).click(function() {
				var msg = $(this).width() + ' x ' + $(this).height();
				$(this).wrap('<div style="position:relative;"></div>');
				var div = $('<div>')
							.text(msg)
							.css('position', 'absolute')
							.css('top', '0')
							.css('background', 'black')
							.css('color', 'white')
							.css('font-size', opts.size + 'px')
							.css('opacity', opts.opacity)
							.css('padding', '2px');
			    $(this).after(div);
			});
		});

		return this;
	};

	$.fn.showsize.defaults = {
		size: 10,
		opacity: 0.9
	};

})(jQuery);
