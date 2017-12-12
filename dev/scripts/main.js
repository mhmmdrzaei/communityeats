//active Links 

    $("ul.menu li a").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });

    //Menu toggle
        $('label').on('click', function(event) {
            // event.preventDefault();
            $('nav menu').toggleClass('away');
            



            

        });