import React from 'react'
import { ImgWrapper, Img, Button } from './styles'
import { AiFillExperiment } from 'react-icons/ai'

const DEFAULT_IMG = 'https://www.tonica.la/__export/1593033191339/sites/debate/img/2020/06/24/rick-and-morty-portada.jpg_423682103.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} alt='' />
        </ImgWrapper>
      </a>
      <Button>
        <AiFillExperiment size='32px' />
        {likes} likes!
      </Button>
    </article>
  )
}
