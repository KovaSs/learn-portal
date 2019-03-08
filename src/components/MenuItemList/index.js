import React from 'react'
import MenuItem from '../MenuItem'
import './menuItemList.scss'


const MenuItemList = ({lesson}) => {
  const menuItems = lesson.map(item => {
    return <MenuItem key={item.id} itemInfo={item}/>
  })
  return(
    <ul className="menu-list">
      { menuItems }
    </ul>
  )
}

export default MenuItemList