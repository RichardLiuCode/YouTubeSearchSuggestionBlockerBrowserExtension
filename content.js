setTimeout(function () {
    document.getElementById("i0").remove();
}, 3000)
setInterval(function () {
    if (document.getElementById("i0")) {
        document.getElementById("i0").remove();
    }
}, 5000)