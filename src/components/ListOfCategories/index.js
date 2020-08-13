import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { categories as mockCategories } from '../../../api/db.json'
import Axios from 'axios'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState(mockCategories)
  useEffect(() => {
    Axios.get('https://rick-and-morty-library-api.vercel.app/categories').then(res => setCategories(res.data))
  }, [])

  const renderList = (fixed) => (
    <List className={fixed?'fixed':''}>
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
      {renderList(true)}
    </>
  )
}
