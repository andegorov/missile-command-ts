import './style.css';

import { createEngine } from './core/engine';

const engine = createEngine((delta,time) => {
  console.log(`delta: ${delta.toFixed(2)}ms, time: ${time.toFixed(0)}ms`);
});

engine.start();