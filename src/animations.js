
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateHero = () => {
    gsap.from(".hero-text h1", { 
        duration: 1, 
        y: 50,
        ease: "power4.out",
        delay: 0.2
    });
    gsap.from(".hero-text p", { 
        duration: 1, 
        y: 50, 
        ease: "power4.out", 
        delay: 0.4 
    });
    gsap.from(".hero-button", { 
        duration: 1, 
        y: 50, 
        ease: "power4.out", 
        delay: 0.6 
    });
    gsap.from(".hero-image", { 
        duration: 1.2, 
        x: 50, 
        ease: "power4.out", 
        delay: 0.2 
    });
}; 
