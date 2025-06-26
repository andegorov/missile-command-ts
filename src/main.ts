import './style.css';

import { createEngine } from './core/engine';
import { clearCanvas, initCanvas } from './ui/canvas';

const engine = createEngine((delta, time) => {
    console.log(`delta: ${delta.toFixed(2)}ms, time: ${time.toFixed(0)}ms`);
    clearCanvas();
});

engine.start();
initCanvas();
