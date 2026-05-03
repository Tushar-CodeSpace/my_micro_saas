import type { NextFunction, Request, Response } from "express";
import pino from "pino";
import pretty from "pino-pretty";

const stream = pretty({
    colorize: true,
    translateTime: "SYS:yyyy-mm-dd HH:MM:ss.l o",
    ignore: "pid,hostname",
});

export const logger = pino(
    { level: process.env.LOG_LEVEL || "info" },
    stream
);

export function requestLogger(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();

    res.on("finish", () => {
        const duration = Date.now() - start;
        logger.info(`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
    });

    next();
}