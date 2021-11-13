import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, MotionPathHelper, MorphSVGPlugin, DrawSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");


// const ".orange" = #FFFF;


// gsap.set(".blueThing",{fill:blueColor});

const mainTL = gsap.timeline();

function LeftWheel(){
    const tl =gsap.timeline();
    tl.from("#LeftWheel",{duration:1.5, rotation:-540, transformOrigin:"50% 50%"});
    return tl;
}

function RightWheel(){
    const tl =gsap.timeline();
    tl.to("#RightWheel",{duration:2, rotation:720, transformOrigin:"50% 50%"});
    return tl;
}

function MidWheel(){
    const tl =gsap.timeline();
    tl.to("#MidWheel",{duration:1, rotation:-630, transformOrigin:"50% 50%"});
    return tl;
}

function LoadBarS(){
    const tl =gsap.timeline();
    tl.fromTo("#LoadBarS",{drawSVG:"0%"}, {duration: 2, drawSVG:" 100% "});
    return tl;
}

function Viewfinder(){
    const tl =gsap.timeline();
    tl.to("#Viewfinder",{duration: 1.5, transformOrigin: "center center", yPercent:-225, delay: 1});
    return tl;
}

function Camera(){
    const tl =gsap.timeline();
    tl.to("#RightWheel, #MidWheel, #LoadBarS, #CameraBody, #LoadBar, #RightButton_2, #LeftButton_2, #RoundRectangleButton, #Lens_3, #FlashBox, #LeftWheel",{duration: 1, alpha: 0},"+=1");
    return tl;
}

function FadeOut(){
    const tl =gsap.timeline();
    tl.to("#CameraFrame_3, #Lens_2, #LensSpin_2, #FlashFrame_3, #FlashLine_2, #Buttons_2, #Record_2, #RoundGrip_2",{duration: 0, alpha: 100});
    return tl;
}

function Morph1(){
    const tl =gsap.timeline();
    tl.to("#Viewfinder",{duration: 1, transformOrigin: "center center", yPercent:-147});
    return tl;
}

function Rotate(){
    const tl =gsap.timeline();
    tl.to("#Viewfinder",{duration: 1, transformOrigin: "center center", rotation: "90", xPercent:-100});
    
    return tl;
}

function Morph2(){
    const tl =gsap.timeline();
    tl.to("#Viewfinder", {duration: 1, morphSVG:"#RoundGripMask"});
    tl.to("#Viewfinder", {duration: 0.01, alpha: 0, ease: "none" });
    tl.from("#Slidy", {duration: 0.001, alpha: 0});
    tl.to("#Slidy", {duration: 1, xPercent:905});
    tl.to("#Slidy", {duration: 1, morphSVG:"#RoundGrip_2", xPercent:0});
    // tl.to("#Slidy", {duration: 0.01, xPercent:0});
  
    
    return tl;
}


function Slide2(){
    const tl =gsap.timeline();
    tl.to("#Mask", {duration: 0.85, xPercent:100});
    return tl;
}

function SpinL(){
    const tl =gsap.timeline();
    tl.from("#LensSpin_2",{duration:1.5, rotation:-540, ease: "back.out(1.7)", transformOrigin:"50% 50%"});
    return tl;
} 

function Flash(){
    const tl =gsap.timeline();
    tl.from("#Flash", {duration: 0.01, alpha: 0});
    tl.to("#Flash", {duration: 0.75, scale:8, transformOrigin: "center center"});
    return tl;
    
}

function FrontFade(){
    const tl =gsap.timeline();
    tl.to("#CameraFrame_3, #Lens_2, #LensSpin_2, #FlashFrame_3, #FlashLine_2, #Buttons_2, #Record_2, #RoundGrip_2, #Mask",{duration:1, alpha: 0});
    tl.to("#Slidy",{duration:0.01, alpha: 0});
    tl.from("#CameraFrame, #FlashFrame, #Screen, #TopButton, #LeftButton, #RightButton, #TopButtons, #ScreenGlare, #BottomButton, #CrossButton",{duration:1, alpha: 0});
   
    return tl;
    
}

function FlashMorph(){
    const tl =gsap.timeline();
    tl.to("#Flash", {duration: 0.25, scale:0, xPercent:113, yPercent:122, transformOrigin: "center center", alpha: 0});
    tl.to("#CrossButton",{duration:0.65, rotation:-500, transformOrigin:"50% 50%"});
    tl.to("#CameraFrame, #FlashFrame, #TopButton, #LeftButton, #RightButton, #TopButtons, #BottomButton, #CrossButton", {duration:1, alpha: 0},"+=0.5");
    tl.to("#Screen, #ScreenGlare", {duration: 0.50, scale:15, alpha: 0, transformOrigin: "center center"});
   
    return tl;
    
}

function Complete(){
    const tl =gsap.timeline();
    tl.to("#preloader",{duration:0.25, alpha: 0, onComplete:backTop});
    return tl;
}

function backTop(){
    
    window.scrollTo(0,0)
    gsap.set("#preloader",{display:"none"});

}

function heroanimation(){
    const tl =gsap.timeline();

    const heroHeight = document.querySelector("#hero");



    tl.from("#hero article",{duration:1,alpha:0, y: heroHeight.clientHeight})
    .from("#hero h1",{duration:1, y:"+=300", alpha:0, rotation:360},"madeUp")
    .from("#hero h2",{duration:1, y:"+=300", alpha:0, rotation:-180}, "madeUp");


    return tl;
}



mainTL.add(LeftWheel(),"1")
        .add(RightWheel(),"1")
        .add(MidWheel(),"1")
        .add(LoadBarS(),"2")
        .add(Viewfinder(),"3")
        .add(Camera(),"3")
        .add(FadeOut(),"3")
        .add(Morph1(),"5")
        .add(Rotate(),"5")
        .add(Morph2(),"5")
        .add(Slide2(),"6")
        .add(SpinL(),"7")
        .add(Flash(),"+=1")
        .add(FrontFade(),"9")
        .add(FlashMorph(),"10")
        .add(Complete())
        .add(heroanimation(),"+=1");

        




GSDevTools.create();























