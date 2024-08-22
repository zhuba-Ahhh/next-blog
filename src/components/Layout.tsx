import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-light dark:bg-dark-darker text-dark-darker dark:text-light">
      {children}
    </div>
  );
}
