"use strict";!function(e,s,n){e(function(){e(document).ready(function(){jQuery("#hamb-icon").on("click",function(){var e=jQuery(".mobile-nav-wrapper");e.hasClass("open")?(e.removeClass("open"),jQuery(this).removeClass("open")):(e.addClass("open"),jQuery(this).addClass("open"))}),jQuery("#menu-mobilni-meni .menu-item-has-children > a").on("click",function(e){e.preventDefault();var s=jQuery(this).siblings();s.hasClass("show")?(s.removeClass("show"),jQuery(this).removeClass("open")):(s.addClass("show"),jQuery(this).addClass("open"),jQuery(this).parent().siblings(".menu-item-has-children").find(".sub-menu").removeClass("show"),jQuery(this).parent().siblings(".menu-item-has-children").find("a").removeClass("open"))})})})}(jQuery);
//# sourceMappingURL=main.js.map