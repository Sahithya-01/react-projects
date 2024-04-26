import { useState } from 'react'
import menu from './data'
import Menu from './Menu'
import Title from './Title'
import Categories from './Categories'

// let categories = new Set()
// menu.forEach((item) => {
//   categories.add(item.category)
// })
const categoriesList = ['all', ...new Set(menu.map((item) => item.category))]
console.log(categoriesList)
const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(categoriesList)
  //console.log(menuItems)
  const filterItems = (category) => {
    console.log(category)
    if (category === 'all') {
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
