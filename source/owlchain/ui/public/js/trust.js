/*************************
trust.js
*************************/
(function ($) {
    /*setup*/
    var _setup = function () {

    };
    /*trust-contract*/
    var _bind = function () {
        function setDisplay(cls) {
            var _sec = _section.siblings('.' + cls);
            _section.removeClass('on bounceInLeft bounceInRight animated').each(function (idx) {
                var _this = $(this);
                if ($(this).hasClass(cls)) {
                    _this.addClass('on bounceInRight animated');
                } else {                   
                    _this.removeClass('bounceInRight').addClass('bounceInLeft animated');
                }
            });;

            _menu.val(cls);
            var _t = _section.siblings('.' + cls);
            if (cls == "s1") {
                $('.CodeMirror').focus();
            } else if (cls == "s2") {
                setTimeout(function () {
                    _t.find('.list').addClass('on');
                }, 2000);
            } else {
            }
            //$(window).trigger('resize');
            //$("#selectBox option:eq(2)").attr("selected", "selected");
        }
        var _menu = $('header select');
        var _artivle
        var _section = $('article.wrap > section');
        var _link = $('a.link');

        _menu.bind('change', function (event) {
            var _val = $(this).val();
            setDisplay(_val);
        });
        /*공통UI*/
        _link.bind('click', function (event) {
            var _val = $(this).attr('data-val');
            setDisplay(_val);
        });
        /**/
        $('.popup-link').bind('click', function (event) {
            var _popup = $('.s1 .popup');
            _popup.addClass('on');
        });
        $('.toggle dl dt').bind('click', function (event) {
            $(this).parents('dl').toggleClass('on');
        });

        /*init*/
        var _cls = $('section.on').attr('class').split('on')[0].replace(/\s+/g, '');
        setDisplay(_cls);
    }
    /*ADD_ACCOUNT
     */
    $(document).ready(function () {
        _bind();
    });
})($);
