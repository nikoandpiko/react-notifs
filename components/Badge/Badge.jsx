import React from 'react'
import { useBadgeStyles } from './useBadgeStyles'
import BadgeIcon from './BadgeIcon'
import BadgeLabel from './BadgeLabel'

const Badge = ({ children, color = 'white', shape = 'square' }) => {
  const { badgeColor, badgeShape } = useBadgeStyles(color, shape)

  return (
    <button className={`btn-${badgeColor} badge badge-${badgeShape}`}>
      {children}
    </button>
  )
}

Badge.Icon = BadgeIcon
Badge.Label = BadgeLabel

export default Badge
