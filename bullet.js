const r = require("raylib");
const { toRadians } = require("./geometry");

const updatePosition = function (bullet) {
    bullet.x += Math.cos(toRadians(bullet.angle)) * 5;
    bullet.y += Math.sin(toRadians(bullet.angle)) * 5;
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

const isBulletOutOfScreen = function (bullet) {
    const { x, y } = bullet;
    return x < 0 || x > 1400 || y < 0 || y > 900;
};

const updateBullets = function (tank) {
    const { bullets } = tank;
    if (r.IsKeyPressed(r.KEY_UP)) addBullet(tank);

    for (const bullet of bullets) {
        updatePosition(bullet);
    }

    if (bullets.length && isBulletOutOfScreen(bullets[0])) bullets.shift();
};

const drawBullets = function (bullets, color) {
    for (const bullet of bullets) {
        r.DrawCircleV(bullet, bullet.radius, color);
    }
};

module.exports = { updateBullets, drawBullets };
