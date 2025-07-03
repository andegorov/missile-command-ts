import { CANVAS_ID, BACKGROUND_COLOR } from './ui.constants';
import type { CanvasContext } from './ui.types';

let context: CanvasContext;

export function initCanvas(): CanvasContext {
    const canvas = document.getElementById(CANVAS_ID) as HTMLCanvasElement;
    if (!canvas) throw new Error('Canvas not found');

    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas 2D context not supported');

    let rect = canvas.getBoundingClientRect();

    const resize = () => {
        rect = canvas.getBoundingClientRect();
        context.width = canvas.width;
        context.height = canvas.height;
        context.offsetX = rect.left;
        context.offsetY = rect.top;
        context.scaleX = canvas.width / rect.width;
        context.scaleY = canvas.height / rect.height;
    };

    context = {
        canvas,
        ctx,
        width: canvas.width,
        height: canvas.height,
        offsetX: rect.left,
        offsetY: rect.top,
        scaleX: canvas.width / rect.width,
        scaleY: canvas.height / rect.height
    };

    resize();
    window.addEventListener('resize', resize);
    return context;
}

export function clearCanvas() {
    context.ctx.fillStyle = BACKGROUND_COLOR;
    context.ctx.fillRect(0, 0, context.width, context.height);
}

export function getCanvas(): CanvasContext {
    return context;
}
