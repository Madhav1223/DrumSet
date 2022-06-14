let clk = document.querySelectorAll(".drum").length;
for (let i = 0; i < clk; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let data = "sounds/tone" + i + ".mp3";
        var audio = new Audio(data);
        audio.play();
    });

}
let data;
document.addEventListener("keypress", function (e) {
    switch (e.key) {
        case "w":
            data = "sounds/tone0.mp3";
            var audio = new Audio(data);
            audio.play();
            break;
        case "a":
            data = "sounds/tone1.mp3";
            var audio = new Audio(data);
            audio.play();
            break;
        case "s":
            data = "sounds/tone2.mp3";
            var audio = new Audio(data);
            audio.play();
            break;
        case "d":
            data = "sounds/tone3.mp3";
            var audio = new Audio(data);
            audio.play();
            break;
        case "j":
            data = "sounds/tone4.mp3";
            var audio = new Audio(data);
            audio.play();
            break;
        case "k":
            data = "sounds/tone5.mp3";
            var audio = new Audio(data);
            audio.play();
            break;
        case "l":
            data = "sounds/tone6.mp3";
            var audio = new Audio(data);
            audio.play();
            break;
        default:
            console.clear();
    }
})