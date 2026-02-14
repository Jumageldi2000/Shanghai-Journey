// src/hooks/useTheme.ts
import { useState } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    // 空函数，什么都不做
  };

  return { isDark, toggleTheme };
};