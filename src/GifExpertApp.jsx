import { useState } from "react"
import { AddCategory } from "./components/AddCategory"


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([])
  
  const handleAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);
  }
 
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={handleAddCategory}
      />

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
