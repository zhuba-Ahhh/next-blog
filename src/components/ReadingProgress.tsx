"use client";
import { useState, useEffect, useCallback } from "react";

export default function ReadingProgress() {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const scrollHeight = () =>
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const calculateScrollDistance = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const percentage = (scrollTop / scrollHeight()) * 100;
    setWidth(percentage);
    setIsVisible(scrollTop > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollDistance);
    return () => window.removeEventListener("scroll", calculateScrollDistance);
  }, [calculateScrollDistance]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        style={{ width: `${width}%` }}
        className="h-full bg-primary transition-all duration-300 ease-out"
      ></div>
    </div>
  );
}
