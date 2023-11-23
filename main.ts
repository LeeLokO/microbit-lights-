
let npix = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB);

npix.showRainbow(1, 360);
basic.forever(gradient);

function gradient() {
    let tiltX = input.acceleration(Dimension.X);

    if (tiltX > 500) {
        npix.rotate(1);
        npix.show();
    }
    else if (tiltX < -500) {
        npix.rotate(-1);
        npix.show();
    }
    basic.pause(100);
}