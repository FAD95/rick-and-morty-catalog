import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMG = 'https://www.tonica.la/__export/1593033191339/sites/debate/img/2020/06/24/rick-and-morty-portada.jpg_423682103.jpg'

export const Category = ({ name = 'Category', cover = DEFAULT_IMG, path, emoji = '?' }) =>
  <Anchor href={path}>
    <Image src={cover} alt={name} />
    <span>{emoji}</span>
  </Anchor>
