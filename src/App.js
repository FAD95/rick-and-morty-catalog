import React from 'react'
import { GlobalStyles } from './GloabalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { PhotoCard } from './components/PhotoCard'

export const App = () =>
  <>
    <GlobalStyles />
    <ListOfCategories />
    <PhotoCard />
  </>
