import React from 'react'
import { FiCheckCircle, FiAlertTriangle, FiXCircle, FiInfo } from 'react-icons/fi'
import { BannerType, BannerLine } from '../../types'

interface BannerProps {
  type: BannerType
  line: BannerLine
  children?: React.ReactNode
  message?: string
}

const defaultMessages: Record<BannerType, string> = {
  success: 'Success! Your action has been completed.',
  warning: 'Warning! Please be careful with this action.',
  error: 'Error! Something went wrong. Try again later.',
  neutral: 'Note: This is a neutral informational message.',
}

const Banner = ({ type, line, children, message }: BannerProps) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FiCheckCircle className="banner-icon" aria-hidden="true" />
      case 'warning':
        return <FiAlertTriangle className="banner-icon" aria-hidden="true" />
      case 'error':
        return <FiXCircle className="banner-icon" aria-hidden="true" />
      case 'neutral':
        return <FiInfo className="banner-icon" aria-hidden="true" />
    }
  }

  const ariaLive = type === 'error' ? 'assertive' : 'polite'

  return (
    <div className={`banner banner-${type}`} role="alert" aria-live={ariaLive}>
      <div className="banner-message-wrapper">
        {getIcon()}
        <span className="banner-message">{message || defaultMessages[type]}</span>
      </div>
      {line === 'multiline' && children && <div className="banner-children">{children}</div>}
    </div>
  )
}

const MemoizedBanner = React.memo(Banner)
MemoizedBanner.displayName = 'Banner'

export default MemoizedBanner
