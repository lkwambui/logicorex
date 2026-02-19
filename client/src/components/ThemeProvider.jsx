// ThemeProvider removed: dark mode is disabled. Use direct children rendering.

export function useTheme() {
  return { theme: "light", toggleTheme: () => {} };
}

export default function ThemeProvider({ children }) {
  return children;
}
