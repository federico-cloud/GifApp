import { useState } from "react"
import { AddCategory } from "./components/AddCategory"


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([])
  
  const handleAddCategory = () => {
    setCategories([...categories]);
  }
 
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory setCategories={setCategories}/>

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
