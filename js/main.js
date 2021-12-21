(function($){
    $(function() { 

        // mobile nav button
        $(document).on('click', '#mobile_navbar_btn_open', function() {
            $('body').addClass('mobile-menu-open');
        })

        $(document).on('click', '#mobile_navbar_btn_close', function() {
            $('body').removeClass('mobile-menu-open');
        })

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

            $(document).on('click', '#home_section_scroll_down_btn', function() {
                fullpage_api.moveSectionDown();
            })
        }

        if($('.page-projects').length > 0) {
            $(document).on('click', '.project-category-tab', function() {
                $('.project-category-tab').removeClass('active');
                $('.project-category-tab[category="' + $(this).attr('category') + '"]').addClass('active');

                $('.project-category-tab-content').removeClass('active');
                $('.project-category-tab-content[category="' + $(this).attr('category') + '"]').addClass('active');

                // mobile view
                $('.project-category-tabs__category-name').text($('.project-category-tabs-mobile .project-category-tab[category="' + $(this).attr('category') + '"]').text());
                $('.project-category-tabs-mobile-body').slideUp();

                $('.project-category-tabs-mobile').removeClass('opened');

                // change get involved button height
                if($('.active .projects-list .project-wrap').length % 3 == 0) {
                    $('.active .projects-list .project-wrap-get-involved').height($('.active .projects-list .project-wrap').last().outerHeight());
                }
            })

            $(document).on('click', '.project-category-tabs-mobile-header', function() {
                if($('.project-category-tabs-mobile').hasClass('opened')) {
                    $('.project-category-tabs-mobile-body').slideUp();
                    $('.project-category-tabs-mobile').removeClass('opened');
                }
                else {
                    $('.project-category-tabs-mobile-body').slideDown();
                    $('.project-category-tabs-mobile').addClass('opened');
                }
                
            })
        }
    })
})(jQuery)

