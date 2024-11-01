import $ from 'jquery';
import 'select2';
// import 'lightslider';
// import noUiSlider from 'nouislider'; // Не забудьте импортировать noUiSlider
// import 'nouislider/dist/nouislider.min.css'; // Если требуется стиль

export function initializeScripts() {
  $(document).ready(() => {


        // Обработчики событий для фокуса и потери фокуса
        $('.sign-input input, .vehicle-vin input, .part-details-holder input, .part-details-holder.part-info ul li input .checkout-input-holder input, .part-details-holder.contacts ul li input')
            .on('blur', function() {
                $(this).parent().removeClass('active');
            })
            .on('focus', function() {
                $(this).parent().addClass('active');
            });

        // Клик по элементам навигации
        $(".search-tab-nav-mob ul li a").click(function() {
            $(this).next().slideToggle(200);
        });

        // Прокрутка к верху страницы
        $(".arrow-top a[href='#top']").click(function() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });

        // Убираем контур и тень у элементов формы
        $("input, select, textarea, form, button").css({
            outline: "none",
            boxShadow: "none"
        });

        // Hover-эффекты
        $(".intro-search-holder").hover(() => {
            $('.search-dropdown-container').toggleClass('down');
        });

        $(".parts-details").parent().hover(function() {
            $(this).find('.parts-details').find('a').slideToggle(200);
        });


        // Обработчики клика для фильтров
        $(".filter-block-title").click(function() {
            $(this).parent().find('.filter-item').slideToggle(200);
            $(this).toggleClass('down');
        });

        // Обработчики для вопросов и ответов
        $('.questions-container ul li span').click(function(e) {
            e.preventDefault();
            var $this = $(this);
            $this.next().slideToggle(200).toggleClass('down');
            $this.parent().siblings().find('.answer').slideUp(200).removeClass('down');
        });

        // Инициализация lightSlider
        // $('#vertical').lightSlider({
        //     gallery: true,
        //     item: 1,
        //     vertical: true,
        //     verticalHeight: 362,
        //     vThumbWidth: 90,
        //     thumbItem: 6,
        //     thumbMargin: 4,
        //     slideMargin: 0,
        //     responsive: [
        //         { breakpoint: 1200, settings: { thumbItem: 5, verticalHeight: 301 } },
        //         { breakpoint: 992, settings: { thumbItem: 6, verticalHeight: 362 } },
        //         { breakpoint: 768, settings: { thumbItem: 2, verticalHeight: 122, thumbMargin: 8 } }
        //     ]
        // });

        // Прокрутка к элементам
        $('.parts-order-question a, .in-stock.right a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            var target = this.hash;
            $('html, body').stop().animate({ scrollTop: $(target).offset().top }, 700, 'swing', () => {
                window.location.hash = target;
            });
        });

        // Развертывание списка включает
        let includes_list = $("#includes-list li").length;
        let x = 6;
        $('#includes-list li:lt(' + x + ')').slideDown(200);
        $('#includes-list-more').click(() => {
            x = (x + 1000000 <= includes_list) ? x + 1000000 : includes_list;
            $('#includes-list li:lt(' + x + ')').slideDown(200);
        });

        // Развертывание фильтров
        let filter_item = $("#filter-item li").length;
        x = 4;
        $('#filter-item li:lt(' + x + ')').slideDown(200);
        $('#filter-item-more').click(() => {
            x = (x + 1000000 <= filter_item) ? x + 1000000 : filter_item;
            $('#filter-item li:lt(' + x + ')').slideDown(200);
        });
    });
}

// Инициализация скриптов после загрузки окна
$(window).on("load", function() {

    // Инициализация select2
    $('select').select2({ width: 100 });
    $('b[role="presentation"]').hide();

    // Клики для различных заголовков
    $(".side-bar-group-title span").click(function() {
        $('.side-bar-group .side-bar-group-list').slideToggle(200);
        $(this).toggleClass('down');
    });

    $(".trigger span").click(function() {
        $('.side-bar').slideToggle(200);
        $(this).toggleClass('down');
    });

    $(".parts-technical-data-title span").click(function() {
        $('.parts-technical-data-info').slideToggle(200);
        $(this).toggleClass('down');
    });

    $(".search-info-btn").click(function() {
        $('.search-info').slideToggle(200);
        $(this).toggleClass('down');
    });


    // Установка высот для элементов
    // $('.category-list > ul > li > a').css('height', $('.category-list > ul > li').height());
    $('.found-groups .category-list > ul > li > ul > li a').css('height', $('.category-list > ul > li > ul > li').height());

    $('.part-information-block').each(function() {
        var itemH = $('.vehicle-information-block').outerHeight();
        $(this).css('height', itemH);
    });

    $('.cart-img').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.589;
        $(this).css('height', itemH);
    });

    $('.copyright-img a').css('height', $('.copyright-text').height());
    $('.map-container').css('height', $('.message-container').height());
    $('.parts-item.hold > ul > li > a').css('height', $('.parts-item.hold > ul > li').height());
    $('.modal-content').css('height', $('.popup-wrap').height());

    // Инициализация noUiSlider
    // initializeSliders();
});

// Функция инициализации слайдеров
// function initializeSliders() {
//     var slider1 = document.getElementById("slider-1");
//     noUiSlider.create(slider1, {
//         start: [2006, 2012],
//         connect: true,
//         step: 1,
//         tooltips: true,
//         range: { min: 2000, max: 2018 },
//         format: {
//             to: value => value + '',
//             from: value => value.replace('', '')
//         }
//     });
//
//     var slider2 = document.getElementById("slider-2");
//     noUiSlider.create(slider2, {
//         start: [0, 400000],
//         connect: true,
//         step: 10000,
//         tooltips: true,
//         range: { min: 0, max: 500000 },
//         format: {
//             to: value => value + '',
//             from: value => value.replace('', '')
//         }
//     });
//
//     var keypressSlider = document.getElementById('slider-3');
//     var input0 = document.getElementById('input-with-keypress-0');
//     var input1 = document.getElementById('input-with-keypress-1');
//     var inputs = [input0, input1];
//
//     noUiSlider.create(keypressSlider, {
//         start: [0, 6500],
//         connect: true,
//         step: 500,
//         tooltips: false,
//         range: { min: 0, max: 50000 },
//         format: {
//             to: value => value + '',
//             from: value => value.replace('', '')
//         }
//     });
//
//     keypressSlider.noUiSlider.on('update', function(values, handle) {
//         inputs[handle].value = values[handle];
//     });
// }

// Обработчик изменения размера окна
$(window).resize(function() {
    // $('.category-list > ul > li > a').css('height', $('.category-list > ul > li').height());
    $('.found-groups .category-list > ul > li > ul > li a').css('height', $('.category-list > ul > li > ul > li').height());

    $('.part-information-block').each(function() {
        var itemH = $('.vehicle-information-block').outerHeight();
        $(this).css('height', itemH);
    });

    $('.cart-img').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.589;
        $(this).css('height', itemH);
    });

    $('.copyright-img a').css('height', $('.copyright-text').height());
    $('.map-container').css('height', $('.message-container').height());
    $('.parts-item.hold > ul > li > a').css('height', $('.parts-item.hold > ul > li').height());
    $('.modal-content').css('height', $('.popup-wrap').height());
});
