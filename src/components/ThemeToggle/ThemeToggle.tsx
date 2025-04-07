import React from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../../contexts/ThemeContext'

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  const handleToggle = () => {
    toggleTheme()
  }

  return (
    <button
      className="theme-toggle"
      onClick={handleToggle}
      aria-label={`Toggle theme (current: ${theme})`}
    >
      {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  )
}

export default ThemeToggle
