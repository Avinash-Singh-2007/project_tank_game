const r = require("raylib");
const { drawTank, updateTank } = require("./tank");
const { updateBullets, drawBullets } = require("./bullet");

const running = function () {
    return !r.WindowShouldClose();
};

const setup = function () {
    const config = require("./config");
    const { SCREEN, PALETTE, tank1 } = config;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(SCREEN.WIDTH, SCREEN.HEIGHT, SCREEN.TITLE);
    r.SetTargetFPS(SCREEN.FPS);

    return { SCREEN, PALETTE, tank1 };
};

const update = function (world) {
    const { tank1 } = world;
    updateTank(tank1);
    updateBullets(tank1);
};

const draw = function (world) {
    const { PALETTE, tank1 } = world;

    r.BeginDrawing();
    r.ClearBackground(PALETTE.bg);

    drawTank(tank1, PALETTE.tank1);
    drawBullets(tank1.bullets, PALETTE.tank1.bullets);

    r.EndDrawing();
};

const teardown = function () {
    r.CloseWindow();
};

module.exports = { running, setup, update, draw, teardown };
