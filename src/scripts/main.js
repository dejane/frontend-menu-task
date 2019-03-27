(function ($, root, undefined) {

	$(function () {

		'use strict';

		$(document).ready(function() {

	     /*
       open mobile nav on click
       */
        jQuery('#hamb-icon').on('click', function(){

            var menu = jQuery('.mobile-nav-wrapper');

            if( menu.hasClass('open') ) {
              menu.removeClass('open');
              jQuery(this).removeClass('open');
            } else {
              menu.addClass('open');
              jQuery(this).addClass('open');
            }

        });

        /*
        * mobile nav
        */
        var mobileNavLink = jQuery('#menu-mobilni-meni .menu-item-has-children > a');

        mobileNavLink.on('click', function(e) {
          e.preventDefault();
          var submenu = jQuery(this).siblings();
          if(submenu.hasClass('show')) {
            submenu.removeClass('show');
            jQuery(this).removeClass('open');
          } else {
            submenu.addClass('show');
            jQuery(this).addClass('open');
            jQuery(this).parent().siblings('.menu-item-has-children').find('.sub-menu').removeClass('show');
            jQuery(this).parent().siblings('.menu-item-has-children').find('a').removeClass('open');
          }
         })

		});

	});

})(jQuery, this);



