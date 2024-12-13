"use client";
import React, { useState, useCallback, useEffect } from "react";
import { debounce } from "lodash-es";

export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = useCallback(
    () => setShowScroll(window.scrollY > 500),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setShowScroll(false);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-2 bg-gray-800 text-white rounded-full shadow-lg transition-opacity duration-300" // 添加过渡效果
          style={{ visibility: showScroll ? "visible" : "hidden" }} // 使用visibility控制显示
        >
          回到顶部
        </button>
      )}
    </>
  );
}
