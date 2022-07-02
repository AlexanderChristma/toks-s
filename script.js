const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");


if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add('active');
    })
}

close.addEventListener("click", ()=> {
    nav.classList.remove("active");
})

var typed = new typed('.type', {
    strings:[
        'Hello', 'My name'
    ],
    typeSpeed:100,
    backSpeed:70,
    loop:true,
});


