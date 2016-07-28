// NOT MY OWN WORK.
// functions are modified from https://bgrins.github.io/TinyColor/docs/tinycolor.html
// HSV and golden ration configuate info from http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/ 

golden_ratio_conjugate = 0.618033988749895

function getRandomColor(){
    var rand = Math.random();
    rand += golden_ratio_conjugate;
    rand %= 1;
    var rgb = hsvToRgb(rand, 0.5, 0.95);
    var hex = "#" + rgbToHex(rgb.r, rgb.g, rgb.b);
    return hex;
}





function hsvToRgb(h, s, v) {

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

function rgbToHex(r, g, b) {

    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16))
    ];

    return hex.join("");
}

function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}
