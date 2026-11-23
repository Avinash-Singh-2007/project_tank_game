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

const tank1 = { angle: 0, c: { x: 200, y: 100 } };
tank1.outerRect = { coordinates: tank1.c, width: 80, height: 60 };
tank1.innerRect = { coordinates: tank1.c, width: 50, height: 30 };
tank1.circle = { coordinates: tank1.c, radius: 6 };
tank1.riffle = { coordinates: tank1.c, width: 70, height: 2 };
tank1.barrel = { coordinates: tank1.c, width: 20, height: 10 };
tank1.bullets = [];

const tank2 = { angle: 0, c: { x: 1000, y: 800 } };
tank2.outerRect = { coordinates: tank2.c, width: 80, height: 60 };
tank2.innerRect = { coordinates: tank2.c, width: 50, height: 30 };
tank2.circle = { coordinates: tank2.c, radius: 6 };
tank2.riffle = { coordinates: tank2.c, width: 70, height: 2 };
tank2.barrel = { coordinates: tank2.c, width: 20, height: 10 };
tank2.bullets = [];

module.exports = { PALETTE, SCREEN, tanks: { tank1, tank2 } };
