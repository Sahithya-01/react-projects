import React from 'react'
import MenuItem from './MenuItem'

const Menu = ({ items }) => {
  // console.log(menuItems)
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />
      })}
    </div>
  )
}

export default Menu
