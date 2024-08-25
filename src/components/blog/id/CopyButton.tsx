"use client";

import React, { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { throttle } from "lodash-es";
import { useThemeType } from "../../../hooks";

interface CopyButtonProps {
  text: string;
  language: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text, language }) => {
  const [state, setState] = useState<"idle" | "copy" | "copied">("idle");
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useThemeType();

  const throttledCopy = useMemo(
    () =>
      throttle(async () => {
        if (state === "copied") return;
        try {
          await navigator.clipboard.writeText(text);
          setState("copied");
          setTimeout(() => setState("idle"), 1000);
        } catch (err) {
          console.error("复制失败:", err);
          setState("idle");
        }
      }, 300),
    [text, state]
  );

  const handleCopy = useCallback(() => {
    throttledCopy();
  }, [throttledCopy]);

  const buttonClassName = useMemo(
    () => `
      absolute top-2 right-2 p-1.5 rounded-md
      bg-gray-100 dark:bg-gray-800
      border border-gray-200 dark:border-gray-700
      hover:bg-gray-200 dark:hover:bg-gray-700
      transition-all duration-300 ease-in-out
      flex items-center justify-center
      shadow-sm hover:shadow-md dark:shadow-gray-900
      overflow-hidden
      h-[30px]
    `,
    []
  );

  const getImageSrc = (baseName: string) => {
    return theme === "dark"
      ? `/svg/${baseName}-dark.svg`
      : `/svg/${baseName}.svg`;
  };

  return (
    <button
      onClick={handleCopy}
      onMouseEnter={() => {
        setIsHovered(true);
        setState((prev) => (prev === "idle" ? "copy" : prev));
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setState((prev) => (prev === "copy" ? "idle" : prev));
      }}
      className={buttonClassName}
      title={state === "idle" ? language : state === "copy" ? "复制" : "已复制"}
    >
      <div
        className={`flex items-center transition-transform duration-300 ${
          isHovered ? "-translate-y-[200%]" : "translate-y-0"
        }`}
      >
        <span className="text-xs font-mono text-gray-700 dark:text-gray-300">
          {language}
        </span>
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
          isHovered ? "translate-y-0" : "translate-y-[200%]"
        }`}
      >
        {state === "copy" && (
          <Image
            src={getImageSrc("copy")}
            alt="复制"
            width={16}
            height={16}
            // className="text-gray-700 dark:text-gray-300"
          />
        )}
        {state === "copied" && (
          <Image
            src={getImageSrc("check")}
            alt="已复制"
            width={16}
            height={16}
            className="text-green-600 dark:text-green-400"
          />
        )}
      </div>
    </button>
  );
};

export default CopyButton;
