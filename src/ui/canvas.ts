import {
    CANVAS_ID,
    BACKGROUND_COLOR,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
} from './ui.constants';
import type { CanvasContext } from './ui.types';

export function createCanvasContext(
    width = CANVAS_WIDTH,
    height = CANVAS_HEIGHT
): CanvasContext {
    const canvas = document.getElementById(
        CANVAS_ID
    ) as HTMLCanvasElement | null;
    if (!canvas) throw new Error('Canvas not found');
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas 2D context not supported');

    let canvasRect = canvas.getBoundingClientRect();

    const clear = () => {
        context.ctx.fillStyle = BACKGROUND_COLOR;
        context.ctx.fillRect(0, 0, context.width, context.height);
    };

    const getCoordinates = (
        direction: 'x' | 'y',
        clientCoordinates: number
    ) => {
        const { left, top, width, height } = canvasRect;

        if (width == 0 || height == 0)
            throw new Error('width or height Canvas rect equals zero');

        switch (direction) {
            case 'x':
                return ((clientCoordinates - left) * context.width) / width;

            case 'y':
                return ((clientCoordinates - top) * context.height) / height;

            default:
                throw new Error('Invalid direction');
        }
    };

    const destroy = () => {
        window.removeEventListener('resize', resize);
    };

    const resize = () => {
        canvasRect = canvas.getBoundingClientRect();
        context.width = canvas.width;
        context.height = canvas.height;
    };

    const context: CanvasContext = {
        canvasElement: canvas,
        ctx,
        width,
        height,
        clear,
        getCoordinates,
        destroy
    };

    resize();
    window.addEventListener('resize', resize);
    return context;
}
