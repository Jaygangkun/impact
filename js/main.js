(function($){
    $(function() { 
        if($('.page-home').length > 0) {
            $('#home_sections').fullpage({
                licenseKey: 'A18DEEC0-91C048BF-BD770CDA-2BFC65D0',
                autoScrolling: true,
                scrollHorizontally: true,
                scrollOverflow: true,
                normalScrollElements: '.home-section-wrap',
            });

            $(document).on('click', '.home-section .home-section-expand .btn-learn-more', function() {
                $(this).parents('.home-section').addClass('expanded');
                $(this).parents('.home-section').find('.home-section-expand-content').slideDown();
            })

            $(document).on('click', '.home-section .home-section-expand .btn-collapse-times', function() {
                $(this).parents('.home-section').removeClass('expanded');
                $(this).parents('.home-section').find('.home-section-expand-content').slideUp();
            })
        }

        if($('.page-projects').length > 0) {
            $(document).on('click', '.project-category-tab', function() {
                $('.project-category-tab').removeClass('active');
                $(this).addClass('active');

                $('.project-category-tab-content').removeClass('active');
                $('.project-category-tab-content[category="' + $(this).attr('category') + '"]').addClass('active');
            })
        }
    })
})(jQuery)

