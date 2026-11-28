const r = require("raylib");
const { drawTank, updateTanks } = require("./tank");
const { updateBullets, drawBullets } = require("./bullet");

const running = function () {
    return !r.WindowShouldClose();
};

const setup = function () {
    const config = require("./config");
    const { SCREEN, PALETTE, tanks } = config;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(SCREEN.WIDTH, SCREEN.HEIGHT, SCREEN.TITLE);
    r.SetTargetFPS(SCREEN.FPS);

    return { SCREEN, PALETTE, tanks };
};

const update = function (world) {
    const { tanks, SCREEN } = world;
    const { tank1, tank2 } = tanks;

    updateTanks(tanks);
    updateBullets(tanks, SCREEN);
};

const draw = function (world) {
    const { PALETTE, tanks } = world;
    const { tank1, tank2 } = tanks;

    r.BeginDrawing();
    r.ClearBackground(PALETTE.bg);

    drawTank(tank1, PALETTE.tank1);
    drawTank(tank2, PALETTE.tank1);

    drawBullets(tank1.bullets, PALETTE.tank1.bullets);
    drawBullets(tank2.bullets, PALETTE.tank1.bullets);

    r.EndDrawing();
};

const teardown = function () {
    r.CloseWindow();
};

module.exports = { running, setup, update, draw, teardown };
