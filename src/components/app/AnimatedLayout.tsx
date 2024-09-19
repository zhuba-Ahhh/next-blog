"use client";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface AnimatedLayoutProps {
  children: ReactNode;
}

export default function AnimatedLayout({ children }: AnimatedLayoutProps) {
  const pathname = usePathname();

  return (
    <main key={pathname} className="flex-grow container mx-auto px-4 mt-16">
      {children}
    </main>
  );
}
