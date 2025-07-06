import { MAX_DELTA_FRAME } from './core.constants';
import type { GameLoopCallback, Engine } from './core.types';

export function createEngine(callback: GameLoopCallback): Engine {
    let running: boolean = false;
    let lastTime: number = 0;
    let frameId: number | null = null;

    const loop = (time: number) => {
        if (!running) return;

        const delta = Math.min(time - lastTime, MAX_DELTA_FRAME);
        lastTime = time;

        callback(delta, time);
        frameId = requestAnimationFrame(loop);
    };

    const start = () => {
        if (!running) {
            running = true;
            lastTime = performance.now();
            frameId = requestAnimationFrame(loop);
        }
    };

    const stop = () => {
        if (frameId !== null) {
            cancelAnimationFrame(frameId);
            frameId = null;
        }
        running = false;
    };
    return {
        start,
        stop,
        get isRunning() {
            return running;
        }
    };
}
