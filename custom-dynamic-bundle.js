jQuery(document).ready(function() {
  setTimeout(function() {
    // for yalda collection bundle
    var bundleImages = jQuery('.media-Yalda-Collection-Bundle .product-main-slide img');
    bundleImages.parents(".product-main-slide").css("z-index", "0");
    bundleImages.filter('[data-photoswipe-src*="yalda-pillowcase-set"]').parents(".product-main-slide").css("z-index", "3");
    bundleImages.filter('[data-photoswipe-src*="yalda-duvet-cover-set"]').parents(".product-main-slide").css("z-index", "2");
    bundleImages.filter('[data-photoswipe-src*="yalda-sheet-set"]').parents(".product-main-slide").css("z-index", "1");
    
    // for sateen ultra bundle
    var SateenbundleImages = jQuery('.media-Ultra-Sateen-Bundle .product-main-slide img');
    SateenbundleImages.parents(".product-main-slide").css("z-index", "0");
    SateenbundleImages.filter('[data-photoswipe-src*="ultra-sateen-pillowcase-set"]').parents(".product-main-slide").css("z-index", "3");
    SateenbundleImages.filter('[data-photoswipe-src*="ultra-sateen-duvet-cover-set"]').parents(".product-main-slide").css("z-index", "2");
    SateenbundleImages.filter('[data-photoswipe-src*="ultra-sateen-sheet-set"]').parents(".product-main-slide").css("z-index", "1");
  
  }, 1000);
});

document.addEventListener('rebuy.ready', function(event) {

  // for yalda collection bundle
  jQuery('div[data-product-handle="yalda-collection-bundle"]').on('click', '.rebuy-color-swatch label', function() {
    var product_color = jQuery(this).attr('title').toLowerCase().split(" ").join("-");
    var product_title = jQuery(this).closest(".rebuy-product-options").siblings(".rebuy-product-info").children(".rebuy-product-title").text().toLowerCase().split(" ").join("-");
    var matched = product_color + product_title;
    var unmatched = product_title;
    jQuery(".media-Yalda-Collection-Bundle .product-main-slide img[data-photoswipe-src*='" + unmatched + "']").parents(".product-main-slide").hide();
    jQuery(".media-Yalda-Collection-Bundle .product-main-slide img[data-photoswipe-src*='" + matched + "']").parents(".product-main-slide").show();
  });

  // for sateen ultra bundle
   jQuery('div[data-product-handle="ultra-sateen-bundle-1"]').on('click', '.rebuy-color-swatch label', function() {
    var product_color = jQuery(this).attr('title').toLowerCase().split(" ").join("-");
    var product_title = jQuery(this).closest(".rebuy-product-options").siblings(".rebuy-product-info").children(".rebuy-product-title").text().toLowerCase().split(" ").join("-");
    var matched = product_color + product_title;
    var unmatched = product_title;
    jQuery(".media-Ultra-Sateen-Bundle .product-main-slide img[data-photoswipe-src*='" + unmatched + "']").parents(".product-main-slide").hide();
    jQuery(".media-Ultra-Sateen-Bundle .product-main-slide img[data-photoswipe-src*='" + matched + "']").parents(".product-main-slide").show();
  });

  function disableVariantFunc() {
    jQuery(".rebuy-size-swatches .rebuy-size-swatch").each(function() {
      var sizeSwatch = jQuery(this).children("input:checked").siblings("label").text();

      jQuery(this).parents(".rebuy-size-swatches").siblings(".rebuy-color-swatches").children(".rebuy-color-swatch").each(function() {
        var colorSwatch = jQuery(this).children("label").attr("title");

        jQuery(this).parents(".rebuy-color-swatches").siblings(".rebuy-select").children("option").each(function() {
          var sizeOption = jQuery(this).text().split(" / ")[0];
          var colorOption = jQuery(this).text().split(" / ")[1];

          if (jQuery(".rebuy-select option").text().indexOf(sizeSwatch + ' / ' + colorSwatch) === -1) {
            jQuery(this).parents(".rebuy-select").siblings(".rebuy-color-swatches").children(".rebuy-color-swatch").find('label[title="' + colorSwatch + '"]').addClass("disabled-field");
          }

          if (sizeSwatch == sizeOption && colorSwatch == colorOption) {
            if (jQuery(this).hasClass("low-inventory")) {
              jQuery(this).parents(".rebuy-select").siblings(".rebuy-color-swatches").children(".rebuy-color-swatch").find('label[title="' + colorOption + '"]').addClass("disabled-field");
            }
          }
        })
      })
    })
  }

  disableVariantFunc();

  jQuery(document).on('change', '.rebuy-size-swatches .rebuy-size-swatch input[type="radio"]', function() {
    disableVariantFunc();
    jQuery(this).parents(".rebuy-size-swatches").siblings(".rebuy-color-swatches").children(".rebuy-color-swatch").each(function(index) {
      var colorSwatchChecked = jQuery(this).children("input:checked").siblings("label");
      if (colorSwatchChecked.hasClass("disabled-field")) {        
          jQuery(this).children("input:checked").prop("checked", false).end().nextAll().children("input:not(.disabled-field):first").change(function() {
            setTimeout(function() {
              disableVariantFunc();
            }, 1000);
          }).siblings("label").trigger("click");
      }
    });
  });

  jQuery(document).on('change', '.rebuy-color-swatches .rebuy-color-swatch input[type="radio"]', function() {
    disableVariantFunc();
  });
});
