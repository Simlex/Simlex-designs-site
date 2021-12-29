const dropButton = document.querySelector('.dropbtn');

const tl = gsap.timeline({defaults: {duration: 0.75, ease: "circ.out"}})

tl.fromTo(
    '.header-text', 2,
    {opacity: 0},
    {opacity: 1}
)
tl.fromTo(
    '.header-details-image', 1,
    {x: 250, opacity: 0}, 
    {x: 0, opacity: 1}
)
tl.fromTo(
    '.header-content-text', 1,
    {opacity: 0, y: -50},
    {opacity: 1, y: 0}
)
