import React, { memo } from 'react'
import { BadgeColor, BadgeShape } from '../../types'

interface BadgeProps {
  children: React.ReactNode
  color?: BadgeColor
  shape?: BadgeShape
}

interface BadgeLabelProps {
  label: string
}

interface BadgeIconProps {
  icon: string
  alt?: string
}

export const BadgeLabel: React.FC<BadgeLabelProps> = ({ label }) => {
  return <span className="badge-label">{label}</span>
}

export const BadgeIcon: React.FC<BadgeIconProps> = ({ icon, alt = '' }) => {
  return <img className="badge-icon" src={icon} alt={alt} aria-hidden={!alt} />
}

const BadgeComponent: React.FC<BadgeProps> = ({ children, color = 'white', shape = 'pill' }) => {
  const badgeClasses = ['badge', `badge-${shape}`, `badge-${color}`].join(' ')

  return <span className={badgeClasses}>{children}</span>
}

type BadgeComponentType = React.FC<BadgeProps> & {
  Label: typeof BadgeLabel
  Icon: typeof BadgeIcon
}

const Badge: BadgeComponentType = Object.assign(memo(BadgeComponent), {
  Label: BadgeLabel,
  Icon: BadgeIcon,
})

Badge.displayName = 'Badge'

export default Badge
