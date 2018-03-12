String.prototype.trunc = function(n, useWordBoundary){
   var toLong = this.length>n,
       s_ = toLong ? this.substr(0,n-1) : this;
   s_ = useWordBoundary && toLong ? s_.substr(0,s_.lastIndexOf(' ')) : s_;
   return  toLong ? s_ + '&hellip;' : s_;
};

(function($) {

var curr_media_viewed ="twitter";

// drop down links
var SCHLCorpHeader = {

    dd2_col1 : [
      '<li><a href="https://www.scholastic.com/teachers/home?esp=CORPHP/ib/////NAV/Teachers/Tab/TeachersHP////">Teachers Home</a></li>',
        '<li><a href="https://www.scholastic.com/teachers/lessons-and-ideas?esp=CORPHP/ib/////NAV/Teachers/Tab/LessonsIdeasLP////">Lessons and Ideas</a></li>',
        '<li><a href="https://www.scholastic.com/teachers/books-and-authors?esp=CORPHP/ib/////NAV/Teachers/Tab/BooksAuthorsLP////">Books and Authors</a></li>',
        '<li><a href="https://www.scholastic.com/teachers/top-teaching-blog?esp=CORPHP/ib/////NAV/Teachers/Tab/TopTeachingBlogLP////">Top Teaching Blog</a></li>',
        '<li><a href="https://www.scholastic.com/teachers/professional-development?esp=CORPHP/ib/////NAV/Teachers/Tab/TeachersToolKitLP////">Teacher’s Tool Kit</a></li>',
        '<li><a href="https://www.scholastic.com/teachers/student-activities?esp=CORPHP/ib/////NAV/Teachers/Tab/StudentActivitiesLP////">Student Activities</a></li>',
        '<li><a href="http://www.scholastic.com/browse/video.jsp?esp=CORPHP/ib/////NAV/Teachers/Tab/Video////">Video</a></li>'
    ],
    dd2_col2 : [
        '<li class="hdr">Quick Links</li>',
        '<li><a href="http://clubs.scholastic.com?esp=CORPHP/ib/////NAV/Teachers/QLinks/BookClubs////">Book Clubs</a></li>',
        '<li><a href="http://www.scholastic.com/storia-school">Storia eBooks</a></li>',
        '<li><a href="http://shop.scholastic.com/webapp/wcs/stores/servlet/StoreView?storeId=10751&catalogId=10051&langId=-1&esp=CORPHP/ib/////NAV/Teachers/QLinks/TSO////">Shop Teacher Store</a></li>',
        '<li><a href="http://www.scholastic.com/bookfairs/?esp=CORPHP/ib/////NAV/Teachers/QLinks/Bookfairs////">Book Fairs</a></li>',
        '<li><a href="https://teachables.scholastic.com/?esp=CORPHP/ib/////NAV/Teachers/QLinks/Teachables////">Teachables</a></li>',
        '<li><a href="http://www.scholastic.com/bookwizard/?esp=CORPHP/ib/////NAV/Teachers/QLinks/BookWizard////">Book Wizard</a></li>',
        '<li><a href="http://classroommagazines.scholastic.com/?esp=CORPHP/ib/////NAV/Teachers/QLinks/ClassMags////">Classroom Magazines</a></li>',
        '<li><a href="http://commoncore.scholastic.com/teachers?esp=CORPHP/ib/////NAV/Teachers/Tab/CommonCore////">Common Core</a></li>'
    ],    
    dd3_col1 : [
        '<li><a href="http://www.scholastic.com/parents/?esp=CORPHP/ib/////NAV/Parents/MAIN/ParentsHP////">Parents Home</a></li>',
        '<li><a href="http://www.scholastic.com/parents/books-and-reading?esp=CORPHP/ib/////NAV/Parents/Tab/BooksReadingLP////">Books &amp; Reading</a></li>',
        '<li><a href="http://www.scholastic.com/parents/life-and-learning?esp=CORPHP/ib/////NAV/Parents/Tab/LifeLearningLP////">Life &amp; Learning</a></li>',
        '<li><a href="http://www.scholastic.com/parents/school-success?esp=CORPHP/ib/////NAV/Parents/Tab/SchoolSuccessLP////">School Success</a></li>',
        '<li><a href="http://www.scholastic.com/parents/activities-and-printables?esp=CORPHP/ib/////NAV/Parents/Tab/ActivitiesPrintablesLP////">Activities &amp; Printables</a></li>',
        '<li><a href="http://www.scholastic.com/parents/blogs?esp=CORPHP/ib/////NAV/Parents/Tab/BlogsLP////">Blogs</a></li>',
        '<li><a href="http://www.scholastic.com/parents/resources/video/savvy-schooler-understanding-your-kids-learning-personality?esp=CORPHP/ib/////NAV/Parents/Tab/Video////">Video</a></li>'
    ],
    dd3_col2 : [
        '<li class="hdr">Quick Links</li>',
        '<li><a href="http://clubs.scholastic.com/?esp=CORPHP/ib/////NAV/Parents/QLinks/BookClubs////">Order from Book Clubs Flyer</a></li>',
        '<li><a href="http://www.scholastic.com/bookfairs/?esp=CORPHP/ib/////NAV/Parents/QLinks/BookFairs////">School Book Fairs</a></li>',
        '<li><a href="http://store.scholastic.com/webapp/wcs/stores/servlet/HomeView?storeId=10052&catalogId=10051&esp=CORPHP/ib/////NAV/Parents/QLinks/SSO////">Shop Scholastic Store</a></li>',
        '<li><a href="http://commoncore.scholastic.com/parents?esp=CORPHP/ib/////NAV/Parents/Tab/CommonCore////">Common Core</a></li>'
    ],    
    dd4_col1 : [
        '<li class="hdr"><a onclick="saveCookie(\'header\',\'bigKids\');" href="https://www.scholastic.com/kids/home/?esp=CORPHP/ib/////NAV/Kids/Tab/KidsAEMHP////">Scholastic Kids Home (Ages 8-12)</a></li>',
        '<li><a href="https://www.scholastic.com/kids/books/?esp=CORPHP/ib/////NAV/Kids/Tab/KidsAEMBookAuthors////">Books &amp; Authors</a></li>',
        '<li><a href="https://www.scholastic.com/kids/games/?esp=CORPHP/ib/////NAV/Kids/Tab/KidsAEMGames////">Games</a></li>',
        '<li><a href="https://www.scholastic.com/kids/videos/?esp=CORPHP/ib/////NAV/Kids/Tab/KidsAEMVideos////">Videos</a></li>',
        //'<li><a href="https://www.scholastic.com/kids/news/?esp=CORPHP/ib/////NAV/Kids/Tab/KidsAEMNews////">News</a></li>',
        '<li><a href="https://www.scholastic.com/kids/community/?esp=CORPHP/ib/////NAV/Kids/Tab/KidsAEMMessageBoards////">Message Boards</a></li>'
    ],
    dd4_col2 : [
        '<li class="hdr">Quick Links</li>',
        '<li><a href="http://harrypotter.scholastic.com/?esp=CORPHP/ib/////NAV/Kids/QLinks/KidsAEMHarryPotter////">Harry Potter</a></li>',
        '<li><a href="https://www.scholastic.com/kids/books/baby-sitters-club/?esp=CORPHP/ib/////NAV/Kids/QLinks/KidsAEMBabysitterClub////">Baby-sitters Club</a></li>',
        '<li><a href="https://www.scholastic.com/kids/books/planet-pilkey/?esp=CORPHP/ib/////NAV/Kids/QLinks/KidsPlanetPilkey////">Captain Underpants</a></li>',
        '<li><a href="https://www.scholastic.com/kids/books/geronimo-stilton/?esp=CORPHP/ib/////NAV/Kids/QLinks/KidsAEMGeronimo////">Geronimo Stilton</a></li>',
        '<li><a href="http://goosebumps.scholastic.com/?esp=CORPHP/ib/////NAV/Kids/QLinks/KidsAEMGoosebumps////">Goosebumps</a></li>',
    ],
    dd4_col3 : [
        '<li class="hdr"><a href="http://plus.scholastic.com?esp=CORPHP/ib/////NAV/Kids/Tab/MP////">Multiplatform (Ages 8-12)</a></li>'
    ],
    dd4_col4 : [
        '<li class="hdr"><a href="http://www.scholastic.com/parents/play/?esp=CORPHP/ib/////NAV/Kids/Tab/FPHP////">Family Playground Home (Ages 3-7)</a></li>'      
    ],
    dd4_col5 : [
        '<li class="hdr">Quick Links</li>',
        '<li><a href="http://www.scholastic.com/clifford/?esp=CORPHP/ib/////NAV/Kids/QLinks/FPClifford////">Clifford</a></li>',
        '<li><a href="http://www.scholastic.com/ispy/?esp=CORPHP/ib/////NAV/Kids/QLinks/FPISPY////">I SPY</a></li>',
        '<li><a href="http://www.scholastic.com/magicschoolbus/?esp=CORPHP/ib/////NAV/Kids/QLinks/FPMSB////">Magic School Bus</a></li>'
    ]
    // dd7_col1 : [
    //   '<li><a onclick="return RP_show();" href="https://my.scholastic.com/sps_my_account/accmgmt/GenericSignin.jsp">Create an Account</a></li>'
    // ],
    // dd7_col1_2 : [
    //   '<li><a href="http://store.scholastic.com//webapp/wcs/stores/servlet/LandingPageView?storeId=10052&catalogId=10051&jspStoreDir=SSOStore&pageName=shop-ebooks/shop-ebooks&esp=CORPHP/ib/////NAV/Storia/QLinks/NotABookClubsCustomer////">Shop for eBooks</a><ul class="dd-subnav"><li><a href="https://clubs2.scholastic.com/webapp/wcs/stores/servlet/LogonForm?esp=CORPHP/ib/////NAV/Storia/ShopforeBook/Customer////">I am a Reading Club customer</a></li><li><a href="https://clubs2.scholastic.com/webapp/wcs/stores/servlet/LogonForm?esp=CORPHP/ib/////NAV/Storia/Shopforebook/NonCustomer////">I am not a Reading Club customer</a></li></ul></li>',
    //   '<li><a href="http://store.scholastic.com//webapp/wcs/stores/servlet/LandingPageView?storeId=10052&catalogId=10051&jspStoreDir=SSOStore&pageName=storia/about">Learn About Storia</a></li>',
    //   '<li><a href="http://store.scholastic.com//webapp/wcs/stores/servlet/LandingPageView?storeId=10052&catalogId=10051&jspStoreDir=SSOStore&pageName=storia/home&esp=SSO/ib/2012/vanityURL/txtl/ads/storiasso//landing////">Download Storia Free</a></li>'
    // ]
  };

var strCorpHeader4oDDs = '<div id="corp-dd" class="schl-group"></div>';
  strCorpHeader4oDDs += '<div id="corp-dd1" class="corp-dd"></div>';

  strCorpHeader4oDDs += '<div id="corp-dd2" class="corp-dd">';
  strCorpHeader4oDDs += '<div class="content">';
  strCorpHeader4oDDs += '<ul class="col1">' + SCHLCorpHeader.dd2_col1.join('') + '</ul>';
  strCorpHeader4oDDs += '<ul class="col2 dd-quicklinks">' + SCHLCorpHeader.dd2_col2.join('') + '</ul>';
  strCorpHeader4oDDs += '</div>';
  strCorpHeader4oDDs += '</div>';

  strCorpHeader4oDDs += '<div id="corp-dd3" class="corp-dd">';
  strCorpHeader4oDDs += '<div class="content">';
  strCorpHeader4oDDs += '<ul class="col1">' + SCHLCorpHeader.dd3_col1.join('') + '</ul>';
  strCorpHeader4oDDs += '<ul class="col2 dd-quicklinks">' + SCHLCorpHeader.dd3_col2.join('') + '</ul>';
  strCorpHeader4oDDs += '</div>';
  strCorpHeader4oDDs += '</div>';

  strCorpHeader4oDDs += '<div id="corp-dd4" class="corp-dd">';
  strCorpHeader4oDDs += '<div class="content">';
  strCorpHeader4oDDs += '<ul class="col1">' + SCHLCorpHeader.dd4_col1.join('') + '</ul>';
  strCorpHeader4oDDs += '<ul class="col2 dd-quicklinks">' + SCHLCorpHeader.dd4_col2.join('') + '</ul>';
  strCorpHeader4oDDs += '<div class="fp">';
  strCorpHeader4oDDs += '<ul class="col1">' + SCHLCorpHeader.dd4_col3.join('') + '</ul>';
  strCorpHeader4oDDs += '</div>';
  strCorpHeader4oDDs += '<div class="fp">';
  strCorpHeader4oDDs += '<ul class="col1">' + SCHLCorpHeader.dd4_col4.join('') + '</ul>';
  strCorpHeader4oDDs += '<ul class="col2 dd-quicklinks">' + SCHLCorpHeader.dd4_col5.join('') + '</ul>';
  strCorpHeader4oDDs += '</div>';
  strCorpHeader4oDDs += '</div>';

  strCorpHeader4oDDs += '</div>';


  // strCorpHeader4oDDs += '<div id="corp-dd7" class="corp-dd">';
  // strCorpHeader4oDDs += '<div class="content">';
  // strCorpHeader4oDDs += '<ul class="col1">';
  // // if ( !personal ) { strCorpHeader4oDDs += SCHLCorpHeader.dd7_col1.join(''); }
  // strCorpHeader4oDDs += SCHLCorpHeader.dd7_col1_2.join('') + '</ul>';
  // strCorpHeader4oDDs += '</div>';
  // strCorpHeader4oDDs += '</div>';

  jQuery('#chome-nav').after(strCorpHeader4oDDs);
  //document.writeln(strCorpHeader4oDDs);

  jQuery('#chome-nav a').each(function(index){
    if ( index == 0 || index == 4 || index == 5 || index == 6 ) return;
    jQuery(this).hover(function(){
      var $that = jQuery(this),
      $offset = $that.offset(),
      $wrap_offset = jQuery('#chome-nav-wrapper').offset().left,
      left = 0;
      jQuery('#corp-dd').bind('mouseenter', function(){
        jQuery('#chome-nav a').removeClass('hov');
        $that.addClass('hov');
        jQuery(this).show().removeClass().addClass('dd'+(index+1));
      }).bind('mouseleave', function(){
        jQuery('#chome-nav a').removeClass('hov');
        jQuery(this).hide().removeClass();
      }).show().html(jQuery('#corp-dd'+(index+1)).html()).addClass('dd'+(index+1));
      if ( index < 5 ) left = $offset.left;
      else {
        //left = $that.offset().left + $that.width() - jQuery('#corp-dd').outerWidth();
        left = $wrap_offset + (965 - jQuery('#corp-dd').outerWidth());
      }
      jQuery('#corp-dd').css({
        'top' : $that.offset().top + 52,
        'left' : left
      }).find('.colTouts').css('height',jQuery('#corp-dd').height());
    }, function(){
      jQuery('#corp-dd').hide().removeClass();
    });


  });



  $('#corp-home a').hover(function(){

    var i = $(this).find('img'),
      n = $(this).attr('data-tout-hover');

    i.attr('src', 'images/' + n);
  }, function(){
    var i = $(this).find('img'),
      n = $(this).attr('data-tout');

    i.attr('src', 'images/' + n);
  });

  $("div.socialMedias p").mouseover(function(){
  var hoverEle = $(this).attr("class");
    $(this).parent().attr("class","socialMedias");
    $(this).parent().addClass(hoverEle+"Active");
    $(".blogpost").removeClass("dispblk").addClass("disphide");
    $("div."+hoverEle+"Blog").removeClass("disphide").addClass("dispblk");
    return;
  }).click(function(){
    var clikdIcon = $(this).attr("class");
    $(this).parent().attr("class","socialMedias");
    $(this).parent().addClass(clikdIcon+"Active");
    curr_media_viewed = clikdIcon;
    $("div."+clikdIcon+"Blog").removeClass("disphide").addClass("dispblk");
  })


  $("div.campaigns img").mouseover(function(){
    var imgSrc = $(this).attr("src");
    var newimgSrc = imgSrc.substr(0,imgSrc.indexOf(".png"))+"_rollover"+".png";
    $(this).attr("src",newimgSrc);
  }).mouseleave(function(){
    var imgSrc = $(this).attr("src");
    var newimgSrc = imgSrc.replace("_rollover","");
    $(this).attr("src",newimgSrc);
  });
  

  $("div#blogrssfeed p:last-child").addClass("last");


})(jQuery);

function oom(data) {
  var rss = '',
      rssMain = '';
  for ( var i = 0; i < 5; i++ ) {
    rss += '<p class="news news' + i + '"><a class="newsLink" href="' + data.nodes[i].node.path + '">' + data.nodes[i].node.title + '</a>' + data.nodes[i].node.body.trunc(140, true) + '<a class="read-more" href="' + data.nodes[i].node.path + '">Read More</a></p>';
  }
  rssMain = rss;
  rssMain += '<p class="news news' + i + '"><a class="newsLink" href="' + data.nodes[i].node.path + '">' + data.nodes[i].node.title + '</a>' + data.nodes[i].node.body.trunc(140, true) + '<a class="read-more" href="' + data.nodes[i].node.path + '">Read More</a></p>';

  jQuery('#blogrssfeed').html(rssMain)
  jQuery('#rssfeedright').html(rss);
  var maxh = 0;
  jQuery('#blogrssfeed').find('.news').each(function(i, entry){
    maxh = jQuery(entry).outerHeight() > maxh ? jQuery(entry).outerHeight() : maxh;
  });
  jQuery('#blogrssfeed').find('.news').css('min-height', maxh + "px");
}
