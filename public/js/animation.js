const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.fromTo('.loading', {opacity:1}, {opacity:0,duration:5.5, delay: 3.5});
tl.to(".loading", {y: "-100%", duration:0.1, delay: 0});
tl.fromTo('.nav_container', {opacity:0}, {opacity:1,duration:1},"-=1");
tl.fromTo('.text', {opacity:0}, {opacity:1,duration:1},"-=1");
tl.fromTo('.music-info', {opacity:0}, {opacity:1,duration:1},"-=1");

