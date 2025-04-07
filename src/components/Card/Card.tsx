import React, { memo } from 'react'
import { FiPackage } from 'react-icons/fi'

interface CardProps {
  title: string
  children: React.ReactNode
  icon?: React.ReactNode
}

const Card: React.FC<CardProps> = memo(({ title, children, icon }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon || <FiPackage size={58} aria-hidden="true" />}</div>
      <h3 className="card-title">{title}</h3>
      <div className="card-children">{children}</div>
    </div>
  )
})

Card.displayName = 'Card'

export default Card
