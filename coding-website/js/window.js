if (typeof k42 == "undefined") {k42 = false;}
if (k42 == true) {
  var k42ResizeFunc;
  function k42Resizing() {
    clearTimeout(k42ResizeFunc);
    k42ResizeFunc = setTimeout(browserResize, 500);
  }
  
  if (window.addEventListener) {              
    window.addEventListener("resize", k42Resizing);
  } else if (window.attachEvent) {                 
    window.attachEvent("resize", k42Resizing);
  }
} else {
  if (window.addEventListener) {              
    window.addEventListener("resize", browserResize);
  } else if (window.attachEvent) {                 
    window.attachEvent("onresize", browserResize);
}}
var xbeforeResize = window.innerWidth;
var ybeforeResize = window.innerWidth;
var zbeforeResize = window.innerWidth;
var sbeforeResize = window.innerWidth;
var abeforeResize = window.innerWidth;
var allbeforeResize = window.innerWidth;
function skyscraperResize() {
  if (k42 == true) {
    if (window.innerWidth < 975 + 17 && document.getElementById("adngin-sidebar_top-0")) {
      document.getElementById("adngin-sidebar_top-0").style.minHeight="0";
    }
    else if (window.innerWidth < 975 + 17 && document.getElementById("adngin-sidebar_top_courses-0")) {
      document.getElementById("adngin-sidebar_top_courses-0").style.minHeight="0";
    }
  } else {
    if (window.innerWidth < 975 + 17 && document.getElementById("div-gpt-ad-1422003450156-5")) {
      document.getElementById("div-gpt-ad-1422003450156-5").style.minHeight="0";
}}}
function browserResize() {
  if (allbeforeResize == window.innerWidth) { return false; }
  allbeforeResize = window.innerWidth;
    if (k42 == true) {
      if (document.getElementById("adngin-main_leaderboard-0")) {
        if (Number(cc_getStyleValue(document.getElementById("main"), "height").replace("px", "")) > 2200) {
          if (document.getElementById("adngin-mid_content-0")) {
            adngin.queue.push(function(){  adngin.cmd.startAuction(["main_leaderboard", "mid_content", "sidebar_top", "sidebar_sticky", "bottom_left", "bottom_right"]); });
          }
          else {
            adngin.queue.push(function(){  adngin.cmd.startAuction(["main_leaderboard", "sidebar_top", "sidebar_sticky", "bottom_left", "bottom_right"]); });
}}
        else {
          if (document.getElementById("adngin-mid_content-0")) {
            adngin.queue.push(function(){  adngin.cmd.startAuction(["main_leaderboard", "mid_content", "sidebar_top", "bottom_left", "bottom_right"]); });
          }
          else {
            adngin.queue.push(function(){  adngin.cmd.startAuction(["main_leaderboard", "sidebar_top", "bottom_left", "bottom_right"]); });}}
} else if (document.getElementById("adngin-main_leaderboard_courses-0")) {
        if (Number(cc_getStyleValue(document.getElementById("main"), "height").replace("px", "")) > 2200) {
          if (document.getElementById("adngin-mid_content_courses-0")) {
            adngin.queue.push(function(){  adngin.cmd.startAuction(["main_leaderboard_courses", "mid_content_courses", "sidebar_top_courses", "sidebar_sticky_courses", "bottom_left_courses", "bottom_right_courses"]); });
          }
          else {
            adngin.queue.push(function(){  adngin.cmd.startAuction(["main_leaderboard_courses", "sidebar_top_courses", "sidebar_sticky_courses", "bottom_left_courses", "bottom_right_courses"]); });
}}
        else {
          if (document.getElementById("adngin-mid_content_courses-0")) {
            adngin.queue.push(function(){  adngin.cmd.startAuction(["main_leaderboard_courses", "mid_content_courses", "sidebar_top_courses", "bottom_left_courses", "bottom_right_courses"]); });
          }
          else {
            adngin.queue.push(function(){  adngin.cmd.startAuction(["main_leaderboard_courses", "sidebar_top_courses", "bottom_left_courses", "bottom_right_courses"]); });
}}}
  } else {
    var afterResize = window.innerWidth;
    if ((xbeforeResize < (1482 + 14) && afterResize >= (1482 + 14)) || (xbeforeResize >= (1482 + 14) && afterResize < (1482 + 14)) ||
      (xbeforeResize < (732 + 14) && afterResize >= (732 + 14)) || (xbeforeResize >= (732 + 14) && afterResize < (732 + 14)) ||
      (xbeforeResize < (512 + 17) && afterResize >= (512 + 17)) ||(xbeforeResize >= (512 + 17) && afterResize < (512 + 17))) {
      xbeforeResize = afterResize;
      ;}
    if ((ybeforeResize < (1683 + 14) && afterResize >= (1683 + 14)) || (ybeforeResize >= (1683 + 14) && afterResize < (1683 + 14)) ||
      (ybeforeResize < (1108 + 14) && afterResize >= (1108 + 14)) || (ybeforeResize >= (1108 + 14) && afterResize < (1108 + 14)) ||
      (ybeforeResize < (983 + 17) && afterResize >= (983 + 17)) || (ybeforeResize >= (983 + 17) && afterResize < (983 + 17))) {
      ybeforeResize = afterResize;
        skyscraperResize()
      googletag.cmd.push(function() {
        googletag.pubads().refresh([gptAdSlots[1]]);
});}
    if ((zbeforeResize < (1272 + 14) && afterResize >= (1272 + 14)) || (zbeforeResize >= (1272 + 14) && afterResize < (1272 + 14))) {
      zbeforeResize = afterResize;
      googletag.cmd.push(function() {
        googletag.pubads().refresh([gptAdSlots[2], gptAdSlots[3]]);
});}
    if ((sbeforeResize < (1683 + 14) && afterResize >= (1683 + 14)) || (sbeforeResize >= (1683 + 14) && afterResize < (1683 + 14)) ||
      (sbeforeResize < (1108 + 14) && afterResize >= (1108 + 14)) || (sbeforeResize >= (1108 + 14) && afterResize < (1108 + 14)) ||
      (sbeforeResize < (983 + 17) && afterResize >= (983 + 17)) || (sbeforeResize >= (983 + 17) && afterResize < (983 + 17))) {
      sbeforeResize = afterResize;
      googletag.cmd.push(function() {
        googletag.pubads().refresh([gptAdSlots[4]]);
});}
    if ((abeforeResize < (1472 + 14) && afterResize >= (1472 + 14)) || (abeforeResize >= (1472 + 14) && afterResize < (1472 + 14)) ||
      (abeforeResize < (1167 + 14) && afterResize >= (1167 + 14)) || (abeforeResize >= (1167 + 14) && afterResize < (1167 + 14)) ||
      (abeforeResize < (1025 + 14) && afterResize >= (1025 + 14)) || (abeforeResize >= (1025 + 14) && afterResize < (1025 + 14)) ||
      (abeforeResize < (782 + 14) && afterResize >= (782 + 14)) || (abeforeResize >= (782 + 14) && afterResize < (782 + 14)) ||
      (abeforeResize < (522 + 17) && afterResize >= (522 + 17)) || (abeforeResize >= (522 + 17) && afterResize < (522 + 17))) {
      abeforeResize = afterResize;
      googletag.cmd.push(function() {
        googletag.pubads().refresh([gptAdSlots[5]]);
      });}}}
