import React from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../../contexts/ThemeContext'

const ThemeToggleComponent = () => {
  const { theme, toggleTheme } = useTheme()

  const handleToggle = React.useCallback(() => {
    toggleTheme()
  }, [toggleTheme])

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        toggleTheme()
      }
    },
    [toggleTheme]
  )

  return (
    <button
      className="theme-toggle"
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  )
}

ThemeToggleComponent.displayName = 'ThemeToggle'

const ThemeToggle = React.memo(ThemeToggleComponent)

export default ThemeToggle
