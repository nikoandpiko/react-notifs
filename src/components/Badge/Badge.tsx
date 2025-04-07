import React from 'react'
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
}

export const BadgeLabel: React.FC<BadgeLabelProps> = ({ label }) => {
  return <span className="badge-label">{label}</span>
}

export const BadgeIcon: React.FC<BadgeIconProps> = ({ icon }) => {
  return <img className="badge-icon" src={icon} alt="icon" />
}

const Badge: React.FC<BadgeProps> & { Label: typeof BadgeLabel; Icon: typeof BadgeIcon } = ({
  children,
  color = 'white',
  shape = 'pill',
}) => {
  const badgeClasses = ['badge', `badge-${shape}`, `btn-${color}`].join(' ')

  return <span className={badgeClasses}>{children}</span>
}

Badge.Label = BadgeLabel
Badge.Icon = BadgeIcon

export default Badge
