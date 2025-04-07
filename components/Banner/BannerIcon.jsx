import React from 'react'
import SuccessIcon from '../../assets/success.png'
import WarningIcon from '../../assets/warning.png'
import ErrorIcon from '../../assets/error.png'
import NeutralIcon from '../../assets/neutral.png'

const BannerIcon = ({ type }) => {
  const icons = {
    success: SuccessIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    neutral: NeutralIcon,
  }

  return <img className="banner-icon" src={icons[type]} alt={type} />
}

export default BannerIcon
