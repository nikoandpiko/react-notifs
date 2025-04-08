import React, { useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

interface ThemedWrapperProps {
  children: React.ReactNode
}

const ThemedWrapper: React.FC<ThemedWrapperProps> = ({ children }) => {
  const { theme } = useTheme()

  useEffect(() => {
    localStorage.setItem('theme', theme)

    document.body.className = `theme-${theme}`
    document.documentElement.className = `theme-${theme}`
  }, [theme])

  return <>{children}</>
}

const MemoizedThemedWrapper = React.memo(ThemedWrapper)
MemoizedThemedWrapper.displayName = 'ThemedWrapper'

export default MemoizedThemedWrapper
