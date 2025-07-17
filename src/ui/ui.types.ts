export interface CanvasContext {
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
    clear(): void;
    getCoordinates(direction: 'x' | 'y', clientCoordinates: number): number;
    destroy(): void;
}
