$(document).ready(function() {
	var envelopeWrapper = $('#envelope-wrapper');
	var envelope = $('#envelope');
	var letter = $('#letter');
	var buttons = $('#buttons');
	var close = $('#close');
	
	envelope.click(function() {
		envelopeWrapper.addClass('no-click');
		openEnvelope();
		setTimeout(() => {
			openLetter();
		}, 1700);
	});
	close.click(function() {
		envelopeWrapper.removeClass('no-click');
		closeLetter();
		setTimeout(() => {
			closeEnvelope();
		}, 1000);
	});
	
	function openEnvelope() {
		envelope.addClass('open')
			.removeClass('close');
	}
	function closeEnvelope() {
		envelope.addClass('close')
			.removeClass('open');
	}
	function openLetter() {
		letter.addClass('scale-in')
			.removeClass('scale-out');
		buttons.removeClass('hide-buttons');
		setTimeout(() => {
			envelopeWrapper.addClass('blur');
		}, 700);
	}
	function closeLetter() {
		envelopeWrapper.removeClass('blur');
		letter.addClass('scale-out')
			.removeClass('scale-in');
		buttons.addClass('hide-buttons');
	}
})