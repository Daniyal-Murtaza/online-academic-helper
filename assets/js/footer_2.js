function getParameterByName(e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.href);
    return null == t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
}
document.cookie.indexOf("ps_trk=1") > -1 && loadRemoteScript("scripts.demandbase.com/LrYAV7hU.min.js", "text/javascript", 1, "demandbase_js_secondary_libs", function() {
    window.dbReady = !0;
    var e = new CustomEvent("PS.dbReady",{
        bubbles: !0,
        cancelable: !1
    });
    document.querySelector("body").dispatchEvent(e)
}),
jQuery(document).ready(function() {
    jQuery("#pilot_").parent().attr("id", "ps_pilot")
}),
jQuery(document).ready(function() {
    jQuery('a[href="#ps_pilot_modal"]').removeClass("fancybox"),
    jQuery('a[href="#ps_pilot_modal"]').unbind("click.fb-start"),
    jQuery(document).on({
        click: function(e) {
            jQuery("#ps_pilot").show(),
            jQuery("body").css("overflow", "hidden"),
            window.setTimeout(function() {
                jQuery("#ps_pilot").addClass("ps_pilot_active")
            }, 50)
        }
    }, 'a[href="#ps_pilot_modal"]')
}),
jQuery(document).on({
    click: function(e) {
        e.preventDefault(),
        jQuery("#ps_pilot").removeClass("ps_pilot_active"),
        jQuery("body").css("overflow", "auto"),
        window.setTimeout(function() {
            jQuery("#ps_pilot").hide()
        }, 700)
    }
}, ".ps_pilot_close_btn"),
$(".header .header_browse .header_nav_submenus a").filter(function() {
    return this.href == location.href.replace(/#.*/, "")
}).closest("a").addClass("active"),
$(".header .header_browse .header_nav_submenus a").filter(function() {
    return this.href == location.href.replace(/#.*/, "")
}).closest("a").addClass("active"),
("" == document.referrer || document.referrer.indexOf("google.com") > -1) && jQuery(".learn-hero").append("<style>.learn-hero { background-image: url('<?php echo $basesurl;?>images/gtm-hero-learn.jpg'); } .learn-hero .column-control--super-wide .large-7 { float:right; } .learn-hero .column-control--super-wide .large-5 { float:left; }</style>"),
jQuery(document).on({
    click: function(e) {
        e.preventDefault(),
        jQuery(".fancybox-overlay").trigger("click")
    }
}, ".ps_pilot_close_btn"),
document.getElementsByTagName("body")[0].addEventListener("ps.mktoFormSuccess", function(e) {
    "2183" == e.detail.formID && (document.getElementsByClassName("contact-sales")[0].style.backgroundColor = "#E80A89",
    document.getElementById("contact_sales_h1").style.display = "none")
}),
jQuery(":radio[id=business]").change(function() {
    jQuery(".twitter-feed").css("height", 0),
    jQuery(".questions-contact").show(),
    jQuery(".gift_of_ps").hide()
}),
jQuery(":radio[id=individual]").change(function() {
    jQuery(".twitter-feed").css("height", "auto"),
    jQuery(".questions-contact").hide(),
    jQuery(".gift_of_ps").show()
});
