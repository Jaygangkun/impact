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
                // scrollHorizontally: true,
                scrollOverflow: true,
                normalScrollElements: '.home-section',
                navigation: true,
                navigationPosition: 'left'
            });

            // $(".home-section").scroll(function() { //.box is the class of the div
            //     console.log('scroll');
            // });

            let curFPSection = '';
            const FPSections = {
                'home_section_impact': {
                    'prev': '',
                    'next': 'home_section_healthy_living',
                    'index': 1
                },
                'home_section_healthy_living': {
                    'prev': 'home_section_impact',
                    'next': 'home_section_educational',
                    'index': 2,
                    'video': document.getElementById("home_section_healthy_living_video")
                },
                'home_section_educational': {
                    'prev': 'home_section_healthy_living',
                    'next': 'home_section_placemaking',
                    'index': 3,
                    'video': document.getElementById("home_section_educational_video")
                },
                'home_section_placemaking': {
                    'prev': 'home_section_educational',
                    'next': 'home_section_economic',
                    'index': 4,
                    'video': document.getElementById("home_section_placemaking_video")
                },
                'home_section_economic': {
                    'prev': 'home_section_placemaking',
                    'next': 'home_section_footer',
                    'index': 5,
                    'video': document.getElementById("home_section_economic_video")
                },
                'home_section_footer': {
                    'prev': 'home_section_economic',
                    'next': '',
                    'index': 6
                }
            }

            function moveFPSection(id, dir) {
                console.log("moveFPSection >>", id, dir);
                
                var desSectionID = FPSections[id][dir];
                if(dir == 'prev' && curFPSection == 'home_section_footer') {
                    desSectionID = 'home_section_economic';
                }
                console.log("desSectionID >>", desSectionID);
                curFPSection = desSectionID;
                if(desSectionID != '') {
                    fullpage_api.moveTo(FPSections[desSectionID]['index']);
                }
                
                if(FPSections[desSectionID].hasOwnProperty('video') && FPSections[desSectionID]['video'] != null && typeof FPSections[desSectionID]['video'] != 'undefined') {
                    FPSections[desSectionID]['video'].play();
                }
                
            }

            $('.home-section').on('swipedown',function() {
                console.log('swipdown');
            });

            $('.home-section').on('swipeup',function() {
                console.log('swipup');
            });

            $('.home-section').on('swipe',function() {
                console.log('swipe');
            });

            $('.home-section').bind('mousewheel', function (e) {

                if(typeof $(this).find('.home-section-content').offset() == 'undefined') {
                    return;
                }

                console.log( $(this).find('.home-section-content').offset().top, $(this).find('.home-section-content').outerHeight(), $(window).height());
                console.log(Math.floor($(this).find('.home-section-content').offset().top + $(this).find('.home-section-content').outerHeight() + 60), Math.floor($(window).height()));

                if(e.originalEvent.wheelDelta > 0) {
                    direction = 'up';
                    if(Math.floor($(this).find('.home-section-content').offset().top + $(this).find('.home-section-content').outerHeight() + 61) < Math.floor($(window).height())) {
                        console.log('prev1');
                        moveFPSection($(this).attr('id'), 'prev');
                        
                    }
                    else if(Math.floor($(this).find('.home-section-content').offset().top) > 59) {
                        console.log('prev2');
                        moveFPSection($(this).attr('id'), 'prev');
                        
                    }
                    else {
                        console.log('scroll1');
                    }

                }
                else{
                    if(Math.floor($(this).find('.home-section-content').offset().top + $(this).find('.home-section-content').outerHeight() + 60) < Math.floor($(window).height())) {
                        console.log('next1');
                        moveFPSection($(this).attr('id'), 'next');
                    }
                    else {
                        console.log('scroll2');
                    }
                }

                // if(Math.floor($(this).find('.home-section-content').offset().top + $(this).find('.home-section-content').outerHeight() + 60) < Math.floor($(window).height())) {
                    
                //     if(direction == 'down') {
                //         console.log('next1');
                //     }
                //     else {
                //         console.log('prev1');
                //     }
                    
                //     // fullpage_api.moveSectionDown();
                // }
                // else if(Math.floor($(this).find('.home-section-content').offset().top) > 59) {
                //     if(direction == 'up') {
                //         console.log('prev2');
                //     }
                //     else {
                //         console.log('scroll2');
                //     }
                    
                // }
                // else {
                //     console.log('scroll3');
                // }
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

