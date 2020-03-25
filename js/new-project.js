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

    $(document).ready(function(){
        $('.btn1').click(function(){
            $(this).show();
        })
    })
})();