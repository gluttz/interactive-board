import { Camera } from "@/types/canvas";
import { type ClassValue, clsx } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

const COLORS = [
    "#FF0000",
    "#FFA500",
    "#FFEA00",
    "#008000",
    "#0000FF",
    "#4B0082",
    "#EE82EE",
];

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function connectionIdToColor(connectionid: number): string {
    return COLORS[connectionid % COLORS.length];
}

export function pointerEventToCanvasPoint(
    e: React.PointerEvent,
    camera: Camera
) {
    return {
        x: Math.round(e.clientX - camera.x),
        y: Math.round(e.clientY - camera.y),
    };
}
