"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { throttle } from "lodash-es";

interface CopyButtonProps {
  text: string;
  language: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text, language }) => {
  const [state, setState] = useState<"idle" | "copy" | "copied">("idle");

  const throttledCopy = throttle(async () => {
    if (state === "copied") return;
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
      setTimeout(() => setState("idle"), 1000);
    } catch (err) {
      console.error("复制失败:", err);
      setState("idle");
    }
  }, 300);

  const handleCopy = useCallback(throttledCopy, [throttledCopy, text, state]);

  return (
    <button
      onClick={handleCopy}
      onMouseEnter={() => setState((prev) => (prev === "idle" ? "copy" : prev))}
      onMouseLeave={() => setState((prev) => (prev === "copy" ? "idle" : prev))}
      className={`
        absolute top-2 right-2 p-1.5 rounded-md
        bg-gray-200 dark:bg-gray-800
        border border-gray-300 dark:border-gray-700
        hover:bg-gray-300 dark:hover:bg-gray-700
        transition-all duration-300 ease-in-out
        flex items-center justify-center
        shadow-sm hover:shadow-md dark:shadow-gray-900
      `}
      title={state === "idle" ? language : state === "copy" ? "复制" : "已复制"}
    >
      {state === "idle" && (
        <span className="text-xs font-mono text-gray-700 dark:text-gray-300">
          {language}
        </span>
      )}
      {state === "copy" && (
        <Image
          src="/svg/copy.svg"
          alt="复制"
          width={18}
          height={18}
          className="text-gray-700 dark:text-gray-300"
        />
      )}
      {state === "copied" && (
        <Image
          src="/svg/check.svg"
          alt="已复制"
          width={18}
          height={18}
          className="text-green-600 dark:text-green-400"
        />
      )}
    </button>
  );
};

export default CopyButton;