
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateOnScroll = (elem) => {
    gsap.from(elem, { 
        duration: 1, 
        y: 50,
        ease: "power4.out",
        scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
}; 
