(function() {
"use strict";

    function changeTab(tab) {
        let i;
        let x = document.getElementsByClassName('single-tab');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(tab).style.display = "block";
    }

    // $(document).ready(function(){
    //
    //     $('.tabs_navigation').click(function(event) {
    //         event.preventDefault();
    //
    //         // Toggle active class on tab buttons
    //         $(this).parent().addClass("current");
    //         $(this).parent().siblings().removeClass("current");
    //
    //         // display only active tab content
    //         var activeTab = $(this).attr("p");
    //         $('.single-tab').not(activeTab).css("display","none");
    //         $(activeTab).fadeIn();
    //
    //     });
    //
    // });

})();