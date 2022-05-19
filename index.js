var p = document.querySelectorAll("p")

function classSwap() {
    if (window.innerWidth <= 1280) {
        p.classList.remove("text-left")
        p.classList.remove("text-right")
        p.classList.add("text-center")
    } else {
        p.classList.add("text-left")
        p.classList.add("text-right")
        p.classList.remove("text-center")
    }
}

window.onresize = classSwap