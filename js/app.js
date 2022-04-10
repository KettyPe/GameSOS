(() => {
    var __webpack_modules__ = {
        615: function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_RESULT__;
            /*!
 * fullPage 3.1.2
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */            (function(root, window, document, factory, undefined) {
                if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    root.fullpage = factory(window, document);
                    return root.fullpage;
                }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            })(this, window, document, (function(window, document) {
                "use strict";
                var WRAPPER = "fullpage-wrapper";
                var WRAPPER_SEL = "." + WRAPPER;
                var RESPONSIVE = "fp-responsive";
                var NO_TRANSITION = "fp-notransition";
                var DESTROYED = "fp-destroyed";
                var ENABLED = "fp-enabled";
                var VIEWING_PREFIX = "fp-viewing";
                var ACTIVE = "active";
                var ACTIVE_SEL = "." + ACTIVE;
                var COMPLETELY = "fp-completely";
                var COMPLETELY_SEL = "." + COMPLETELY;
                var SECTION_DEFAULT_SEL = ".section";
                var SECTION = "fp-section";
                var SECTION_SEL = "." + SECTION;
                var SECTION_ACTIVE_SEL = SECTION_SEL + ACTIVE_SEL;
                var TABLE_CELL = "fp-tableCell";
                var TABLE_CELL_SEL = "." + TABLE_CELL;
                var AUTO_HEIGHT = "fp-auto-height";
                var AUTO_HEIGHT_SEL = "." + AUTO_HEIGHT;
                var AUTO_HEIGHT_RESPONSIVE = "fp-auto-height-responsive";
                var AUTO_HEIGHT_RESPONSIVE_SEL = "." + AUTO_HEIGHT_RESPONSIVE;
                var NORMAL_SCROLL = "fp-normal-scroll";
                var SECTION_NAV = "fp-nav";
                var SECTION_NAV_SEL = "#" + SECTION_NAV;
                var SECTION_NAV_TOOLTIP = "fp-tooltip";
                var SECTION_NAV_TOOLTIP_SEL = "." + SECTION_NAV_TOOLTIP;
                var SHOW_ACTIVE_TOOLTIP = "fp-show-active";
                var SLIDE_DEFAULT_SEL = ".slide";
                var SLIDE = "fp-slide";
                var SLIDE_SEL = "." + SLIDE;
                var SLIDE_ACTIVE_SEL = SLIDE_SEL + ACTIVE_SEL;
                var SLIDES_WRAPPER = "fp-slides";
                var SLIDES_WRAPPER_SEL = "." + SLIDES_WRAPPER;
                var SLIDES_CONTAINER = "fp-slidesContainer";
                var SLIDES_CONTAINER_SEL = "." + SLIDES_CONTAINER;
                var TABLE = "fp-table";
                var SLIDES_NAV = "fp-slidesNav";
                var SLIDES_NAV_SEL = "." + SLIDES_NAV;
                var SLIDES_NAV_LINK_SEL = SLIDES_NAV_SEL + " a";
                var SLIDES_ARROW = "fp-controlArrow";
                var SLIDES_ARROW_SEL = "." + SLIDES_ARROW;
                var SLIDES_PREV = "fp-prev";
                var SLIDES_PREV_SEL = "." + SLIDES_PREV;
                var SLIDES_ARROW_PREV = SLIDES_ARROW + " " + SLIDES_PREV;
                var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
                var SLIDES_NEXT = "fp-next";
                var SLIDES_NEXT_SEL = "." + SLIDES_NEXT;
                var SLIDES_ARROW_NEXT = SLIDES_ARROW + " " + SLIDES_NEXT;
                var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;
                function initialise(containerSelector, options) {
                    var isOK = options && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(options["li" + "cen" + "seK" + "e" + "y"]) || document.domain.indexOf("al" + "varotri" + "go" + "." + "com") > -1;
                    var $htmlBody = $("html, body");
                    var $html = $("html")[0];
                    var $body = $("body")[0];
                    if (hasClass($html, ENABLED)) {
                        displayWarnings();
                        return;
                    }
                    var FP = {};
                    options = deepExtend({
                        menu: false,
                        anchors: [],
                        lockAnchors: false,
                        navigation: false,
                        navigationPosition: "right",
                        navigationTooltips: [],
                        showActiveTooltip: false,
                        slidesNavigation: false,
                        slidesNavPosition: "bottom",
                        scrollBar: false,
                        hybrid: false,
                        css3: true,
                        scrollingSpeed: 700,
                        autoScrolling: true,
                        fitToSection: true,
                        fitToSectionDelay: 1e3,
                        easing: "easeInOutCubic",
                        easingcss3: "ease",
                        loopBottom: false,
                        loopTop: false,
                        loopHorizontal: true,
                        continuousVertical: false,
                        continuousHorizontal: false,
                        scrollHorizontally: false,
                        interlockedSlides: false,
                        dragAndMove: false,
                        offsetSections: false,
                        resetSliders: false,
                        fadingEffect: false,
                        normalScrollElements: null,
                        scrollOverflow: false,
                        scrollOverflowReset: false,
                        scrollOverflowHandler: window.fp_scrolloverflow ? window.fp_scrolloverflow.iscrollHandler : null,
                        scrollOverflowOptions: null,
                        touchSensitivity: 5,
                        touchWrapper: "string" === typeof containerSelector ? $(containerSelector)[0] : containerSelector,
                        bigSectionsDestination: null,
                        keyboardScrolling: true,
                        animateAnchor: true,
                        recordHistory: true,
                        controlArrows: true,
                        controlArrowColor: "#fff",
                        verticalCentered: true,
                        sectionsColor: [],
                        paddingTop: 0,
                        paddingBottom: 0,
                        fixedElements: null,
                        responsive: 0,
                        responsiveWidth: 0,
                        responsiveHeight: 0,
                        responsiveSlides: false,
                        parallax: false,
                        parallaxOptions: {
                            type: "reveal",
                            percentage: 62,
                            property: "translate"
                        },
                        cards: false,
                        cardsOptions: {
                            perspective: 100,
                            fadeContent: true,
                            fadeBackground: true
                        },
                        sectionSelector: SECTION_DEFAULT_SEL,
                        slideSelector: SLIDE_DEFAULT_SEL,
                        v2compatible: false,
                        afterLoad: null,
                        onLeave: null,
                        afterRender: null,
                        afterResize: null,
                        afterReBuild: null,
                        afterSlideLoad: null,
                        onSlideLeave: null,
                        afterResponsive: null,
                        lazyLoading: true
                    }, options);
                    var slideMoving = false;
                    var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
                    var isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints;
                    var container = "string" === typeof containerSelector ? $(containerSelector)[0] : containerSelector;
                    var windowsHeight = getWindowHeight();
                    var windowsWidth = getWindowWidth();
                    var isResizing = false;
                    var isWindowFocused = true;
                    var lastScrolledDestiny;
                    var lastScrolledSlide;
                    var canScroll = true;
                    var scrollings = [];
                    var controlPressed;
                    var startingSection;
                    var isScrollAllowed = {};
                    isScrollAllowed.m = {
                        up: true,
                        down: true,
                        left: true,
                        right: true
                    };
                    isScrollAllowed.k = deepExtend({}, isScrollAllowed.m);
                    var MSPointer = getMSPointer();
                    var events = {
                        touchmove: "ontouchmove" in window ? "touchmove" : MSPointer.move,
                        touchstart: "ontouchstart" in window ? "touchstart" : MSPointer.down
                    };
                    var scrollBarHandler;
                    var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
                    var g_supportsPassive = false;
                    try {
                        var opts = Object.defineProperty({}, "passive", {
                            get: function() {
                                g_supportsPassive = true;
                            }
                        });
                        window.addEventListener("testPassive", null, opts);
                        window.removeEventListener("testPassive", null, opts);
                    } catch (e) {}
                    var resizeId;
                    var resizeHandlerId;
                    var afterSectionLoadsId;
                    var afterSlideLoadsId;
                    var scrollId;
                    var scrollId2;
                    var keydownId;
                    var g_doubleCheckHeightId;
                    var originals = deepExtend({}, options);
                    var activeAnimation;
                    var g_initialAnchorsInDom = false;
                    var g_canFireMouseEnterNormalScroll = true;
                    var g_mediaLoadedId;
                    var g_transitionLapseId;
                    var extensions = [ "parallax", "scrollOverflowReset", "dragAndMove", "offsetSections", "fadingEffect", "responsiveSlides", "continuousHorizontal", "interlockedSlides", "scrollHorizontally", "resetSliders", "cards", "dropEffect", "waterEffect" ];
                    displayWarnings();
                    window.fp_easings = deepExtend(window.fp_easings, {
                        easeInOutCubic: function(t, b, c, d) {
                            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
                            return c / 2 * ((t -= 2) * t * t + 2) + b;
                        }
                    });
                    function setAutoScrolling(value, type) {
                        if (!value) silentScroll(0);
                        setVariableState("autoScrolling", value, type);
                        var element = $(SECTION_ACTIVE_SEL)[0];
                        if (options.autoScrolling && !options.scrollBar) {
                            css($htmlBody, {
                                overflow: "hidden",
                                height: "100%"
                            });
                            setRecordHistory(originals.recordHistory, "internal");
                            css(container, {
                                "-ms-touch-action": "none",
                                "touch-action": "none"
                            });
                            if (null != element) silentScroll(element.offsetTop);
                        } else {
                            css($htmlBody, {
                                overflow: "visible",
                                height: "initial"
                            });
                            var recordHistory = !options.autoScrolling ? false : originals.recordHistory;
                            setRecordHistory(recordHistory, "internal");
                            css(container, {
                                "-ms-touch-action": "",
                                "touch-action": ""
                            });
                            if (null != element) {
                                var scrollSettings = getScrollSettings(element.offsetTop);
                                scrollSettings.element.scrollTo(0, scrollSettings.options);
                            }
                        }
                    }
                    function setRecordHistory(value, type) {
                        setVariableState("recordHistory", value, type);
                    }
                    function setScrollingSpeed(value, type) {
                        setVariableState("scrollingSpeed", value, type);
                    }
                    function setFitToSection(value, type) {
                        setVariableState("fitToSection", value, type);
                    }
                    function setLockAnchors(value) {
                        options.lockAnchors = value;
                    }
                    function setMouseWheelScrolling(value) {
                        if (value) {
                            addMouseWheelHandler();
                            addMiddleWheelHandler();
                        } else {
                            removeMouseWheelHandler();
                            removeMiddleWheelHandler();
                        }
                    }
                    function setAllowScrolling(value, directions) {
                        if ("undefined" !== typeof directions) {
                            directions = directions.replace(/ /g, "").split(",");
                            directions.forEach((function(direction) {
                                setIsScrollAllowed(value, direction, "m");
                            }));
                        } else setIsScrollAllowed(value, "all", "m");
                    }
                    function setMouseHijack(value) {
                        if (value) {
                            setMouseWheelScrolling(true);
                            addTouchHandler();
                        } else {
                            setMouseWheelScrolling(false);
                            removeTouchHandler();
                        }
                    }
                    function setKeyboardScrolling(value, directions) {
                        if ("undefined" !== typeof directions) {
                            directions = directions.replace(/ /g, "").split(",");
                            directions.forEach((function(direction) {
                                setIsScrollAllowed(value, direction, "k");
                            }));
                        } else {
                            setIsScrollAllowed(value, "all", "k");
                            options.keyboardScrolling = value;
                        }
                    }
                    function moveSectionUp() {
                        var prev = prevUntil($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);
                        if (!prev && (options.loopTop || options.continuousVertical)) prev = last($(SECTION_SEL));
                        if (null != prev) scrollPage(prev, null, true);
                    }
                    function moveSectionDown() {
                        var next = nextUntil($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);
                        if (!next && (options.loopBottom || options.continuousVertical)) next = $(SECTION_SEL)[0];
                        if (null != next) scrollPage(next, null, false);
                    }
                    function silentMoveTo(sectionAnchor, slideAnchor) {
                        setScrollingSpeed(0, "internal");
                        moveTo(sectionAnchor, slideAnchor);
                        setScrollingSpeed(originals.scrollingSpeed, "internal");
                    }
                    function moveTo(sectionAnchor, slideAnchor) {
                        var destiny = getSectionByAnchor(sectionAnchor);
                        if ("undefined" !== typeof slideAnchor) scrollPageAndSlide(sectionAnchor, slideAnchor); else if (null != destiny) scrollPage(destiny);
                    }
                    function moveSlideRight(section) {
                        moveSlide("right", section);
                    }
                    function moveSlideLeft(section) {
                        moveSlide("left", section);
                    }
                    function reBuild(resizing) {
                        if (hasClass(container, DESTROYED)) return;
                        isResizing = true;
                        windowsHeight = getWindowHeight();
                        windowsWidth = getWindowWidth();
                        var sections = $(SECTION_SEL);
                        for (var i = 0; i < sections.length; ++i) {
                            var section = sections[i];
                            var slidesWrap = $(SLIDES_WRAPPER_SEL, section)[0];
                            var slides = $(SLIDE_SEL, section);
                            if (options.verticalCentered) css($(TABLE_CELL_SEL, section), {
                                height: getTableHeight(section) + "px"
                            });
                            css(section, {
                                height: windowsHeight + "px"
                            });
                            if (slides.length > 1) landscapeScroll(slidesWrap, $(SLIDE_ACTIVE_SEL, slidesWrap)[0]);
                        }
                        if (options.scrollOverflow) scrollBarHandler.createScrollBarForAll();
                        var activeSection = $(SECTION_ACTIVE_SEL)[0];
                        var sectionIndex = index(activeSection, SECTION_SEL);
                        if (sectionIndex) silentMoveTo(sectionIndex + 1);
                        isResizing = false;
                        if (isFunction(options.afterResize) && resizing) options.afterResize.call(container, window.innerWidth, window.innerHeight);
                        if (isFunction(options.afterReBuild) && !resizing) options.afterReBuild.call(container);
                    }
                    function isResponsiveMode() {
                        return hasClass($body, RESPONSIVE);
                    }
                    function setResponsive(active) {
                        var isResponsive = isResponsiveMode();
                        if (active) {
                            if (!isResponsive) {
                                setAutoScrolling(false, "internal");
                                setFitToSection(false, "internal");
                                hide($(SECTION_NAV_SEL));
                                addClass($body, RESPONSIVE);
                                if (isFunction(options.afterResponsive)) options.afterResponsive.call(container, active);
                                if (options.scrollOverflow) scrollBarHandler.createScrollBarForAll();
                            }
                        } else if (isResponsive) {
                            setAutoScrolling(originals.autoScrolling, "internal");
                            setFitToSection(originals.autoScrolling, "internal");
                            show($(SECTION_NAV_SEL));
                            removeClass($body, RESPONSIVE);
                            if (isFunction(options.afterResponsive)) options.afterResponsive.call(container, active);
                        }
                    }
                    if (container) {
                        FP.version = "3.1.1";
                        FP.setAutoScrolling = setAutoScrolling;
                        FP.setRecordHistory = setRecordHistory;
                        FP.setScrollingSpeed = setScrollingSpeed;
                        FP.setFitToSection = setFitToSection;
                        FP.setLockAnchors = setLockAnchors;
                        FP.setMouseWheelScrolling = setMouseWheelScrolling;
                        FP.setAllowScrolling = setAllowScrolling;
                        FP.setKeyboardScrolling = setKeyboardScrolling;
                        FP.moveSectionUp = moveSectionUp;
                        FP.moveSectionDown = moveSectionDown;
                        FP.silentMoveTo = silentMoveTo;
                        FP.moveTo = moveTo;
                        FP.moveSlideRight = moveSlideRight;
                        FP.moveSlideLeft = moveSlideLeft;
                        FP.fitToSection = fitToSection;
                        FP.reBuild = reBuild;
                        FP.setResponsive = setResponsive;
                        FP.getFullpageData = function() {
                            return options;
                        };
                        FP.destroy = destroy;
                        FP.getActiveSection = getActiveSection;
                        FP.getActiveSlide = getActiveSlide;
                        FP.test = {
                            top: "0px",
                            translate3d: "translate3d(0px, 0px, 0px)",
                            translate3dH: function() {
                                var a = [];
                                for (var i = 0; i < $(options.sectionSelector, container).length; i++) a.push("translate3d(0px, 0px, 0px)");
                                return a;
                            }(),
                            left: function() {
                                var a = [];
                                for (var i = 0; i < $(options.sectionSelector, container).length; i++) a.push(0);
                                return a;
                            }(),
                            options,
                            setAutoScrolling
                        };
                        FP.shared = {
                            afterRenderActions,
                            isNormalScrollElement: false
                        };
                        window.fullpage_api = FP;
                        if (options.$) Object.keys(FP).forEach((function(key) {
                            options.$.fn.fullpage[key] = FP[key];
                        }));
                        init();
                        bindEvents();
                    }
                    function init() {
                        if (options.css3) options.css3 = support3d();
                        options.scrollBar = options.scrollBar || options.hybrid;
                        setOptionsFromDOM();
                        prepareDom();
                        setAllowScrolling(true);
                        setMouseHijack(true);
                        setAutoScrolling(options.autoScrolling, "internal");
                        responsive();
                        setBodyClass();
                        if ("complete" === document.readyState) scrollToAnchor();
                        window.addEventListener("load", scrollToAnchor);
                        if (!options.scrollOverflow) afterRenderActions();
                        doubleCheckHeight();
                    }
                    function bindEvents() {
                        window.addEventListener("scroll", scrollHandler);
                        window.addEventListener("hashchange", hashChangeHandler);
                        window.addEventListener("focus", focusHandler);
                        window.addEventListener("blur", blurHandler);
                        window.addEventListener("resize", resizeHandler);
                        document.addEventListener("keydown", keydownHandler);
                        document.addEventListener("keyup", keyUpHandler);
                        [ "click", "touchstart" ].forEach((function(eventName) {
                            document.addEventListener(eventName, delegatedEvents);
                        }));
                        if (options.normalScrollElements) {
                            [ "mouseenter", "touchstart" ].forEach((function(eventName) {
                                forMouseLeaveOrTouch(eventName, false);
                            }));
                            [ "mouseleave", "touchend" ].forEach((function(eventName) {
                                forMouseLeaveOrTouch(eventName, true);
                            }));
                        }
                    }
                    function delegatedEvents(e) {
                        var target = e.target;
                        if (target && closest(target, SECTION_NAV_SEL + " a")) sectionBulletHandler.call(target, e); else if (matches(target, SECTION_NAV_TOOLTIP_SEL)) tooltipTextHandler.call(target); else if (matches(target, SLIDES_ARROW_SEL)) slideArrowHandler.call(target, e); else if (matches(target, SLIDES_NAV_LINK_SEL) || null != closest(target, SLIDES_NAV_LINK_SEL)) slideBulletHandler.call(target, e); else if (closest(target, options.menu + " [data-menuanchor]")) menuItemsHandler.call(target, e);
                    }
                    function forMouseLeaveOrTouch(eventName, allowScrolling) {
                        document["fp_" + eventName] = allowScrolling;
                        document.addEventListener(eventName, onMouseEnterOrLeave, true);
                    }
                    function onMouseEnterOrLeave(e) {
                        var type = e.type;
                        var isInsideOneNormalScroll = false;
                        var isUsingScrollOverflow = options.scrollOverflow;
                        var target = "mouseleave" === type ? e.toElement || e.relatedTarget : e.target;
                        if (target == document || !target) {
                            setMouseHijack(true);
                            if (isUsingScrollOverflow) options.scrollOverflowHandler.setIscroll(target, true);
                            return;
                        }
                        if ("touchend" === type) {
                            g_canFireMouseEnterNormalScroll = false;
                            setTimeout((function() {
                                g_canFireMouseEnterNormalScroll = true;
                            }), 800);
                        }
                        if ("mouseenter" === type && !g_canFireMouseEnterNormalScroll) return;
                        var normalSelectors = options.normalScrollElements.split(",");
                        normalSelectors.forEach((function(normalSelector) {
                            if (!isInsideOneNormalScroll) {
                                var isNormalScrollTarget = matches(target, normalSelector);
                                var isNormalScrollChildFocused = closest(target, normalSelector);
                                if (isNormalScrollTarget || isNormalScrollChildFocused) {
                                    if (!FP.shared.isNormalScrollElement) {
                                        setMouseHijack(false);
                                        if (isUsingScrollOverflow) options.scrollOverflowHandler.setIscroll(target, false);
                                    }
                                    FP.shared.isNormalScrollElement = true;
                                    isInsideOneNormalScroll = true;
                                }
                            }
                        }));
                        if (!isInsideOneNormalScroll && FP.shared.isNormalScrollElement) {
                            setMouseHijack(true);
                            if (isUsingScrollOverflow) options.scrollOverflowHandler.setIscroll(target, true);
                            FP.shared.isNormalScrollElement = false;
                        }
                    }
                    function doubleCheckHeight() {
                        for (var i = 1; i < 4; i++) g_doubleCheckHeightId = setTimeout(adjustToNewViewport, 350 * i);
                    }
                    function adjustToNewViewport() {
                        var newWindowHeight = getWindowHeight();
                        var newWindowWidth = getWindowWidth();
                        if (windowsHeight !== newWindowHeight || windowsWidth !== newWindowWidth) {
                            windowsHeight = newWindowHeight;
                            windowsWidth = newWindowWidth;
                            reBuild(true);
                        }
                    }
                    function setOptionsFromDOM() {
                        if (!options.anchors.length) {
                            var anchorsAttribute = "[data-anchor]";
                            var anchors = $(options.sectionSelector.split(",").join(anchorsAttribute + ",") + anchorsAttribute, container);
                            if (anchors.length && anchors.length === $(options.sectionSelector, container).length) {
                                g_initialAnchorsInDom = true;
                                anchors.forEach((function(item) {
                                    options.anchors.push(item.getAttribute("data-anchor").toString());
                                }));
                            }
                        }
                        if (!options.navigationTooltips.length) {
                            var tooltipsAttribute = "[data-tooltip]";
                            var tooltips = $(options.sectionSelector.split(",").join(tooltipsAttribute + ",") + tooltipsAttribute, container);
                            if (tooltips.length) tooltips.forEach((function(item) {
                                options.navigationTooltips.push(item.getAttribute("data-tooltip").toString());
                            }));
                        }
                    }
                    function prepareDom() {
                        css(container, {
                            height: "100%",
                            position: "relative"
                        });
                        addClass(container, WRAPPER);
                        addClass($html, ENABLED);
                        windowsHeight = getWindowHeight();
                        removeClass(container, DESTROYED);
                        addInternalSelectors();
                        var sections = $(SECTION_SEL);
                        for (var i = 0; i < sections.length; i++) {
                            var sectionIndex = i;
                            var section = sections[i];
                            var slides = $(SLIDE_SEL, section);
                            var numSlides = slides.length;
                            section.setAttribute("data-fp-styles", section.getAttribute("style"));
                            styleSection(section, sectionIndex);
                            styleMenu(section, sectionIndex);
                            if (numSlides > 0) styleSlides(section, slides, numSlides); else if (options.verticalCentered) addTableClass(section);
                        }
                        if (options.fixedElements && options.css3) $(options.fixedElements).forEach((function(item) {
                            $body.appendChild(item);
                        }));
                        if (options.navigation) addVerticalNavigation();
                        enableYoutubeAPI();
                        if (options.scrollOverflow) scrollBarHandler = options.scrollOverflowHandler.init(options);
                    }
                    function styleSlides(section, slides, numSlides) {
                        var sliderWidth = 100 * numSlides;
                        var slideWidth = 100 / numSlides;
                        var slidesWrapper = document.createElement("div");
                        slidesWrapper.className = SLIDES_WRAPPER;
                        wrapAll(slides, slidesWrapper);
                        var slidesContainer = document.createElement("div");
                        slidesContainer.className = SLIDES_CONTAINER;
                        wrapAll(slides, slidesContainer);
                        css($(SLIDES_CONTAINER_SEL, section), {
                            width: sliderWidth + "%"
                        });
                        if (numSlides > 1) {
                            if (options.controlArrows) createSlideArrows(section);
                            if (options.slidesNavigation) addSlidesNavigation(section, numSlides);
                        }
                        slides.forEach((function(slide) {
                            css(slide, {
                                width: slideWidth + "%"
                            });
                            if (options.verticalCentered) addTableClass(slide);
                        }));
                        var startingSlide = $(SLIDE_ACTIVE_SEL, section)[0];
                        if (null != startingSlide && (0 !== index($(SECTION_ACTIVE_SEL), SECTION_SEL) || 0 === index($(SECTION_ACTIVE_SEL), SECTION_SEL) && 0 !== index(startingSlide))) silentLandscapeScroll(startingSlide, "internal"); else addClass(slides[0], ACTIVE);
                    }
                    function styleSection(section, index) {
                        if (!index && null == $(SECTION_ACTIVE_SEL)[0]) addClass(section, ACTIVE);
                        startingSection = $(SECTION_ACTIVE_SEL)[0];
                        css(section, {
                            height: windowsHeight + "px"
                        });
                        if (options.paddingTop) css(section, {
                            "padding-top": options.paddingTop
                        });
                        if (options.paddingBottom) css(section, {
                            "padding-bottom": options.paddingBottom
                        });
                        if ("undefined" !== typeof options.sectionsColor[index]) css(section, {
                            "background-color": options.sectionsColor[index]
                        });
                        if ("undefined" !== typeof options.anchors[index]) section.setAttribute("data-anchor", options.anchors[index]);
                    }
                    function styleMenu(section, index) {
                        if ("undefined" !== typeof options.anchors[index]) if (hasClass(section, ACTIVE)) activateMenuAndNav(options.anchors[index], index);
                        if (options.menu && options.css3 && null != closest($(options.menu)[0], WRAPPER_SEL)) $(options.menu).forEach((function(menu) {
                            $body.appendChild(menu);
                        }));
                    }
                    function addInternalSelectors() {
                        addClass($(options.sectionSelector, container), SECTION);
                        addClass($(options.slideSelector, container), SLIDE);
                    }
                    function createSlideArrows(section) {
                        var arrows = [ createElementFromHTML('<div class="' + SLIDES_ARROW_PREV + '"></div>'), createElementFromHTML('<div class="' + SLIDES_ARROW_NEXT + '"></div>') ];
                        after($(SLIDES_WRAPPER_SEL, section)[0], arrows);
                        if ("#fff" !== options.controlArrowColor) {
                            css($(SLIDES_ARROW_NEXT_SEL, section), {
                                "border-color": "transparent transparent transparent " + options.controlArrowColor
                            });
                            css($(SLIDES_ARROW_PREV_SEL, section), {
                                "border-color": "transparent " + options.controlArrowColor + " transparent transparent"
                            });
                        }
                        if (!options.loopHorizontal) hide($(SLIDES_ARROW_PREV_SEL, section));
                    }
                    function addVerticalNavigation() {
                        var navigation = document.createElement("div");
                        navigation.setAttribute("id", SECTION_NAV);
                        var divUl = document.createElement("ul");
                        navigation.appendChild(divUl);
                        appendTo(navigation, $body);
                        var nav = $(SECTION_NAV_SEL)[0];
                        addClass(nav, "fp-" + options.navigationPosition);
                        if (options.showActiveTooltip) addClass(nav, SHOW_ACTIVE_TOOLTIP);
                        var li = "";
                        for (var i = 0; i < $(SECTION_SEL).length; i++) {
                            var link = "";
                            if (options.anchors.length) link = options.anchors[i];
                            li += '<li><a href="#' + link + '"><span class="fp-sr-only">' + getBulletLinkName(i, "Section") + "</span><span></span></a>";
                            var tooltip = options.navigationTooltips[i];
                            if ("undefined" !== typeof tooltip && "" !== tooltip) li += '<div class="' + SECTION_NAV_TOOLTIP + " fp-" + options.navigationPosition + '">' + tooltip + "</div>";
                            li += "</li>";
                        }
                        $("ul", nav)[0].innerHTML = li;
                        var bullet = $("li", $(SECTION_NAV_SEL)[0])[index($(SECTION_ACTIVE_SEL)[0], SECTION_SEL)];
                        addClass($("a", bullet), ACTIVE);
                    }
                    function getBulletLinkName(i, defaultName, item) {
                        var anchor = "Section" === defaultName ? options.anchors[i] : item.getAttribute("data-anchor");
                        return options.navigationTooltips[i] || anchor || defaultName + " " + (i + 1);
                    }
                    function enableYoutubeAPI() {
                        $('iframe[src*="youtube.com/embed/"]', container).forEach((function(item) {
                            addURLParam(item, "enablejsapi=1");
                        }));
                    }
                    function addURLParam(element, newParam) {
                        var originalSrc = element.getAttribute("src");
                        element.setAttribute("src", originalSrc + getUrlParamSign(originalSrc) + newParam);
                    }
                    function getUrlParamSign(url) {
                        return !/\?/.test(url) ? "?" : "&";
                    }
                    function afterRenderActions() {
                        var section = $(SECTION_ACTIVE_SEL)[0];
                        addClass(section, COMPLETELY);
                        lazyLoad(section);
                        lazyLoadOthers();
                        playMedia(section);
                        if (options.scrollOverflow) options.scrollOverflowHandler.afterLoad();
                        if (isDestinyTheStartingSection() && isFunction(options.afterLoad)) fireCallback("afterLoad", {
                            activeSection: section,
                            element: section,
                            direction: null,
                            anchorLink: section.getAttribute("data-anchor"),
                            sectionIndex: index(section, SECTION_SEL)
                        });
                        if (isFunction(options.afterRender)) fireCallback("afterRender");
                    }
                    function isDestinyTheStartingSection() {
                        var anchor = getAnchorsURL();
                        var destinationSection = getSectionByAnchor(anchor.section);
                        return !anchor.section || !destinationSection || "undefined" !== typeof destinationSection && index(destinationSection) === index(startingSection);
                    }
                    var isScrolling = false;
                    var lastScroll = 0;
                    function scrollHandler() {
                        var currentSection;
                        if (isResizing) return;
                        if (!options.autoScrolling || options.scrollBar) {
                            var currentScroll = getScrollTop();
                            var scrollDirection = getScrollDirection(currentScroll);
                            var visibleSectionIndex = 0;
                            var screen_mid = currentScroll + getWindowHeight() / 2;
                            var isAtBottom = $body.offsetHeight - getWindowHeight() === currentScroll;
                            var sections = $(SECTION_SEL);
                            if (isAtBottom) visibleSectionIndex = sections.length - 1; else if (!currentScroll) visibleSectionIndex = 0; else for (var i = 0; i < sections.length; ++i) {
                                var section = sections[i];
                                if (section.offsetTop <= screen_mid) visibleSectionIndex = i;
                            }
                            if (isCompletelyInViewPort(scrollDirection)) if (!hasClass($(SECTION_ACTIVE_SEL)[0], COMPLETELY)) {
                                addClass($(SECTION_ACTIVE_SEL)[0], COMPLETELY);
                                removeClass(siblings($(SECTION_ACTIVE_SEL)[0]), COMPLETELY);
                            }
                            currentSection = sections[visibleSectionIndex];
                            if (!hasClass(currentSection, ACTIVE)) {
                                isScrolling = true;
                                var leavingSection = $(SECTION_ACTIVE_SEL)[0];
                                var leavingSectionIndex = index(leavingSection, SECTION_SEL) + 1;
                                var yMovement = getYmovement(currentSection);
                                var anchorLink = currentSection.getAttribute("data-anchor");
                                var sectionIndex = index(currentSection, SECTION_SEL) + 1;
                                var activeSlide = $(SLIDE_ACTIVE_SEL, currentSection)[0];
                                var slideIndex;
                                var slideAnchorLink;
                                var callbacksParams = {
                                    activeSection: leavingSection,
                                    sectionIndex: sectionIndex - 1,
                                    anchorLink,
                                    element: currentSection,
                                    leavingSection: leavingSectionIndex,
                                    direction: yMovement
                                };
                                if (activeSlide) {
                                    slideAnchorLink = activeSlide.getAttribute("data-anchor");
                                    slideIndex = index(activeSlide);
                                }
                                if (canScroll) {
                                    addClass(currentSection, ACTIVE);
                                    removeClass(siblings(currentSection), ACTIVE);
                                    if (isFunction(options.onLeave)) fireCallback("onLeave", callbacksParams);
                                    if (isFunction(options.afterLoad)) fireCallback("afterLoad", callbacksParams);
                                    stopMedia(leavingSection);
                                    lazyLoad(currentSection);
                                    playMedia(currentSection);
                                    activateMenuAndNav(anchorLink, sectionIndex - 1);
                                    if (options.anchors.length) lastScrolledDestiny = anchorLink;
                                    setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
                                }
                                clearTimeout(scrollId);
                                scrollId = setTimeout((function() {
                                    isScrolling = false;
                                }), 100);
                            }
                            if (options.fitToSection) {
                                clearTimeout(scrollId2);
                                scrollId2 = setTimeout((function() {
                                    if (options.fitToSection && $(SECTION_ACTIVE_SEL)[0].offsetHeight <= windowsHeight) fitToSection();
                                }), options.fitToSectionDelay);
                            }
                        }
                    }
                    function fitToSection() {
                        if (canScroll) {
                            isResizing = true;
                            scrollPage($(SECTION_ACTIVE_SEL)[0]);
                            isResizing = false;
                        }
                    }
                    function isCompletelyInViewPort(movement) {
                        var top = $(SECTION_ACTIVE_SEL)[0].offsetTop;
                        var bottom = top + getWindowHeight();
                        if ("up" == movement) return bottom >= getScrollTop() + getWindowHeight();
                        return top <= getScrollTop();
                    }
                    function isSectionInViewport(el) {
                        var rect = el.getBoundingClientRect();
                        var top = rect.top;
                        var bottom = rect.bottom;
                        var pixelOffset = 2;
                        var isTopInView = top + pixelOffset < windowsHeight && top > 0;
                        var isBottomInView = bottom > pixelOffset && bottom < windowsHeight;
                        return isTopInView || isBottomInView;
                    }
                    function getScrollDirection(currentScroll) {
                        var direction = currentScroll > lastScroll ? "down" : "up";
                        lastScroll = currentScroll;
                        previousDestTop = currentScroll;
                        return direction;
                    }
                    function scrolling(type) {
                        if (!isScrollAllowed.m[type]) return;
                        var scrollSection = "down" === type ? moveSectionDown : moveSectionUp;
                        if (options.scrollOverflow) {
                            var scrollable = options.scrollOverflowHandler.scrollable($(SECTION_ACTIVE_SEL)[0]);
                            var check = "down" === type ? "bottom" : "top";
                            if (null != scrollable) if (options.scrollOverflowHandler.isScrolled(check, scrollable)) scrollSection(); else return true; else scrollSection();
                        } else scrollSection();
                    }
                    function preventBouncing(e) {
                        if (options.autoScrolling && isReallyTouch(e) && isScrollAllowed.m.up) preventDefault(e);
                    }
                    var touchStartY = 0;
                    var touchStartX = 0;
                    var touchEndY = 0;
                    var touchEndX = 0;
                    function touchMoveHandler(e) {
                        var activeSection = closest(e.target, SECTION_SEL) || $(SECTION_ACTIVE_SEL)[0];
                        if (isReallyTouch(e)) {
                            if (options.autoScrolling) preventDefault(e);
                            var touchEvents = getEventsPage(e);
                            touchEndY = touchEvents.y;
                            touchEndX = touchEvents.x;
                            if ($(SLIDES_WRAPPER_SEL, activeSection).length && Math.abs(touchStartX - touchEndX) > Math.abs(touchStartY - touchEndY)) {
                                if (!slideMoving && Math.abs(touchStartX - touchEndX) > getWindowWidth() / 100 * options.touchSensitivity) if (touchStartX > touchEndX) {
                                    if (isScrollAllowed.m.right) moveSlideRight(activeSection);
                                } else if (isScrollAllowed.m.left) moveSlideLeft(activeSection);
                            } else if (options.autoScrolling && canScroll) if (Math.abs(touchStartY - touchEndY) > window.innerHeight / 100 * options.touchSensitivity) if (touchStartY > touchEndY) scrolling("down"); else if (touchEndY > touchStartY) scrolling("up");
                        }
                    }
                    function isReallyTouch(e) {
                        return "undefined" === typeof e.pointerType || "mouse" != e.pointerType;
                    }
                    function touchStartHandler(e) {
                        if (options.fitToSection) activeAnimation = false;
                        if (isReallyTouch(e)) {
                            var touchEvents = getEventsPage(e);
                            touchStartY = touchEvents.y;
                            touchStartX = touchEvents.x;
                        }
                    }
                    function getAverage(elements, number) {
                        var sum = 0;
                        var lastElements = elements.slice(Math.max(elements.length - number, 1));
                        for (var i = 0; i < lastElements.length; i++) sum += lastElements[i];
                        return Math.ceil(sum / number);
                    }
                    var prevTime = (new Date).getTime();
                    function MouseWheelHandler(e) {
                        var curTime = (new Date).getTime();
                        var isNormalScroll = hasClass($(COMPLETELY_SEL)[0], NORMAL_SCROLL);
                        if (!isScrollAllowed.m.down && !isScrollAllowed.m.up) {
                            preventDefault(e);
                            return false;
                        }
                        if (options.autoScrolling && !controlPressed && !isNormalScroll) {
                            e = e || window.event;
                            var value = e.wheelDelta || -e.deltaY || -e.detail;
                            var delta = Math.max(-1, Math.min(1, value));
                            var horizontalDetection = "undefined" !== typeof e.wheelDeltaX || "undefined" !== typeof e.deltaX;
                            var isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;
                            if (scrollings.length > 149) scrollings.shift();
                            scrollings.push(Math.abs(value));
                            if (options.scrollBar) preventDefault(e);
                            var timeDiff = curTime - prevTime;
                            prevTime = curTime;
                            if (timeDiff > 200) scrollings = [];
                            if (canScroll) {
                                var averageEnd = getAverage(scrollings, 10);
                                var averageMiddle = getAverage(scrollings, 70);
                                var isAccelerating = averageEnd >= averageMiddle;
                                if (isAccelerating && isScrollingVertically) if (delta < 0) scrolling("down"); else scrolling("up");
                            }
                            return false;
                        }
                        if (options.fitToSection) activeAnimation = false;
                    }
                    function moveSlide(direction, section) {
                        var activeSection = null == section ? $(SECTION_ACTIVE_SEL)[0] : section;
                        var slides = $(SLIDES_WRAPPER_SEL, activeSection)[0];
                        if (null == slides || slideMoving || $(SLIDE_SEL, slides).length < 2) return;
                        var currentSlide = $(SLIDE_ACTIVE_SEL, slides)[0];
                        var destiny = null;
                        if ("left" === direction) destiny = prevUntil(currentSlide, SLIDE_SEL); else destiny = nextUntil(currentSlide, SLIDE_SEL);
                        if (null == destiny) {
                            if (!options.loopHorizontal) return;
                            var slideSiblings = siblings(currentSlide);
                            if ("left" === direction) destiny = slideSiblings[slideSiblings.length - 1]; else destiny = slideSiblings[0];
                        }
                        slideMoving = true && !FP.test.isTesting;
                        landscapeScroll(slides, destiny, direction);
                    }
                    function keepSlidesPosition() {
                        var activeSlides = $(SLIDE_ACTIVE_SEL);
                        for (var i = 0; i < activeSlides.length; i++) silentLandscapeScroll(activeSlides[i], "internal");
                    }
                    var previousDestTop = 0;
                    function getDestinationPosition(element) {
                        var elementHeight = element.offsetHeight;
                        var elementTop = element.offsetTop;
                        var position = elementTop;
                        var isScrollingDown = elementTop > previousDestTop;
                        var sectionBottom = position - windowsHeight + elementHeight;
                        var bigSectionsDestination = options.bigSectionsDestination;
                        if (elementHeight > windowsHeight) {
                            if (!isScrollingDown && !bigSectionsDestination || "bottom" === bigSectionsDestination) position = sectionBottom;
                        } else if (isScrollingDown || isResizing && null == next(element)) position = sectionBottom;
                        previousDestTop = position;
                        return position;
                    }
                    function scrollPage(element, callback, isMovementUp) {
                        if (null == element) return;
                        var dtop = getDestinationPosition(element);
                        var slideAnchorLink;
                        var slideIndex;
                        var v = {
                            element,
                            callback,
                            isMovementUp,
                            dtop,
                            yMovement: getYmovement(element),
                            anchorLink: element.getAttribute("data-anchor"),
                            sectionIndex: index(element, SECTION_SEL),
                            activeSlide: $(SLIDE_ACTIVE_SEL, element)[0],
                            activeSection: $(SECTION_ACTIVE_SEL)[0],
                            leavingSection: index($(SECTION_ACTIVE_SEL), SECTION_SEL) + 1,
                            localIsResizing: isResizing
                        };
                        if (v.activeSection == element && !isResizing || options.scrollBar && getScrollTop() === v.dtop && !hasClass(element, AUTO_HEIGHT)) return;
                        if (null != v.activeSlide) {
                            slideAnchorLink = v.activeSlide.getAttribute("data-anchor");
                            slideIndex = index(v.activeSlide);
                        }
                        if (!v.localIsResizing) {
                            var direction = v.yMovement;
                            if ("undefined" !== typeof isMovementUp) direction = isMovementUp ? "up" : "down";
                            v.direction = direction;
                            if (isFunction(options.onLeave)) if (false === fireCallback("onLeave", v)) return;
                        }
                        if (options.autoScrolling && options.continuousVertical && "undefined" !== typeof v.isMovementUp && (!v.isMovementUp && "up" == v.yMovement || v.isMovementUp && "down" == v.yMovement)) v = createInfiniteSections(v);
                        if (!v.localIsResizing) stopMedia(v.activeSection);
                        if (options.scrollOverflow) options.scrollOverflowHandler.beforeLeave();
                        addClass(element, ACTIVE);
                        removeClass(siblings(element), ACTIVE);
                        lazyLoad(element);
                        if (options.scrollOverflow) options.scrollOverflowHandler.onLeave();
                        canScroll = false || FP.test.isTesting;
                        setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);
                        performMovement(v);
                        lastScrolledDestiny = v.anchorLink;
                        activateMenuAndNav(v.anchorLink, v.sectionIndex);
                    }
                    function fireCallback(eventName, v) {
                        var eventData = getEventData(eventName, v);
                        if (!options.v2compatible) {
                            trigger(container, eventName, eventData);
                            if (false === options[eventName].apply(eventData[Object.keys(eventData)[0]], toArray(eventData))) return false;
                        } else if (false === options[eventName].apply(eventData[0], eventData.slice(1))) return false;
                        return true;
                    }
                    function nullOrSection(el) {
                        return el ? new Section(el) : null;
                    }
                    function nullOrSlide(el) {
                        return el ? new Slide(el) : null;
                    }
                    function getEventData(eventName, v) {
                        var paramsPerEvent;
                        if (!options.v2compatible) paramsPerEvent = {
                            afterRender: function() {
                                return {
                                    section: nullOrSection($(SECTION_ACTIVE_SEL)[0]),
                                    slide: nullOrSlide($(SLIDE_ACTIVE_SEL, $(SECTION_ACTIVE_SEL)[0])[0])
                                };
                            },
                            onLeave: function() {
                                return {
                                    origin: nullOrSection(v.activeSection),
                                    destination: nullOrSection(v.element),
                                    direction: v.direction
                                };
                            },
                            afterLoad: function() {
                                return paramsPerEvent.onLeave();
                            },
                            afterSlideLoad: function() {
                                return {
                                    section: nullOrSection(v.section),
                                    origin: nullOrSlide(v.prevSlide),
                                    destination: nullOrSlide(v.destiny),
                                    direction: v.direction
                                };
                            },
                            onSlideLeave: function() {
                                return paramsPerEvent.afterSlideLoad();
                            }
                        }; else paramsPerEvent = {
                            afterRender: function() {
                                return [ container ];
                            },
                            onLeave: function() {
                                return [ v.activeSection, v.leavingSection, v.sectionIndex + 1, v.direction ];
                            },
                            afterLoad: function() {
                                return [ v.element, v.anchorLink, v.sectionIndex + 1 ];
                            },
                            afterSlideLoad: function() {
                                return [ v.destiny, v.anchorLink, v.sectionIndex + 1, v.slideAnchor, v.slideIndex ];
                            },
                            onSlideLeave: function() {
                                return [ v.prevSlide, v.anchorLink, v.sectionIndex + 1, v.prevSlideIndex, v.direction, v.slideIndex ];
                            }
                        };
                        return paramsPerEvent[eventName]();
                    }
                    function performMovement(v) {
                        var isFastSpeed = options.scrollingSpeed < 700;
                        var transitionLapse = isFastSpeed ? 700 : options.scrollingSpeed;
                        if (options.css3 && options.autoScrolling && !options.scrollBar) {
                            var translate3d = "translate3d(0px, -" + Math.round(v.dtop) + "px, 0px)";
                            transformContainer(translate3d, true);
                            if (options.scrollingSpeed) {
                                clearTimeout(afterSectionLoadsId);
                                afterSectionLoadsId = setTimeout((function() {
                                    afterSectionLoads(v);
                                    canScroll = !isFastSpeed;
                                }), options.scrollingSpeed);
                            } else afterSectionLoads(v);
                        } else {
                            var scrollSettings = getScrollSettings(v.dtop);
                            FP.test.top = -v.dtop + "px";
                            css($htmlBody, {
                                "scroll-behavior": "unset"
                            });
                            scrollTo(scrollSettings.element, scrollSettings.options, options.scrollingSpeed, (function() {
                                if (options.scrollBar) setTimeout((function() {
                                    afterSectionLoads(v);
                                }), 30); else {
                                    afterSectionLoads(v);
                                    canScroll = !isFastSpeed;
                                }
                            }));
                        }
                        if (isFastSpeed) {
                            clearTimeout(g_transitionLapseId);
                            g_transitionLapseId = setTimeout((function() {
                                canScroll = true;
                            }), transitionLapse);
                        }
                    }
                    function getScrollSettings(top) {
                        var scroll = {};
                        if (options.autoScrolling && !options.scrollBar) {
                            scroll.options = -top;
                            scroll.element = $(WRAPPER_SEL)[0];
                        } else {
                            scroll.options = top;
                            scroll.element = window;
                        }
                        return scroll;
                    }
                    function createInfiniteSections(v) {
                        if (!v.isMovementUp) after($(SECTION_ACTIVE_SEL)[0], prevAll(v.activeSection, SECTION_SEL).reverse()); else before($(SECTION_ACTIVE_SEL)[0], nextAll(v.activeSection, SECTION_SEL));
                        silentScroll($(SECTION_ACTIVE_SEL)[0].offsetTop);
                        keepSlidesPosition();
                        v.wrapAroundElements = v.activeSection;
                        v.dtop = v.element.offsetTop;
                        v.yMovement = getYmovement(v.element);
                        return v;
                    }
                    function continuousVerticalFixSectionOrder(v) {
                        if (null == v.wrapAroundElements) return;
                        if (v.isMovementUp) before($(SECTION_SEL)[0], v.wrapAroundElements); else after($(SECTION_SEL)[$(SECTION_SEL).length - 1], v.wrapAroundElements);
                        silentScroll($(SECTION_ACTIVE_SEL)[0].offsetTop);
                        keepSlidesPosition();
                    }
                    function afterSectionLoads(v) {
                        continuousVerticalFixSectionOrder(v);
                        if (isFunction(options.afterLoad) && !v.localIsResizing) fireCallback("afterLoad", v);
                        if (options.scrollOverflow) options.scrollOverflowHandler.afterLoad();
                        if (!v.localIsResizing) playMedia(v.element);
                        addClass(v.element, COMPLETELY);
                        removeClass(siblings(v.element), COMPLETELY);
                        lazyLoadOthers();
                        canScroll = true;
                        if (isFunction(v.callback)) v.callback();
                    }
                    function setSrc(element, attribute) {
                        element.setAttribute(attribute, element.getAttribute("data-" + attribute));
                        element.removeAttribute("data-" + attribute);
                    }
                    function lazyLoadOthers() {
                        var hasAutoHeightSections = $(AUTO_HEIGHT_SEL)[0] || isResponsiveMode() && $(AUTO_HEIGHT_RESPONSIVE_SEL)[0];
                        if (!options.lazyLoading || !hasAutoHeightSections) return;
                        $(SECTION_SEL + ":not(" + ACTIVE_SEL + ")").forEach((function(section) {
                            if (isSectionInViewport(section)) lazyLoad(section);
                        }));
                    }
                    function lazyLoad(destiny) {
                        if (!options.lazyLoading) return;
                        var panel = getSlideOrSection(destiny);
                        $("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", panel).forEach((function(element) {
                            [ "src", "srcset" ].forEach((function(type) {
                                var attribute = element.getAttribute("data-" + type);
                                if (null != attribute && attribute) {
                                    setSrc(element, type);
                                    element.addEventListener("load", (function() {
                                        onMediaLoad(destiny);
                                    }));
                                }
                            }));
                            if (matches(element, "source")) {
                                var elementToPlay = closest(element, "video, audio");
                                if (elementToPlay) {
                                    elementToPlay.load();
                                    elementToPlay.onloadeddata = function() {
                                        onMediaLoad(destiny);
                                    };
                                }
                            }
                        }));
                    }
                    function onMediaLoad(section) {
                        if (options.scrollOverflow) {
                            clearTimeout(g_mediaLoadedId);
                            g_mediaLoadedId = setTimeout((function() {
                                if (!hasClass($body, RESPONSIVE)) scrollBarHandler.createScrollBar(section);
                            }), 200);
                        }
                    }
                    function playMedia(destiny) {
                        var panel = getSlideOrSection(destiny);
                        $("video, audio", panel).forEach((function(element) {
                            if (element.hasAttribute("data-autoplay") && "function" === typeof element.play) element.play();
                        }));
                        $('iframe[src*="youtube.com/embed/"]', panel).forEach((function(element) {
                            if (element.hasAttribute("data-autoplay")) playYoutube(element);
                            element.onload = function() {
                                if (element.hasAttribute("data-autoplay")) playYoutube(element);
                            };
                        }));
                    }
                    function playYoutube(element) {
                        element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                    }
                    function stopMedia(destiny) {
                        var panel = getSlideOrSection(destiny);
                        $("video, audio", panel).forEach((function(element) {
                            if (!element.hasAttribute("data-keepplaying") && "function" === typeof element.pause) element.pause();
                        }));
                        $('iframe[src*="youtube.com/embed/"]', panel).forEach((function(element) {
                            if (/youtube\.com\/embed\//.test(element.getAttribute("src")) && !element.hasAttribute("data-keepplaying")) element.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                        }));
                    }
                    function getSlideOrSection(destiny) {
                        var slide = $(SLIDE_ACTIVE_SEL, destiny);
                        if (slide.length) destiny = slide[0];
                        return destiny;
                    }
                    function scrollToAnchor() {
                        var anchors = getAnchorsURL();
                        var sectionAnchor = anchors.section;
                        var slideAnchor = anchors.slide;
                        if (sectionAnchor) if (options.animateAnchor) scrollPageAndSlide(sectionAnchor, slideAnchor); else silentMoveTo(sectionAnchor, slideAnchor);
                    }
                    function hashChangeHandler() {
                        if (!isScrolling && !options.lockAnchors) {
                            var anchors = getAnchorsURL();
                            var sectionAnchor = anchors.section;
                            var slideAnchor = anchors.slide;
                            var isFirstSlideMove = "undefined" === typeof lastScrolledDestiny;
                            var isFirstScrollMove = "undefined" === typeof lastScrolledDestiny && "undefined" === typeof slideAnchor && !slideMoving;
                            if (sectionAnchor && sectionAnchor.length) if (sectionAnchor && sectionAnchor !== lastScrolledDestiny && !isFirstSlideMove || isFirstScrollMove || !slideMoving && lastScrolledSlide != slideAnchor) scrollPageAndSlide(sectionAnchor, slideAnchor);
                        }
                    }
                    function getAnchorsURL() {
                        var section;
                        var slide;
                        var hash = window.location.hash;
                        if (hash.length) {
                            var anchorsParts = hash.replace("#", "").split("/");
                            var isFunkyAnchor = hash.indexOf("#/") > -1;
                            section = isFunkyAnchor ? "/" + anchorsParts[1] : decodeURIComponent(anchorsParts[0]);
                            var slideAnchor = isFunkyAnchor ? anchorsParts[2] : anchorsParts[1];
                            if (slideAnchor && slideAnchor.length) slide = decodeURIComponent(slideAnchor);
                        }
                        return {
                            section,
                            slide
                        };
                    }
                    function keydownHandler(e) {
                        clearTimeout(keydownId);
                        var activeElement = document.activeElement;
                        var keyCode = e.keyCode;
                        if (9 === keyCode) onTab(e); else if (!matches(activeElement, "textarea") && !matches(activeElement, "input") && !matches(activeElement, "select") && "true" !== activeElement.getAttribute("contentEditable") && "" !== activeElement.getAttribute("contentEditable") && options.keyboardScrolling && options.autoScrolling) {
                            var keyControls = [ 40, 38, 32, 33, 34 ];
                            if (keyControls.indexOf(keyCode) > -1) preventDefault(e);
                            controlPressed = e.ctrlKey;
                            keydownId = setTimeout((function() {
                                onkeydown(e);
                            }), 150);
                        }
                    }
                    function tooltipTextHandler() {
                        trigger(prev(this), "click");
                    }
                    function keyUpHandler(e) {
                        if (isWindowFocused) controlPressed = e.ctrlKey;
                    }
                    function mouseDownHandler(e) {
                        if (2 == e.which) {
                            oldPageY = e.pageY;
                            container.addEventListener("mousemove", mouseMoveHandler);
                        }
                    }
                    function mouseUpHandler(e) {
                        if (2 == e.which) container.removeEventListener("mousemove", mouseMoveHandler);
                    }
                    function onTab(e) {
                        var isShiftPressed = e.shiftKey;
                        var activeElement = document.activeElement;
                        var focusableElements = getFocusables(getSlideOrSection($(SECTION_ACTIVE_SEL)[0]));
                        function preventAndFocusFirst(e) {
                            preventDefault(e);
                            return focusableElements[0] ? focusableElements[0].focus() : null;
                        }
                        if (isFocusOutside(e)) return;
                        if (activeElement) {
                            if (null == closest(activeElement, SECTION_ACTIVE_SEL + "," + SECTION_ACTIVE_SEL + " " + SLIDE_ACTIVE_SEL)) activeElement = preventAndFocusFirst(e);
                        } else preventAndFocusFirst(e);
                        if (!isShiftPressed && activeElement == focusableElements[focusableElements.length - 1] || isShiftPressed && activeElement == focusableElements[0]) preventDefault(e);
                    }
                    function getFocusables(el) {
                        return [].slice.call($(focusableElementsString, el)).filter((function(item) {
                            return "-1" !== item.getAttribute("tabindex") && null !== item.offsetParent;
                        }));
                    }
                    function isFocusOutside(e) {
                        var allFocusables = getFocusables(document);
                        var currentFocusIndex = allFocusables.indexOf(document.activeElement);
                        var focusDestinationIndex = e.shiftKey ? currentFocusIndex - 1 : currentFocusIndex + 1;
                        var focusDestination = allFocusables[focusDestinationIndex];
                        var destinationItemSlide = nullOrSlide(closest(focusDestination, SLIDE_SEL));
                        var destinationItemSection = nullOrSection(closest(focusDestination, SECTION_SEL));
                        return !destinationItemSlide && !destinationItemSection;
                    }
                    function slideArrowHandler() {
                        var section = closest(this, SECTION_SEL);
                        if (hasClass(this, SLIDES_PREV)) {
                            if (isScrollAllowed.m.left) moveSlideLeft(section);
                        } else if (isScrollAllowed.m.right) moveSlideRight(section);
                    }
                    function focusHandler() {
                        isWindowFocused = true;
                    }
                    function blurHandler() {
                        isWindowFocused = false;
                        controlPressed = false;
                    }
                    function sectionBulletHandler(e) {
                        preventDefault(e);
                        var indexBullet = index(closest(this, SECTION_NAV_SEL + " li"));
                        scrollPage($(SECTION_SEL)[indexBullet]);
                    }
                    function slideBulletHandler(e) {
                        preventDefault(e);
                        var slides = $(SLIDES_WRAPPER_SEL, closest(this, SECTION_SEL))[0];
                        var destiny = $(SLIDE_SEL, slides)[index(closest(this, "li"))];
                        landscapeScroll(slides, destiny);
                    }
                    function menuItemsHandler(e) {
                        if ($(options.menu)[0] && (options.lockAnchors || !options.anchors.length)) {
                            preventDefault(e);
                            moveTo(this.getAttribute("data-menuanchor"));
                        }
                    }
                    function onkeydown(e) {
                        var shiftPressed = e.shiftKey;
                        var activeElement = document.activeElement;
                        var isMediaFocused = matches(activeElement, "video") || matches(activeElement, "audio");
                        if (!canScroll && [ 37, 39 ].indexOf(e.keyCode) < 0) return;
                        switch (e.keyCode) {
                          case 38:
                          case 33:
                            if (isScrollAllowed.k.up) moveSectionUp();
                            break;

                          case 32:
                            if (shiftPressed && isScrollAllowed.k.up && !isMediaFocused) {
                                moveSectionUp();
                                break;
                            }

                          case 40:
                          case 34:
                            if (isScrollAllowed.k.down) if (32 !== e.keyCode || !isMediaFocused) moveSectionDown();
                            break;

                          case 36:
                            if (isScrollAllowed.k.up) moveTo(1);
                            break;

                          case 35:
                            if (isScrollAllowed.k.down) moveTo($(SECTION_SEL).length);
                            break;

                          case 37:
                            if (isScrollAllowed.k.left) moveSlideLeft();
                            break;

                          case 39:
                            if (isScrollAllowed.k.right) moveSlideRight();
                            break;

                          default:
                            return;
                        }
                    }
                    var oldPageY = 0;
                    function mouseMoveHandler(e) {
                        if (!options.autoScrolling) return;
                        if (canScroll) if (e.pageY < oldPageY && isScrollAllowed.m.up) moveSectionUp(); else if (e.pageY > oldPageY && isScrollAllowed.m.down) moveSectionDown();
                        oldPageY = e.pageY;
                    }
                    function landscapeScroll(slides, destiny, direction) {
                        var section = closest(slides, SECTION_SEL);
                        var v = {
                            slides,
                            destiny,
                            direction,
                            destinyPos: {
                                left: destiny.offsetLeft
                            },
                            slideIndex: index(destiny),
                            section,
                            sectionIndex: index(section, SECTION_SEL),
                            anchorLink: section.getAttribute("data-anchor"),
                            slidesNav: $(SLIDES_NAV_SEL, section)[0],
                            slideAnchor: getAnchor(destiny),
                            prevSlide: $(SLIDE_ACTIVE_SEL, section)[0],
                            prevSlideIndex: index($(SLIDE_ACTIVE_SEL, section)[0]),
                            localIsResizing: isResizing
                        };
                        v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);
                        v.direction = v.direction ? v.direction : v.xMovement;
                        if (!v.localIsResizing) canScroll = false;
                        if (options.onSlideLeave) if (!v.localIsResizing && "none" !== v.xMovement) if (isFunction(options.onSlideLeave)) if (false === fireCallback("onSlideLeave", v)) {
                            slideMoving = false;
                            return;
                        }
                        addClass(destiny, ACTIVE);
                        removeClass(siblings(destiny), ACTIVE);
                        if (!v.localIsResizing) {
                            stopMedia(v.prevSlide);
                            lazyLoad(destiny);
                        }
                        if (!options.loopHorizontal && options.controlArrows) {
                            toggle($(SLIDES_ARROW_PREV_SEL, section), 0 !== v.slideIndex);
                            toggle($(SLIDES_ARROW_NEXT_SEL, section), null != next(destiny));
                        }
                        if (hasClass(section, ACTIVE) && !v.localIsResizing) setState(v.slideIndex, v.slideAnchor, v.anchorLink, v.sectionIndex);
                        performHorizontalMove(slides, v, true);
                    }
                    function afterSlideLoads(v) {
                        activeSlidesNavigation(v.slidesNav, v.slideIndex);
                        if (!v.localIsResizing) {
                            if (isFunction(options.afterSlideLoad)) fireCallback("afterSlideLoad", v);
                            canScroll = true;
                            playMedia(v.destiny);
                        }
                        slideMoving = false;
                    }
                    function performHorizontalMove(slides, v, fireCallback) {
                        var destinyPos = v.destinyPos;
                        if (options.css3) {
                            var translate3d = "translate3d(-" + Math.round(destinyPos.left) + "px, 0px, 0px)";
                            FP.test.translate3dH[v.sectionIndex] = translate3d;
                            css(addAnimation($(SLIDES_CONTAINER_SEL, slides)), getTransforms(translate3d));
                            afterSlideLoadsId = setTimeout((function() {
                                if (fireCallback) afterSlideLoads(v);
                            }), options.scrollingSpeed);
                        } else {
                            FP.test.left[v.sectionIndex] = Math.round(destinyPos.left);
                            scrollTo(slides, Math.round(destinyPos.left), options.scrollingSpeed, (function() {
                                if (fireCallback) afterSlideLoads(v);
                            }));
                        }
                    }
                    function activeSlidesNavigation(slidesNav, slideIndex) {
                        if (options.slidesNavigation && null != slidesNav) {
                            removeClass($(ACTIVE_SEL, slidesNav), ACTIVE);
                            addClass($("a", $("li", slidesNav)[slideIndex]), ACTIVE);
                        }
                    }
                    var previousHeight = windowsHeight;
                    function resizeHandler() {
                        clearTimeout(resizeId);
                        resizeId = setTimeout((function() {
                            for (var i = 0; i < 4; i++) resizeHandlerId = setTimeout(resizeActions, 200 * i);
                        }), 200);
                    }
                    function resizeActions() {
                        isResizing = true;
                        responsive();
                        if (isTouchDevice) {
                            var activeElement = document.activeElement;
                            if (!matches(activeElement, "textarea") && !matches(activeElement, "input") && !matches(activeElement, "select")) {
                                var currentHeight = getWindowHeight();
                                if (Math.abs(currentHeight - previousHeight) > 20 * Math.max(previousHeight, currentHeight) / 100) {
                                    reBuild(true);
                                    previousHeight = currentHeight;
                                }
                            }
                        } else adjustToNewViewport();
                        isResizing = false;
                    }
                    function responsive() {
                        var widthLimit = options.responsive || options.responsiveWidth;
                        var heightLimit = options.responsiveHeight;
                        var isBreakingPointWidth = widthLimit && window.innerWidth < widthLimit;
                        var isBreakingPointHeight = heightLimit && window.innerHeight < heightLimit;
                        if (widthLimit && heightLimit) setResponsive(isBreakingPointWidth || isBreakingPointHeight); else if (widthLimit) setResponsive(isBreakingPointWidth); else if (heightLimit) setResponsive(isBreakingPointHeight);
                    }
                    function addAnimation(element) {
                        var transition = "all " + options.scrollingSpeed + "ms " + options.easingcss3;
                        removeClass(element, NO_TRANSITION);
                        return css(element, {
                            "-webkit-transition": transition,
                            transition
                        });
                    }
                    function removeAnimation(element) {
                        return addClass(element, NO_TRANSITION);
                    }
                    function activateNavDots(name, sectionIndex) {
                        if (options.navigation && null != $(SECTION_NAV_SEL)[0]) {
                            removeClass($(ACTIVE_SEL, $(SECTION_NAV_SEL)[0]), ACTIVE);
                            if (name) addClass($('a[href="#' + name + '"]', $(SECTION_NAV_SEL)[0]), ACTIVE); else addClass($("a", $("li", $(SECTION_NAV_SEL)[0])[sectionIndex]), ACTIVE);
                        }
                    }
                    function activateMenuElement(name) {
                        $(options.menu).forEach((function(menu) {
                            if (options.menu && null != menu) {
                                removeClass($(ACTIVE_SEL, menu), ACTIVE);
                                addClass($('[data-menuanchor="' + name + '"]', menu), ACTIVE);
                            }
                        }));
                    }
                    function activateMenuAndNav(anchor, index) {
                        activateMenuElement(anchor);
                        activateNavDots(anchor, index);
                    }
                    function getYmovement(destiny) {
                        var fromIndex = index($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);
                        var toIndex = index(destiny, SECTION_SEL);
                        if (fromIndex == toIndex) return "none";
                        if (fromIndex > toIndex) return "up";
                        return "down";
                    }
                    function getXmovement(fromIndex, toIndex) {
                        if (fromIndex == toIndex) return "none";
                        if (fromIndex > toIndex) return "left";
                        return "right";
                    }
                    function addTableClass(element) {
                        if (!hasClass(element, TABLE)) {
                            var wrapper = document.createElement("div");
                            wrapper.className = TABLE_CELL;
                            wrapper.style.height = getTableHeight(element) + "px";
                            addClass(element, TABLE);
                            wrapInner(element, wrapper);
                        }
                    }
                    function getTableHeight(element) {
                        var sectionHeight = windowsHeight;
                        if (options.paddingTop || options.paddingBottom) {
                            var section = element;
                            if (!hasClass(section, SECTION)) section = closest(element, SECTION_SEL);
                            var paddings = parseInt(getComputedStyle(section)["padding-top"]) + parseInt(getComputedStyle(section)["padding-bottom"]);
                            sectionHeight = windowsHeight - paddings;
                        }
                        return sectionHeight;
                    }
                    function transformContainer(translate3d, animated) {
                        if (animated) addAnimation(container); else removeAnimation(container);
                        css(container, getTransforms(translate3d));
                        FP.test.translate3d = translate3d;
                        setTimeout((function() {
                            removeClass(container, NO_TRANSITION);
                        }), 10);
                    }
                    function getSectionByAnchor(sectionAnchor) {
                        var section = $(SECTION_SEL + '[data-anchor="' + sectionAnchor + '"]', container)[0];
                        if (!section) {
                            var sectionIndex = "undefined" !== typeof sectionAnchor ? sectionAnchor - 1 : 0;
                            section = $(SECTION_SEL)[sectionIndex];
                        }
                        return section;
                    }
                    function getSlideByAnchor(slideAnchor, section) {
                        var slide = $(SLIDE_SEL + '[data-anchor="' + slideAnchor + '"]', section)[0];
                        if (null == slide) {
                            slideAnchor = "undefined" !== typeof slideAnchor ? slideAnchor : 0;
                            slide = $(SLIDE_SEL, section)[slideAnchor];
                        }
                        return slide;
                    }
                    function scrollPageAndSlide(sectionAnchor, slideAnchor) {
                        var section = getSectionByAnchor(sectionAnchor);
                        if (null == section) return;
                        var slide = getSlideByAnchor(slideAnchor, section);
                        if (getAnchor(section) !== lastScrolledDestiny && !hasClass(section, ACTIVE)) scrollPage(section, (function() {
                            scrollSlider(slide);
                        })); else scrollSlider(slide);
                    }
                    function scrollSlider(slide) {
                        if (null != slide) landscapeScroll(closest(slide, SLIDES_WRAPPER_SEL), slide);
                    }
                    function addSlidesNavigation(section, numSlides) {
                        appendTo(createElementFromHTML('<div class="' + SLIDES_NAV + '"><ul></ul></div>'), section);
                        var nav = $(SLIDES_NAV_SEL, section)[0];
                        addClass(nav, "fp-" + options.slidesNavPosition);
                        for (var i = 0; i < numSlides; i++) {
                            var slide = $(SLIDE_SEL, section)[i];
                            appendTo(createElementFromHTML('<li><a href="#"><span class="fp-sr-only">' + getBulletLinkName(i, "Slide", slide) + "</span><span></span></a></li>"), $("ul", nav)[0]);
                        }
                        css(nav, {
                            "margin-left": "-" + nav.innerWidth / 2 + "px"
                        });
                        addClass($("a", $("li", nav)[0]), ACTIVE);
                    }
                    function setState(slideIndex, slideAnchor, anchorLink, sectionIndex) {
                        var sectionHash = "";
                        if (options.anchors.length && !options.lockAnchors) if (slideIndex) {
                            if (null != anchorLink) sectionHash = anchorLink;
                            if (null == slideAnchor) slideAnchor = slideIndex;
                            lastScrolledSlide = slideAnchor;
                            setUrlHash(sectionHash + "/" + slideAnchor);
                        } else if (null != slideIndex) {
                            lastScrolledSlide = slideAnchor;
                            setUrlHash(anchorLink);
                        } else setUrlHash(anchorLink);
                        setBodyClass();
                    }
                    function setUrlHash(url) {
                        if (options.recordHistory) location.hash = url; else if (isTouchDevice || isTouch) window.history.replaceState(void 0, void 0, "#" + url); else {
                            var baseUrl = window.location.href.split("#")[0];
                            window.location.replace(baseUrl + "#" + url);
                        }
                    }
                    function getAnchor(element) {
                        if (!element) return null;
                        var anchor = element.getAttribute("data-anchor");
                        var elementIndex = index(element);
                        if (null == anchor) anchor = elementIndex;
                        return anchor;
                    }
                    function setBodyClass() {
                        var section = $(SECTION_ACTIVE_SEL)[0];
                        var slide = $(SLIDE_ACTIVE_SEL, section)[0];
                        var sectionAnchor = getAnchor(section);
                        var slideAnchor = getAnchor(slide);
                        var text = String(sectionAnchor);
                        if (slide) text = text + "-" + slideAnchor;
                        text = text.replace("/", "-").replace("#", "");
                        var classRe = new RegExp("\\b\\s?" + VIEWING_PREFIX + "-[^\\s]+\\b", "g");
                        $body.className = $body.className.replace(classRe, "");
                        addClass($body, VIEWING_PREFIX + "-" + text);
                    }
                    function support3d() {
                        var has3d, el = document.createElement("p"), transforms = {
                            webkitTransform: "-webkit-transform",
                            OTransform: "-o-transform",
                            msTransform: "-ms-transform",
                            MozTransform: "-moz-transform",
                            transform: "transform"
                        };
                        el.style.display = "block";
                        document.body.insertBefore(el, null);
                        for (var t in transforms) if (void 0 !== el.style[t]) {
                            el.style[t] = "translate3d(1px,1px,1px)";
                            has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                        }
                        document.body.removeChild(el);
                        return void 0 !== has3d && has3d.length > 0 && "none" !== has3d;
                    }
                    function removeMouseWheelHandler() {
                        if (document.addEventListener) {
                            document.removeEventListener("mousewheel", MouseWheelHandler, false);
                            document.removeEventListener("wheel", MouseWheelHandler, false);
                            document.removeEventListener("MozMousePixelScroll", MouseWheelHandler, false);
                        } else document.detachEvent("onmousewheel", MouseWheelHandler);
                    }
                    function addMouseWheelHandler() {
                        var prefix = "";
                        var _addEventListener;
                        if (window.addEventListener) _addEventListener = "addEventListener"; else {
                            _addEventListener = "attachEvent";
                            prefix = "on";
                        }
                        var support = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                        var passiveEvent = g_supportsPassive ? {
                            passive: false
                        } : false;
                        if ("DOMMouseScroll" == support) document[_addEventListener](prefix + "MozMousePixelScroll", MouseWheelHandler, passiveEvent); else document[_addEventListener](prefix + support, MouseWheelHandler, passiveEvent);
                    }
                    function addMiddleWheelHandler() {
                        container.addEventListener("mousedown", mouseDownHandler);
                        container.addEventListener("mouseup", mouseUpHandler);
                    }
                    function removeMiddleWheelHandler() {
                        container.removeEventListener("mousedown", mouseDownHandler);
                        container.removeEventListener("mouseup", mouseUpHandler);
                    }
                    function addTouchHandler() {
                        if (isTouchDevice || isTouch) {
                            if (options.autoScrolling) {
                                $body.removeEventListener(events.touchmove, preventBouncing, {
                                    passive: false
                                });
                                $body.addEventListener(events.touchmove, preventBouncing, {
                                    passive: false
                                });
                            }
                            var touchWrapper = options.touchWrapper;
                            touchWrapper.removeEventListener(events.touchstart, touchStartHandler);
                            touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, {
                                passive: false
                            });
                            touchWrapper.addEventListener(events.touchstart, touchStartHandler);
                            touchWrapper.addEventListener(events.touchmove, touchMoveHandler, {
                                passive: false
                            });
                        }
                    }
                    function removeTouchHandler() {
                        if (isTouchDevice || isTouch) {
                            if (options.autoScrolling) {
                                $body.removeEventListener(events.touchmove, touchMoveHandler, {
                                    passive: false
                                });
                                $body.removeEventListener(events.touchmove, preventBouncing, {
                                    passive: false
                                });
                            }
                            var touchWrapper = options.touchWrapper;
                            touchWrapper.removeEventListener(events.touchstart, touchStartHandler);
                            touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, {
                                passive: false
                            });
                        }
                    }
                    function getMSPointer() {
                        var pointer;
                        if (window.PointerEvent) pointer = {
                            down: "pointerdown",
                            move: "pointermove"
                        }; else pointer = {
                            down: "MSPointerDown",
                            move: "MSPointerMove"
                        };
                        return pointer;
                    }
                    function getEventsPage(e) {
                        var events = [];
                        events.y = "undefined" !== typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY;
                        events.x = "undefined" !== typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX;
                        if (isTouch && isReallyTouch(e) && options.scrollBar && "undefined" !== typeof e.touches) {
                            events.y = e.touches[0].pageY;
                            events.x = e.touches[0].pageX;
                        }
                        return events;
                    }
                    function silentLandscapeScroll(activeSlide, noCallbacks) {
                        setScrollingSpeed(0, "internal");
                        if ("undefined" !== typeof noCallbacks) isResizing = true;
                        landscapeScroll(closest(activeSlide, SLIDES_WRAPPER_SEL), activeSlide);
                        if ("undefined" !== typeof noCallbacks) isResizing = false;
                        setScrollingSpeed(originals.scrollingSpeed, "internal");
                    }
                    function silentScroll(top) {
                        var roundedTop = Math.round(top);
                        if (options.css3 && options.autoScrolling && !options.scrollBar) {
                            var translate3d = "translate3d(0px, -" + roundedTop + "px, 0px)";
                            transformContainer(translate3d, false);
                        } else if (options.autoScrolling && !options.scrollBar) {
                            css(container, {
                                top: -roundedTop + "px"
                            });
                            FP.test.top = -roundedTop + "px";
                        } else {
                            var scrollSettings = getScrollSettings(roundedTop);
                            setScrolling(scrollSettings.element, scrollSettings.options);
                        }
                    }
                    function getTransforms(translate3d) {
                        return {
                            "-webkit-transform": translate3d,
                            "-moz-transform": translate3d,
                            "-ms-transform": translate3d,
                            transform: translate3d
                        };
                    }
                    function setIsScrollAllowed(value, direction, type) {
                        if ("all" !== direction) isScrollAllowed[type][direction] = value; else Object.keys(isScrollAllowed[type]).forEach((function(key) {
                            isScrollAllowed[type][key] = value;
                        }));
                    }
                    function destroy(all) {
                        setAutoScrolling(false, "internal");
                        setAllowScrolling(true);
                        setMouseHijack(false);
                        setKeyboardScrolling(false);
                        addClass(container, DESTROYED);
                        [ afterSlideLoadsId, afterSectionLoadsId, resizeId, scrollId, scrollId2, g_doubleCheckHeightId, resizeHandlerId, g_transitionLapseId ].forEach((function(timeoutId) {
                            clearTimeout(timeoutId);
                        }));
                        window.removeEventListener("scroll", scrollHandler);
                        window.removeEventListener("hashchange", hashChangeHandler);
                        window.removeEventListener("resize", resizeHandler);
                        document.removeEventListener("keydown", keydownHandler);
                        document.removeEventListener("keyup", keyUpHandler);
                        [ "click", "touchstart" ].forEach((function(eventName) {
                            document.removeEventListener(eventName, delegatedEvents);
                        }));
                        [ "mouseenter", "touchstart", "mouseleave", "touchend" ].forEach((function(eventName) {
                            document.removeEventListener(eventName, onMouseEnterOrLeave, true);
                        }));
                        if (all) destroyStructure();
                    }
                    function destroyStructure() {
                        silentScroll(0);
                        $("img[data-src], source[data-src], audio[data-src], iframe[data-src]", container).forEach((function(item) {
                            setSrc(item, "src");
                        }));
                        $("img[data-srcset]").forEach((function(item) {
                            setSrc(item, "srcset");
                        }));
                        remove($(SECTION_NAV_SEL + ", " + SLIDES_NAV_SEL + ", " + SLIDES_ARROW_SEL));
                        css($(SECTION_SEL), {
                            height: "",
                            "background-color": "",
                            padding: ""
                        });
                        css($(SLIDE_SEL), {
                            width: ""
                        });
                        css(container, {
                            height: "",
                            position: "",
                            "-ms-touch-action": "",
                            "touch-action": ""
                        });
                        css($htmlBody, {
                            overflow: "",
                            height: ""
                        });
                        removeClass($html, ENABLED);
                        removeClass($body, RESPONSIVE);
                        $body.className.split(/\s+/).forEach((function(className) {
                            if (0 === className.indexOf(VIEWING_PREFIX)) removeClass($body, className);
                        }));
                        $(SECTION_SEL + ", " + SLIDE_SEL).forEach((function(item) {
                            if (options.scrollOverflowHandler && options.scrollOverflow) options.scrollOverflowHandler.remove(item);
                            removeClass(item, TABLE + " " + ACTIVE + " " + COMPLETELY);
                            var previousStyles = item.getAttribute("data-fp-styles");
                            if (previousStyles) item.setAttribute("style", item.getAttribute("data-fp-styles"));
                            if (hasClass(item, SECTION) && !g_initialAnchorsInDom) item.removeAttribute("data-anchor");
                        }));
                        removeAnimation(container);
                        [ TABLE_CELL_SEL, SLIDES_CONTAINER_SEL, SLIDES_WRAPPER_SEL ].forEach((function(selector) {
                            $(selector, container).forEach((function(item) {
                                unwrap(item);
                            }));
                        }));
                        css(container, {
                            "-webkit-transition": "none",
                            transition: "none"
                        });
                        window.scrollTo(0, 0);
                        var usedSelectors = [ SECTION, SLIDE, SLIDES_CONTAINER ];
                        usedSelectors.forEach((function(item) {
                            removeClass($("." + item), item);
                        }));
                    }
                    function setVariableState(variable, value, type) {
                        options[variable] = value;
                        if ("internal" !== type) originals[variable] = value;
                    }
                    function displayWarnings() {
                        var l = options["li" + "c" + "enseK" + "e" + "y"];
                        var msgStyle = "font-size: 15px;background:yellow;";
                        if (!isOK) {
                            showError("error", "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:");
                            showError("error", "https://github.com/alvarotrigo/fullPage.js#options");
                        } else if (l && l.length < 20) {
                            console.warn("%c This website was made using fullPage.js slider. More info on the following website:", msgStyle);
                            console.warn("%c https://alvarotrigo.com/fullPage/", msgStyle);
                        }
                        if (hasClass($html, ENABLED)) {
                            showError("error", "Fullpage.js can only be initialized once and you are doing it multiple times!");
                            return;
                        }
                        if (options.continuousVertical && (options.loopTop || options.loopBottom)) {
                            options.continuousVertical = false;
                            showError("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled");
                        }
                        if (options.scrollOverflow && (options.scrollBar || !options.autoScrolling)) showError("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox");
                        if (options.continuousVertical && (options.scrollBar || !options.autoScrolling)) {
                            options.continuousVertical = false;
                            showError("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled");
                        }
                        if (options.scrollOverflow && null == options.scrollOverflowHandler) {
                            options.scrollOverflow = false;
                            showError("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.");
                        }
                        extensions.forEach((function(extension) {
                            if (options[extension]) showError("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + extension);
                        }));
                        options.anchors.forEach((function(name) {
                            var nameAttr = [].slice.call($("[name]")).filter((function(item) {
                                return item.getAttribute("name") && item.getAttribute("name").toLowerCase() == name.toLowerCase();
                            }));
                            var idAttr = [].slice.call($("[id]")).filter((function(item) {
                                return item.getAttribute("id") && item.getAttribute("id").toLowerCase() == name.toLowerCase();
                            }));
                            if (idAttr.length || nameAttr.length) {
                                showError("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
                                var propertyName = idAttr.length ? "id" : "name";
                                if (idAttr.length || nameAttr.length) showError("error", '"' + name + '" is is being used by another element `' + propertyName + "` property");
                            }
                        }));
                    }
                    function getScrolledPosition(element) {
                        var position;
                        if (element.self != window && hasClass(element, SLIDES_WRAPPER)) position = element.scrollLeft; else if (!options.autoScrolling || options.scrollBar) position = getScrollTop(); else position = element.offsetTop;
                        return position;
                    }
                    function scrollTo(element, to, duration, callback) {
                        var start = getScrolledPosition(element);
                        var change = to - start;
                        var currentTime = 0;
                        var increment = 20;
                        activeAnimation = true;
                        var animateScroll = function() {
                            if (activeAnimation) {
                                var val = to;
                                currentTime += increment;
                                if (duration) val = window.fp_easings[options.easing](currentTime, start, change, duration);
                                setScrolling(element, val);
                                if (currentTime < duration) setTimeout(animateScroll, increment); else if ("undefined" !== typeof callback) callback();
                            } else if (currentTime < duration) callback();
                        };
                        animateScroll();
                    }
                    function setScrolling(element, val) {
                        if (!options.autoScrolling || options.scrollBar || element.self != window && hasClass(element, SLIDES_WRAPPER)) if (element.self != window && hasClass(element, SLIDES_WRAPPER)) element.scrollLeft = val; else element.scrollTo(0, val); else element.style.top = val + "px";
                    }
                    function getActiveSlide() {
                        var activeSlide = $(SLIDE_ACTIVE_SEL, $(SECTION_ACTIVE_SEL)[0])[0];
                        return nullOrSlide(activeSlide);
                    }
                    function getActiveSection() {
                        return new Section($(SECTION_ACTIVE_SEL)[0]);
                    }
                    function Item(el, selector) {
                        this.anchor = el.getAttribute("data-anchor");
                        this.item = el;
                        this.index = index(el, selector);
                        this.isLast = this.index === el.parentElement.querySelectorAll(selector).length - 1;
                        this.isFirst = !this.index;
                    }
                    function Section(el) {
                        Item.call(this, el, SECTION_SEL);
                    }
                    function Slide(el) {
                        Item.call(this, el, SLIDE_SEL);
                    }
                    return FP;
                }
                function showError(type, text) {
                    window.console && window.console[type] && window.console[type]("fullPage: " + text);
                }
                function $(selector, context) {
                    context = arguments.length > 1 ? context : document;
                    return context ? context.querySelectorAll(selector) : null;
                }
                function deepExtend(out) {
                    out = out || {};
                    for (var i = 1, len = arguments.length; i < len; ++i) {
                        var obj = arguments[i];
                        if (!obj) continue;
                        for (var key in obj) {
                            if (!obj.hasOwnProperty(key)) continue;
                            if ("[object Object]" === Object.prototype.toString.call(obj[key])) {
                                out[key] = deepExtend(out[key], obj[key]);
                                continue;
                            }
                            out[key] = obj[key];
                        }
                    }
                    return out;
                }
                function hasClass(el, className) {
                    if (null == el) return false;
                    if (el.classList) return el.classList.contains(className);
                    return new RegExp("(^| )" + className + "( |$)", "gi").test(el.className);
                }
                function getWindowHeight() {
                    return "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
                }
                function getWindowWidth() {
                    return window.innerWidth;
                }
                function css(items, props) {
                    items = getList(items);
                    var key;
                    for (key in props) if (props.hasOwnProperty(key)) if (null !== key) for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        item.style[key] = props[key];
                    }
                    return items;
                }
                function until(item, selector, fn) {
                    var sibling = item[fn];
                    while (sibling && !matches(sibling, selector)) sibling = sibling[fn];
                    return sibling;
                }
                function prevUntil(item, selector) {
                    return until(item, selector, "previousElementSibling");
                }
                function nextUntil(item, selector) {
                    return until(item, selector, "nextElementSibling");
                }
                function prev(item) {
                    return item.previousElementSibling;
                }
                function next(item) {
                    return item.nextElementSibling;
                }
                function last(item) {
                    return item[item.length - 1];
                }
                function index(item, selector) {
                    item = isArrayOrList(item) ? item[0] : item;
                    var children = null != selector ? $(selector, item.parentNode) : item.parentNode.childNodes;
                    var num = 0;
                    for (var i = 0; i < children.length; i++) {
                        if (children[i] == item) return num;
                        if (1 == children[i].nodeType) num++;
                    }
                    return -1;
                }
                function getList(item) {
                    return !isArrayOrList(item) ? [ item ] : item;
                }
                function hide(el) {
                    el = getList(el);
                    for (var i = 0; i < el.length; i++) el[i].style.display = "none";
                    return el;
                }
                function show(el) {
                    el = getList(el);
                    for (var i = 0; i < el.length; i++) el[i].style.display = "block";
                    return el;
                }
                function isArrayOrList(el) {
                    return "[object Array]" === Object.prototype.toString.call(el) || "[object NodeList]" === Object.prototype.toString.call(el);
                }
                function addClass(el, className) {
                    el = getList(el);
                    for (var i = 0; i < el.length; i++) {
                        var item = el[i];
                        if (item.classList) item.classList.add(className); else item.className += " " + className;
                    }
                    return el;
                }
                function removeClass(el, className) {
                    el = getList(el);
                    var classNames = className.split(" ");
                    for (var a = 0; a < classNames.length; a++) {
                        className = classNames[a];
                        for (var i = 0; i < el.length; i++) {
                            var item = el[i];
                            if (item.classList) item.classList.remove(className); else item.className = item.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
                        }
                    }
                    return el;
                }
                function appendTo(el, parent) {
                    parent.appendChild(el);
                }
                function wrap(toWrap, wrapper, isWrapAll) {
                    var newParent;
                    wrapper = wrapper || document.createElement("div");
                    for (var i = 0; i < toWrap.length; i++) {
                        var item = toWrap[i];
                        if (isWrapAll && !i || !isWrapAll) {
                            newParent = wrapper.cloneNode(true);
                            item.parentNode.insertBefore(newParent, item);
                        }
                        newParent.appendChild(item);
                    }
                    return toWrap;
                }
                function wrapAll(toWrap, wrapper) {
                    wrap(toWrap, wrapper, true);
                }
                function wrapInner(parent, wrapper) {
                    if ("string" === typeof wrapper) wrapper = createElementFromHTML(wrapper);
                    parent.appendChild(wrapper);
                    while (parent.firstChild !== wrapper) wrapper.appendChild(parent.firstChild);
                }
                function unwrap(wrapper) {
                    var wrapperContent = document.createDocumentFragment();
                    while (wrapper.firstChild) wrapperContent.appendChild(wrapper.firstChild);
                    wrapper.parentNode.replaceChild(wrapperContent, wrapper);
                }
                function closest(el, selector) {
                    if (el && 1 === el.nodeType) {
                        if (matches(el, selector)) return el;
                        return closest(el.parentNode, selector);
                    }
                    return null;
                }
                function after(reference, el) {
                    insertBefore(reference, reference.nextSibling, el);
                }
                function before(reference, el) {
                    insertBefore(reference, reference, el);
                }
                function insertBefore(reference, beforeElement, el) {
                    if (!isArrayOrList(el)) {
                        if ("string" == typeof el) el = createElementFromHTML(el);
                        el = [ el ];
                    }
                    for (var i = 0; i < el.length; i++) reference.parentNode.insertBefore(el[i], beforeElement);
                }
                function getScrollTop() {
                    var doc = document.documentElement;
                    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
                }
                function siblings(el) {
                    return Array.prototype.filter.call(el.parentNode.children, (function(child) {
                        return child !== el;
                    }));
                }
                function preventDefault(event) {
                    if (event.preventDefault) event.preventDefault(); else event.returnValue = false;
                }
                function isFunction(item) {
                    if ("function" === typeof item) return true;
                    var type = Object.prototype.toString(item);
                    return "[object Function]" === type || "[object GeneratorFunction]" === type;
                }
                function trigger(el, eventName, data) {
                    var event;
                    data = "undefined" === typeof data ? {} : data;
                    if ("function" === typeof window.CustomEvent) event = new CustomEvent(eventName, {
                        detail: data
                    }); else {
                        event = document.createEvent("CustomEvent");
                        event.initCustomEvent(eventName, true, true, data);
                    }
                    el.dispatchEvent(event);
                }
                function matches(el, selector) {
                    return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
                }
                function toggle(el, value) {
                    if ("boolean" === typeof value) for (var i = 0; i < el.length; i++) el[i].style.display = value ? "block" : "none";
                    return el;
                }
                function createElementFromHTML(htmlString) {
                    var div = document.createElement("div");
                    div.innerHTML = htmlString.trim();
                    return div.firstChild;
                }
                function remove(items) {
                    items = getList(items);
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        if (item && item.parentElement) item.parentNode.removeChild(item);
                    }
                }
                function filter(el, filterFn) {
                    Array.prototype.filter.call(el, filterFn);
                }
                function untilAll(item, selector, fn) {
                    var sibling = item[fn];
                    var siblings = [];
                    while (sibling) {
                        if (matches(sibling, selector) || null == selector) siblings.push(sibling);
                        sibling = sibling[fn];
                    }
                    return siblings;
                }
                function nextAll(item, selector) {
                    return untilAll(item, selector, "nextElementSibling");
                }
                function prevAll(item, selector) {
                    return untilAll(item, selector, "previousElementSibling");
                }
                function toArray(objectData) {
                    return Object.keys(objectData).map((function(key) {
                        return objectData[key];
                    }));
                }
                if (window.NodeList && !NodeList.prototype.forEach) NodeList.prototype.forEach = function(callback, thisArg) {
                    thisArg = thisArg || window;
                    for (var i = 0; i < this.length; i++) callback.call(thisArg, this[i], i, this);
                };
                window.fp_utils = {
                    $,
                    deepExtend,
                    hasClass,
                    getWindowHeight,
                    css,
                    until,
                    prevUntil,
                    nextUntil,
                    prev,
                    next,
                    last,
                    index,
                    getList,
                    hide,
                    show,
                    isArrayOrList,
                    addClass,
                    removeClass,
                    appendTo,
                    wrap,
                    wrapAll,
                    wrapInner,
                    unwrap,
                    closest,
                    after,
                    before,
                    insertBefore,
                    getScrollTop,
                    siblings,
                    preventDefault,
                    isFunction,
                    trigger,
                    matches,
                    toggle,
                    createElementFromHTML,
                    remove,
                    filter,
                    untilAll,
                    nextAll,
                    prevAll,
                    showError
                };
                return initialise;
            }));
            if (window.jQuery && window.fullpage) (function($, fullpage) {
                "use strict";
                if (!$ || !fullpage) {
                    window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!");
                    return;
                }
                $.fn.fullpage = function(options) {
                    options = $.extend({}, options, {
                        $
                    });
                    new fullpage(this[0], options);
                };
            })(window.jQuery, window.fullpage);
        },
        2: function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
 /*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */            window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
                var t, n = (this.document || this.ownerDocument).querySelectorAll(e), o = this;
                do {
                    for (t = n.length; 0 <= --t && n.item(t) !== o; ) ;
                } while (t < 0 && (o = o.parentElement));
                return o;
            }), function() {
                if ("function" == typeof window.CustomEvent) return;
                function e(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                }
                e.prototype = window.Event.prototype, window.CustomEvent = e;
            }(), function() {
                for (var r = 0, e = [ "ms", "moz", "webkit", "o" ], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], 
                window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
                    var n = (new Date).getTime(), o = Math.max(0, 16 - (n - r)), a = window.setTimeout((function() {
                        e(n + o);
                    }), o);
                    return r = n + o, a;
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                    clearTimeout(e);
                });
            }(), function(e, t) {
                true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return t(e);
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
            }("undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof window ? window : this, (function(M) {
                "use strict";
                var q = {
                    ignore: "[data-scroll-ignore]",
                    header: null,
                    topOnEmptyHash: !0,
                    speed: 500,
                    speedAsDuration: !1,
                    durationMax: null,
                    durationMin: null,
                    clip: !0,
                    offset: 0,
                    easing: "easeInOutCubic",
                    customEasing: null,
                    updateURL: !0,
                    popstate: !0,
                    emitEvents: !0
                }, I = function() {
                    var n = {};
                    return Array.prototype.forEach.call(arguments, (function(e) {
                        for (var t in e) {
                            if (!e.hasOwnProperty(t)) return;
                            n[t] = e[t];
                        }
                    })), n;
                }, r = function(e) {
                    "#" === e.charAt(0) && (e = e.substr(1));
                    for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o; ) {
                        if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                        1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? r += "\\" + t.toString(16) + " " : r += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a);
                    }
                    return "#" + r;
                }, F = function() {
                    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                }, L = function(e) {
                    return e ? (t = e, parseInt(M.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
                    var t;
                }, x = function(e, t, n) {
                    0 === e && document.body.focus(), n || (e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), 
                    e.focus(), e.style.outline = "none"), M.scrollTo(0, t));
                }, H = function(e, t, n, o) {
                    if (t.emitEvents && "function" == typeof M.CustomEvent) {
                        var a = new CustomEvent(e, {
                            bubbles: !0,
                            detail: {
                                anchor: n,
                                toggle: o
                            }
                        });
                        document.dispatchEvent(a);
                    }
                };
                return function(o, e) {
                    var b, a, A, O, C = {};
                    C.cancelScroll = function(e) {
                        cancelAnimationFrame(O), O = null, e || H("scrollCancel", b);
                    }, C.animateScroll = function(a, r, e) {
                        C.cancelScroll();
                        var i = I(b || q, e || {}), c = "[object Number]" === Object.prototype.toString.call(a), t = c || !a.tagName ? null : a;
                        if (c || t) {
                            var s = M.pageYOffset;
                            i.header && !A && (A = document.querySelector(i.header));
                            var n, o, u, l, m, d, f, h, p = L(A), g = c ? a : function(e, t, n, o) {
                                var a = 0;
                                if (e.offsetParent) for (;a += e.offsetTop, e = e.offsetParent; ) ;
                                return a = Math.max(a - t - n, 0), o && (a = Math.min(a, F() - M.innerHeight)), 
                                a;
                            }(t, p, parseInt("function" == typeof i.offset ? i.offset(a, r) : i.offset, 10), i.clip), y = g - s, v = F(), w = 0, S = (n = y, 
                            u = (o = i).speedAsDuration ? o.speed : Math.abs(n / 1e3 * o.speed), o.durationMax && u > o.durationMax ? o.durationMax : o.durationMin && u < o.durationMin ? o.durationMin : parseInt(u, 10)), E = function(e) {
                                var t, n, o;
                                l || (l = e), w += e - l, d = s + y * (n = m = 1 < (m = 0 === S ? 0 : w / S) ? 1 : m, 
                                "easeInQuad" === (t = i).easing && (o = n * n), "easeOutQuad" === t.easing && (o = n * (2 - n)), 
                                "easeInOutQuad" === t.easing && (o = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), 
                                "easeInCubic" === t.easing && (o = n * n * n), "easeOutCubic" === t.easing && (o = --n * n * n + 1), 
                                "easeInOutCubic" === t.easing && (o = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), 
                                "easeInQuart" === t.easing && (o = n * n * n * n), "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n), 
                                "easeInOutQuart" === t.easing && (o = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), 
                                "easeInQuint" === t.easing && (o = n * n * n * n * n), "easeOutQuint" === t.easing && (o = 1 + --n * n * n * n * n), 
                                "easeInOutQuint" === t.easing && (o = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), 
                                t.customEasing && (o = t.customEasing(n)), o || n), M.scrollTo(0, Math.floor(d)), 
                                function(e, t) {
                                    var n = M.pageYOffset;
                                    if (e == t || n == t || (s < t && M.innerHeight + n) >= v) return C.cancelScroll(!0), 
                                    x(a, t, c), H("scrollStop", i, a, r), !(O = l = null);
                                }(d, g) || (O = M.requestAnimationFrame(E), l = e);
                            };
                            0 === M.pageYOffset && M.scrollTo(0, 0), f = a, h = i, c || history.pushState && h.updateURL && history.pushState({
                                smoothScroll: JSON.stringify(h),
                                anchor: f.id
                            }, document.title, f === document.documentElement ? "#top" : "#" + f.id), "matchMedia" in M && M.matchMedia("(prefers-reduced-motion)").matches ? x(a, Math.floor(g), !1) : (H("scrollStart", i, a, r), 
                            C.cancelScroll(!0), M.requestAnimationFrame(E));
                        }
                    };
                    var t = function(e) {
                        if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (a = e.target.closest(o)) && "a" === a.tagName.toLowerCase() && !e.target.closest(b.ignore) && a.hostname === M.location.hostname && a.pathname === M.location.pathname && /#/.test(a.href)) {
                            var t, n;
                            try {
                                t = r(decodeURIComponent(a.hash));
                            } catch (e) {
                                t = r(a.hash);
                            }
                            if ("#" === t) {
                                if (!b.topOnEmptyHash) return;
                                n = document.documentElement;
                            } else n = document.querySelector(t);
                            (n = n || "#top" !== t ? n : document.documentElement) && (e.preventDefault(), function(e) {
                                if (history.replaceState && e.updateURL && !history.state) {
                                    var t = M.location.hash;
                                    t = t || "", history.replaceState({
                                        smoothScroll: JSON.stringify(e),
                                        anchor: t || M.pageYOffset
                                    }, document.title, t || M.location.href);
                                }
                            }(b), C.animateScroll(n, a));
                        }
                    }, n = function(e) {
                        if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(b)) {
                            var t = history.state.anchor;
                            "string" == typeof t && t && !(t = document.querySelector(r(history.state.anchor))) || C.animateScroll(t, null, {
                                updateURL: !1
                            });
                        }
                    };
                    C.destroy = function() {
                        b && (document.removeEventListener("click", t, !1), M.removeEventListener("popstate", n, !1), 
                        C.cancelScroll(), O = A = a = b = null);
                    };
                    return function() {
                        if (!("querySelector" in document && "addEventListener" in M && "requestAnimationFrame" in M && "closest" in M.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                        C.destroy(), b = I(q, e || {}), A = b.header ? document.querySelector(b.header) : null, 
                        document.addEventListener("click", t, !1), b.updateURL && b.popstate && M.addEventListener("popstate", n, !1);
                    }(), C;
                };
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.g = function() {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" === typeof window) return window;
            }
        }();
    })();
    (() => {
        "use strict";
        const modules_flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerTitles.forEach((spollerTitle => {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("[data-spoller]")) {
                        const spollerTitle = el.closest("[data-spoller]");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                            spollerTitle.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                }
                const spollersClose = document.querySelectorAll("[data-spoller-close]");
                if (spollersClose.length) document.addEventListener("click", (function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) spollersClose.forEach((spollerClose => {
                        const spollersBlock = spollerClose.closest("[data-spollers]");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            spollerClose.classList.remove("_spoller-active");
                            _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                        }
                    }));
                }));
            }
        }
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function functions_FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        var smooth_scroll_polyfills_min = __webpack_require__(2);
        let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 1500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    headerItemHeight = document.querySelector(headerItem).offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if ("undefined" !== typeof smooth_scroll_polyfills_min) (new smooth_scroll_polyfills_min).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                functions_FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
            } else functions_FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
        };
        function ssr_window_esm_isObject(obj) {
            return null !== obj && "object" === typeof obj && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if ("undefined" === typeof target[key]) target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = "undefined" !== typeof document ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if ("undefined" === typeof setTimeout) {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if ("undefined" === typeof setTimeout) return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = "undefined" !== typeof window ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function makeReactive(obj) {
            const proto = obj.__proto__;
            Object.defineProperty(obj, "__proto__", {
                get() {
                    return proto;
                },
                set(value) {
                    proto.__proto__ = value;
                }
            });
        }
        class Dom7 extends Array {
            constructor(items) {
                if ("number" === typeof items) super(items); else {
                    super(...items || []);
                    makeReactive(this);
                }
            }
        }
        function arrayFlat(arr = []) {
            const res = [];
            arr.forEach((el => {
                if (Array.isArray(el)) res.push(...arrayFlat(el)); else res.push(el);
            }));
            return res;
        }
        function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback);
        }
        function arrayUnique(arr) {
            const uniqueArray = [];
            for (let i = 0; i < arr.length; i += 1) if (-1 === uniqueArray.indexOf(arr[i])) uniqueArray.push(arr[i]);
            return uniqueArray;
        }
        function qsa(selector, context) {
            if ("string" !== typeof selector) return [ selector ];
            const a = [];
            const res = context.querySelectorAll(selector);
            for (let i = 0; i < res.length; i += 1) a.push(res[i]);
            return a;
        }
        function dom7_esm_$(selector, context) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            let arr = [];
            if (!context && selector instanceof Dom7) return selector;
            if (!selector) return new Dom7(arr);
            if ("string" === typeof selector) {
                const html = selector.trim();
                if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                    let toCreate = "div";
                    if (0 === html.indexOf("<li")) toCreate = "ul";
                    if (0 === html.indexOf("<tr")) toCreate = "tbody";
                    if (0 === html.indexOf("<td") || 0 === html.indexOf("<th")) toCreate = "tr";
                    if (0 === html.indexOf("<tbody")) toCreate = "table";
                    if (0 === html.indexOf("<option")) toCreate = "select";
                    const tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (let i = 0; i < tempParent.childNodes.length; i += 1) arr.push(tempParent.childNodes[i]);
                } else arr = qsa(selector.trim(), context || document);
            } else if (selector.nodeType || selector === window || selector === document) arr.push(selector); else if (Array.isArray(selector)) {
                if (selector instanceof Dom7) return selector;
                arr = selector;
            }
            return new Dom7(arrayUnique(arr));
        }
        dom7_esm_$.fn = Dom7.prototype;
        function addClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.add(...classNames);
            }));
            return this;
        }
        function removeClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.remove(...classNames);
            }));
            return this;
        }
        function toggleClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                classNames.forEach((className => {
                    el.classList.toggle(className);
                }));
            }));
        }
        function hasClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            return arrayFilter(this, (el => classNames.filter((className => el.classList.contains(className))).length > 0)).length > 0;
        }
        function attr(attrs, value) {
            if (1 === arguments.length && "string" === typeof attrs) {
                if (this[0]) return this[0].getAttribute(attrs);
                return;
            }
            for (let i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(attrs, value); else for (const attrName in attrs) {
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
            }
            return this;
        }
        function removeAttr(attr) {
            for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(attr);
            return this;
        }
        function transform(transform) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transform = transform;
            return this;
        }
        function transition(duration) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transitionDuration = "string" !== typeof duration ? `${duration}ms` : duration;
            return this;
        }
        function on(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            function handleLiveEvent(e) {
                const target = e.target;
                if (!target) return;
                const eventData = e.target.dom7EventData || [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                if (dom7_esm_$(target).is(targetSelector)) listener.apply(target, eventData); else {
                    const parents = dom7_esm_$(target).parents();
                    for (let k = 0; k < parents.length; k += 1) if (dom7_esm_$(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
                }
            }
            function handleEvent(e) {
                const eventData = e && e.target ? e.target.dom7EventData || [] : [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                listener.apply(this, eventData);
            }
            const events = eventType.split(" ");
            let j;
            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];
                if (!targetSelector) for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7Listeners) el.dom7Listeners = {};
                    if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                    el.dom7Listeners[event].push({
                        listener,
                        proxyListener: handleEvent
                    });
                    el.addEventListener(event, handleEvent, capture);
                } else for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                    if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
                    el.dom7LiveListeners[event].push({
                        listener,
                        proxyListener: handleLiveEvent
                    });
                    el.addEventListener(event, handleLiveEvent, capture);
                }
            }
            return this;
        }
        function off(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            const events = eventType.split(" ");
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    let handlers;
                    if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event]; else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
                    if (handlers && handlers.length) for (let k = handlers.length - 1; k >= 0; k -= 1) {
                        const handler = handlers[k];
                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
            return this;
        }
        function trigger(...args) {
            const window = ssr_window_esm_getWindow();
            const events = args[0].split(" ");
            const eventData = args[1];
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    if (window.CustomEvent) {
                        const evt = new window.CustomEvent(event, {
                            detail: eventData,
                            bubbles: true,
                            cancelable: true
                        });
                        el.dom7EventData = args.filter(((data, dataIndex) => dataIndex > 0));
                        el.dispatchEvent(evt);
                        el.dom7EventData = [];
                        delete el.dom7EventData;
                    }
                }
            }
            return this;
        }
        function transitionEnd(callback) {
            const dom = this;
            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off("transitionend", fireCallBack);
            }
            if (callback) dom.on("transitionend", fireCallBack);
            return this;
        }
        function dom7_esm_outerWidth(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        }
        function dom7_esm_outerHeight(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        }
        function offset() {
            if (this.length > 0) {
                const window = ssr_window_esm_getWindow();
                const document = ssr_window_esm_getDocument();
                const el = this[0];
                const box = el.getBoundingClientRect();
                const body = document.body;
                const clientTop = el.clientTop || body.clientTop || 0;
                const clientLeft = el.clientLeft || body.clientLeft || 0;
                const scrollTop = el === window ? window.scrollY : el.scrollTop;
                const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
                return {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };
            }
            return null;
        }
        function styles() {
            const window = ssr_window_esm_getWindow();
            if (this[0]) return window.getComputedStyle(this[0], null);
            return {};
        }
        function css(props, value) {
            const window = ssr_window_esm_getWindow();
            let i;
            if (1 === arguments.length) if ("string" === typeof props) {
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
                for (i = 0; i < this.length; i += 1) for (const prop in props) this[i].style[prop] = props[prop];
                return this;
            }
            if (2 === arguments.length && "string" === typeof props) {
                for (i = 0; i < this.length; i += 1) this[i].style[props] = value;
                return this;
            }
            return this;
        }
        function each(callback) {
            if (!callback) return this;
            this.forEach(((el, index) => {
                callback.apply(el, [ el, index ]);
            }));
            return this;
        }
        function filter(callback) {
            const result = arrayFilter(this, callback);
            return dom7_esm_$(result);
        }
        function html(html) {
            if ("undefined" === typeof html) return this[0] ? this[0].innerHTML : null;
            for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html;
            return this;
        }
        function dom7_esm_text(text) {
            if ("undefined" === typeof text) return this[0] ? this[0].textContent.trim() : null;
            for (let i = 0; i < this.length; i += 1) this[i].textContent = text;
            return this;
        }
        function is(selector) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            const el = this[0];
            let compareWith;
            let i;
            if (!el || "undefined" === typeof selector) return false;
            if ("string" === typeof selector) {
                if (el.matches) return el.matches(selector);
                if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                compareWith = dom7_esm_$(selector);
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            if (selector === document) return el === document;
            if (selector === window) return el === window;
            if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [ selector ] : selector;
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            return false;
        }
        function index() {
            let child = this[0];
            let i;
            if (child) {
                i = 0;
                while (null !== (child = child.previousSibling)) if (1 === child.nodeType) i += 1;
                return i;
            }
            return;
        }
        function eq(index) {
            if ("undefined" === typeof index) return this;
            const length = this.length;
            if (index > length - 1) return dom7_esm_$([]);
            if (index < 0) {
                const returnIndex = length + index;
                if (returnIndex < 0) return dom7_esm_$([]);
                return dom7_esm_$([ this[returnIndex] ]);
            }
            return dom7_esm_$([ this[index] ]);
        }
        function append(...els) {
            let newChild;
            const document = ssr_window_esm_getDocument();
            for (let k = 0; k < els.length; k += 1) {
                newChild = els[k];
                for (let i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) this[i].appendChild(tempDiv.firstChild);
                } else if (newChild instanceof Dom7) for (let j = 0; j < newChild.length; j += 1) this[i].appendChild(newChild[j]); else this[i].appendChild(newChild);
            }
            return this;
        }
        function prepend(newChild) {
            const document = ssr_window_esm_getDocument();
            let i;
            let j;
            for (i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            } else if (newChild instanceof Dom7) for (j = 0; j < newChild.length; j += 1) this[i].insertBefore(newChild[j], this[i].childNodes[0]); else this[i].insertBefore(newChild, this[i].childNodes[0]);
            return this;
        }
        function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && dom7_esm_$(this[0].nextElementSibling).is(selector)) return dom7_esm_$([ this[0].nextElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (this[0].nextElementSibling) return dom7_esm_$([ this[0].nextElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function nextAll(selector) {
            const nextEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (dom7_esm_$(next).is(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return dom7_esm_$(nextEls);
        }
        function prev(selector) {
            if (this.length > 0) {
                const el = this[0];
                if (selector) {
                    if (el.previousElementSibling && dom7_esm_$(el.previousElementSibling).is(selector)) return dom7_esm_$([ el.previousElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (el.previousElementSibling) return dom7_esm_$([ el.previousElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function prevAll(selector) {
            const prevEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (dom7_esm_$(prev).is(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return dom7_esm_$(prevEls);
        }
        function dom7_esm_parent(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) if (null !== this[i].parentNode) if (selector) {
                if (dom7_esm_$(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
            } else parents.push(this[i].parentNode);
            return dom7_esm_$(parents);
        }
        function parents(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) {
                let parent = this[i].parentNode;
                while (parent) {
                    if (selector) {
                        if (dom7_esm_$(parent).is(selector)) parents.push(parent);
                    } else parents.push(parent);
                    parent = parent.parentNode;
                }
            }
            return dom7_esm_$(parents);
        }
        function closest(selector) {
            let closest = this;
            if ("undefined" === typeof selector) return dom7_esm_$([]);
            if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
            return closest;
        }
        function find(selector) {
            const foundElements = [];
            for (let i = 0; i < this.length; i += 1) {
                const found = this[i].querySelectorAll(selector);
                for (let j = 0; j < found.length; j += 1) foundElements.push(found[j]);
            }
            return dom7_esm_$(foundElements);
        }
        function children(selector) {
            const children = [];
            for (let i = 0; i < this.length; i += 1) {
                const childNodes = this[i].children;
                for (let j = 0; j < childNodes.length; j += 1) if (!selector || dom7_esm_$(childNodes[j]).is(selector)) children.push(childNodes[j]);
            }
            return dom7_esm_$(children);
        }
        function remove() {
            for (let i = 0; i < this.length; i += 1) if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            return this;
        }
        const noTrigger = "resize scroll".split(" ");
        function shortcut(name) {
            function eventHandler(...args) {
                if ("undefined" === typeof args[0]) {
                    for (let i = 0; i < this.length; i += 1) if (noTrigger.indexOf(name) < 0) if (name in this[i]) this[i][name](); else dom7_esm_$(this[i]).trigger(name);
                    return this;
                }
                return this.on(name, ...args);
            }
            return eventHandler;
        }
        shortcut("click");
        shortcut("blur");
        shortcut("focus");
        shortcut("focusin");
        shortcut("focusout");
        shortcut("keyup");
        shortcut("keydown");
        shortcut("keypress");
        shortcut("submit");
        shortcut("change");
        shortcut("mousedown");
        shortcut("mousemove");
        shortcut("mouseup");
        shortcut("mouseenter");
        shortcut("mouseleave");
        shortcut("mouseout");
        shortcut("mouseover");
        shortcut("touchstart");
        shortcut("touchend");
        shortcut("touchmove");
        shortcut("resize");
        shortcut("scroll");
        const Methods = {
            addClass,
            removeClass,
            hasClass,
            toggleClass,
            attr,
            removeAttr,
            transform,
            transition,
            on,
            off,
            trigger,
            transitionEnd,
            outerWidth: dom7_esm_outerWidth,
            outerHeight: dom7_esm_outerHeight,
            styles,
            offset,
            css,
            each,
            html,
            text: dom7_esm_text,
            is,
            index,
            eq,
            append,
            prepend,
            next,
            nextAll,
            prev,
            prevAll,
            parent: dom7_esm_parent,
            parents,
            closest,
            find,
            children,
            filter,
            remove
        };
        Object.keys(Methods).forEach((methodName => {
            Object.defineProperty(dom7_esm_$.fn, methodName, {
                value: Methods[methodName],
                writable: true
            });
        }));
        const dom = dom7_esm_$;
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (void 0 === delay) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (void 0 === axis) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix("none" === curTransform ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if ("x" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (16 === matrix.length) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if ("y" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (16 === matrix.length) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return "object" === typeof o && null !== o && o.constructor && "Object" === Object.prototype.toString.call(o).slice(8, -1);
        }
        function isNode(node) {
            if ("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement) return node instanceof HTMLElement;
            return node && (1 === node.nodeType || 11 === node.nodeType);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (void 0 !== nextSource && null !== nextSource && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (void 0 !== desc && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => "next" === dir && current >= target || "prev" === dir && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (null === startTime) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                passiveListener: function checkPassiveListener() {
                    let supportsPassive = false;
                    try {
                        const opts = Object.defineProperty({}, "passive", {
                            get() {
                                supportsPassive = true;
                            }
                        });
                        window.addEventListener("testPassiveListener", null, opts);
                    } catch (e) {}
                    return supportsPassive;
                }(),
                gestures: function checkGestures() {
                    return "ongesturestart" in window;
                }()
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = void 0 === _temp ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = "Win32" === platform;
            let macos = "MacIntel" === platform;
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (void 0 === overrides) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            return {
                isSafari: isSafari(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && "undefined" !== typeof window.ResizeObserver) {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (void 0 === options) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (1 === mutations.length) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: "undefined" === typeof options.attributes ? true : options.attributes,
                    childList: "undefined" === typeof options.childList ? true : options.childList,
                    characterData: "undefined" === typeof options.characterData ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = swiper.$el.parents();
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.$el[0], {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.$wrapperEl[0], {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if ("function" !== typeof handler) return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if ("undefined" === typeof handler) self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if ("string" === typeof args[0] || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const $el = swiper.$el;
            if ("undefined" !== typeof swiper.params.width && null !== swiper.params.width) width = swiper.params.width; else width = $el[0].clientWidth;
            if ("undefined" !== typeof swiper.params.height && null !== swiper.params.height) height = swiper.params.height; else height = $el[0].clientHeight;
            if (0 === width && swiper.isHorizontal() || 0 === height && swiper.isVertical()) return;
            width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
            height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {$wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if ("function" === typeof offsetBefore) offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if ("function" === typeof offsetAfter) offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if ("undefined" === typeof swiperSize) return;
            if ("string" === typeof spaceBetween && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
            swiper.virtualSize = -spaceBetween;
            if (rtl) slides.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }); else slides.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            });
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = "auto" === params.slidesPerView && params.breakpoints && Object.keys(params.breakpoints).filter((key => "undefined" !== typeof params.breakpoints[key].slidesPerView)).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                const slide = slides.eq(i);
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if ("none" === slide.css("display")) continue;
                if ("auto" === params.slidesPerView) {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide[0]);
                    const currentTransform = slide[0].style.transform;
                    const currentWebKitTransform = slide[0].style.webkitTransform;
                    if (currentTransform) slide[0].style.transform = "none";
                    if (currentWebKitTransform) slide[0].style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && "border-box" === boxSizing) slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide[0];
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide[0].style.transform = currentTransform;
                    if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (0 === prevSlideSize && 0 !== i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (0 === i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && ("slide" === params.effect || "coverflow" === params.effect)) $wrapperEl.css({
                width: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (params.setWrapperSize) $wrapperEl.css({
                [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (0 === snapGrid.length) snapGrid = [ 0 ];
            if (0 !== params.spaceBetween) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).css({
                    [key]: `${spaceBetween}px`
                });
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && ("slide" === params.effect || "fade" === params.effect)) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if ("number" === typeof speed) swiper.setTransition(speed); else if (true === speed) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides.filter((el => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index))[0];
                return swiper.slides.eq(index)[0];
            };
            if ("auto" !== swiper.params.slidesPerView && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) swiper.visibleSlides.each((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if ("undefined" !== typeof activeSlides[i]) {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || 0 === newHeight) swiper.$wrapperEl.css("height", `${newHeight}px`);
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
        function updateSlidesProgress(translate) {
            if (void 0 === translate) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (0 === slides.length) return;
            if ("undefined" === typeof slides[0].swiperSlideOffset) swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.removeClass(params.slideVisibleClass);
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
            swiper.visibleSlides = dom(swiper.visibleSlides);
        }
        function updateProgress(translate) {
            const swiper = this;
            if ("undefined" === typeof translate) {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (0 === translatesDiff) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                isBeginning = progress <= 0;
                isEnd = progress >= 1;
            }
            Object.assign(swiper, {
                progress,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, $wrapperEl, activeIndex, realIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
            let activeSlide;
            if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides.eq(activeIndex);
            activeSlide.addClass(params.slideActiveClass);
            if (params.loop) if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
            let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
            if (params.loop && 0 === nextSlide.length) {
                nextSlide = slides.eq(0);
                nextSlide.addClass(params.slideNextClass);
            }
            let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
            if (params.loop && 0 === prevSlide.length) {
                prevSlide = slides.eq(-1);
                prevSlide.addClass(params.slidePrevClass);
            }
            if (params.loop) {
                if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
                if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            if ("undefined" === typeof activeIndex) {
                for (let i = 0; i < slidesGrid.length; i += 1) if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                } else if (translate >= slidesGrid[i]) activeIndex = i;
                if (params.normalizeSlideIndex) if (activeIndex < 0 || "undefined" === typeof activeIndex) activeIndex = 0;
            }
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
            Object.assign(swiper, {
                snapIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = dom(e).closest(`.${params.slideClass}`)[0];
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(dom(slide).attr("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && void 0 !== swiper.clickedIndex && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (void 0 === axis) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, $wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate($wrapperEl[0], axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (void 0 === translate) translate = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if (void 0 === translateBounds) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (0 === speed) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (0 === speed) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if ("reset" === dir) {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if ("next" === dir) swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd_transitionEnd(runCallbacks, direction) {
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const core_transition = {
            setTransition,
            transitionStart,
            transitionEnd: transitionEnd_transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (void 0 === index) index = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if ("number" !== typeof index && "string" !== typeof index) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            const translate = -snapGrid[snapIndex];
            swiper.updateProgress(translate);
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(100 * translate);
                const normalizedGrid = Math.floor(100 * slidesGrid[i]);
                const normalizedGridNext = Math.floor(100 * slidesGrid[i + 1]);
                if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if ("slide" !== params.effect) swiper.setTranslate(translate);
                if ("reset" !== direction) {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (0 === speed) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._swiperImmediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (0 === speed) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (void 0 === index) index = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) newIndex += swiper.loopedSlides;
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {animating, enabled, params} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params, animating, snapGrid, slidesGrid, rtlTranslate, enabled} = swiper;
            if (!enabled) return swiper;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if ("undefined" === typeof prevSnap && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if ("undefined" !== typeof prevSnapIndex) prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if ("undefined" !== typeof prevSnap) {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if (void 0 === threshold) threshold = .5;
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, $wrapperEl} = swiper;
            const slidesPerView = "auto" === params.slidesPerView ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(dom(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, $wrapperEl} = swiper;
            const $selector = $wrapperEl.children().length > 0 ? dom($wrapperEl.children()[0].parentNode) : $wrapperEl;
            $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
            let slides = $selector.children(`.${params.slideClass}`);
            if (params.loopFillGroupWithBlank) {
                const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
                if (blankSlidesNum !== params.slidesPerGroup) {
                    for (let i = 0; i < blankSlidesNum; i += 1) {
                        const blankNode = dom(document.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                        $selector.append(blankNode);
                    }
                    slides = $selector.children(`.${params.slideClass}`);
                }
            }
            if ("auto" === params.slidesPerView && !params.loopedSlides) params.loopedSlides = slides.length;
            swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
            swiper.loopedSlides += params.loopAdditionalSlides;
            if (swiper.loopedSlides > slides.length) swiper.loopedSlides = slides.length;
            const prependSlides = [];
            const appendSlides = [];
            slides.each(((el, index) => {
                const slide = dom(el);
                if (index < swiper.loopedSlides) appendSlides.push(el);
                if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
                slide.attr("data-swiper-slide-index", index);
            }));
            for (let i = 0; i < appendSlides.length; i += 1) $selector.append(dom(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            for (let i = prependSlides.length - 1; i >= 0; i -= 1) $selector.prepend(dom(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        function loopFix() {
            const swiper = this;
            swiper.emit("beforeLoopFix");
            const {activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl} = swiper;
            let newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            const snapTranslate = -snapGrid[activeIndex];
            const diff = snapTranslate - swiper.getTranslate();
            if (activeIndex < loopedSlides) {
                newIndex = slides.length - 3 * loopedSlides + activeIndex;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            } else if (activeIndex >= slides.length - loopedSlides) {
                newIndex = -slides.length + activeIndex + loopedSlides;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {$wrapperEl, params, slides} = swiper;
            $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
            slides.removeAttr("data-swiper-slide-index");
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = "container" === swiper.params.touchEventsTarget ? swiper.el : swiper.wrapperEl;
            el.style.cursor = "move";
            el.style.cursor = moving ? "-webkit-grabbing" : "-webkit-grab";
            el.style.cursor = moving ? "-moz-grabbin" : "-moz-grab";
            el.style.cursor = moving ? "grabbing" : "grab";
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            swiper["container" === swiper.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "";
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (void 0 === base) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let $targetEl = dom(e.target);
            if ("wrapper" === params.touchEventsTarget) if (!$targetEl.closest(swiper.wrapperEl).length) return;
            data.isTouchEvent = "touchstart" === e.type;
            if (!data.isTouchEvent && "which" in e && 3 === e.which) return;
            if (!data.isTouchEvent && "button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && "" !== params.noSwipingClass;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) $targetEl = dom(event.path[0]);
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!$targetEl.closest(params.swipeHandler)[0]) return;
            touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if ("prevent" === edgeSwipeDetection) event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            if ("touchstart" !== e.type) {
                let preventDefault = true;
                if ($targetEl.is(data.focusableElements)) {
                    preventDefault = false;
                    if ("SELECT" === $targetEl[0].nodeName) data.isTouched = false;
                }
                if (document.activeElement && dom(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
                const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
            }
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            if (data.isTouchEvent && "touchmove" !== e.type) return;
            const targetTouch = "touchmove" === e.type && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
            const pageX = "touchmove" === e.type ? targetTouch.pageX : e.pageX;
            const pageY = "touchmove" === e.type ? targetTouch.pageY : e.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!dom(e.target).is(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (data.isTouchEvent && document.activeElement) if (e.target === document.activeElement && dom(e.target).is(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if ("undefined" === typeof data.isScrolling) {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = 180 * Math.atan2(Math.abs(diffY), Math.abs(diffX)) / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if ("undefined" === typeof data.startMoving) if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            if (!data.isMoved) {
                if (params.loop && !params.cssMode) swiper.loopFix();
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
                data.allowMomentumBounce = false;
                if (params.grabCursor && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            let diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) diff = -diff;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && "next" === swiper.swipeDirection && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && "prev" === swiper.swipeDirection && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || 0 === touches.diff || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if ("undefined" !== typeof slidesGrid[i + increment]) {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if ("next" === swiper.swipeDirection) if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if ("prev" === swiper.swipeDirection) if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (null !== rewindLastIndex && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if ("next" === swiper.swipeDirection) swiper.slideTo(null !== rewindFirstIndex ? rewindFirstIndex : stopIndex + increment);
                    if ("prev" === swiper.swipeDirection) swiper.slideTo(null !== rewindLastIndex ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && 0 === el.offsetWidth) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            if (("auto" === params.slidesPerView || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (-0 === swiper.translate) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, touchEvents, el, wrapperEl, device, support} = swiper;
            const capture = !!params.nested;
            const domMethod = "on" === method ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            if (!support.touch) {
                el[domMethod](touchEvents.start, swiper.onTouchStart, false);
                document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
                document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
            } else {
                const passiveListener = "touchstart" === touchEvents.start && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
                el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: false,
                    capture
                } : capture);
                el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
                if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
            }
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, support} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            if (support.touch && !dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {activeIndex, initialized, loopedSlides = 0, params, $el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && 0 === Object.keys(breakpoints).length) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && "column" === breakpointParams.grid.fill || !breakpointParams.grid.fill && "column" === params.grid.fill) $el.addClass(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (void 0 === base) base = "window";
            if (!breakpoints || "container" === base && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = "window" === base ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if ("string" === typeof point && 0 === point.indexOf("@")) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if ("window" === base) {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if ("object" === typeof item) Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if ("string" === typeof item) resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, $el, device, support} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "pointer-events": !support.touch
            }, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && "column" === params.grid.fill
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            $el.addClass([ ...classNames ].join(" "));
            swiper.emitContainerClasses();
        }
        function removeClasses_removeClasses() {
            const swiper = this;
            const {$el, classNames} = swiper;
            $el.removeClass(classNames.join(" "));
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses: removeClasses_removeClasses
        };
        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            const window = ssr_window_esm_getWindow();
            let image;
            function onReady() {
                if (callback) callback();
            }
            const isPicture = dom(imageEl).parent("picture")[0];
            if (!isPicture && (!imageEl.complete || !checkForComplete)) if (src) {
                image = new window.Image;
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) image.sizes = sizes;
                if (srcset) image.srcset = srcset;
                if (src) image.src = src;
            } else onReady(); else onReady();
        }
        function preloadImages() {
            const swiper = this;
            swiper.imagesToLoad = swiper.$el.find("img");
            function onReady() {
                if ("undefined" === typeof swiper || null === swiper || !swiper || swiper.destroyed) return;
                if (void 0 !== swiper.imagesLoaded) swiper.imagesLoaded += 1;
                if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                    if (swiper.params.updateOnImagesReady) swiper.update();
                    swiper.emit("imagesReady");
                }
            }
            for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
                const imageEl = swiper.imagesToLoad[i];
                swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
            }
        }
        const core_images = {
            loadImage,
            preloadImages
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + 2 * slidesOffsetBefore;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = 1 === swiper.snapGrid.length;
            if (true === params.allowSlideNext) swiper.allowSlideNext = !swiper.isLocked;
            if (true === params.allowSlidePrev) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            preloadImages: true,
            updateOnImagesReady: true,
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: false,
            loopPreventsSlide: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (void 0 === obj) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if ("object" !== typeof moduleParams || null === moduleParams) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && true === params[moduleParamName]) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (true === params[moduleParamName]) params[moduleParamName] = {
                    enabled: true
                };
                if ("object" === typeof params[moduleParamName] && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition: core_transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes,
            images: core_images
        };
        const extendedDefaults = {};
        class core_Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (1 === args.length && args[0].constructor && "Object" === Object.prototype.toString.call(args[0]).slice(8, -1)) params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                if (params.el && dom(params.el).length > 1) {
                    const swipers = [];
                    dom(params.el).each((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                swiper.$ = dom;
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: dom(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return "horizontal" === swiper.params.direction;
                    },
                    isVertical() {
                        return "vertical" === swiper.params.direction;
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEvents: function touchEvents() {
                        const touch = [ "touchstart", "touchmove", "touchend", "touchcancel" ];
                        const desktop = [ "pointerdown", "pointermove", "pointerup" ];
                        swiper.touchEventsTouch = {
                            start: touch[0],
                            move: touch[1],
                            end: touch[2],
                            cancel: touch[3]
                        };
                        swiper.touchEventsDesktop = {
                            start: desktop[0],
                            move: desktop[1],
                            end: desktop[2]
                        };
                        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: utils_now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, "undefined" === typeof speed ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => 0 === className.indexOf("swiper") || 0 === className.indexOf(swiper.params.containerModifierClass)));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                return slideEl.className.split(" ").filter((className => 0 === className.indexOf("swiper-slide") || 0 === className.indexOf(swiper.params.slideClass))).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.each((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (void 0 === view) view = "current";
                if (void 0 === exact) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if ("current" === view) for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? -1 * swiper.translate : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if (("auto" === swiper.params.slidesPerView || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true); else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (void 0 === needUpdate) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = "horizontal" === currentDirection ? "vertical" : "horizontal";
                if (newDirection === currentDirection || "horizontal" !== newDirection && "vertical" !== newDirection) return swiper;
                swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.each((slideEl => {
                    if ("vertical" === newDirection) slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            mount(el) {
                const swiper = this;
                if (swiper.mounted) return true;
                const $el = dom(el || swiper.params.el);
                el = $el[0];
                if (!el) return false;
                el.swiper = swiper;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = dom(el.shadowRoot.querySelector(getWrapperSelector()));
                        res.children = options => $el.children(options);
                        return res;
                    }
                    return $el.children(getWrapperSelector());
                };
                let $wrapperEl = getWrapper();
                if (0 === $wrapperEl.length && swiper.params.createElements) {
                    const document = ssr_window_esm_getDocument();
                    const wrapper = document.createElement("div");
                    $wrapperEl = dom(wrapper);
                    wrapper.className = swiper.params.wrapperClass;
                    $el.append(wrapper);
                    $el.children(`.${swiper.params.slideClass}`).each((slideEl => {
                        $wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    $el,
                    el,
                    $wrapperEl,
                    wrapperEl: $wrapperEl[0],
                    mounted: true,
                    rtl: "rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction"),
                    rtlTranslate: "horizontal" === swiper.params.direction && ("rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction")),
                    wrongRTL: "-webkit-box" === $wrapperEl.css("display")
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (false === mounted) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                if (swiper.params.loop) swiper.loopCreate();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.preloadImages) swiper.preloadImages();
                if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                swiper.attachEvents();
                swiper.initialized = true;
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (void 0 === deleteInstance) deleteInstance = true;
                if (void 0 === cleanStyles) cleanStyles = true;
                const swiper = this;
                const {params, $el, $wrapperEl, slides} = swiper;
                if ("undefined" === typeof swiper.params || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    $el.removeAttr("style");
                    $wrapperEl.removeAttr("style");
                    if (slides && slides.length) slides.removeClass([ params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (false !== deleteInstance) {
                    swiper.$el[0].swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!core_Swiper.prototype.__modules__) core_Swiper.prototype.__modules__ = [];
                const modules = core_Swiper.prototype.__modules__;
                if ("function" === typeof mod && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => core_Swiper.installModule(m)));
                    return core_Swiper;
                }
                core_Swiper.installModule(module);
                return core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        core_Swiper.use([ Resize, Observer ]);
        const core = core_Swiper;
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            const document = ssr_window_esm_getDocument();
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && true === params.auto) {
                    let element = swiper.$el.children(`.${checkProps[key]}`)[0];
                    if (!element) {
                        element = document.createElement("div");
                        element.className = checkProps[key];
                        swiper.$el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            });
            swiper.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            };
            function getEl(el) {
                let $el;
                if (el) {
                    $el = dom(el);
                    if (swiper.params.uniqueNavElements && "string" === typeof el && $el.length > 1 && 1 === swiper.$el.find(el).length) $el = swiper.$el.find(el);
                }
                return $el;
            }
            function toggleEl($el, disabled) {
                const params = swiper.params.navigation;
                if ($el && $el.length > 0) {
                    $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
                    if ($el[0] && "BUTTON" === $el[0].tagName) $el[0].disabled = disabled;
                    if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
                }
            }
            function update() {
                if (swiper.params.loop) return;
                const {$nextEl, $prevEl} = swiper.navigation;
                toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                const $nextEl = getEl(params.nextEl);
                const $prevEl = getEl(params.prevEl);
                if ($nextEl && $nextEl.length > 0) $nextEl.on("click", onNextClick);
                if ($prevEl && $prevEl.length > 0) $prevEl.on("click", onPrevClick);
                Object.assign(swiper.navigation, {
                    $nextEl,
                    nextEl: $nextEl && $nextEl[0],
                    $prevEl,
                    prevEl: $prevEl && $prevEl[0]
                });
                if (!swiper.enabled) {
                    if ($nextEl) $nextEl.addClass(params.lockClass);
                    if ($prevEl) $prevEl.addClass(params.lockClass);
                }
            }
            function destroy() {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl && $nextEl.length) {
                    $nextEl.off("click", onNextClick);
                    $nextEl.removeClass(swiper.params.navigation.disabledClass);
                }
                if ($prevEl && $prevEl.length) {
                    $prevEl.off("click", onPrevClick);
                    $prevEl.removeClass(swiper.params.navigation.disabledClass);
                }
            }
            on("init", (() => {
                init();
                update();
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl) $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
                if ($prevEl) $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
            }));
            on("click", ((_s, e) => {
                const {$nextEl, $prevEl} = swiper.navigation;
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !dom(targetEl).is($prevEl) && !dom(targetEl).is($nextEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass); else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                    if (true === isHidden) emit("navigationShow"); else emit("navigationHide");
                    if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                    if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                }
            }));
            Object.assign(swiper.navigation, {
                update,
                init,
                destroy
            });
        }
        function classes_to_selector_classesToSelector(classes) {
            if (void 0 === classes) classes = "";
            return `.${classes.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`
                }
            });
            swiper.pagination = {
                el: null,
                $el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || 0 === swiper.pagination.$el.length;
            }
            function setSideBullets($bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el;
                let current;
                const total = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
                    if (current > slidesLength - 1 - 2 * swiper.loopedSlides) current -= slidesLength - 2 * swiper.loopedSlides;
                    if (current > total - 1) current -= total;
                    if (current < 0 && "bullets" !== swiper.params.paginationType) current = total + current;
                } else if ("undefined" !== typeof swiper.snapIndex) current = swiper.snapIndex; else current = swiper.activeIndex || 0;
                if ("bullets" === params.type && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
                        $el.css(swiper.isHorizontal() ? "width" : "height", `${bulletSize * (params.dynamicMainBullets + 4)}px`);
                        if (params.dynamicMainBullets > 1 && void 0 !== swiper.previousIndex) {
                            dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.removeClass([ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)).join(" "));
                    if ($el.length > 1) bullets.each((bullet => {
                        const $bullet = dom(bullet);
                        const bulletIndex = $bullet.index();
                        if (bulletIndex === current) $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass(`${params.bulletActiveClass}-main`);
                            if (bulletIndex === firstIndex) setSideBullets($bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets($bullet, "next");
                        }
                    })); else {
                        const $bullet = bullets.eq(current);
                        const bulletIndex = $bullet.index();
                        $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            const $firstDisplayedBullet = bullets.eq(firstIndex);
                            const $lastDisplayedBullet = bullets.eq(lastIndex);
                            for (let i = firstIndex; i <= lastIndex; i += 1) bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                            if (swiper.params.loop) if (bulletIndex >= bullets.length) {
                                for (let i = params.dynamicMainBullets; i >= 0; i -= 1) bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                            } else {
                                setSideBullets($firstDisplayedBullet, "prev");
                                setSideBullets($lastDisplayedBullet, "next");
                            } else {
                                setSideBullets($firstDisplayedBullet, "prev");
                                setSideBullets($lastDisplayedBullet, "next");
                            }
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.css(swiper.isHorizontal() ? offsetProp : "top", `${bulletsOffset}px`);
                    }
                }
                if ("fraction" === params.type) {
                    $el.find(classes_to_selector_classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
                    $el.find(classes_to_selector_classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
                }
                if ("progressbar" === params.type) {
                    let progressbarDirection;
                    if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                    const scale = (current + 1) / total;
                    let scaleX = 1;
                    let scaleY = 1;
                    if ("horizontal" === progressbarDirection) scaleX = scale; else scaleY = scale;
                    $el.find(classes_to_selector_classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
                }
                if ("custom" === params.type && params.renderCustom) {
                    $el.html(params.renderCustom(swiper, current + 1, total));
                    emit("paginationRender", $el[0]);
                } else emit("paginationUpdate", $el[0]);
                if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el;
                let paginationHTML = "";
                if ("bullets" === params.type) {
                    let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
                    $el.html(paginationHTML);
                    swiper.pagination.bullets = $el.find(classes_to_selector_classesToSelector(params.bulletClass));
                }
                if ("fraction" === params.type) {
                    if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                    $el.html(paginationHTML);
                }
                if ("progressbar" === params.type) {
                    if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                    $el.html(paginationHTML);
                }
                if ("custom" !== params.type) emit("paginationRender", swiper.pagination.$el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let $el = dom(params.el);
                if (0 === $el.length) return;
                if (swiper.params.uniqueNavElements && "string" === typeof params.el && $el.length > 1) {
                    $el = swiper.$el.find(params.el);
                    if ($el.length > 1) $el = $el.filter((el => {
                        if (dom(el).parents(".swiper")[0] !== swiper.el) return false;
                        return true;
                    }));
                }
                if ("bullets" === params.type && params.clickable) $el.addClass(params.clickableClass);
                $el.addClass(params.modifierClass + params.type);
                $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if ("bullets" === params.type && params.dynamicBullets) {
                    $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
                    dynamicBulletIndex = 0;
                    if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                }
                if ("progressbar" === params.type && params.progressbarOpposite) $el.addClass(params.progressbarOppositeClass);
                if (params.clickable) $el.on("click", classes_to_selector_classesToSelector(params.bulletClass), (function onClick(e) {
                    e.preventDefault();
                    let index = dom(this).index() * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) index += swiper.loopedSlides;
                    swiper.slideTo(index);
                }));
                Object.assign(swiper.pagination, {
                    $el,
                    el: $el[0]
                });
                if (!swiper.enabled) $el.addClass(params.lockClass);
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const $el = swiper.pagination.$el;
                $el.removeClass(params.hiddenClass);
                $el.removeClass(params.modifierClass + params.type);
                $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
                if (params.clickable) $el.off("click", classes_to_selector_classesToSelector(params.bulletClass));
            }
            on("init", (() => {
                init();
                render();
                update();
            }));
            on("activeIndexChange", (() => {
                if (swiper.params.loop) update(); else if ("undefined" === typeof swiper.snapIndex) update();
            }));
            on("snapIndexChange", (() => {
                if (!swiper.params.loop) update();
            }));
            on("slidesLengthChange", (() => {
                if (swiper.params.loop) {
                    render();
                    update();
                }
            }));
            on("snapGridLengthChange", (() => {
                if (!swiper.params.loop) {
                    render();
                    update();
                }
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$el} = swiper.pagination;
                if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                const {$el} = swiper.pagination;
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !dom(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
                    if (true === isHidden) emit("paginationShow"); else emit("paginationHide");
                    $el.toggleClass(swiper.params.pagination.hiddenClass);
                }
            }));
            Object.assign(swiper.pagination, {
                render,
                update,
                init,
                destroy
            });
        }
        function initSliders() {
            if (document.querySelector(".battle__slider")) new core(".battle__slider", {
                modules: [ Navigation, Pagination ],
                observer: true,
                slidesPerView: 1,
                spaceBetween: 20,
                speed: 800,
                loop: true,
                pagination: {
                    el: ".battle__swiper-dotts",
                    clickable: true
                },
                navigation: {
                    nextEl: ".battle__arrow-next"
                },
                on: {}
            });
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        class ScrollWatcher {
            constructor(props) {
                let defaultConfig = {
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.observer;
                !document.documentElement.classList.contains("watcher") ? this.scrollWatcherRun() : null;
            }
            scrollWatcherUpdate() {
                this.scrollWatcherRun();
            }
            scrollWatcherRun() {
                document.documentElement.classList.add("watcher");
                this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"));
            }
            scrollWatcherConstructor(items) {
                if (items.length) {
                    this.scrollWatcherLogging(`Проснулся, слежу за объектами (${items.length})...`);
                    let uniqParams = uniqArray(Array.from(items).map((function(item) {
                        return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : "0px"}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
                    })));
                    uniqParams.forEach((uniqParam => {
                        let uniqParamArray = uniqParam.split("|");
                        let paramsWatch = {
                            root: uniqParamArray[0],
                            margin: uniqParamArray[1],
                            threshold: uniqParamArray[2]
                        };
                        let groupItems = Array.from(items).filter((function(item) {
                            let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
                            let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : "0px";
                            let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
                            if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
                        }));
                        let configWatcher = this.getScrollWatcherConfig(paramsWatch);
                        this.scrollWatcherInit(groupItems, configWatcher);
                    }));
                } else this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
            }
            getScrollWatcherConfig(paramsWatch) {
                let configWatcher = {};
                if (document.querySelector(paramsWatch.root)) configWatcher.root = document.querySelector(paramsWatch.root); else if ("null" !== paramsWatch.root) this.scrollWatcherLogging(`Эмм... родительского объекта ${paramsWatch.root} нет на странице`);
                configWatcher.rootMargin = paramsWatch.margin;
                if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
                    this.scrollWatcherLogging(`Ой ой, настройку data-watch-margin нужно задавать в PX или %`);
                    return;
                }
                if ("prx" === paramsWatch.threshold) {
                    paramsWatch.threshold = [];
                    for (let i = 0; i <= 1; i += .005) paramsWatch.threshold.push(i);
                } else paramsWatch.threshold = paramsWatch.threshold.split(",");
                configWatcher.threshold = paramsWatch.threshold;
                return configWatcher;
            }
            scrollWatcherCreate(configWatcher) {
                this.observer = new IntersectionObserver(((entries, observer) => {
                    entries.forEach((entry => {
                        this.scrollWatcherCallback(entry, observer);
                    }));
                }), configWatcher);
            }
            scrollWatcherInit(items, configWatcher) {
                this.scrollWatcherCreate(configWatcher);
                items.forEach((item => this.observer.observe(item)));
            }
            scrollWatcherIntersecting(entry, targetElement) {
                if (entry.isIntersecting) {
                    !targetElement.classList.contains("_watcher-view") ? targetElement.classList.add("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я вижу ${targetElement.classList}, добавил класс _watcher-view`);
                } else {
                    targetElement.classList.contains("_watcher-view") ? targetElement.classList.remove("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я не вижу ${targetElement.classList}, убрал класс _watcher-view`);
                }
            }
            scrollWatcherOff(targetElement, observer) {
                observer.unobserve(targetElement);
                this.scrollWatcherLogging(`Я перестал следить за ${targetElement.classList}`);
            }
            scrollWatcherLogging(message) {
                this.config.logging ? functions_FLS(`[Наблюдатель]: ${message}`) : null;
            }
            scrollWatcherCallback(entry, observer) {
                const targetElement = entry.target;
                this.scrollWatcherIntersecting(entry, targetElement);
                targetElement.hasAttribute("data-watch-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
                document.dispatchEvent(new CustomEvent("watcherCallback", {
                    detail: {
                        entry
                    }
                }));
            }
        }
        modules_flsModules.watcher = new ScrollWatcher({});
        let addWindowScrollEvent = true;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if ("click" === e.type) {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 1500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        gotoblock_gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if ("watcherCallback" === e.type && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if ("navigator" === targetElement.dataset.watch) {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoblock_gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        function headerScroll() {
            addWindowScrollEvent = true;
            const header = document.querySelector("header.header");
            const headerShow = header.hasAttribute("data-scroll-show");
            const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 1500;
            const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
            let scrollDirection = 0;
            let timer;
            document.addEventListener("windowScroll", (function(e) {
                const scrollTop = window.scrollY;
                clearTimeout(timer);
                if (scrollTop >= startPoint) {
                    !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                    if (headerShow) {
                        if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        timer = setTimeout((() => {
                            !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        }), headerShowTimer);
                    }
                } else {
                    header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                    if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
                }
                scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
            }));
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, (function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }), this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, (function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            }));
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, (function(item) {
                    return item.breakpoint === mediaBreakpoint;
                }));
                matchMedia.addListener((function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                }));
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = оbjects.length - 1; i >= 0; i--) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if ("last" === place || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if ("first" === place) {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (void 0 !== parent.children[index]) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if ("min" === this.type) Array.prototype.sort.call(arr, (function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if ("first" === a.place || "last" === b.place) return -1;
                    if ("last" === a.place || "first" === b.place) return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            })); else {
                Array.prototype.sort.call(arr, (function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if ("first" === a.place || "last" === b.place) return 1;
                        if ("last" === a.place || "first" === b.place) return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                }));
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
        var fullpage = __webpack_require__(615);
        /*!
* Scrolloverflow 2.0.7 module for fullPage.js >= 3
* https://github.com/alvarotrigo/fullPage.js
*/
        /**
* Customized version of iScroll.js 0.1.3
* It fixes bugs affecting its integration with fullpage.js
* @license
*/
        /*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
        (function(window, document, Math) {
            var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
                window.setTimeout(callback, 1e3 / 60);
            };
            var utils = function() {
                var me = {};
                var _elementStyle = document.createElement("div").style;
                var _vendor = function() {
                    var transform, vendors = [ "t", "webkitT", "MozT", "msT", "OT" ], i = 0, l = vendors.length;
                    for (;i < l; i++) {
                        transform = vendors[i] + "ransform";
                        if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
                    }
                    return false;
                }();
                function _prefixStyle(style) {
                    if (false === _vendor) return false;
                    if ("" === _vendor) return style;
                    return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
                }
                me.getTime = Date.now || function getTime() {
                    return (new Date).getTime();
                };
                me.extend = function(target, obj) {
                    for (var i in obj) target[i] = obj[i];
                };
                me.addEvent = function(el, type, fn, capture) {
                    el.addEventListener(type, fn, !!capture);
                };
                me.removeEvent = function(el, type, fn, capture) {
                    el.removeEventListener(type, fn, !!capture);
                };
                me.prefixPointerEvent = function(pointerEvent) {
                    return window.MSPointerEvent ? "MSPointer" + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8) : pointerEvent;
                };
                me.momentum = function(current, start, time, lowerMargin, wrapperSize, deceleration) {
                    var destination, duration, distance = current - start, speed = Math.abs(distance) / time;
                    deceleration = void 0 === deceleration ? 6e-4 : deceleration;
                    destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
                    duration = speed / deceleration;
                    if (destination < lowerMargin) {
                        destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin;
                        distance = Math.abs(destination - current);
                        duration = distance / speed;
                    } else if (destination > 0) {
                        destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
                        distance = Math.abs(current) + destination;
                        duration = distance / speed;
                    }
                    return {
                        destination: Math.round(destination),
                        duration
                    };
                };
                var _transform = _prefixStyle("transform");
                me.extend(me, {
                    hasTransform: false !== _transform,
                    hasPerspective: _prefixStyle("perspective") in _elementStyle,
                    hasTouch: "ontouchstart" in window,
                    hasPointer: !!(window.PointerEvent || window.MSPointerEvent),
                    hasTransition: _prefixStyle("transition") in _elementStyle
                });
                me.isBadAndroid = function() {
                    var appVersion = window.navigator.appVersion;
                    if (/Android/.test(appVersion) && !/Chrome\/\d/.test(appVersion)) {
                        var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
                        if (safariVersion && "object" === typeof safariVersion && safariVersion.length >= 2) return parseFloat(safariVersion[1]) < 535.19; else return true;
                    } else return false;
                }();
                me.extend(me.style = {}, {
                    transform: _transform,
                    transitionTimingFunction: _prefixStyle("transitionTimingFunction"),
                    transitionDuration: _prefixStyle("transitionDuration"),
                    transitionDelay: _prefixStyle("transitionDelay"),
                    transformOrigin: _prefixStyle("transformOrigin")
                });
                me.hasClass = function(e, c) {
                    var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
                    return re.test(e.className);
                };
                me.addClass = function(e, c) {
                    if (me.hasClass(e, c)) return;
                    var newclass = e.className.split(" ");
                    newclass.push(c);
                    e.className = newclass.join(" ");
                };
                me.removeClass = function(e, c) {
                    if (!me.hasClass(e, c)) return;
                    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
                    e.className = e.className.replace(re, " ");
                };
                me.offset = function(el) {
                    var left = -el.offsetLeft, top = -el.offsetTop;
                    while (el = el.offsetParent) {
                        left -= el.offsetLeft;
                        top -= el.offsetTop;
                    }
                    return {
                        left,
                        top
                    };
                };
                me.preventDefaultException = function(el, exceptions) {
                    for (var i in exceptions) if (exceptions[i].test(el[i])) return true;
                    return false;
                };
                me.extend(me.eventType = {}, {
                    touchstart: 1,
                    touchmove: 1,
                    touchend: 1,
                    mousedown: 2,
                    mousemove: 2,
                    mouseup: 2,
                    pointerdown: 3,
                    pointermove: 3,
                    pointerup: 3,
                    MSPointerDown: 3,
                    MSPointerMove: 3,
                    MSPointerUp: 3
                });
                me.extend(me.ease = {}, {
                    quadratic: {
                        style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        fn: function(k) {
                            return k * (2 - k);
                        }
                    },
                    circular: {
                        style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                        fn: function(k) {
                            return Math.sqrt(1 - --k * k);
                        }
                    },
                    back: {
                        style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        fn: function(k) {
                            var b = 4;
                            return (k -= 1) * k * ((b + 1) * k + b) + 1;
                        }
                    },
                    bounce: {
                        style: "",
                        fn: function(k) {
                            if ((k /= 1) < 1 / 2.75) return 7.5625 * k * k; else if (k < 2 / 2.75) return 7.5625 * (k -= 1.5 / 2.75) * k + .75; else if (k < 2.5 / 2.75) return 7.5625 * (k -= 2.25 / 2.75) * k + .9375; else return 7.5625 * (k -= 2.625 / 2.75) * k + .984375;
                        }
                    },
                    elastic: {
                        style: "",
                        fn: function(k) {
                            var f = .22, e = .4;
                            if (0 === k) return 0;
                            if (1 == k) return 1;
                            return e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1;
                        }
                    }
                });
                me.tap = function(e, eventName) {
                    var ev = document.createEvent("Event");
                    ev.initEvent(eventName, true, true);
                    ev.pageX = e.pageX;
                    ev.pageY = e.pageY;
                    e.target.dispatchEvent(ev);
                };
                me.click = function(e) {
                    var ev, target = e.target;
                    if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
                        ev = document.createEvent(window.MouseEvent ? "MouseEvents" : "Event");
                        ev.initEvent("click", true, true);
                        ev.view = e.view || window;
                        ev.detail = 1;
                        ev.screenX = target.screenX || 0;
                        ev.screenY = target.screenY || 0;
                        ev.clientX = target.clientX || 0;
                        ev.clientY = target.clientY || 0;
                        ev.ctrlKey = !!e.ctrlKey;
                        ev.altKey = !!e.altKey;
                        ev.shiftKey = !!e.shiftKey;
                        ev.metaKey = !!e.metaKey;
                        ev.button = 0;
                        ev.relatedTarget = null;
                        ev._constructed = true;
                        target.dispatchEvent(ev);
                    }
                };
                return me;
            }();
            function IScroll(el, options) {
                this.wrapper = "string" == typeof el ? document.querySelector(el) : el;
                this.scroller = this.wrapper.children[0];
                this.scrollerStyle = this.scroller.style;
                this.options = {
                    resizeScrollbars: true,
                    mouseWheelSpeed: 20,
                    snapThreshold: .334,
                    disablePointer: !utils.hasPointer,
                    disableTouch: utils.hasPointer || !utils.hasTouch,
                    disableMouse: utils.hasPointer || utils.hasTouch,
                    startX: 0,
                    startY: 0,
                    scrollY: true,
                    directionLockThreshold: 5,
                    momentum: true,
                    bounce: true,
                    bounceTime: 600,
                    bounceEasing: "",
                    preventDefault: true,
                    preventDefaultException: {
                        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/
                    },
                    HWCompositing: true,
                    useTransition: true,
                    useTransform: true,
                    bindToWrapper: "undefined" === typeof window.onmousedown
                };
                for (var i in options) this.options[i] = options[i];
                this.translateZ = this.options.HWCompositing && utils.hasPerspective ? " translateZ(0)" : "";
                this.options.useTransition = utils.hasTransition && this.options.useTransition;
                this.options.useTransform = utils.hasTransform && this.options.useTransform;
                this.options.eventPassthrough = true === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough;
                this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
                this.options.scrollY = "vertical" == this.options.eventPassthrough ? false : this.options.scrollY;
                this.options.scrollX = "horizontal" == this.options.eventPassthrough ? false : this.options.scrollX;
                this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
                this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
                this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;
                this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling;
                if (true === this.options.tap) this.options.tap = "tap";
                if (!this.options.useTransition && !this.options.useTransform) if (!/relative|absolute/i.test(this.scrollerStyle.position)) this.scrollerStyle.position = "relative";
                if ("scale" == this.options.shrinkScrollbars) this.options.useTransition = false;
                this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
                this.x = 0;
                this.y = 0;
                this.directionX = 0;
                this.directionY = 0;
                this._events = {};
                this._init();
                this.refresh();
                this.scrollTo(this.options.startX, this.options.startY);
                this.enable();
            }
            IScroll.prototype = {
                version: "5.2.0",
                _init: function() {
                    this._initEvents();
                    if (this.options.scrollbars || this.options.indicators) this._initIndicators();
                    if (this.options.mouseWheel) this._initWheel();
                    if (this.options.snap) this._initSnap();
                    if (this.options.keyBindings) this._initKeys();
                },
                destroy: function() {
                    this._initEvents(true);
                    clearTimeout(this.resizeTimeout);
                    this.resizeTimeout = null;
                    this._execEvent("destroy");
                },
                _transitionEnd: function(e) {
                    if (e.target != this.scroller || !this.isInTransition) return;
                    this._transitionTime();
                    if (!this.resetPosition(this.options.bounceTime)) {
                        this.isInTransition = false;
                        this._execEvent("scrollEnd");
                    }
                },
                _start: function(e) {
                    if (1 != utils.eventType[e.type]) {
                        var button;
                        if (!e.which) button = e.button < 2 ? 0 : 4 == e.button ? 1 : 2; else button = e.button;
                        if (0 !== button) return;
                    }
                    if (!this.enabled || this.initiated && utils.eventType[e.type] !== this.initiated) return;
                    if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) e.preventDefault();
                    var pos, point = e.touches ? e.touches[0] : e;
                    this.initiated = utils.eventType[e.type];
                    this.moved = false;
                    this.distX = 0;
                    this.distY = 0;
                    this.directionX = 0;
                    this.directionY = 0;
                    this.directionLocked = 0;
                    this.startTime = utils.getTime();
                    if (this.options.useTransition && this.isInTransition) {
                        this._transitionTime();
                        this.isInTransition = false;
                        pos = this.getComputedPosition();
                        this._translate(Math.round(pos.x), Math.round(pos.y));
                        this._execEvent("scrollEnd");
                    } else if (!this.options.useTransition && this.isAnimating) {
                        this.isAnimating = false;
                        this._execEvent("scrollEnd");
                    }
                    this.startX = this.x;
                    this.startY = this.y;
                    this.absStartX = this.x;
                    this.absStartY = this.y;
                    this.pointX = point.pageX;
                    this.pointY = point.pageY;
                    this._execEvent("beforeScrollStart");
                },
                _move: function(e) {
                    if (!this.enabled || utils.eventType[e.type] !== this.initiated) return;
                    if (this.options.preventDefault) e.preventDefault();
                    var newX, newY, absDistX, absDistY, point = e.touches ? e.touches[0] : e, deltaX = point.pageX - this.pointX, deltaY = point.pageY - this.pointY, timestamp = utils.getTime();
                    this.pointX = point.pageX;
                    this.pointY = point.pageY;
                    this.distX += deltaX;
                    this.distY += deltaY;
                    absDistX = Math.abs(this.distX);
                    absDistY = Math.abs(this.distY);
                    if (timestamp - this.endTime > 300 && absDistX < 10 && absDistY < 10) return;
                    if (!this.directionLocked && !this.options.freeScroll) if (absDistX > absDistY + this.options.directionLockThreshold) this.directionLocked = "h"; else if (absDistY >= absDistX + this.options.directionLockThreshold) this.directionLocked = "v"; else this.directionLocked = "n";
                    if ("h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough) e.preventDefault(); else if ("horizontal" == this.options.eventPassthrough) {
                            this.initiated = false;
                            return;
                        }
                        deltaY = 0;
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough) e.preventDefault(); else if ("vertical" == this.options.eventPassthrough) {
                            this.initiated = false;
                            return;
                        }
                        deltaX = 0;
                    }
                    deltaX = this.hasHorizontalScroll ? deltaX : 0;
                    deltaY = this.hasVerticalScroll ? deltaY : 0;
                    newX = this.x + deltaX;
                    newY = this.y + deltaY;
                    if (newX > 0 || newX < this.maxScrollX) newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
                    if (newY > 0 || newY < this.maxScrollY) newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
                    this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
                    this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
                    if (!this.moved) this._execEvent("scrollStart");
                    this.moved = true;
                    this._translate(newX, newY);
                    if (timestamp - this.startTime > 300) {
                        this.startTime = timestamp;
                        this.startX = this.x;
                        this.startY = this.y;
                    }
                },
                _end: function(e) {
                    if (!this.enabled || utils.eventType[e.type] !== this.initiated) return;
                    if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) e.preventDefault();
                    e.changedTouches && e.changedTouches[0];
                    var momentumX, momentumY, duration = utils.getTime() - this.startTime, newX = Math.round(this.x), newY = Math.round(this.y), distanceX = Math.abs(newX - this.startX), distanceY = Math.abs(newY - this.startY), time = 0, easing = "";
                    this.isInTransition = 0;
                    this.initiated = 0;
                    this.endTime = utils.getTime();
                    if (this.resetPosition(this.options.bounceTime)) return;
                    this.scrollTo(newX, newY);
                    if (!this.moved) {
                        if (this.options.tap) utils.tap(e, this.options.tap);
                        if (this.options.click) utils.click(e);
                        this._execEvent("scrollCancel");
                        return;
                    }
                    if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
                        this._execEvent("flick");
                        return;
                    }
                    if (this.options.momentum && duration < 300) {
                        momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                            destination: newX,
                            duration: 0
                        };
                        momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                            destination: newY,
                            duration: 0
                        };
                        newX = momentumX.destination;
                        newY = momentumY.destination;
                        time = Math.max(momentumX.duration, momentumY.duration);
                        this.isInTransition = 1;
                    }
                    if (this.options.snap) {
                        var snap = this._nearestSnap(newX, newY);
                        this.currentPage = snap;
                        time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1e3), Math.min(Math.abs(newY - snap.y), 1e3)), 300);
                        newX = snap.x;
                        newY = snap.y;
                        this.directionX = 0;
                        this.directionY = 0;
                        easing = this.options.bounceEasing;
                    }
                    if (newX != this.x || newY != this.y) {
                        if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) easing = utils.ease.quadratic;
                        this.scrollTo(newX, newY, time, easing);
                        return;
                    }
                    this._execEvent("scrollEnd");
                },
                _resize: function() {
                    var that = this;
                    clearTimeout(this.resizeTimeout);
                    this.resizeTimeout = setTimeout((function() {
                        that.refresh();
                    }), this.options.resizePolling);
                },
                resetPosition: function(time) {
                    var x = this.x, y = this.y;
                    time = time || 0;
                    if (!this.hasHorizontalScroll || this.x > 0) x = 0; else if (this.x < this.maxScrollX) x = this.maxScrollX;
                    if (!this.hasVerticalScroll || this.y > 0) y = 0; else if (this.y < this.maxScrollY) y = this.maxScrollY;
                    if (x == this.x && y == this.y) return false;
                    this.scrollTo(x, y, time, this.options.bounceEasing);
                    return true;
                },
                disable: function() {
                    this.enabled = false;
                },
                enable: function() {
                    this.enabled = true;
                },
                refresh: function() {
                    this.wrapper.offsetHeight;
                    this.wrapperWidth = this.wrapper.clientWidth;
                    this.wrapperHeight = this.wrapper.clientHeight;
                    this.scrollerWidth = this.scroller.offsetWidth;
                    this.scrollerHeight = this.scroller.offsetHeight;
                    this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
                    this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
                    this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
                    this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
                    if (!this.hasHorizontalScroll) {
                        this.maxScrollX = 0;
                        this.scrollerWidth = this.wrapperWidth;
                    }
                    if (!this.hasVerticalScroll) {
                        this.maxScrollY = 0;
                        this.scrollerHeight = this.wrapperHeight;
                    }
                    this.endTime = 0;
                    this.directionX = 0;
                    this.directionY = 0;
                    this.wrapperOffset = utils.offset(this.wrapper);
                    this._execEvent("refresh");
                    this.resetPosition();
                },
                on: function(type, fn) {
                    if (!this._events[type]) this._events[type] = [];
                    this._events[type].push(fn);
                },
                off: function(type, fn) {
                    if (!this._events[type]) return;
                    var index = this._events[type].indexOf(fn);
                    if (index > -1) this._events[type].splice(index, 1);
                },
                _execEvent: function(type) {
                    if (!this._events[type]) return;
                    var i = 0, l = this._events[type].length;
                    if (!l) return;
                    for (;i < l; i++) this._events[type][i].apply(this, [].slice.call(arguments, 1));
                },
                scrollBy: function(x, y, time, easing) {
                    x = this.x + x;
                    y = this.y + y;
                    time = time || 0;
                    this.scrollTo(x, y, time, easing);
                },
                scrollTo: function(x, y, time, easing) {
                    easing = easing || utils.ease.circular;
                    this.isInTransition = this.options.useTransition && time > 0;
                    var transitionType = this.options.useTransition && easing.style;
                    if (!time || transitionType) {
                        if (transitionType) {
                            this._transitionTimingFunction(easing.style);
                            this._transitionTime(time);
                        }
                        this._translate(x, y);
                    } else this._animate(x, y, time, easing.fn);
                },
                scrollToElement: function(el, time, offsetX, offsetY, easing) {
                    el = el.nodeType ? el : this.scroller.querySelector(el);
                    if (!el) return;
                    var pos = utils.offset(el);
                    pos.left -= this.wrapperOffset.left;
                    pos.top -= this.wrapperOffset.top;
                    if (true === offsetX) offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
                    if (true === offsetY) offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
                    pos.left -= offsetX || 0;
                    pos.top -= offsetY || 0;
                    pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
                    pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;
                    time = void 0 === time || null === time || "auto" === time ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;
                    this.scrollTo(pos.left, pos.top, time, easing);
                },
                _transitionTime: function(time) {
                    if (!this.options.useTransition) return;
                    time = time || 0;
                    var durationProp = utils.style.transitionDuration;
                    if (!durationProp) return;
                    this.scrollerStyle[durationProp] = time + "ms";
                    if (!time && utils.isBadAndroid) {
                        this.scrollerStyle[durationProp] = "0.0001ms";
                        var self = this;
                        rAF((function() {
                            if ("0.0001ms" === self.scrollerStyle[durationProp]) self.scrollerStyle[durationProp] = "0s";
                        }));
                    }
                    if (this.indicators) for (var i = this.indicators.length; i--; ) this.indicators[i].transitionTime(time);
                },
                _transitionTimingFunction: function(easing) {
                    this.scrollerStyle[utils.style.transitionTimingFunction] = easing;
                    if (this.indicators) for (var i = this.indicators.length; i--; ) this.indicators[i].transitionTimingFunction(easing);
                },
                _translate: function(x, y) {
                    if (this.options.useTransform) this.scrollerStyle[utils.style.transform] = "translate(" + x + "px," + y + "px)" + this.translateZ; else {
                        x = Math.round(x);
                        y = Math.round(y);
                        this.scrollerStyle.left = x + "px";
                        this.scrollerStyle.top = y + "px";
                    }
                    this.x = x;
                    this.y = y;
                    if (this.indicators) for (var i = this.indicators.length; i--; ) this.indicators[i].updatePosition();
                },
                _initEvents: function(remove) {
                    var eventType = remove ? utils.removeEvent : utils.addEvent, target = this.options.bindToWrapper ? this.wrapper : window;
                    eventType(window, "orientationchange", this);
                    eventType(window, "resize", this);
                    if (this.options.click) eventType(this.wrapper, "click", this, true);
                    if (!this.options.disableMouse) {
                        eventType(this.wrapper, "mousedown", this);
                        eventType(target, "mousemove", this);
                        eventType(target, "mousecancel", this);
                        eventType(target, "mouseup", this);
                    }
                    if (utils.hasPointer && !this.options.disablePointer) {
                        eventType(this.wrapper, utils.prefixPointerEvent("pointerdown"), this);
                        eventType(target, utils.prefixPointerEvent("pointermove"), this);
                        eventType(target, utils.prefixPointerEvent("pointercancel"), this);
                        eventType(target, utils.prefixPointerEvent("pointerup"), this);
                    }
                    if (utils.hasTouch && !this.options.disableTouch) {
                        eventType(this.wrapper, "touchstart", this);
                        eventType(target, "touchmove", this);
                        eventType(target, "touchcancel", this);
                        eventType(target, "touchend", this);
                    }
                    eventType(this.scroller, "transitionend", this);
                    eventType(this.scroller, "webkitTransitionEnd", this);
                    eventType(this.scroller, "oTransitionEnd", this);
                    eventType(this.scroller, "MSTransitionEnd", this);
                },
                getComputedPosition: function() {
                    var x, y, matrix = window.getComputedStyle(this.scroller, null);
                    if (this.options.useTransform) {
                        matrix = matrix[utils.style.transform].split(")")[0].split(", ");
                        x = +(matrix[12] || matrix[4]);
                        y = +(matrix[13] || matrix[5]);
                    } else {
                        x = +matrix.left.replace(/[^-\d.]/g, "");
                        y = +matrix.top.replace(/[^-\d.]/g, "");
                    }
                    return {
                        x,
                        y
                    };
                },
                _initIndicators: function() {
                    var indicator, interactive = this.options.interactiveScrollbars, customStyle = "string" != typeof this.options.scrollbars, indicators = [];
                    var that = this;
                    this.indicators = [];
                    if (this.options.scrollbars) {
                        if (this.options.scrollY) {
                            indicator = {
                                el: createDefaultScrollbar("v", interactive, this.options.scrollbars),
                                interactive,
                                defaultScrollbars: true,
                                customStyle,
                                resize: this.options.resizeScrollbars,
                                shrink: this.options.shrinkScrollbars,
                                fade: this.options.fadeScrollbars,
                                listenX: false
                            };
                            this.wrapper.appendChild(indicator.el);
                            indicators.push(indicator);
                        }
                        if (this.options.scrollX) {
                            indicator = {
                                el: createDefaultScrollbar("h", interactive, this.options.scrollbars),
                                interactive,
                                defaultScrollbars: true,
                                customStyle,
                                resize: this.options.resizeScrollbars,
                                shrink: this.options.shrinkScrollbars,
                                fade: this.options.fadeScrollbars,
                                listenY: false
                            };
                            this.wrapper.appendChild(indicator.el);
                            indicators.push(indicator);
                        }
                    }
                    if (this.options.indicators) indicators = indicators.concat(this.options.indicators);
                    for (var i = indicators.length; i--; ) this.indicators.push(new Indicator(this, indicators[i]));
                    function _indicatorsMap(fn) {
                        if (that.indicators) for (var i = that.indicators.length; i--; ) fn.call(that.indicators[i]);
                    }
                    if (this.options.fadeScrollbars) {
                        this.on("scrollEnd", (function() {
                            _indicatorsMap((function() {
                                this.fade();
                            }));
                        }));
                        this.on("scrollCancel", (function() {
                            _indicatorsMap((function() {
                                this.fade();
                            }));
                        }));
                        this.on("scrollStart", (function() {
                            _indicatorsMap((function() {
                                this.fade(1);
                            }));
                        }));
                        this.on("beforeScrollStart", (function() {
                            _indicatorsMap((function() {
                                this.fade(1, true);
                            }));
                        }));
                    }
                    this.on("refresh", (function() {
                        _indicatorsMap((function() {
                            this.refresh();
                        }));
                    }));
                    this.on("destroy", (function() {
                        _indicatorsMap((function() {
                            this.destroy();
                        }));
                        delete this.indicators;
                    }));
                },
                _initWheel: function() {
                    utils.addEvent(this.wrapper, "wheel", this);
                    utils.addEvent(this.wrapper, "mousewheel", this);
                    utils.addEvent(this.wrapper, "DOMMouseScroll", this);
                    this.on("destroy", (function() {
                        clearTimeout(this.wheelTimeout);
                        this.wheelTimeout = null;
                        utils.removeEvent(this.wrapper, "wheel", this);
                        utils.removeEvent(this.wrapper, "mousewheel", this);
                        utils.removeEvent(this.wrapper, "DOMMouseScroll", this);
                    }));
                },
                _wheel: function(e) {
                    if (!this.enabled) return;
                    var isIE = window.navigator.userAgent.match(/(MSIE|Trident)/);
                    if (!isIE) e.preventDefault();
                    var wheelDeltaX, wheelDeltaY, newX, newY, that = this;
                    if (void 0 === this.wheelTimeout) that._execEvent("scrollStart");
                    clearTimeout(this.wheelTimeout);
                    this.wheelTimeout = setTimeout((function() {
                        if (!that.options.snap) that._execEvent("scrollEnd");
                        that.wheelTimeout = void 0;
                    }), 400);
                    if ("deltaX" in e) if (1 === e.deltaMode) {
                        wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
                        wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
                    } else {
                        wheelDeltaX = -e.deltaX;
                        wheelDeltaY = -e.deltaY;
                    } else if ("wheelDeltaX" in e) {
                        wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
                        wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                    } else if ("wheelDelta" in e) wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed; else if ("detail" in e) wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed; else return;
                    wheelDeltaX *= this.options.invertWheelDirection;
                    wheelDeltaY *= this.options.invertWheelDirection;
                    if (!this.hasVerticalScroll) {
                        wheelDeltaX = wheelDeltaY;
                        wheelDeltaY = 0;
                    }
                    if (this.options.snap) {
                        newX = this.currentPage.pageX;
                        newY = this.currentPage.pageY;
                        if (wheelDeltaX > 0) newX--; else if (wheelDeltaX < 0) newX++;
                        if (wheelDeltaY > 0) newY--; else if (wheelDeltaY < 0) newY++;
                        this.goToPage(newX, newY);
                        return;
                    }
                    newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
                    newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);
                    this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
                    this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;
                    if (newX > 0) newX = 0; else if (newX < this.maxScrollX) newX = this.maxScrollX;
                    if (newY > 0) newY = 0; else if (newY < this.maxScrollY) newY = this.maxScrollY;
                    this.scrollTo(newX, newY, 0);
                },
                _initSnap: function() {
                    this.currentPage = {};
                    if ("string" == typeof this.options.snap) this.options.snap = this.scroller.querySelectorAll(this.options.snap);
                    this.on("refresh", (function() {
                        var l, n, cx, cy, y, el, i = 0, m = 0, x = 0, stepX = this.options.snapStepX || this.wrapperWidth, stepY = this.options.snapStepY || this.wrapperHeight;
                        this.pages = [];
                        if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) return;
                        if (true === this.options.snap) {
                            cx = Math.round(stepX / 2);
                            cy = Math.round(stepY / 2);
                            while (x > -this.scrollerWidth) {
                                this.pages[i] = [];
                                l = 0;
                                y = 0;
                                while (y > -this.scrollerHeight) {
                                    this.pages[i][l] = {
                                        x: Math.max(x, this.maxScrollX),
                                        y: Math.max(y, this.maxScrollY),
                                        width: stepX,
                                        height: stepY,
                                        cx: x - cx,
                                        cy: y - cy
                                    };
                                    y -= stepY;
                                    l++;
                                }
                                x -= stepX;
                                i++;
                            }
                        } else {
                            el = this.options.snap;
                            l = el.length;
                            n = -1;
                            for (;i < l; i++) {
                                if (0 === i || el[i].offsetLeft <= el[i - 1].offsetLeft) {
                                    m = 0;
                                    n++;
                                }
                                if (!this.pages[m]) this.pages[m] = [];
                                x = Math.max(-el[i].offsetLeft, this.maxScrollX);
                                y = Math.max(-el[i].offsetTop, this.maxScrollY);
                                cx = x - Math.round(el[i].offsetWidth / 2);
                                cy = y - Math.round(el[i].offsetHeight / 2);
                                this.pages[m][n] = {
                                    x,
                                    y,
                                    width: el[i].offsetWidth,
                                    height: el[i].offsetHeight,
                                    cx,
                                    cy
                                };
                                if (x > this.maxScrollX) m++;
                            }
                        }
                        this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
                        if (this.options.snapThreshold % 1 === 0) {
                            this.snapThresholdX = this.options.snapThreshold;
                            this.snapThresholdY = this.options.snapThreshold;
                        } else {
                            this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
                            this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
                        }
                    }));
                    this.on("flick", (function() {
                        var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1e3), Math.min(Math.abs(this.y - this.startY), 1e3)), 300);
                        this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time);
                    }));
                },
                _nearestSnap: function(x, y) {
                    if (!this.pages.length) return {
                        x: 0,
                        y: 0,
                        pageX: 0,
                        pageY: 0
                    };
                    var i = 0, l = this.pages.length, m = 0;
                    if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) return this.currentPage;
                    if (x > 0) x = 0; else if (x < this.maxScrollX) x = this.maxScrollX;
                    if (y > 0) y = 0; else if (y < this.maxScrollY) y = this.maxScrollY;
                    for (;i < l; i++) if (x >= this.pages[i][0].cx) {
                        x = this.pages[i][0].x;
                        break;
                    }
                    l = this.pages[i].length;
                    for (;m < l; m++) if (y >= this.pages[0][m].cy) {
                        y = this.pages[0][m].y;
                        break;
                    }
                    if (i == this.currentPage.pageX) {
                        i += this.directionX;
                        if (i < 0) i = 0; else if (i >= this.pages.length) i = this.pages.length - 1;
                        x = this.pages[i][0].x;
                    }
                    if (m == this.currentPage.pageY) {
                        m += this.directionY;
                        if (m < 0) m = 0; else if (m >= this.pages[0].length) m = this.pages[0].length - 1;
                        y = this.pages[0][m].y;
                    }
                    return {
                        x,
                        y,
                        pageX: i,
                        pageY: m
                    };
                },
                goToPage: function(x, y, time, easing) {
                    easing = easing || this.options.bounceEasing;
                    if (x >= this.pages.length) x = this.pages.length - 1; else if (x < 0) x = 0;
                    if (y >= this.pages[x].length) y = this.pages[x].length - 1; else if (y < 0) y = 0;
                    var posX = this.pages[x][y].x, posY = this.pages[x][y].y;
                    time = void 0 === time ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1e3), Math.min(Math.abs(posY - this.y), 1e3)), 300) : time;
                    this.currentPage = {
                        x: posX,
                        y: posY,
                        pageX: x,
                        pageY: y
                    };
                    this.scrollTo(posX, posY, time, easing);
                },
                next: function(time, easing) {
                    var x = this.currentPage.pageX, y = this.currentPage.pageY;
                    x++;
                    if (x >= this.pages.length && this.hasVerticalScroll) {
                        x = 0;
                        y++;
                    }
                    this.goToPage(x, y, time, easing);
                },
                prev: function(time, easing) {
                    var x = this.currentPage.pageX, y = this.currentPage.pageY;
                    x--;
                    if (x < 0 && this.hasVerticalScroll) {
                        x = 0;
                        y--;
                    }
                    this.goToPage(x, y, time, easing);
                },
                _initKeys: function(e) {
                    var keys = {
                        pageUp: 33,
                        pageDown: 34,
                        end: 35,
                        home: 36,
                        left: 37,
                        up: 38,
                        right: 39,
                        down: 40
                    };
                    var i;
                    if ("object" == typeof this.options.keyBindings) {
                        for (i in this.options.keyBindings) if ("string" == typeof this.options.keyBindings[i]) this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
                    } else this.options.keyBindings = {};
                    for (i in keys) this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
                    utils.addEvent(window, "keydown", this);
                    this.on("destroy", (function() {
                        utils.removeEvent(window, "keydown", this);
                    }));
                },
                _key: function(e) {
                    if (!this.enabled) return;
                    var pos, snap = this.options.snap, newX = snap ? this.currentPage.pageX : this.x, newY = snap ? this.currentPage.pageY : this.y, now = utils.getTime(), prevTime = this.keyTime || 0, acceleration = .25;
                    if (this.options.useTransition && this.isInTransition) {
                        pos = this.getComputedPosition();
                        this._translate(Math.round(pos.x), Math.round(pos.y));
                        this.isInTransition = false;
                    }
                    this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;
                    switch (e.keyCode) {
                      case this.options.keyBindings.pageUp:
                        if (this.hasHorizontalScroll && !this.hasVerticalScroll) newX += snap ? 1 : this.wrapperWidth; else newY += snap ? 1 : this.wrapperHeight;
                        break;

                      case this.options.keyBindings.pageDown:
                        if (this.hasHorizontalScroll && !this.hasVerticalScroll) newX -= snap ? 1 : this.wrapperWidth; else newY -= snap ? 1 : this.wrapperHeight;
                        break;

                      case this.options.keyBindings.end:
                        newX = snap ? this.pages.length - 1 : this.maxScrollX;
                        newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
                        break;

                      case this.options.keyBindings.home:
                        newX = 0;
                        newY = 0;
                        break;

                      case this.options.keyBindings.left:
                        newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
                        break;

                      case this.options.keyBindings.up:
                        newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
                        break;

                      case this.options.keyBindings.right:
                        newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
                        break;

                      case this.options.keyBindings.down:
                        newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
                        break;

                      default:
                        return;
                    }
                    if (snap) {
                        this.goToPage(newX, newY);
                        return;
                    }
                    if (newX > 0) {
                        newX = 0;
                        this.keyAcceleration = 0;
                    } else if (newX < this.maxScrollX) {
                        newX = this.maxScrollX;
                        this.keyAcceleration = 0;
                    }
                    if (newY > 0) {
                        newY = 0;
                        this.keyAcceleration = 0;
                    } else if (newY < this.maxScrollY) {
                        newY = this.maxScrollY;
                        this.keyAcceleration = 0;
                    }
                    this.scrollTo(newX, newY, 0);
                    this.keyTime = now;
                },
                _animate: function(destX, destY, duration, easingFn) {
                    var that = this, startX = this.x, startY = this.y, startTime = utils.getTime(), destTime = startTime + duration;
                    function step() {
                        var newX, newY, easing, now = utils.getTime();
                        if (now >= destTime) {
                            that.isAnimating = false;
                            that._translate(destX, destY);
                            if (!that.resetPosition(that.options.bounceTime)) that._execEvent("scrollEnd");
                            return;
                        }
                        now = (now - startTime) / duration;
                        easing = easingFn(now);
                        newX = (destX - startX) * easing + startX;
                        newY = (destY - startY) * easing + startY;
                        that._translate(newX, newY);
                        if (that.isAnimating) rAF(step);
                    }
                    this.isAnimating = true;
                    step();
                },
                handleEvent: function(e) {
                    switch (e.type) {
                      case "touchstart":
                      case "pointerdown":
                      case "MSPointerDown":
                      case "mousedown":
                        this._start(e);
                        break;

                      case "touchmove":
                      case "pointermove":
                      case "MSPointerMove":
                      case "mousemove":
                        this._move(e);
                        break;

                      case "touchend":
                      case "pointerup":
                      case "MSPointerUp":
                      case "mouseup":
                      case "touchcancel":
                      case "pointercancel":
                      case "MSPointerCancel":
                      case "mousecancel":
                        this._end(e);
                        break;

                      case "orientationchange":
                      case "resize":
                        this._resize();
                        break;

                      case "transitionend":
                      case "webkitTransitionEnd":
                      case "oTransitionEnd":
                      case "MSTransitionEnd":
                        this._transitionEnd(e);
                        break;

                      case "wheel":
                      case "DOMMouseScroll":
                      case "mousewheel":
                        this._wheel(e);
                        break;

                      case "keydown":
                        this._key(e);
                        break;

                      case "click":
                        if (this.enabled && !e._constructed) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                        break;
                    }
                }
            };
            function createDefaultScrollbar(direction, interactive, type) {
                var scrollbar = document.createElement("div"), indicator = document.createElement("div");
                if (true === type) {
                    scrollbar.style.cssText = "position:absolute;z-index:9999";
                    indicator.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px";
                }
                indicator.className = "iScrollIndicator";
                if ("h" == direction) {
                    if (true === type) {
                        scrollbar.style.cssText += ";height:7px;left:2px;right:2px;bottom:0";
                        indicator.style.height = "100%";
                    }
                    scrollbar.className = "iScrollHorizontalScrollbar";
                } else {
                    if (true === type) {
                        scrollbar.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px";
                        indicator.style.width = "100%";
                    }
                    scrollbar.className = "iScrollVerticalScrollbar";
                }
                scrollbar.style.cssText += ";overflow:hidden";
                if (!interactive) scrollbar.style.pointerEvents = "none";
                scrollbar.appendChild(indicator);
                return scrollbar;
            }
            function Indicator(scroller, options) {
                this.wrapper = "string" == typeof options.el ? document.querySelector(options.el) : options.el;
                this.wrapperStyle = this.wrapper.style;
                this.indicator = this.wrapper.children[0];
                this.indicatorStyle = this.indicator.style;
                this.scroller = scroller;
                this.options = {
                    listenX: true,
                    listenY: true,
                    interactive: false,
                    resize: true,
                    defaultScrollbars: false,
                    shrink: false,
                    fade: false,
                    speedRatioX: 0,
                    speedRatioY: 0
                };
                for (var i in options) this.options[i] = options[i];
                this.sizeRatioX = 1;
                this.sizeRatioY = 1;
                this.maxPosX = 0;
                this.maxPosY = 0;
                if (this.options.interactive) {
                    if (!this.options.disableTouch) {
                        utils.addEvent(this.indicator, "touchstart", this);
                        utils.addEvent(window, "touchend", this);
                    }
                    if (!this.options.disablePointer) {
                        utils.addEvent(this.indicator, utils.prefixPointerEvent("pointerdown"), this);
                        utils.addEvent(window, utils.prefixPointerEvent("pointerup"), this);
                    }
                    if (!this.options.disableMouse) {
                        utils.addEvent(this.indicator, "mousedown", this);
                        utils.addEvent(window, "mouseup", this);
                    }
                }
                if (this.options.fade) {
                    this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
                    var durationProp = utils.style.transitionDuration;
                    if (!durationProp) return;
                    this.wrapperStyle[durationProp] = utils.isBadAndroid ? "0.0001ms" : "0ms";
                    var self = this;
                    if (utils.isBadAndroid) rAF((function() {
                        if ("0.0001ms" === self.wrapperStyle[durationProp]) self.wrapperStyle[durationProp] = "0s";
                    }));
                    this.wrapperStyle.opacity = "0";
                }
            }
            Indicator.prototype = {
                handleEvent: function(e) {
                    switch (e.type) {
                      case "touchstart":
                      case "pointerdown":
                      case "MSPointerDown":
                      case "mousedown":
                        this._start(e);
                        break;

                      case "touchmove":
                      case "pointermove":
                      case "MSPointerMove":
                      case "mousemove":
                        this._move(e);
                        break;

                      case "touchend":
                      case "pointerup":
                      case "MSPointerUp":
                      case "mouseup":
                      case "touchcancel":
                      case "pointercancel":
                      case "MSPointerCancel":
                      case "mousecancel":
                        this._end(e);
                        break;
                    }
                },
                destroy: function() {
                    if (this.options.fadeScrollbars) {
                        clearTimeout(this.fadeTimeout);
                        this.fadeTimeout = null;
                    }
                    if (this.options.interactive) {
                        utils.removeEvent(this.indicator, "touchstart", this);
                        utils.removeEvent(this.indicator, utils.prefixPointerEvent("pointerdown"), this);
                        utils.removeEvent(this.indicator, "mousedown", this);
                        utils.removeEvent(window, "touchmove", this);
                        utils.removeEvent(window, utils.prefixPointerEvent("pointermove"), this);
                        utils.removeEvent(window, "mousemove", this);
                        utils.removeEvent(window, "touchend", this);
                        utils.removeEvent(window, utils.prefixPointerEvent("pointerup"), this);
                        utils.removeEvent(window, "mouseup", this);
                    }
                    if (this.options.defaultScrollbars) this.wrapper.parentNode.removeChild(this.wrapper);
                },
                _start: function(e) {
                    var point = e.touches ? e.touches[0] : e;
                    e.preventDefault();
                    e.stopPropagation();
                    this.transitionTime();
                    this.initiated = true;
                    this.moved = false;
                    this.lastPointX = point.pageX;
                    this.lastPointY = point.pageY;
                    this.startTime = utils.getTime();
                    if (!this.options.disableTouch) utils.addEvent(window, "touchmove", this);
                    if (!this.options.disablePointer) utils.addEvent(window, utils.prefixPointerEvent("pointermove"), this);
                    if (!this.options.disableMouse) utils.addEvent(window, "mousemove", this);
                    this.scroller._execEvent("beforeScrollStart");
                },
                _move: function(e) {
                    var deltaX, deltaY, newX, newY, point = e.touches ? e.touches[0] : e;
                    utils.getTime();
                    if (!this.moved) this.scroller._execEvent("scrollStart");
                    this.moved = true;
                    deltaX = point.pageX - this.lastPointX;
                    this.lastPointX = point.pageX;
                    deltaY = point.pageY - this.lastPointY;
                    this.lastPointY = point.pageY;
                    newX = this.x + deltaX;
                    newY = this.y + deltaY;
                    this._pos(newX, newY);
                    e.preventDefault();
                    e.stopPropagation();
                },
                _end: function(e) {
                    if (!this.initiated) return;
                    this.initiated = false;
                    e.preventDefault();
                    e.stopPropagation();
                    utils.removeEvent(window, "touchmove", this);
                    utils.removeEvent(window, utils.prefixPointerEvent("pointermove"), this);
                    utils.removeEvent(window, "mousemove", this);
                    if (this.scroller.options.snap) {
                        var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
                        var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1e3), Math.min(Math.abs(this.scroller.y - snap.y), 1e3)), 300);
                        if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
                            this.scroller.directionX = 0;
                            this.scroller.directionY = 0;
                            this.scroller.currentPage = snap;
                            this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
                        }
                    }
                    if (this.moved) this.scroller._execEvent("scrollEnd");
                },
                transitionTime: function(time) {
                    time = time || 0;
                    var durationProp = utils.style.transitionDuration;
                    if (!durationProp) return;
                    this.indicatorStyle[durationProp] = time + "ms";
                    if (!time && utils.isBadAndroid) {
                        this.indicatorStyle[durationProp] = "0.0001ms";
                        var self = this;
                        rAF((function() {
                            if ("0.0001ms" === self.indicatorStyle[durationProp]) self.indicatorStyle[durationProp] = "0s";
                        }));
                    }
                },
                transitionTimingFunction: function(easing) {
                    this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
                },
                refresh: function() {
                    this.transitionTime();
                    if (this.options.listenX && !this.options.listenY) this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none"; else if (this.options.listenY && !this.options.listenX) this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none"; else this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none";
                    if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
                        utils.addClass(this.wrapper, "iScrollBothScrollbars");
                        utils.removeClass(this.wrapper, "iScrollLoneScrollbar");
                        if (this.options.defaultScrollbars && this.options.customStyle) if (this.options.listenX) this.wrapper.style.right = "8px"; else this.wrapper.style.bottom = "8px";
                    } else {
                        utils.removeClass(this.wrapper, "iScrollBothScrollbars");
                        utils.addClass(this.wrapper, "iScrollLoneScrollbar");
                        if (this.options.defaultScrollbars && this.options.customStyle) if (this.options.listenX) this.wrapper.style.right = "2px"; else this.wrapper.style.bottom = "2px";
                    }
                    this.wrapper.offsetHeight;
                    if (this.options.listenX) {
                        this.wrapperWidth = this.wrapper.clientWidth;
                        if (this.options.resize) {
                            this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
                            this.indicatorStyle.width = this.indicatorWidth + "px";
                        } else this.indicatorWidth = this.indicator.clientWidth;
                        this.maxPosX = this.wrapperWidth - this.indicatorWidth;
                        if ("clip" == this.options.shrink) {
                            this.minBoundaryX = -this.indicatorWidth + 8;
                            this.maxBoundaryX = this.wrapperWidth - 8;
                        } else {
                            this.minBoundaryX = 0;
                            this.maxBoundaryX = this.maxPosX;
                        }
                        this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX;
                    }
                    if (this.options.listenY) {
                        this.wrapperHeight = this.wrapper.clientHeight;
                        if (this.options.resize) {
                            this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
                            this.indicatorStyle.height = this.indicatorHeight + "px";
                        } else this.indicatorHeight = this.indicator.clientHeight;
                        this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                        if ("clip" == this.options.shrink) {
                            this.minBoundaryY = -this.indicatorHeight + 8;
                            this.maxBoundaryY = this.wrapperHeight - 8;
                        } else {
                            this.minBoundaryY = 0;
                            this.maxBoundaryY = this.maxPosY;
                        }
                        this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                        this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY;
                    }
                    this.updatePosition();
                },
                updatePosition: function() {
                    var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0, y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;
                    if (!this.options.ignoreBoundaries) {
                        if (x < this.minBoundaryX) {
                            if ("scale" == this.options.shrink) {
                                this.width = Math.max(this.indicatorWidth + x, 8);
                                this.indicatorStyle.width = this.width + "px";
                            }
                            x = this.minBoundaryX;
                        } else if (x > this.maxBoundaryX) if ("scale" == this.options.shrink) {
                            this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
                            this.indicatorStyle.width = this.width + "px";
                            x = this.maxPosX + this.indicatorWidth - this.width;
                        } else x = this.maxBoundaryX; else if ("scale" == this.options.shrink && this.width != this.indicatorWidth) {
                            this.width = this.indicatorWidth;
                            this.indicatorStyle.width = this.width + "px";
                        }
                        if (y < this.minBoundaryY) {
                            if ("scale" == this.options.shrink) {
                                this.height = Math.max(this.indicatorHeight + 3 * y, 8);
                                this.indicatorStyle.height = this.height + "px";
                            }
                            y = this.minBoundaryY;
                        } else if (y > this.maxBoundaryY) if ("scale" == this.options.shrink) {
                            this.height = Math.max(this.indicatorHeight - 3 * (y - this.maxPosY), 8);
                            this.indicatorStyle.height = this.height + "px";
                            y = this.maxPosY + this.indicatorHeight - this.height;
                        } else y = this.maxBoundaryY; else if ("scale" == this.options.shrink && this.height != this.indicatorHeight) {
                            this.height = this.indicatorHeight;
                            this.indicatorStyle.height = this.height + "px";
                        }
                    }
                    this.x = x;
                    this.y = y;
                    if (this.scroller.options.useTransform) this.indicatorStyle[utils.style.transform] = "translate(" + x + "px," + y + "px)" + this.scroller.translateZ; else {
                        this.indicatorStyle.left = x + "px";
                        this.indicatorStyle.top = y + "px";
                    }
                },
                _pos: function(x, y) {
                    if (x < 0) x = 0; else if (x > this.maxPosX) x = this.maxPosX;
                    if (y < 0) y = 0; else if (y > this.maxPosY) y = this.maxPosY;
                    x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
                    y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;
                    this.scroller.scrollTo(x, y);
                },
                fade: function(val, hold) {
                    if (hold && !this.visible) return;
                    clearTimeout(this.fadeTimeout);
                    this.fadeTimeout = null;
                    var time = val ? 250 : 500, delay = val ? 0 : 300;
                    val = val ? "1" : "0";
                    this.wrapperStyle[utils.style.transitionDuration] = time + "ms";
                    this.fadeTimeout = setTimeout(function(val) {
                        this.wrapperStyle.opacity = val;
                        this.visible = +val;
                    }.bind(this, val), delay);
                }
            };
            IScroll.utils = utils;
            if ("undefined" != typeof module && module.exports) module.exports = IScroll; else if ("function" == typeof define && define.amd) {
                define((function() {
                    return IScroll;
                }));
                if ("undefined" !== typeof window) window.IScroll = IScroll;
            } else window.IScroll = IScroll;
        })(window, document, Math);
        /*!
    * Scrolloverflow 2.0.7 module for fullPage.js >= 3
    * https://github.com/alvarotrigo/fullPage.js
    * @license MIT licensed
    *
    * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
    */        (function(window, document) {
            window.fp_scrolloverflow = function() {
                if (!window.IScroll) window.IScroll = module.exports;
                var SCROLLABLE = "fp-scrollable";
                var SCROLLABLE_SEL = "." + SCROLLABLE;
                var ACTIVE = "active";
                var ACTIVE_SEL = "." + ACTIVE;
                var SECTION = "fp-section";
                var SECTION_SEL = "." + SECTION;
                var SECTION_ACTIVE_SEL = SECTION_SEL + ACTIVE_SEL;
                var SLIDE = "fp-slide";
                var SLIDE_SEL = "." + SLIDE;
                var SLIDE_ACTIVE_SEL = SLIDE_SEL + ACTIVE_SEL;
                var SLIDES_WRAPPER = "fp-slides";
                var SLIDES_WRAPPER_SEL = "." + SLIDES_WRAPPER;
                var TABLE_CELL = "fp-tableCell";
                var TABLE_CELL_SEL = "." + TABLE_CELL;
                var RESPONSIVE = "fp-responsive";
                var AUTO_HEIGHT_RESPONSIVE = "fp-auto-height-responsive";
                IScroll.prototype.wheelOn = function() {
                    this.wrapper.addEventListener("wheel", this);
                    this.wrapper.addEventListener("mousewheel", this);
                    this.wrapper.addEventListener("DOMMouseScroll", this);
                };
                IScroll.prototype.wheelOff = function() {
                    this.wrapper.removeEventListener("wheel", this);
                    this.wrapper.removeEventListener("mousewheel", this);
                    this.wrapper.removeEventListener("DOMMouseScroll", this);
                };
                function getPaddings(element) {
                    var section = fp_utils.closest(element, SECTION_SEL);
                    if (null != section) return parseInt(getComputedStyle(section)["padding-bottom"]) + parseInt(getComputedStyle(section)["padding-top"]);
                    return 0;
                }
                function scrollBarHandler() {
                    var self = this;
                    self.options = null;
                    self.init = function(options, iscrollOptions) {
                        self.options = options;
                        self.iscrollOptions = iscrollOptions;
                        if ("complete" === document.readyState) {
                            createScrollBarForAll();
                            fullpage_api.shared.afterRenderActions();
                        }
                        window.addEventListener("load", (function() {
                            createScrollBarForAll();
                            fullpage_api.shared.afterRenderActions();
                        }));
                        return self;
                    };
                    function createScrollBarForAll() {
                        if (fp_utils.hasClass(document.body, RESPONSIVE)) forEachSectionAndSlide(removeScrollBar); else forEachSectionAndSlide(createScrollBar);
                    }
                    function createScrollBar(element) {
                        if (fp_utils.hasClass(element, "fp-noscroll")) return;
                        fp_utils.css(element, {
                            overflow: "hidden"
                        });
                        var scrollOverflowHandler = self.options.scrollOverflowHandler;
                        var wrap = scrollOverflowHandler.wrapContent();
                        var section = fp_utils.closest(element, SECTION_SEL);
                        var scrollable = scrollOverflowHandler.scrollable(element);
                        var contentHeight;
                        var paddings = getPaddings(section);
                        if (null != scrollable) contentHeight = scrollOverflowHandler.scrollHeight(element); else {
                            contentHeight = element.scrollHeight;
                            if (self.options.verticalCentered) contentHeight = $(TABLE_CELL_SEL, element)[0].scrollHeight;
                        }
                        var scrollHeight = fp_utils.getWindowHeight();
                        var contentHeightWidthPaddings = contentHeight + paddings;
                        var scrollHeightWidthoutPaddings = scrollHeight - paddings;
                        if (contentHeightWidthPaddings > scrollHeight) if (null != scrollable) scrollOverflowHandler.update(element, scrollHeightWidthoutPaddings); else {
                            if (self.options.verticalCentered) {
                                fp_utils.wrapInner($(TABLE_CELL_SEL, element)[0], wrap.scroller);
                                fp_utils.wrapInner($(TABLE_CELL_SEL, element)[0], wrap.scrollable);
                            } else {
                                fp_utils.wrapInner(element, wrap.scroller);
                                fp_utils.wrapInner(element, wrap.scrollable);
                            }
                            scrollOverflowHandler.create(element, scrollHeightWidthoutPaddings, self.iscrollOptions);
                        } else scrollOverflowHandler.remove(element);
                        fp_utils.css(element, {
                            overflow: ""
                        });
                    }
                    function forEachSectionAndSlide(callback) {
                        $(SECTION_SEL).forEach((function(section) {
                            var slides = $(SLIDE_SEL, section);
                            if (slides.length) slides.forEach((function(slide) {
                                callback(slide);
                            })); else callback(section);
                        }));
                    }
                    function removeScrollBar(element) {
                        var scrollOverflowHandler = self.options.scrollOverflowHandler;
                        if (fp_utils.hasClass(fp_utils.closest(element, SECTION_SEL), AUTO_HEIGHT_RESPONSIVE)) scrollOverflowHandler.remove(element);
                    }
                    self.createScrollBarForAll = createScrollBarForAll;
                    self.createScrollBar = createScrollBar;
                }
                var $ = null;
                var g_fullpageOptions = null;
                var iscrollHandler = {
                    refreshId: null,
                    iScrollInstances: [],
                    lastScrollY: null,
                    hasBeenInit: false,
                    iscrollOptions: {
                        scrollbars: true,
                        mouseWheel: true,
                        hideScrollbars: false,
                        fadeScrollbars: false,
                        disableMouse: true,
                        interactiveScrollbars: true
                    },
                    init: function(options) {
                        $ = fp_utils.$;
                        g_fullpageOptions = options;
                        var isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints;
                        iscrollHandler.iscrollOptions.click = isTouch;
                        iscrollHandler.hasBeenInit = true;
                        iscrollHandler.iscrollOptions = fp_utils.deepExtend(iscrollHandler.iscrollOptions, options.scrollOverflowOptions);
                        return (new scrollBarHandler).init(options, iscrollHandler.iscrollOptions);
                    },
                    toggleWheel: function(value) {
                        var scrollable = $(SCROLLABLE_SEL, $(SECTION_ACTIVE_SEL)[0]);
                        scrollable.forEach((function(item) {
                            var iScrollInstance = item.fp_iscrollInstance;
                            if (null != iScrollInstance) if (value) iScrollInstance.wheelOn(); else iScrollInstance.wheelOff();
                        }));
                    },
                    setIscroll: function(target, enable) {
                        if (!iscrollHandler.hasBeenInit || !target) return;
                        var scrollable = fp_utils.closest(target, SCROLLABLE_SEL) || $(SCROLLABLE_SEL, target) && $(SCROLLABLE_SEL, target)[0];
                        var action = enable ? "enable" : "disable";
                        if (scrollable) scrollable.fp_iscrollInstance[action]();
                    },
                    onLeave: function() {
                        iscrollHandler.toggleWheel(false);
                    },
                    beforeLeave: function() {
                        iscrollHandler.onLeave();
                    },
                    afterLoad: function() {
                        iscrollHandler.toggleWheel(true);
                    },
                    create: function(element, scrollHeight, iscrollOptions) {
                        var scrollable = $(SCROLLABLE_SEL, element);
                        scrollable.forEach((function(item) {
                            fp_utils.css(item, {
                                height: scrollHeight + "px"
                            });
                            var iScrollInstance = item.fp_iscrollInstance;
                            if (null != iScrollInstance) iscrollHandler.iScrollInstances.forEach((function(instance) {
                                instance.destroy();
                            }));
                            iScrollInstance = new IScroll(item, iscrollOptions);
                            iscrollHandler.iScrollInstances.push(iScrollInstance);
                            if (!fp_utils.hasClass(fp_utils.closest(element, SECTION_SEL), ACTIVE)) iScrollInstance.wheelOff();
                            item.fp_iscrollInstance = iScrollInstance;
                        }));
                    },
                    isScrolled: function(type, scrollable) {
                        var scroller = scrollable.fp_iscrollInstance;
                        if (!scroller) return true;
                        if ("top" === type) return scroller.y >= 0; else if ("bottom" === type) {
                            var isDoubleChecking = iscrollHandler.lastScrollY === scroller.y;
                            iscrollHandler.lastScrollY = scroller.y;
                            var offset = isDoubleChecking ? 1 : 0;
                            return offset + (0 - scroller.y) + scrollable.offsetHeight >= scrollable.scrollHeight;
                        }
                    },
                    scrollable: function(activeSection) {
                        if ($(SLIDES_WRAPPER_SEL, activeSection).length) return $(SCROLLABLE_SEL, $(SLIDE_ACTIVE_SEL, activeSection)[0])[0];
                        return $(SCROLLABLE_SEL, activeSection)[0];
                    },
                    scrollHeight: function(element) {
                        return $(".fp-scroller", $(SCROLLABLE_SEL, element)[0])[0].scrollHeight;
                    },
                    remove: function(element) {
                        if (null == element) return;
                        var scrollable = $(SCROLLABLE_SEL, element)[0];
                        if (null != scrollable) {
                            var iScrollInstance = scrollable.fp_iscrollInstance;
                            if (null != iScrollInstance) iScrollInstance.destroy();
                            scrollable.fp_iscrollInstance = null;
                            fp_utils.unwrap($(".fp-scroller", element)[0]);
                            fp_utils.unwrap($(SCROLLABLE_SEL, element)[0]);
                        }
                    },
                    update: function(element, scrollHeight) {
                        clearTimeout(iscrollHandler.refreshId);
                        iscrollHandler.refreshId = setTimeout((function() {
                            iscrollHandler.iScrollInstances.forEach((function(instance) {
                                instance.refresh();
                                fullpage_api.silentMoveTo(fp_utils.index($(SECTION_ACTIVE_SEL)[0]) + 1);
                            }));
                        }), 150);
                        fp_utils.css($(SCROLLABLE_SEL, element)[0], {
                            height: scrollHeight + "px"
                        });
                        if (g_fullpageOptions.verticalCentered) fp_utils.css($(SCROLLABLE_SEL, element)[0].parentNode, {
                            height: scrollHeight + "px"
                        });
                    },
                    wrapContent: function() {
                        var scrollable = document.createElement("div");
                        scrollable.className = SCROLLABLE;
                        var scroller = document.createElement("div");
                        scroller.className = "fp-scroller";
                        return {
                            scrollable,
                            scroller
                        };
                    }
                };
                return {
                    iscrollHandler
                };
            }();
        })(window, document);
        window.onload = function() {
            let preloader = document.getElementById("preloader");
            preloader.classList.add("hide-preloader");
            setTimeout((function() {
                preloader.classList.add("preloader-hidden");
            }), 950);
        };
        new fullpage("#fullpage", {
            autoScrolling: true,
            scrollHorizontally: true,
            scrollOverflow: true,
            sectionSelector: ".page-section",
            anchors: [ "main", "battle", "feature", "system", "reviews" ],
            menu: "#headernav"
        });
        window["FLS"] = true;
        isWebp();
        menuInit();
        spollers();
        pageNavigation();
        headerScroll();
    })();
})();