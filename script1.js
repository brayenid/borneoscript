//Scroll to section ID
$('.page-scroll').on('click',function(e){

	var tujuan = $(this).attr('href');
  
	var elemenTujuan = $(tujuan);

	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50}, 1100, 'easeInOutExpo');
e.preventDefault()
});

//buka tutup galleries
	//load
	function klik(){
		$('.galleries').addClass('muncul');
		$('.load').addClass('muncul');
	};
	//tutup
	function tutup(){
		$('.galleries').removeClass('muncul');
		$('.tutup').removeClass('muncul');
		$('.load').removeClass('muncul');
	};

//jumbotron h1 p
$(window).on('load',function(){
	$('.judul').addClass('muncul');
	$('.desk').addClass('muncul');
});

 //Parallax
	$(window).scroll(function(){
		var jarak=$(this).scrollTop();
	//jumbotron
	$('.jumbotron img').css ({
		'transform' : 'translate(0px,'+ jarak/9 +'%)'
	});

	$('.judul').css ({
		'transform' : 'translate(0px,'+ jarak/1.6 +'%)'
	});

	$('.desk').css ({
		'transform' : 'translate(0px,'+ jarak/0.73 +'%)'
	});

	//about
	if (jarak > $('.about').offset().top -300) {
		$('.kiri').addClass('muncul');
		$('.kanan').addClass('muncul');
	}

	//galleries
	if (jarak > $('.galleries').offset().top -250) {
		$('.galleries .thumbnail').each(function(i) {
			setTimeout(function(){
				$('.galleries .thumbnail').eq(i).addClass('muncul');
			}, 200 * i+1);
	});
}

});