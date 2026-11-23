const r = require("raylib");

const SCREEN = { WIDTH: 1400, HEIGHT: 900, FPS: 60, TITLE: "Tank" };

const PALETTE = {
    bg: r.RAYWHITE,
    tank1: {
        outerRect: r.DARKGRAY,
        innerRect: r.LIGHTGRAY,
        circle: r.DARKGRAY,
        riffle: r.BLACK,
        barrel: r.DARKGRAY,
        bullets: r.RED,
    },
};

const tank1 = {
    angle: 0,
    origin: { x: 240, y: 130 },
    coordinates: { x: 200, y: 100 },
};
const { coordinates } = tank1;

tank1.outerRect = { coordinates, width: 80, height: 60 };
tank1.innerRect = { coordinates, width: 50, height: 30 };
tank1.circle = { coordinates, radius: 6 };
tank1.riffle = { coordinates, width: 70, height: 2 };
tank1.barrel = { coordinates, width: 20, height: 10 };
tank1.bullets = [];

module.exports = { PALETTE, SCREEN, tank1 };
