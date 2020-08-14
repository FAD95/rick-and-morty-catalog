import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { AiFillExperiment } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

const DEFAULT_IMG = 'https://www.tonica.la/__export/1593033191339/sites/debate/img/2020/06/24/rick-and-morty-portada.jpg_423682103.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)
  const key = `like-${id}`
  const [like, setLike] = useState(() => {
    try {
      const liked = window.localStorage.getItem(key)
      console.log(liked)
      return liked
    } catch (e) {
      return false
    }
  })

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(ref.current)
    })
  }, [ref])

  const setLocalStorage = value => {
    try {
      setLike(value)
      window.localStorage.setItem(key, value)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <Article ref={ref}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt='' />
              </ImgWrapper>
            </a>
            <Button onClick={() => setLocalStorage(!like)}>
              {like ? <IconContext.Provider value={{ color: '#11bd32' }}><AiFillExperiment size='32px' /></IconContext.Provider>
                : <AiFillExperiment size='32px' />}
              {likes} likes!
            </Button>
          </>
      }
    </Article>
  )
}
