const date = new Date().getFullYear()

window.onload = function setDate() {
    document.getElementById('timeUpdate').innerHTML = date;
}