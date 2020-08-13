import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { categories as mockCategories } from '../../../api/db.json'
import Axios from 'axios'

function useCategoriesData(){
  const [categories, setCategories] = useState(mockCategories)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    Axios.get('https://rick-and-morty-library-api.vercel.app/categories')
    .then(res =>{ 
      setCategories(res.data)
      setLoading(false)
  })
  }, [])
  return {categories, loading}
}

export const ListOfCategories = () => {
  const {categories, loading} = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)
  
  useEffect(()=>{
    const onScroll =()=>{
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return()=>document.removeEventListener('scroll', onScroll)
  },[showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading? 
        <Item key={'loading'}>
          <Category/>
        </Item>:
        categories.map(category => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))
      }
    </List>
  )

  // if(loading){
  //   return 'Cargando...'
  // }

  return (
    <>
      {renderList()}
      {showFixed?renderList(showFixed):null}
    </>
  )
}
