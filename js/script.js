// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


gsap.set("body", {autoAlpha:1}) //remove fouc
const split = new SplitText("h1", {type:"chars"})

const tl = gsap.timeline({repeat:10, id:"Made By Carl"})
tl.from(split.chars, {duration:1, opacity:0, stagger:0.05, ease:"power2.in"})

tl.to(split.chars, {duration:0.5, opacity:0, stagger:{
	from:"end",
	each:0.05
}}, "+=1")

GSDevTools.create({animation:tl})