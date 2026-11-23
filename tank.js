const r = require("raylib");
const { toRadians } = require("./geometry");

const drawBody = function (rect, color, angle, origin) {
    const { x, y } = rect.coordinates;
    const { width, height } = rect;
    const tank = { x, y, width, height };

    r.DrawRectanglePro(tank, origin, angle, color);
};

const drawTopCircle = function (circle, color) {
    const { x, y } = circle.coordinates;
    r.DrawCircle(x, y, circle.radius, color);
};

const drawTank = function (tank, color) {
    const { outerRect, innerRect, riffle, barrel, circle, angle } = tank;

    drawBody(outerRect, color.outerRect, angle, { x: 40, y: 30 });
    drawBody(innerRect, color.innerRect, angle, { x: 25, y: 15 });
    drawBody(riffle, color.riffle, angle, { x: 0, y: 1 });
    drawBody(barrel, color.barrel, angle, { x: -60, y: 5 });
    drawTopCircle(circle, color.circle, angle);
};

const updatePosition = function ({ c, angle }) {
    c.x += Math.cos(toRadians(angle));
    c.y += Math.sin(toRadians(angle));
};

const updateTanks = function ({ tank1, tank2 }) {
    updatePosition(tank1);
    updatePosition(tank2);

    if (r.IsKeyDown(r.KEY_RIGHT)) tank1.angle += 2;
    if (r.IsKeyDown(r.KEY_LEFT)) tank1.angle -= 2;
    if (r.IsKeyDown(r.KEY_A)) tank2.angle += 2;
    if (r.IsKeyDown(r.KEY_D)) tank2.angle -= 2;
};

module.exports = { drawTank, updateTanks };
