import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { categories as mockCategories } from '../../../api/db.json'
import Axios from 'axios'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState(mockCategories)
  const [showFixed, setShowFixed] = useState(false)
  useEffect(() => {
    Axios.get('https://rick-and-morty-library-api.vercel.app/categories').then(res => setCategories(res.data))
  }, [])
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
        categories.map(category => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed?renderList(showFixed):null}
    </>
  )
}
