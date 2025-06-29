export abstract class Entity {
    x: number;
    y: number;
    isAlive: boolean = true;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    abstract update(delta: number): void;
    abstract draw(ctx: CanvasRenderingContext2D): void;
}
