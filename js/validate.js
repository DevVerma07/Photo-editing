

// PHP Validation script
var formUrl = "php/validate.php?value=";

// Your form's id
var formid = "contactForm";
			
			
			
var formError =  [];

// Launch the loadForm function while page is loading
window.onload = loadForm;

function loadForm() {

if(document.getElementById(formid)!=null) 
{
	var form = document.getElementById(formid);
	form.reset();
	if (document.getElementsByTagName) {
		var formInput = document.getElementsByTagName("input");
		for (var formCount=0; formCount<formInput.length; formCount++) {
			formInput[formCount].onkeyup = function() { return validation(this); }
			formInput[formCount].onblur = function() { return validation(this); }
		}
	}
	
	if (document.getElementsByTagName) {
		var formText = document.getElementsByTagName("textarea");
		for (var formCount=0; formCount<formText.length; formCount++) {
			formText[formCount].onkeyup = function() { return validation(this); }
			formText[formCount].onblur = function() { return validation(this); }
		}
	}
	
	var formButt = document.getElementById("submit");
	if(formButt) formButt.onclick = function() { sendEmail();  }
}
}
http = postHTTPObject();

function postHTTPObject() {

  var xmlhttp;
 
  /*@cc_on
 
  @if (@_jscript_version >= 5)
    try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }catch(e){
      try{
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }catch(E){
      xmlhttp = false;
    }
  }
  @else
    xmlhttp = false;
  @end @*/
 
  if(!xmlhttp && typeof XMLHttpRequest != 'undefined'){
    try {
      xmlhttp = new XMLHttpRequest();
    }catch(e){
      xmlhttp = false;
    }
  }
 
  return xmlhttp;

}

// The main validation function
function validation(formInput) {

	formId = formInput.id;
	formValue = formInput.value;

	getValue = formInput.className;
	if(getValue.indexOf(",") == -1 ) {
		formType = getValue;
		formRequired = "";
	} else {
		formRules = formInput.className.split(",");
		formRequired = formRules[0];
		formType = formRules[1];
	}

	var url = formUrl + (formValue) + "&required=" + (formRequired) + "&type=" + (formType);

	http.open("GET", url, true);

	http.onreadystatechange = handleHttpResponse;
	http.send(null);

}

function sendEmail()
{
	//alert('send');
	http.open("POST", "php/validate.php");
	http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    http.send("mail=1" + "&name=" + (document.getElementById("name").value) + "&email=" + (document.getElementById("email").value)+ "&message=" + (document.getElementById("message").value));

	http.onreadystatechange = handleHttpResponse;
}

function handleHttpResponse() {

	if(http.readyState == 4) {

		if(http.responseText == "false") {

			var formInput = document.getElementById(formId);

			document[formId].src = "img/no.png";
			formInput.style.border = "1px solid #d12f19";
			formError.push(formId);
		}
		else if(http.responseText == "true") {

			var formInput = document.getElementById(formId);

			document[formId].src = "img/yes.png";
			formInput.style.border = "1px solid #338800";
		}
		else if(http.responseText == "none") {

			var formInput = document.getElementById(formId);

			document[formId].src = "img/blank.png";
			formInput.style.border = "1px solid #aaa";
			formInput.style.background = "#ffffff";
		}
		else if(http.responseText) {
			
			document.getElementById("comment").innerHTML= http.responseText;
			if( ( http.responseText ).indexOf( 'class="success' ) > -1 ) {
				document.getElementById("contactForm").reset();
				$('input:not([type=submit]):not([type=button]):not([type=hidden])').each(
					function()
					{
						$( this ).css( "border" , "1px solid black" );
						var f_name = $(this).attr("id");
						document[f_name].src =  "img/blank.png";
					}
				);
				$('textarea').each(
					function()
					{
						$( this ).css( "border" , "1px solid black" );
						var f_name = $(this).attr("id");
						document[f_name].src = "img/blank.png";
					}
				);
			}
			//reload shadows
			var settings = {
		//showArrows: true,
		hijackInternalLinks: true
		}
			var pane = $('.scroll-pane')
	pane.jScrollPane(settings);
	var api = pane.data('jsp');
				$('input:not([type=submit]):not([type=button])').each(
				function(index)
				{
					var position = $(this).position();
					//$(this).after('<img src="img/shadow.png" class="shadow" />');
					$(this).next(".shadow").css("width",$(this).innerWidth());
					$(this).next(".shadow").css("top",position.top + $(this).innerHeight() -7 );
					$(this).next(".shadow").css("left",position.left);
				}
			);

				$('textarea').each(
				function(index)
				{
					var position = $(this).position();
					//$(this).after('<img src="img/shadow.png" class="shadow" />');
					$(this).next(".shadow").css("width",$(this).innerWidth());
					$(this).next(".shadow").css("top",position.top + $(this).innerHeight() -7 );
					$(this).next(".shadow").css("left",position.left);
				}
			);
				api.reinitialise(); 
				$('.page-footer').children(".shadow-reverse").css("top", $('.page_block').innerHeight() -$('.shadow-reverse').innerHeight()+ 'px'); 
		}
	}
}