skyscraperResize();


function fix_sidemenu() {
  var w, top;
  w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  top = scrolltop()    



    if (top == 0) {
      document.getElementById("sidenav").style.top = "118px";      
    }
    if (top > 0 && top < 73) {
      document.getElementById("sidenav").style.top = (118 - top) + "px";      
    }
    if (top > 73) {
      document.getElementById("sidenav").style.top = "44px";
      if (w > 992) {document.getElementById("leftmenuinner").style.paddingTop = "44px";}
      document.getElementById("belowtopnav").style.paddingTop = "44px";    
      document.getElementById("topnav").style.position = "fixed";
      document.getElementById("topnav").style.top = "0";


    } else {
      if (w > 992) {
        document.getElementById("leftmenuinner").style.paddingTop = (118 - top) + "px";
      } else { //ELSEN ER NY
        document.getElementById("leftmenuinner").style.paddingTop = 0;
      }
      document.getElementById("belowtopnav").style.paddingTop = "0";
      document.getElementById("topnav").style.position = "relative";
 
    }}

function isIntoView(x, y) {
  var a = x.scrollTop;
  var b = a + window.innerHeight;
  var ytop = y.offsetTop;
  var ybottom = ytop + 140;
  return ((ybottom <= b) && (ytop >= a));
}
function scrolltop() {
  var top = 0;
  if (typeof(window.pageYOffset) == "number") {
    top = window.pageYOffset;
  } else if (document.body && document.body.scrollTop) {
    top = document.body.scrollTop;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    top = document.documentElement.scrollTop;
  }
  return top;
}




function open_xs_menu(x) {
  if (document.getElementById("sectionxs_" + x).innerHTML == "") {
    document.getElementById("sectionxs_" + x).innerHTML = document.getElementById("nav_" + x).innerHTML;
  } else {
    document.getElementById("sectionxs_" + x).innerHTML = "";
  }}

