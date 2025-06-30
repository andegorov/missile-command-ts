import { Entity } from '../core/entity';

export function drawEntities(
    ctx: CanvasRenderingContext2D,
    entities: Entity[]
) {
    for (const entity of entities) {
        if (entity.isAlive) {
            entity.draw(ctx);
        }
    }
}
