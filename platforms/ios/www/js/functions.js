// setTimeout(function(){
//   $('#landing').fadeOut();
// }, 5000);

/*$(document).ajaxStart(function () {

 spinnerplugin.show({
  overlay: false,    // defaults to true
  fullscreen: true,  // defaults to false
  });

});

$(document).ajaxStop(function () {
   spinnerplugin.hide();
});
*/

$(document).ready(function() {

	$('a.e-slide').on('click', function () {
		enlace = $(this).attr('data-enlace');
		item   = $(this).attr('href');

		$(item).load(enlace);
		//console.log("direcciones: " + enlace+ " - " +item);

		$('#wrapper').scrollTo($(this).attr('href'), 500);		
		
		return false;
	});
	$('a.back').on('click', function () {
		$('#wrapper').scrollTo($(this).attr('href'), 500);
		console.log($(this).parent().parent().parent().parent().attr('id'));
		return false;
	});
	
	$(window).resize(function () {
		resizePanel();
	});
	
});

function resizePanel() {

	width = $(window).width();
	height = $(window).height();

	mask_height = height * $('.item').length;
		
	$('#debug').html(width  + ' ' + height + ' ' + mask_height);
	
	$('#wrapper, .item').css({width: width, height: height});
	$('#mask').css({width: width, height: mask_height});
	$('#wrapper').scrollTo($('a.selected').attr('href'), 0);
		
}