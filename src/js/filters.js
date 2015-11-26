$(document).ready(function() {

    //Array type/class of filters
    var filters = [
        "saturate",
        "saturotate",
        "rotamatrix",
        "tablen",
        "dishue",
        "matrix",
        "matrix-dos",
        "huerotate",
        "luminance",
        "discrete",
        "discrete-dos",
        "table",
        "table-dos",
        "identity",
        "linear",
        "gamma",
        "turbulence",
        "sepia",
        "turbu-map",
        "fematrix-uno",
        "fematrix-dos",
        "map-uno",
        "map-dos",
        "blur-uno",
        "blur-dos",
        "morpho-uno",
        "morpho-dos",
        "multitable",
        "begamma",
        "bulence"
    ];


    //Variables

    var btnHeight = $('.section-buttons').outerHeight() + 15;
    var picture = $('picture').find("img");
    var pictureHeight = $(picture).outerHeight();
    var btnFilters = $('.section-buttons').find("button");
    var btnClose = $('#panel-btn-close');
    var panel = $(".panel");
    var panelInfo = $(".panel-info");
    var panelInput = $(".panel-input");

    var btnSaturate = $(".btn-saturate");
    var btnSaturotate = $(".btn-saturotate");
    var btnRotamatrix = $(".btn-rotamatrix");
    var btnTablen = $(".btn-tablen");
    var btnMultitable = $(".btn-multitable");
    var btnDishue = $(".btn-dishue");
    var btnMatrix = $(".btn-matrix");
    var btnMatrix2 = $(".btn-matrix-dos");
    var btnHueRotate = $(".btn-hueRotate");
    var btnLuminance = $(".btn-luminance");
    var btnDiscrete = $(".btn-discrete");
    var btnDiscrete2 = $(".btn-discrete-dos");
    var btnTable = $(".btn-table");
    var btnTable2 = $(".btn-table-dos");
    var btnIdentity = $(".btn-identity");
    var btnLinear = $(".btn-linear");
    var btnGamma = $(".btn-gamma");
    var btnTurbelence = $(".btn-turbulence");
    var btnSepia = $(".btn-sepia");
    var btnTurbuMap = $(".btn-turbu-map");
    var btnConMatrix = $(".btn-con-matrix-uno");
    var btnConMatrix2 = $(".btn-con-matrix-dos");
    var btnMap = $(".btn-map-uno");
    var btnMap2 = $(".btn-map-dos");
    var btnBlur = $(".btn-blur-uno");
    var btnBlur2 = $(".btn-blur-dos");
    var btnMorpho = $(".btn-morpho-uno");
    var btnMorpho2 = $(".btn-morpho-dos");
    var btnPoison = $(".btn-poison");
    var btnBegamma = $(".btn-begamma");
    var btnBulence = $(".btn-bulence");
    var panelSaturate = $("#panel-saturate");
    var panelHuerotate = $("#panel-huerotate");
    var panelLuminance = $("#panel-luminance");
    var panelLinear = $("#panel-linear");
    var panelTurbulence = $("#panel-turbulence");
    var panelGamma = $("#panel-gamma");
    var panelBlur = $("#panel-blur");
    var panelMorpho = $("#panel-morpho");
    var panelMorphoDilate = $("#panel-morpho-dilate");
    var panelSaturotate = $("#panel-saturotate");
    var panelDiscrete = $("#panel-discrete");


    //Functions
    function addFilter(button, filter) {
        $(button).click(function() {
            $("img").removeClass().addClass(filter);
        });
    }

    function poison() {
        $(btnPoison).click(function() {

            var bodys = document.getElementsByTagName("body");
            var classRandom = filters[~~(Math.random() * filters.length)];

            $(bodys).each(function() {
                $(bodys).addClass(classRandom);
                setTimeout(function() {
                    $(bodys).removeClass(classRandom);
                }, 3500);
            });
        });
    }

    function closePanel() {
        $(panel)
            .animate({
                left: '-100%'
            }, 400);
        $("img").removeClass();
    }

    function openPanel() {
        $(panel)
            .animate({
                left: '0'
            }, 400)
            .addClass("panel-bottom")
            .css("height", btnHeight);
        //Go to the bottom of the page!
        // window.scrollTo(0, document.body.scrollHeight);
    }

    function equalHeight() {
        $("#holder").css("height", pictureHeight);
    }


    function showPanelFilter(btn, panel) {
        $(btn).click(function() {
            $(panel).removeClass("hide");
        });
    }

    //Print values defaultStatus in every filter

    var saturateCode = document.getElementById("panel-code-saturate");
    var huerotateCode = document.getElementById("panel-code-huerotate");

    //Saturate
    $(saturateCode).text(
        '<filter id="saturate-customize">\n' +
        ' <feColorMatrix type="saturate" values="14"/>\n' +
        '</filter>');

    //Saturotate
    $(huerotateCode).text(
        '<filter id="huerotate-customize">\n' +
        ' <feColorMatrix type="hueRotate" values="90"/>\n' +
        '</filter>');

    //Gamma
    var gammaPanel = document.getElementById("panel-code-gamma");

    $(gammaPanel).text(
        '<filter id="gamma-customize">\n' +
        '<feComponentTransfer>\n' +
        '<feFuncR type="gamma" amplitude="1" exponent="1"/>\n' +
        '<feFuncG type="gamma" amplitude="0.4" exponent="0.25"/>\n' +
        '<feFuncB type="gamma" amplitude="1" exponent="1"/>\n' +
        '</feComponentTransfer>\n' +
        '</filter>');

    //Blur

    var panelBLur = document.getElementById("panel-code-blur");

    $(panelBLur).text(
        '<filter id="blur-customize">\n' +
        ' <feGaussianBlur stdDeviation="3"/>\n' +
        '</filter>');

    //Morpho - Erode

    var panelMorpho = document.getElementById("panel-code-morpho");

    $(panelMorpho).text(
        '<filter id="morpho-customize">\n' +
        ' <feGaussianBlur operator="erode" in="SourceGraphic" radius="3"/>\n' +
        '</filter>');

    //Morpho - Dilate
    var panelMorphoDilate = document.getElementById("panel-code-morpho-dilate");

    $(panelMorphoDilate).text(
        '<filter id="morpho-customize-dilate">\n' +
        ' <feGaussianBlur operator="dilate" in="SourceGraphic" radius="6"/>\n' +
        '</filter>');

    //Saturotate

    var saturotateCode = document.getElementById("panel-code-saturotate");

    $(saturotateCode).text(
        '<filter id="saturotate-customize" filterUnits="objectBoundingBox">\n' +
        ' <feColorMatrix type="saturate" result="saturado" values="20"/>\n' +
        ' <feColorMatrix type="hueRotate" in="saturado" in2="SourceGraphic" values="291"/>\n' +
        '</filter>');

    var sliderTurbuBasePanel = document.getElementById("panel-code-turbulence");

    $(sliderTurbuBasePanel).text(
        '<filter id="turbulence-customize">\n' +
        ' <feTurbulence type="turbulence" result="fuzz" baseFrequency="0.7" numOctaves="2" stitchTiles="stitch"/>\n' +
        ' <feComposite in="SourceGraphic" in2="fuzz" operator="arithmetic" k1="0" k2="1" k3="-3" k4="0.01"/>\n' +
        '</filter>');

    //Linear

    var sliderFeLineRsPanel = document.getElementById("panel-code-linear");

    $(sliderFeLineRsPanel).text(
        '<filter id="linear-customize">\n' +
        '<feComponentTransfer>\n' +
        '<feFuncR type="linear" slope="0.5" intercept="0.25"/>\n' +
        '<feFuncG type="linear" slope="0.5" intercept="0"/>\n' +
        '<feFuncB type="linear" slope="0.5" intercept="0.5"/>\n' +
        '</feComponentTransfer>\n' +
        '</filter>');


    //Copy to clipboard

    var clipboard = new Clipboard('.panel-btn-copy');

    clipboard.on('success', function(e) {
        var btnPanel = document.getElementsByClassName('panel-btn-copy');
        setTimeout(changeText, 300);

        function changeText() {
            $(btnPanel).text("Copied!").addClass("success");
            setTimeout(function() {
                $(btnPanel).removeClass("success").text("Copy to clipboard");
            }, 1000);
        }
    });

    clipboard.on('error', function(e) {
        function changeText() {
            $(btnPanel).text("Error!").addClass("error");
            setTimeout(function() {
                $(btnPanel).removeClass("error").text("Copy to clipboard");
            }, 1000);
        }
    });

    //FIRE!

    $(btnFilters).click(function() {
        if (typeof $(this).data('panel') !== 'undefined') {
            openPanel();
        }
    });

    $(btnClose).click(function() {
        closePanel();
        $(panelInput).addClass("hide");
    });

    equalHeight();
    poison();
    addFilter(btnSaturate, filters[0]);
    addFilter(btnSaturotate, filters[1]);
    addFilter(btnRotamatrix, filters[2]);
    addFilter(btnTablen, filters[3]);
    addFilter(btnDishue, filters[4]);
    addFilter(btnMatrix, filters[5]);
    addFilter(btnMatrix2, filters[6]);
    addFilter(btnHueRotate, filters[7]);
    addFilter(btnLuminance, filters[8]);
    addFilter(btnDiscrete, filters[9]);
    addFilter(btnDiscrete2, filters[10]);
    addFilter(btnTable, filters[11]);
    addFilter(btnTable2, filters[12]);
    addFilter(btnIdentity, filters[13]);
    addFilter(btnLinear, filters[14]);
    addFilter(btnGamma, filters[15]);
    addFilter(btnTurbelence, filters[16]);
    addFilter(btnSepia, filters[17]);
    addFilter(btnTurbuMap, filters[18]);
    addFilter(btnConMatrix, filters[19]);
    addFilter(btnConMatrix2, filters[20]);
    addFilter(btnMap, filters[21]);
    addFilter(btnMap2, filters[22]);
    addFilter(btnBlur, filters[23]);
    addFilter(btnBlur2, filters[24]);
    addFilter(btnMorpho, filters[25]);
    addFilter(btnMorpho2, filters[26]);
    addFilter(btnMultitable, filters[27]);
    addFilter(btnBegamma, filters[28]);
    addFilter(btnBulence, filters[29]);


    showPanelFilter(btnSaturate, panelSaturate);
    showPanelFilter(btnHueRotate, panelHuerotate);
    showPanelFilter(btnLuminance, panelLuminance);
    showPanelFilter(btnLinear, panelLinear);
    showPanelFilter(btnTurbelence, panelTurbulence);
    showPanelFilter(btnGamma, panelGamma);
    showPanelFilter(btnBlur, panelBlur);
    showPanelFilter(btnBlur2, panelBlur);
    showPanelFilter(btnMorpho, panelMorpho);
    showPanelFilter(btnMorpho2, panelMorphoDilate);
    showPanelFilter(btnSaturotate, panelSaturotate);
    showPanelFilter(btnDiscrete, panelDiscrete);

});