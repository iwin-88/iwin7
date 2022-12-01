$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 1500, //1500ms = 1.5s;
    autoplayHoverPause: true,
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:4,
            // nav:true
        },
        600:{
            items:6,
            // nav:false
        },
        1000:{
            items:6,
            // nav:true,
        }
    }
});

$(function(){
    var $item = $('nav ul li');
    
    $item.on('click', 'a', function(event){
        var $section = $($(this).attr('href'));
        var sectionTop = $section.offset().top;   
    
        $('html, body').stop().animate({scrollTop: sectionTop}, 800);
        
        event.preventDefault();
    });
    
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        
        $item.each(function(){
            var $section = $($(this).find('a').attr('href'));
            var sectionTop = $section.offset().top - 60;
            var sectionHeight = $section.height();
            
            if (sectionTop <= scrollTop && (sectionTop + sectionHeight) > scrollTop){
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            }
        });
    });
});