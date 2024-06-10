const bars = document.querySelectorAll(".fa-bars")
const nav = document.getElementById("nav-modal")
const closebtn = document.getElementById("close")

bars.forEach(bar => {
    bar.addEventListener("click", () => {
        nav.classList.remove("d-none")
        document.body.classList.add("no-scroll");
    })
})


closebtn.addEventListener("click", () => {
    nav.classList.add("d-none")
    document.body.classList.remove("no-scroll");
})