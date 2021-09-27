var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile","value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Extra","value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet","value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Extra","value":1365,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1620,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"direction":"min","is_enabled":false}}},"version":"3.2.5","is_static":false,"experimentalFeatures":[],"urls":{"assets":"https:\/\/smartdemowp.com\/solustrid\/wp-content\/plugins\/elementor\/assets\/"},"settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":848,"title":"Home%20Page%202%20%E2%80%93%20Solustrid","excerpt":"","featuredImage":false}};


   if(typeof revslider_showDoubleJqueryError === "undefined") {
    function revslider_showDoubleJqueryError(sliderID) {
      var err = "<div class='rs_error_message_box'>";
      err += "<div class='rs_error_message_oops'>Oops...</div>";
      err += "<div class='rs_error_message_content'>";
      err += "You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>";
      err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on";
      err += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it";
      err += "</div>";
    err += "</div>";
      var slider = document.getElementById(sliderID); slider.innerHTML = err; slider.style.display = "block";
    }
  }
