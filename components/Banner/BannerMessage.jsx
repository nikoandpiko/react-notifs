import React from 'react'

const BannerMessage = ({ type }) => {
  const messages = {
    success: 'Congratulations!',
    warning: 'Attention!',
    error: 'There is a problem.',
    neutral: 'Update available.',
  }

  return <h3 className="banner-message">{messages[type]}</h3>
}

export default BannerMessage
