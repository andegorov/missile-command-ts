import './style.css';

import { createEngine } from './core/engine';
import { createCanvasContext } from './ui/canvas';
import { Missile } from './game/missile';
import { drawEntities } from './ui/renderer';

const canvas = createCanvasContext();
const { canvasElement } = canvas;
const entities: Missile[] = [];

canvasElement.addEventListener('click', (e) => {
    entities.push(
        new Missile(
            canvas.width / 2,
            canvas.height,
            canvas.getCoordinates('x', e.clientX),
            canvas.getCoordinates('y', e.clientY)
        )
    );
});

const engine = createEngine((delta) => {
    canvas.clear();

    for (const entity of entities) {
        if (entity.isAlive) {
            entity.update(delta);
        }
    }

    drawEntities(canvas.ctx, entities);
});

engine.start();
