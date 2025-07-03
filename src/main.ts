import './style.css';

import { createEngine } from './core/engine';
import { clearCanvas, initCanvas } from './ui/canvas';
import { Missile } from './game/missile';
import { drawEntities } from './ui/renderer';

const canvasContext = initCanvas();
const canvas = canvasContext.canvas;
const entities: Missile[] = [];

canvas.addEventListener('click', (e) => {
    entities.push(
        new Missile(
            canvas.width / 2,
            canvas.height,
            (e.clientX - canvasContext.offsetX) * canvasContext.scaleX,
            (e.clientY - canvasContext.offsetY) * canvasContext.scaleY
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

    drawEntities(canvasContext.ctx, entities);
});

engine.start();
