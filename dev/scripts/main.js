//active Links 

    // $("desktopNav a").each(function() {
    //     if (this.href == window.location.href) {
    //         $(this).addClass("active");
    //     }
    // });

    //Menu toggle
        $('label').on('click', function(event) {
            // event.preventDefault();
            $('nav menu').toggleClass('away');

        });

    //span text menu
$(function(){
	var current = location.pathname;
    $('#nav li a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
        }
    })

});
    