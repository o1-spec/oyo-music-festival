"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const interactiveElements = document.querySelectorAll("a, button, [role='button']");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const size = isClicking ? 12 : isHovering ? 8 : 6; 
  const offset = size / 2;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-50 transition-all duration-150 ease-out ${
        isClicking ? "w-12 h-12" : isHovering ? "w-8 h-8" : "w-6 h-6"
      } bg-gradient-to-r from-[#52f3fe] to-[#e223a5] rounded-full shadow-lg`}
      style={{
        transform: `translate(${position.x - offset}px, ${position.y - offset}px)`,
      }}
    />
  );
}