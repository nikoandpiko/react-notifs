import React from 'react'
import BannerMessage from './BannerMessage'
import BannerIcon from './BannerIcon'

const Banner = ({ type = 'neutral', children }) => {
  return (
    <div className={`banner banner-${type}`}>
      <div className="banner-message-wrapper">
        <BannerIcon type={type} />
        <BannerMessage type={type} />
      </div>
      {children && <div className="banner-children">{children}</div>}
    </div>
  )
}

export default Banner
