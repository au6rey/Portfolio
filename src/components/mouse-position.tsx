"use client";

import { useEffect, useState } from "react";

export function MouseRadialBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className=" hidden dark:block pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    ></div>
  );
}
