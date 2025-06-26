export type GameLoopCallback = (delta: number, timestamp: number) => void;

export interface Engine {
    start: () => void;
    stop: () => void;
    isRuning: boolean;
}
