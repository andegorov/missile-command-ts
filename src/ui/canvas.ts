import {
    CANVAS_ID,
    BACKGROUND_COLOR,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
} from './ui.constants';
import type { CanvasContext } from './ui.types';

let context: CanvasContext;

export function initCanvas(): CanvasContext {
    const canvas = document.getElementById(CANVAS_ID) as HTMLCanvasElement;
    if (!canvas) throw new Error('Canvas not found');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas 2D context not supported');

    const resize = () => {
        context.rect = canvas.getBoundingClientRect();
        context.width = canvas.width;
        context.height = canvas.height;
    };

    context = {
        canvas,
        ctx,
        rect: canvas.getBoundingClientRect(),
        width: canvas.width,
        height: canvas.height
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

export function getCanvasCoordinates(
    direct: 'x' | 'y',
    clientCoord: number
): number {
    const { left, top, width, height } = context.rect;

    if (width == 0 || height == 0)
        throw new Error('width or height Canvas rect equals zero');

    switch (direct) {
        case 'x':
            return ((clientCoord - left) * context.width) / width;

        case 'y':
            return ((clientCoord - top) * context.height) / height;

        default:
            throw new Error('Invalid direction');
    }
}
