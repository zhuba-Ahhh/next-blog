import { useTheme } from "next-themes";

export function useThemeType() {
  const { theme, setTheme } = useTheme();

  return {
    theme,
    setTheme,
  };
}
