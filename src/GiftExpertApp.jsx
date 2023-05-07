import { useState } from "react"
import { AddCategory } from "./components/addCategory"

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])
  
  const handleAddCategory = () => {
    setCategories([...categories]);
  }
 
  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory/>
      <button onClick={handleAddCategory}>Add categorie</button>
      <ol>
        {
          categories.map(categorie => {
            return <li key={categorie}>{categorie}</li>
          })
        }
      </ol>
    </>
  )
}
