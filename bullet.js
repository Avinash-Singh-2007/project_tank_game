const r = require("raylib");
const { toRadians } = require("./geometry");

const updatePosition = function (bullets) {
    for (const bullet of bullets) {
        bullet.x += Math.cos(toRadians(bullet.angle)) * 5;
        bullet.y += Math.sin(toRadians(bullet.angle)) * 5;
    }
};

const addBullet = function (tank) {
    const height = tank.outerRect.height + 15;
    const width = tank.riffle.width;

    const x =
        tank.outerRect.coordinates.x + Math.cos(toRadians(tank.angle)) * width;
    const y =
        tank.outerRect.coordinates.y + Math.sin(toRadians(tank.angle)) * height;

    tank.bullets.push({ x, y, radius: 4, angle: tank.angle });
};

const isOutOfScreen = function ({ x, y }, { WIDTH, HEIGHT }) {
    return x < 0 || x > WIDTH || y < 0 || y > HEIGHT;
};

const updateBullets = function (tanks, SCREEN) {
    const { tank1, tank2 } = tanks;
    const { bullets: bullets1 } = tank1;
    const { bullets: bullets2 } = tank2;

    if (r.IsKeyPressed(r.KEY_UP)) addBullet(tank1);
    if (r.IsKeyPressed(r.KEY_W)) addBullet(tank2);

    updatePosition(bullets1);
    updatePosition(bullets2);

    if (bullets1.length && isOutOfScreen(bullets1[0], SCREEN)) bullets1.shift();
    if (bullets2.length && isOutOfScreen(bullets2[0], SCREEN)) bullets2.shift();
};

const drawBullets = function (bullets, color) {
    for (const bullet of bullets) {
        r.DrawCircleV(bullet, bullet.radius, color);
    }
};

module.exports = { updateBullets, drawBullets };
