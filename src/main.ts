import './style.css';

import { createEngine } from './core/engine';
import { clearCanvas, initCanvas } from './ui/canvas';
import { Missile } from './game/missile';
import { drawEntities } from './ui/renderer';

const canvasContext = initCanvas();
const entities: Missile[] = [];

canvasContext.canvas.addEventListener('click', (e) => {
    console.log(e.clientX, ' + ', e.clientY);
    entities.push(
        new Missile(
            canvasContext.width / 2,
            canvasContext.height,
            e.clientX,
            e.clientY
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
