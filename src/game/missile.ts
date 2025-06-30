import { Entity } from '../core/entity';
import { MISSILE_SPEED, MISSILE_COLOR, MISSILE_RADIUS } from './game.constants';

export class Missile extends Entity {
    targetX: number;
    targetY: number;
    velocityX: number;
    velocityY: number;

    constructor(
        startX: number,
        startY: number,
        targetX: number,
        targetY: number
    ) {
        super(startX, startY);
        this.targetX = targetX;
        this.targetY = targetY;

        const dx = targetX - startX;
        const dy = targetY - startY;
        const dist = Math.hypot(dx, dy);
        this.velocityX = (dx / dist) * MISSILE_SPEED;
        this.velocityY = (dy / dist) * MISSILE_SPEED;
    }

    update(delta: number): void {
        this.x += this.velocityX * (delta / 1000);
        this.y += this.velocityY * (delta / 1000);

        const reachedTarget: boolean =
            Math.abs(this.x - this.targetX) < 2 &&
            Math.abs(this.y - this.targetY) < 2;

        if (reachedTarget) this.isAlive = false;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = MISSILE_COLOR;
        ctx.beginPath();
        ctx.arc(this.x, this.y, MISSILE_RADIUS, 0, Math.PI * 2);
        ctx.fill();
    }
}
