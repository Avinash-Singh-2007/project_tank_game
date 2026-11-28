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
    tank.angle += 0.8 * tank.direction;
};

const updateDirectionAntiClockwise = function (tank) {
    tank.direction = -1;
};

const updateDirectionClockwise = function (tank) {
    tank.direction = 1;
};

const updateTank1 = function (tank) {
    const isMoving = r.IsKeyDown(r.KEY_W);
    const isFiring = r.IsKeyDown(r.KEY_D);
    const isRotatingReverse = r.IsKeyDown(r.KEY_A);

    if (isRotatingReverse) updateDirectionAntiClockwise(tank);
    if (r.IsKeyReleased(r.KEY_A)) updateDirectionClockwise(tank);

    if (!isMoving && !isFiring) updateAngle(tank);
    if (isMoving) updatePosition(tank);
};

const updateTank2 = function (tank) {
    const isMoving = r.IsKeyDown(r.KEY_UP);
    const isFiring = r.IsKeyDown(r.KEY_RIGHT);
    const isRotatingReverse = r.IsKeyDown(r.KEY_LEFT);

    if (isRotatingReverse) updateDirectionAntiClockwise(tank);
    if (r.IsKeyReleased(r.KEY_LEFT)) updateDirectionClockwise(tank);

    if (!isMoving && !isFiring) updateAngle(tank);
    if (isMoving) updatePosition(tank);
};

const updateTanks = function ({ tank1, tank2 }) {
    updateTank1(tank1);
    updateTank2(tank2);
};

module.exports = { drawTank, updateTanks };
