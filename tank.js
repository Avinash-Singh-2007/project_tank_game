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
    c.x += Math.cos(toRadians(angle)) * 2;
    c.y += Math.sin(toRadians(angle)) * 2;
};

const updateAngle = function (tank) {
    tank.angle += 1;
};

const updateTanks = function ({ tank1, tank2 }) {
    if (!r.IsKeyDown(r.KEY_UP) && !r.IsKeyDown(r.KEY_RIGHT)) updateAngle(tank1);
    if (!r.IsKeyDown(r.KEY_W)) updateAngle(tank2);

    if (r.IsKeyDown(r.KEY_UP)) updatePosition(tank1);
    if (r.IsKeyDown(r.KEY_W)) updatePosition(tank2);
};

module.exports = { drawTank, updateTanks };
