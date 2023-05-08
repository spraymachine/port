const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});


const blob = document.getElementById("blob");

document.body.onpointermove = event => {

    const { clientX, clientY} = event;

    blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`

    }, {duration: 3000, fill: "forwards"})
}
