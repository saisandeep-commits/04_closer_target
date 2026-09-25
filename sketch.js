const r = require("raylib");
const geomentry = require("./geomentry")

const windowWidth = 1500;
const windowHeight = 1000;

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.InitWindow(windowWidth, windowHeight, "source Target");
  r.SetTargetFPS(50);
}

function draw() {
  const sourceX = 250;
  const sourceY = 125;
  const target1X = 800;
  const target1Y = 900;
  const target2X = 800;
  const target2Y = 700;
  const radius = 20;

  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  r.DrawCircle(sourceX, sourceY, radius, r.BLUE);
  r.DrawCircle(target1X, target1Y, radius, r.RED);
  r.DrawCircle(target2X, target2Y, radius, r.GREEN);
  if (
    geomentry.distance(sourceX, sourceY, target1X, target1Y) >
    geomentry.distance(sourceX, sourceY, target2X, target2Y)
  ) {
    r.DrawLine(sourceX, sourceY, target2X, target2Y, r.BLACK);
  } else {
    r.DrawLine(sourceX, sourceY, target1X, target1Y, r.BLACK);
  }
  r.EndDrawing();
}



function teardrop() {
  r.CloseWindow();
}

module.exports = {
  running,
  setup,
  draw,
  teardrop,
}

