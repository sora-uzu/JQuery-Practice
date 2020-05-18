;(function($) {
	$.fn.showsize = function() {

		var elements = this;

		elements.each(function() {

			$(this).click(function() {
				var msg = $(this).width() + ' x ' + $(this).height();
				$(this).wrap('<div style="position:relative;"></div>');
				var div = $('<div>')
							.text(msg)
							.css('position', 'absolute')
							.css('top', '0')
							.css('background', 'black')
							.css('color', 'white')
							.css('font-size', '10px')
							.css('opacity', '0.9')
							.css('padding', '2px');
			    $(this).after(div);
			});
		});

		return this;
	};
})(jQuery);
