function locomotiveScroll() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#mainCtn"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#mainCtn", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector("#mainCtn").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

locomotiveScroll();

//

function changeToGreen() {
    document.querySelector(".menu").src = "Group 2.png";
};

function changeToWhite() {
    document.querySelector(".menu").src = "Plugin icon - 1.png";
};

//

function inserVFO1() {
    document.querySelector("#videos").src = "https://assets.website-files.com/6205ecdcec584c56193d6121/625049f25321603541f849ab_Brand_Work_noWindow_540x1080-transcode.mp4";
};

function inserVFO2() {
    document.querySelector("#videos").src = "https://assets.website-files.com/6205ecdcec584c56193d6121/62504a5dfc263843e89c1fc5_Product_Work_noWindow_540x1080-transcode.mp4";
};

function inserVFO3() {
    document.querySelector("#videos").src = "https://assets.website-files.com/6205ecdcec584c56193d6121/62504a9bfb995aa187002397_Motion_Work_noWindow_540x1080-transcode.mp4";
};

function removeVF() {
    document.querySelector("#videos").src = "";
};

//

var ctn = document.querySelector("body");
var ctnL = document.querySelector("video");
var circle = document.querySelector(".circle");

ctn.addEventListener("mousemove", function(dets){
    circle.style.top = `${dets.y}px`;
    circle.style.left = `${dets.x}px`;
    // circle.style.backgroundColor = "red"
  
})

ctnL.addEventListener("mouseenter", function(){
    circle.style.backgroundColor = "green"
})
ctnL.addEventListener("mouseleave", function(){
 
    circle.style.backgroundColor = "transparent"
   

})
