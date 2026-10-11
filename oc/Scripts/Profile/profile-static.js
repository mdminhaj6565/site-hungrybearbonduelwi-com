/* Hungry Bear profile page - static-site replacements for the old
   AMP/closeby server scripts (review loading, share widget, analytics). */
var isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
var GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/place/Hungry+Bear+Cafe+%26+Catering/@44.7393658,-88.4476176,17z/data=!3m1!4b1!4m2!3m1!1s0x88026b0ed5f36795:0xe5e7ac57b09d9b7d';
if (typeof window.ga !== 'function') { window.ga = function () {}; }
function checkAllSlideToggles() {}
function getSlideToggles() {}
function getLengthOfSlideToggles() { return 0; }
function GetReviewData() {}
function reloadReviewData() {}
/* The testimonial form needs the old server; send guests to Google reviews instead */
function WriteAReview(show) { if (show) { window.open(GOOGLE_REVIEWS_URL, '_blank', 'noopener'); } }
function validateReview() { WriteAReview(true); }
(function ($) {
    if (!$) return;
    $(function () {
        /* simple fading slideshow */
        var slides = $('#slideShow .slidesjs-slide');
        if (slides.length) {
            var i = 0; slides.removeAttr('style').eq(0).addClass('active');
            setInterval(function () {
                slides.eq(i).removeClass('active');
                i = (i + 1) % slides.length;
                slides.eq(i).addClass('active');
            }, 3500);
        }
        /* photo links open the image in a new tab (lightbox plugin removed) */
        $('a[data-lightbox]').attr({ target: '_blank', rel: 'noopener noreferrer' });
        $('#writeReviewBt').attr({ role: 'button', tabindex: '0' });
    });
})(window.jQuery);
