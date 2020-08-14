import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import Axios from 'axios'
import NProgress from 'nprogress'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    NProgress.configure({ parent: '#category-list' })
    NProgress.start()
    Axios.get('https://rick-and-morty-library-api.vercel.app/categories')
      .then(res => {
        NProgress.done()
        setLoading(false)
        setCategories(res.data)
      })
  }, [])
  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (

    <List fixed={fixed} id='category-list'>
      {
        loading ? <Item key='loading'><Category /></Item>
          : categories.map(category => (
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
      {showFixed ? renderList(showFixed) : null}
    </>
  )
}
