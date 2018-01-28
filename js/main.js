
//https://stackoverflow.com/questions/10063380/javascript-smooth-scroll-without-the-use-of-jquery
//https://www.w3schools.com/howto/howto_js_slideshow.asp

//======================MODAL===========================
var mdWind = document.getElementById("myModal");
var but = document.getElementById("myBtn");
var inline = document.getElementById("close")[0];

but.onlick = function() {
	mdWind.style.display = "block";
}

inline.onclick = function(){
	mdWind.style.display = "none";
}

window.onclick = function(event){
	if(event.target == mdWind){
		mdWind.style.display = "none";
	}
}
//=========================================
var speed = 500;
var moving_frequency = 15; // Affects performance !
var links = document.getElementsByTagName('a');
var href;
for(var i=0; i<links.length; i++)
{
    href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
    if(href !== null && href.length > 1 && href.substr(0, 1) == '#')
    {
        links[i].onclick = function()
        {
            var element;
            var href = this.attributes.href.nodeValue.toString();
            if(element = document.getElementById(href.substr(1)))
            {
                var hop_count = speed/moving_frequency
                var getScrollTopDocumentAtBegin = getScrollTopDocument();
                var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

                for(var i = 1; i <= hop_count; i++)
                {
                    (function()
                    {
                        var hop_top_position = gap*i;
                        setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*i);
                    })();
                }
            }

            return false;
        };
    }
}

var getScrollTopElement =  function (e)
{
    var top = 0;

    while (e.offsetParent != undefined && e.offsetParent != null)
    {
        top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
        e = e.offsetParent;
    }

    return top;
};

var getScrollTopDocument = function()
{
    return document.documentElement.scrollTop + document.body.scrollTop;
};
//============================================
var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 10000); // Change image every 2 seconds
}
