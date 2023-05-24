gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

if (ScrollTrigger.isTouch !==1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.2,
        effects: true,
        smoothTouch: 0.1,
    })

    gsap.fromTo('.artur_gsap', {opacity: 1 , x:0 }, {
        opacity: 0, x: 150,
        scrollTrigger: {
            trigger: '.ssk7-title' , 
            start: 'start', 
            

            scrub:true
        }
    })

    gsap.fromTo('.block-artur-main__title', {opacity: 1 , x:0 }, {
        opacity: 0, x: -150,
        scrollTrigger: {
            trigger: '.ssk7-title' , 
            start: 'start', 


            scrub:true
        }
    })

   

}
