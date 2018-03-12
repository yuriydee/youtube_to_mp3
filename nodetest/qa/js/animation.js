jQuery(function($){
	
	var theDirectory = "/home/special_images/" // url to directory of images used in animation
	
	var ifSkip = true // if ifSkip=false then animation occurs ifSkip=true then no animation

	if (document.cookie.indexOf("TAKEOVER_VIEWED") >= 0) {
		  ifSkip  = true;
	}
  
	
	// cookie setter
	function setCookie(c_name,value,exdays)
		{
		var exdate=new Date();
		exdate.setTime(exdate.getTime()+(exdays*24*60*60*1000));
		var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString() + ';path=/;Domain=.scholastic.com');
		document.cookie=c_name + "=" + c_value;
		}
		
		
	
	// here is the form code that is substituted later in the animation
	// see setUpButtons() for the mouseenter, mousedown, and mouseleave events for id = submitButton
	
	var formTag = '<form method="post" name="LogonForm" id="LogonForm" action="https://clubs2.scholastic.com/webapp/wcs/stores/servlet/UserLogon" onsubmit="return validateCoolForm();">'
	
	if (location.hostname != "www.scholastic.com") {
			 formTag = '<form method="post" name="LogonForm" id="LogonForm" action="https://clubs2qa1.scholastic.com/webapp/wcs/stores/servlet/UserLogon" onsubmit="return validateCoolForm();">'
	}
	
	var formCode = '<div class="log-in-errors"></div>' + formTag + '<input type="hidden" name="loginType" value="main" /><input type="hidden" name="classActivationCode" value="" /><input type="hidden" name="catalogId" value="10001" /><input type="hidden" name="langId" value="-1" /><input class="emailFieldClass" id="logonId" name="logonId" type="text"  size="10"  value="Email"  onfocus="if (this.value == \'Email\') {this.value = \'\';}" onblur="if (this.value == \'\') {this.value = \'Email\';}"/> <input class="passwordFieldClass"   type="text"  size="10"  value="Password"  onfocus="passWordFocus()" /> <input class="passwordFieldClassHidden" id="logonPassword" name="logonPassword" type="password"  size="10"  value=""   onblur="passWordBlur()" /><input type="image" src="'+theDirectory+'form_submit.png" id="submitButton" /></form>'
	
	function setUpOriginalBanner() {
		// this is called later in the animation sequence
		// this defines the functionality of the book clubs banner
		$("#baseBanner").mouseenter(function(e) {
            $("#baseBanner").attr('src',theDirectory+'end_banner2.png');
        });
		$("#baseBanner").mouseleave(function(e) {
            $("#baseBanner").attr('src',theDirectory+'end_banner.png');
        });
		$("#baseBanner").mousedown(function(e) {
            if (location.hostname == "www.scholastic.com") {
			 document.location.href='https://clubs.scholastic.com/webapp/wcs/stores/servlet/LogonForm'; // link to book clubs teacher URL
			 }
			else {
			 document.location.href='https://clubs2qa1.scholastic.com/webapp/wcs/stores/servlet/LogonForm';
             }
        });
	}
	
	function setUpButtons() {
		// this is called later in the animation sequence
		// this defines the functionality of the buttons in the popup
		$("#teachers_button").mouseenter(function(e) {
			$("#teachers_button").attr('src',theDirectory+'teachers_button2.gif');
		});
		$("#teachers_button").mouseleave(function(e) {
            $("#teachers_button").attr('src',theDirectory+'teachers_button1.gif');
		});
		$("#teachers_button").mousedown(function(e) {
			if (location.hostname == "www.scholastic.com") {
			 document.location.href='https://clubs.scholastic.com/webapp/wcs/stores/servlet/LogonForm?fileName=teacher-toolbox&storeId=11151'; // link to book clubs teacher URL
			 }
			else {
			 document.location.href='https://clubs2qa1.scholastic.com/webapp/wcs/stores/servlet/LogonForm?fileName=teacher-toolbox&storeId=11151';
             }			
		});
		//
		$("#parents_button").mouseenter(function(e) {
			$("#parents_button").attr('src',theDirectory+'parents_button2.gif');
		});
		$("#parents_button").mouseleave(function(e) {
			$("#parents_button").attr('src',theDirectory+'parents_button1.gif');
		});
		$("#parents_button").mousedown(function(e) {
			if (location.hostname == "www.scholastic.com") {
			 document.location.href='https://clubs.scholastic.com/webapp/wcs/stores/servlet/LogonForm?fileName=get-started&storeId=10601'; // link to book clubs teacher URL
			 }
			else {
			 document.location.href='https://clubs2qa1.scholastic.com/webapp/wcs/stores/servlet/LogonForm?fileName=get-started&storeId=10601';
             }
		});
		$("#registerButton").mouseenter(function(e) {
            $("#registerButton").css('opacity',.6);
        });
		$("#registerButton").mouseleave(function(e) {
            $("#registerButton").css('opacity',1);
        });
		$("#registerButton").mousedown(function(e) {
            if (location.hostname == "www.scholastic.com") {
			 document.location.href='https://clubs.scholastic.com/webapp/wcs/stores/servlet/LogonForm&storeId=11151'; // link to book clubs teacher URL
			 }
			else {
			 document.location.href='https://clubs2qa1.scholastic.com/webapp/wcs/stores/servlet/LogonForm&storeId=11151';
             }
        });
		$("#forgotButton").mouseenter(function(e) {
            $("#forgotButton").css('opacity',.6);
        });
		$("#forgotButton").mouseleave(function(e) {
            $("#forgotButton").css('opacity',1);
        });
		$("#forgotButton").mousedown(function(e) {
             if (location.hostname == "www.scholastic.com") {
			 document.location.href='https://my.scholastic.com/sps_my_account/pwmgmt/ForgotPassword.jsp?AppType=COOL&finalSuccessURL= https%3A%2F%2Fclubs.scholastic.com%2Fcool%2Flogin.jsp&cancelURL=https%3A%2F%2Fclubs.scholastic.com%2Fcool%2Flogin.jspe'; // link to book clubs teacher URL
			 }
			else {
			 document.location.href='https://spsqa2.scholastic.com/sps_my_account/pwmgmt/ForgotPassword.jsp?AppType=COOL&finalSuccessURL=%20https%3A%2F%2Fclubs2qa1.scholastic.com%2Fcool%2Flogin.jsp&cancelURL=https%3A%2F%2Fclubs2qa1.scholastic.com%2Fcool%2Flogin.jsp';
             }
        });
		$("#submitButton").mouseenter(function(e) {
            $("#submitButton").css('opacity',.6);
        });
		$("#submitButton").mouseleave(function(e) {
            $("#submitButton").css('opacity',1);
        });
		//$("#submitButton").mousedown(function(e) {
            //alert($('#logonId').val())
        //});
		
	}
	
	var theBanner = $('#specialBanner')
	var theParent = theBanner.parent().parent()
	if (ifSkip == false) {
	theBanner.hide();
	theParent.append('<img id="baseBanner" width="315" height="179" alt="Scholastic Book Clubs" src="'+theDirectory+'initial_banner.png" style="cursor:pointer" />');
	var theTimeout
	$.imgpreload([theDirectory+'bottom_text.png',theDirectory+'end_banner.png',theDirectory+'end_banner2.png',theDirectory+'forgot.png',theDirectory+'form_submit.png',theDirectory+'frame1.png',theDirectory+'frame2.png',theDirectory+'frame3.png',theDirectory+'frame4.png',theDirectory+'frame5.png',theDirectory+'frame6.png',theDirectory+'frame7.png',theDirectory+'frame8.png',theDirectory+'initial_banner.png',theDirectory+'kid1.png',theDirectory+'kid2.png',theDirectory+'kid3.png',theDirectory+'kid4.png',theDirectory+'kid5.png',theDirectory+'kid6.png',theDirectory+'kid7.png',theDirectory+'kid8.png',theDirectory+'kid9.png',theDirectory+'kid10.png',theDirectory+'kid11.png',theDirectory+'parents_button1.gif',theDirectory+'parents_button2.gif',theDirectory+'reading_club.gif',theDirectory+'register_button.png',theDirectory+'teachers_button1.gif',theDirectory+'teachers_button2.gif',theDirectory+'x_button.png'],
		{
   			each: function()
   		{
   		},
    		all: function()
   		{
			theTimeout = setTimeout(animationStart,500)
	 	}
	});
	function animationStart() {
		$("#slides").append('<div id="animationHolder" class="slideClass"></div>');
		$("#animationHolder").append('<img id="animationBackground" src="'+theDirectory+'/frame1.png" width="971" height="564" style="position:absolute; left:0px; top:0px; z-index:10" />');
		clearTimeout(theTimeout)
		theTimeout = setTimeout(animation2,500)
	}
	function animation2() {
		$("#animationBackground").attr('src',theDirectory+'frame2.png');
		clearTimeout(theTimeout)
		theTimeout = setTimeout(animation3,1500)
	}
	function animation3() {
		$("#animationBackground").attr('src',theDirectory+'frame3.png');
		clearTimeout(theTimeout)
		theTimeout = setTimeout(animation4,250)
	}
	function animation4() {
		$("#animationBackground").attr('src',theDirectory+'frame4.png');
		clearTimeout(theTimeout)
		theTimeout = setTimeout(animation5,250)
	}
	function animation5() {
		$("#animationBackground").attr('src',theDirectory+'frame5.png');
		clearTimeout(theTimeout)
		theTimeout = setTimeout(animation6,250)
	}
	function animation6() {
		$("#animationBackground").attr('src',theDirectory+'frame6.png');
		clearTimeout(theTimeout)
		theTimeout = setTimeout(animation7,250)
	}
	function animation7() {
		$("#animationBackground").attr('src',theDirectory+'frame7.png');
		clearTimeout(theTimeout)
		theTimeout = setTimeout(animation8,250)
	}
	function animation8() {
		$("#baseBanner").attr('src',theDirectory+'end_banner.png');
		setUpOriginalBanner()
		$("#animationBackground").attr('src',theDirectory+'frame8.png');
		$("#animationHolder").css({'background-color':'#FFF','height':565});
		$("#animationHolder").append('<img id="readingClub" src="'+theDirectory+'reading_club.gif" width="143" height="42" class="readingClubTextClass" /> <img id="teachers_button" src="'+theDirectory+'teachers_button1.gif" width="194" height="194" class="teachersButtonClass" /> <img id="parents_button" src="'+theDirectory+'parents_button1.gif" width="194" height="194" class="parentsButtonClass" /> <img id="theKid" src="'+theDirectory+'kid1.png" width="971" height="564" class="kidClass" /> <div id="formHolder"><div id="formHolderContent"><img id="bottomText" src="'+theDirectory+'bottom_text.png" width="971" height="29" /> '+formCode+' <img id="forgotButton" src="'+theDirectory+'forgot.png" width="85" height="15" /> <img id="registerButton" src="'+theDirectory+'register_button.png" width="131" height="29" /></div></div> <div id="bigButton"></div> <img id="closeButton" src="'+theDirectory+'x_button.png" width="62" height="58" />');
     if (!(document.cookie.indexOf("SPS_SESSION") >= 0)) {
		  $("#formHolderContent").show();
	  }
		$("#bigButton").css('opacity',0);
		$("#bigButton").hide();
		$("#closeButton").hide();
		$("#formHolder").css('visibility','hidden');
		$("#readingClub, #teachers_button, #parents_button, #theKid").css('opacity',0);
		$("#readingClub").animate({
			opacity: 1
			},{
			duration: 200,
			complete: function() {
				animation9();
			}
		})
		setUpButtons();
		setCookie('TAKEOVER_VIEWED','true','1');
	}
	function animation9() {
		$("#teachers_button, #parents_button").animate({
			opacity: 1
			},{
			duration: 200,
			complete: function() {
				animation10();
			}
		})
	}
	function animation10() {
		$("#theKid").animate({
			opacity: 1
			},{
			duration: 200,
			complete: function() {
				animation11();
			}
		})
	}
	function animation11() {
		$("#theKid").attr('src',theDirectory+'kid2.png');
		clearTimeout(theTimeout)
		theTimeout = setTimeout(animation12,250)
	}
	function animation12() {
		$("#theKid").attr('src',theDirectory+'kid3.png');
		clearTimeout(theTimeout)
		theTimeout = setTimeout(animation13,250)
	}
	function animation13() {
		$("#theKid").attr('src',theDirectory+'kid4.png');
		$("#formHolder").css('visibility','visible');
		clearTimeout(theTimeout)
		theTimeout = setTimeout(animation14,500)
	}
	function animation14() {
		$("#theKid").attr('src',theDirectory+'kid5.png');
		clearTimeout(theTimeout)
		theTimeout = setTimeout(animation15,250)
	}
	function animation15() {
		$("#theKid").attr('src',theDirectory+'kid6.png');
		clearTimeout(theTimeout)
		theTimeout = setTimeout(animation16,250)
	}
	function animation16() {
		$("#theKid").attr('src',theDirectory+'kid7.png');
		clearTimeout(theTimeout)
		theTimeout = setTimeout(animation17,250)
	}
	function animation17() {
		$("#theKid").attr('src',theDirectory+'kid8.png');
		clearTimeout(theTimeout)
		theTimeout = setTimeout(animation18,250)
	}
	function animation18() {
		$("#theKid").attr('src',theDirectory+'kid9.png');
		clearTimeout(theTimeout)
		theTimeout = setTimeout(animation19,2000)
	}
	function animation19() {
		$("#theKid").attr('src',theDirectory+'kid8.png');
		clearTimeout(theTimeout)
		theTimeout = setTimeout(animation20,250)
	}
	function animation20() {
		$("#theKid").attr('src',theDirectory+'kid7.png');
		clearTimeout(theTimeout)
		theTimeout = setTimeout(animation21,250)
	}
	function animation21() {
		$("#theKid").attr('src',theDirectory+'kid6.png');
		clearTimeout(theTimeout)
		theTimeout = setTimeout(animation22,250)
	}
	function animation22() {
		$("#theKid").attr('src',theDirectory+'kid5.png');
		clearTimeout(theTimeout)
		theTimeout = setTimeout(animation23,300)
	}
	function animation23() {
		$("#theKid").attr('src',theDirectory+'kid10.png');
		setUpBigButtonFunc();
	}
	// button functions
	function setUpBigButtonFunc() {
		$("#bigButton").show();
		$("#bigButton").mouseenter(function(e) {
			$("#theKid").attr('src',theDirectory+'kid11.png');
		});
		$("#bigButton").mouseleave(function(e) {
			$("#theKid").attr('src',theDirectory+'kid10.png');
		});
		$("#bigButton").mousedown(function(e) {
			 if (location.hostname == "www.scholastic.com") {
			 document.location.href='https://clubs.scholastic.com/webapp/wcs/stores/servlet/LogonForm'; // link to book clubs teacher URL
			 }
			else {
			 document.location.href='https://clubs2qa1.scholastic.com/webapp/wcs/stores/servlet/LogonForm';
             }
		});
		//
		$("#closeButton").show();
		$("#closeButton").mousedown(function(e) {
			$("#animationHolder").remove();
		});
	}
	} else {
		theBanner.hide();
		theParent.append('<img id="baseBanner" width="315" height="179" alt="Scholastic Book Clubs" src="'+theDirectory+'end_banner.png" style="cursor:pointer" />');
		setUpOriginalBanner()
	}
});

// form field interactions

function validateCoolForm(){
    //alert($("#logonPassword").val())
    if ($("#logonId").val() == '' || $("#logonId").val() == 'Email') {
        $(".log-in-errors").css("display","block");
		$(".log-in-errors").html("Please enter your Email Address.");
        return false;
    }
    if ($("#logonPassword").val() == '') {
        $(".log-in-errors").css("display","block");
		$(".log-in-errors").html("Please enter your Password.");
        return false;
    }
    return true;
}
function passWordFocus(){
    $('.passwordFieldClass').hide();
    $('.passwordFieldClassHidden').show();
    $('.passwordFieldClassHidden').focus();
}
function passWordBlur(){
    if($('.passwordFieldClassHidden').val() == '') {
        $('.passwordFieldClass').show();
        $('.passwordFieldClassHidden').hide();
    }
}



	
