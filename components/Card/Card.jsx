import React from 'react'
import CardIcon from './CardIcon'
import CardTitle from './CardTitle'

const Card = ({ title, children }) => {
  return (
    <div className="card">
      <CardIcon />
      <CardTitle title={title} />
      <div className="card-children">{children}</div>
    </div>
  )
}

export default Card
