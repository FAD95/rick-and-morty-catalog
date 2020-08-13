import React from 'react'
import { GlobalStyles } from './styles/GloabalStyles'
import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

export const App = () =>
  <>
    <GlobalStyles />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
