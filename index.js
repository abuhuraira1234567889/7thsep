let logo = gsap.timeline({
  duration:1
})

logo.from(".logo", {
  y:100,
  opacity:0,
  duration:1.6,
  ease: "elastic.out(0.5,0.3)"
})

logo.from(".phrase", {
  y:100,
  opacity: 0,
  duration:1.6,
  ease: "elastic.out(0.5,0.3)"
},"-=1.6")

let hlanding = gsap.timeline({
  duration:1,
  delay:0.4
})

hlanding.from(".T4", {
  y:100,
  opacity:0,
  duration:1,
  ease: "elastic.out(1.1,0.3)"
})

hlanding.from(".T3", {
  y:100,
  opacity: 0,
  duration:1.6,
  ease: "elastic.out(1.1,0.3)"
},"-=0.9")

hlanding.from(".T2", {
  y:100,
  opacity:0,
  duration:1.6,
  ease: "elastic.out(1.1,0.3)"
},"=-1.3")

hlanding.from(".T1", {
  y:100,
  opacity: 0,
  duration:1.6,
  ease: "elastic.out(1.1,0.3)"
},"-=1.1")

gsap.from(".button-img",{
  y:110,
  opacity: 0,
  delay:1.8,
  duration:0.6
})

section = gsap.timeline({
  scrollTrigger:{
    trigger:".rmsvg",
    start:"bottom top",
  }
})

section.from(".secimg",{
  scale:0.8,
  duration:0.5
})

section.from(".l1",{
  y:100,
  opacity: 0,
  duration:1.4,
  ease: "elastic.out(0.8,0.4)"
})

section.from(".l2",{
  y:100,
  opacity: 0,
  duration:1.2,
  ease: "elastic.out(0.8,0.4)"
},"-=1.2")

section.from(".l3",{
  y:100,
  opacity: 0,
  duration:0.4,
},"-=0.5")

section.from(".l4",{
  y:100,
  opacity: 0,
  duration:0.4,
},"-=0.35")


services = gsap.timeline({
  scrollTrigger:{
    trigger:".Limg",
    start:"+700px",
  }
})

services.from(".prsvg",{
  opacity:0,
  scale:0.7,
  duration:0.5
})

services.from(".scsvg",{
  opacity:0,
  scale:0.7,
  duration:0.5
},"-=0.4")

services.from(".dssvg",{
  opacity:0,
  scale:0.7,
  duration:0.5
},"-=0.4")

services.from(".cpsvg",{
  opacity:0,
  scale:0.7,
  duration:0.5
},"-=0.4")

services.from(".rmsvg",{
  opacity:0,
  scale:0.7,
  duration:0.5
},"-=0.4")



sec2 = gsap.timeline({
  scrollTrigger:{
    trigger:".secimg",
    start:"bottom top",
  }
})

sec2.from(".x1img",{
  y:100,
  opacity: 0,
  duration:1.5,
  ease: "elastic.out(1,0.4)"
})

sec2.from(".x1content p",{
  y:100,
  opacity: 0,
  duration:1.3,
  ease: "elastic.out(1.2,0.4)"
},"-=1.5")

sec2.from(".x2img",{
  y:100,
  opacity: 0,
  duration:1.5,
  ease: "elastic.out(1,0.4)"
},"-=1")

sec2.from(".x2content p",{
  y:100,
  opacity: 0,
  duration:1.3,
  ease: "elastic.out(1.2,0.4)"
},"-=1.5")

sec2.from(".x3img",{
  y:100,
  opacity: 0,
  duration:1.5,
  ease: "elastic.out(1,0.4)"
},"-=1")

sec2.from(".x3content p",{
  y:100,
  opacity: 0,
  duration:1.3,
  ease: "elastic.out(1.2,0.4)"
},"-=1.5")


rev = gsap.timeline({
  scrollTrigger:{
    trigger:".p1",
    start:"top top",
  }
})

rev.from(".cusImg1",{
  opacity: 0,
  scale:0.8,
  y:100,
  duration:0.8,
})

rev.from(".cusImg2",{
  opacity: 0,
  scale:0.8,
  y:100
},"-=0.5")

rev.from(".cusI3",{
  opacity: 0,
  scale:0.8,
  y:100
},"-=0.3")

footer = gsap.timeline({
  scrollTrigger:{
    trigger:".c1",
    start:"top top",
  }
})

footer.from(".u1img",{
  y:100,
  opacity:0,
  duration:0.4,
})

footer.from(".u1 p",{
  y:100,
  opacity:0,
  duration:1.5,
  ease: "elastic.out(1,0.3)"
},"-=0.2")

foou2 = gsap.timeline({
  scrollTrigger:{
    trigger:".c1",
    start:"top top",
  }
})

foou2.from(".u2p1",{
  y:50,
  opacity:0,
  duration:1.5,
  ease: "elastic.out(1,0.3)"
})

foou2.from(".u2p2",{
  y:50,
  opacity:0,
  duration:1.5,
  ease: "elastic.out(1,0.3)"
},"-=1.3")

foou2.from(".u2p3",{
  y:50,
  opacity:0,
  duration:1.5,
  ease: "elastic.out(1,0.3)"
},"-=1.3")


foou2.from(".u2p4",{
  y:50,
  opacity:0,
  duration:1.5,
  ease: "elastic.out(1,0.3)"
},"-=1.3")

foou2.from(".u2p5",{
  y:50,
  opacity:0,
  duration:1.5,
  ease: "elastic.out(1,0.3)"
},"-=1.3")


foou3 = gsap.timeline({
  scrollTrigger:{
    trigger:".c1",
    start:"top top",
  }
})

foou3.from(".u3p1",{
  y:50,
  opacity:0,
  duration:1.5,
  ease: "elastic.out(1,0.3)"
})

foou3.from(".u3p2",{
  y:50,
  opacity:0,
  duration:1.5,
  ease: "elastic.out(1,0.3)"
},"-=1.3")

foou3.from(".u3p3",{
  y:50,
  opacity:0,
  duration:1.5,
  ease: "elastic.out(1,0.3)"
},"-=1.3")


foou3.from(".u3p4",{
  y:50,
  opacity:0,
  duration:1.5,
  ease: "elastic.out(1,0.3)"
},"-=1.3")

foou3.from(".u3p5",{
  y:50,
  opacity:0,
  duration:1.5,
  ease: "elastic.out(1,0.3)"
},"-=1.3")

foou4 = gsap.timeline({
  scrollTrigger:{
    trigger:".c1",
    start:"top top",
  }
})

foou4.from(".u4 p",{
  y:50,
  opacity:0,
  duration:1.5,
  ease: "elastic.out(1,0.3)"
})

foou4.from(".fb",{
  y:50,
  opacity:0,
  duration:1.5,
  ease: "elastic.out(1,0.3)"
},"-=1.3")

foou4.from(".tw",{
  y:50,
  opacity:0,
  duration:1.5,
  ease: "elastic.out(1,0.3)"
},"-=1.3")

foou4.from(".insta",{
  y:50,
  opacity:0,
  duration:1.5,
  ease: "elastic.out(1,0.3)"
},"-=1.3")