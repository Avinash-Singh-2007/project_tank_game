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
    drawBody(tank.outerRect, color.outerRect, tank.angle, { x: 40, y: 30 });
    drawBody(tank.innerRect, color.innerRect, tank.angle, { x: 25, y: 15 });
    drawBody(tank.riffle, color.riffle, tank.angle, { x: 0, y: 1 });
    drawBody(tank.barrel, color.barrel, tank.angle, { x: -60, y: 5 });
    drawTopCircle(tank.circle, color.circle, tank.angle);
};

const updatePosition = function (tank) {
    tank.coordinates.x += Math.cos(toRadians(tank.angle));
    tank.coordinates.y += Math.sin(toRadians(tank.angle));
};

const updateTank = function (tank) {
    updatePosition(tank);

    if (r.IsKeyDown(r.KEY_RIGHT)) tank.angle += 2;
    if (r.IsKeyDown(r.KEY_LEFT)) tank.angle -= 2;
};

module.exports = { drawTank, updateTank };
