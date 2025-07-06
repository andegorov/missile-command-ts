import './style.css';

import { createEngine } from './core/engine';
import { clearCanvas, getCanvasCoordinates, initCanvas } from './ui/canvas';
import { Missile } from './game/missile';
import { drawEntities } from './ui/renderer';

const canvas = initCanvas();
const canvasElement = canvas.canvas;
const entities: Missile[] = [];

canvasElement.addEventListener('click', (e) => {
    entities.push(
        new Missile(
            canvas.width / 2,
            canvas.height,
            getCanvasCoordinates('x', e.clientX),
            getCanvasCoordinates('y', e.clientY)
        )
    );
});

const engine = createEngine((delta) => {
    clearCanvas();

    for (const entity of entities) {
        if (entity.isAlive) {
            entity.update(delta);
        }
    }

    drawEntities(canvas.ctx, entities);
});

engine.start();
