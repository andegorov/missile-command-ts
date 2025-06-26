import { CANVAS_ID, BACKGROUND_COLOR } from './ui.constants';
import type { CanvasContext } from './ui.types';

let context: CanvasContext;

export function initCanvas(): CanvasContext {
    const canvas = document.getElementById(CANVAS_ID) as HTMLCanvasElement;

    if (!canvas) throw new Error('Canvas not found');

    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas 2D context not supported');

    context = {
        canvas,
        ctx,
        width: canvas.width,
        height: canvas.height
    };

    return context;
}

export function clearCanvas() {
    context.ctx.fillStyle = BACKGROUND_COLOR;
    context.ctx.fillRect(0, 0, context.width, context.height);
}

export function getCanvas(): CanvasContext {
    return context;
}
