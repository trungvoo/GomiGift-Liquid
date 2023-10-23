$(function(){
    homeTabsToggle();
    homeContactButtonToggle();
});


function homeTabsToggle(){
    $(document).ready(function() {

        $('.main-section-category-tabs .main-section-category-tabs-link li:first').addClass("active");

        $('.main-section-category-tabs .main-section-category-tab-content .tab-content-items:first').addClass("active")

        $('.main-section-category-tabs .main-section-category-tabs-link a').on('click', function(e)  {
            var currentAttrValue = $(this).attr('href');
 
            // Show/Hide Tabs
            $('.main-section-category-tabs ' + currentAttrValue).fadeIn(400).siblings().hide();
            // Change/remove current tab to active
            $(this).parent('li').addClass('active').siblings().removeClass('active');
 
            e.preventDefault();
        });
    });
}

function homeContactButtonToggle(){
    $(".main-section-contact-wrap-items-mobile").on("click", function () {
        $(this).parent().toggleClass("active");
    });
}