function cc_open_nav(x) {
  var contentNode, h, menuHeight;
  if (document.getElementById("nav_" + x).style.display == "block") {
    cc_close_nav(x);
  } else {
    cc_close_all_nav();
    document.getElementById("nav_" + x).style.display = "block";    
    if (document.getElementById("navbtn_" + x)) {
      document.getElementById("navbtn_" + x).getElementsByTagName("i")[0].style.display = "none";
      document.getElementById("navbtn_" + x).getElementsByTagName("i")[1].style.display = "inline";        
     document.getElementById("navbtn_" + x).classList.add("mystyle");
     //document.getElementById("nav_" + x).getElementsByTagName("h3")[0].focus();
}}
  h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  menuHeight = document.getElementById("nav_" + x).offsetHeight;
  if (menuHeight > h) {
    document.getElementById("nav_" + x).style.height = (h - 106) + "px";
  }
}
function cc_close_nav(x) {
  document.getElementById("nav_" + x).style.display = "none";
  if (document.getElementById("navbtn_" + x)) {
    document.getElementById("navbtn_" + x).getElementsByTagName("i")[0].style.display = "inline";
    document.getElementById("navbtn_" + x).getElementsByTagName("i")[1].style.display = "none";        
    document.getElementById("nav_" + x).style.height = "";
    document.getElementById("navbtn_" + x).classList.remove("mystyle");
  }}
function cc_close_all_nav() {
  cc_close_all_topnav();
  close_menu();
}

(function () {
  var x, y, i, a, aa, b, c, cc, d, dd, m;
  m = (document.getElementById("leftmenu") || document.getElementById("sidenav"));
  x = m.getElementsByTagName("A");
  dd = document.location.href;
  if (dd.indexOf("quiztest") > -1) {
    d = dd;
  } else {
    d = dd.split('?')[0]; // added split to show active regardless of parameters
  }
  for (i = 0; i < x.length; i++) {
    if (dd.indexOf("quiztest") > -1) {
      aa = x[i].href;
      //console.log("Haystack: " + d);
      //console.log("Needle: " + aa);
    } else {
      aa = x[i].href.split('?')[0];  // added split to show active regardless of parameters
    }
    if (d.indexOf(aa) >= 0) {
      x[i].className = "active";
      y = x[i].nextElementSibling;
      if (y && (y.className.indexOf("ref_overview") > -1 || y.className.indexOf("tut_overview") > -1)) {
        y.style.display = "block";
        if (y.className.indexOf("tut_overview") > -1) {
          x[i].className = "active_overview";
          y.getElementsByTagName("a")[0].className = "active";
        }
        if (x[i].addEventListener) {
          cc = true;
          x[i].addEventListener("click", function () {
            if (cc == true) {
              y.style.display = "none";
              event.preventDefault();
              cc = false;
            } else {
              y.style.display = "block";
              cc = true;
              event.preventDefault();
            }});}
      } else if (x[i].parentElement.className.indexOf("ref_overview") > -1) {
        x[i].parentElement.style.display = "block";
        x[i].parentElement.previousElementSibling.className = "activesub";
      } else if (x[i].parentElement.className.indexOf("tut_overview") > -1) {
        x[i].parentElement.style.display = "block";
        x[i].parentElement.previousElementSibling.className = "active_overview";
      }
      break;
    } else if (d.indexOf("/tags/att_") > -1) {
       c = d.substring(d.indexOf("/tags/att_") + 10, d.lastIndexOf("_"));
       if (x[i].href == d.substr(0, d.indexOf("/tags/")) + "/tags/tag_" + c + ".asp") {
         x[i].className = "active";
       }
    } else if (d.indexOf("/howto/default_page") > -1) {
       if (x[i].href.indexOf("default.asp") > -1) {
         x[i].className = "active";
       }}}
  sidemenuitemintoview()
  x = document.getElementById("topnav").getElementsByTagName("A");
  for (i = 0; i < x.length; i++) {
    a = document.location.pathname;
    b = x[i].pathname;
    if ((x[i].parentNode.tagName == "LI" || x[i].parentNode.className.indexOf("cc-bar") > -1) && a.substr(0, a.indexOf("/",1)) ==  b.substr(0, b.indexOf("/",1))) {
      x[i].className += " active";
    }
  }
  if (window.addEventListener) { 
    document.getElementById("main").addEventListener("click", cc_close_all_nav, true);
    m.addEventListener("click", cc_close_all_topnav, true);
    document.getElementById("right").addEventListener("click", cc_close_all_nav, true);
    document.getElementById("main").addEventListener("wheel", cc_close_all_nav, true);
    document.getElementById("main").addEventListener("touchstart", cc_close_all_nav, true);
  } else if (window.attachEvent) {         
    document.getElementById("main").attachEvent("onclick", cc_close_all_nav);
    m.attachEvent("onclick", cc_close_all_topnav);
    document.getElementById("right").attachEvent("onclick", cc_close_all_nav);
  }
  if ('ontouchstart' in window || 'onmsgesturechange' in window) {
    document.getElementById("leftmenuinnerinner").style.overflowY = "scroll";
  }
})();
