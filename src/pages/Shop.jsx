import React from 'react'
import HeadBanner from '../components/HeadBanner/HeadBanner'
import Products from '../components/Products/Products'

export default function Shop() {
  return <>
    <HeadBanner link={"shop"}/>
    <Products />
  </>
}
