var pixgrid=function(){function a(a){var b=(window.innerWidth-a.width)/2,c=(window.innerHeight-a.height)/2;return a.style.top=c+"px",a.style.left=b+"px",a}for(var b=document.querySelectorAll(".pixgrid"),c=0;c<b.length;c++)b[c].addEventListener("click",function(b){if("IMG"===b.target.tagName){var c=document.createElement("div");c.id="overlay",document.body.appendChild(c),c.style.position="absolute",c.style.top=0,c.style.backgroundColor="rgba(0,0,0,0.7)",c.style.cursor="pointer",c.style.width=window.innerWidth+"px",c.style.height=window.innerHeight+"px",c.style.top=window.pageYOffset+"px",c.style.left=window.pageXOffset+"px";var d=b.target.src,e=document.createElement("img");e.id="largeImage",e.src=d.substr(0,d.length-7)+".jpg",e.style.display="block",e.style.position="absolute",e.addEventListener("load",function(){this.height>window.innerHeight&&(this.ratio=window.innerHeight/this.height,this.height=this.height*this.ratio,this.width=this.width*this.ratio),this.width>window.innerWidth&&(this.ratio=window.innerWidth/this.width,this.height=this.height*this.ratio,this.width=this.width*this.ratio),a(this),c.appendChild(e)}),e.addEventListener("click",function(){c&&(window.removeEventListener("resize",window,!1),window.removeEventListener("scroll",window,!1),c.parentNode.removeChild(c))},!1),window.addEventListener("scroll",function(){c&&(c.style.top=window.pageYOffset+"px",c.style.left=window.pageXOffset+"px")},!1),window.addEventListener("resize",function(){c&&(c.style.width=window.innerWidth+"px",c.style.height=window.innerHeight+"px",c.style.top=window.pageYOffset+"px",c.style.left=window.pageXOffset+"px",a(e))},!1)}},!1)}(),rclick=function(){for(var a=document.querySelectorAll(".rclick"),b=0;b<a.length;b++)a[b].addEventListener("contextmenu",function(a){if(a.preventDefault(),"IMG"===a.target.tagName&&null==document.querySelector(".preview")){var b=document.createElement("div");b.className="preview",a.target.parentNode.appendChild(b);var c=document.createElement("img"),d=a.target.src;c.src=d.substr(0,d.length-7)+".jpg",b.style.left=a.offsetX+90+"px",b.style.top=a.offsetY+-90+"px",b.appendChild(c),a.target.addEventListener("mouseout",function b(c){var d=c.target.parentNode.querySelector("div.preview");d.parentNode.removeChild(d),a.target.removeEventListener("mouseout",b,!1)},!1),a.target.addEventListener("mousemove",function(a){b.style.left=a.offsetX+90+"px",b.style.top=a.offsetY+-90+"px"})}},!1)}();$(function(){$(".tagline").append("The most creative minds in Art"),$.getJSON("js/data.json",function(a){var b=$("#speakerstpl").html(),c=Mustache.to_html(b,a);$("#speakers").html(c)})});