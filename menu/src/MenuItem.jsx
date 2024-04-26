import React from 'react'

const MenuItem = ({ img, title, price, desc }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">{price}</span>
        </header>
      </div>
    </article>
  )
}

export default MenuItem
