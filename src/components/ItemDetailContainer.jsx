import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'
import { getProduct } from '../firebase/db'

export default function ItemDetailContainer(){
  const [detail, setDetail] = useState()
  const { id } = useParams()

  useEffect (() => {
    getProduct(id)
      .then(producto => setDetail(producto))
  },[id])

  return(
    <ItemDetail detail ={detail}/>
  )
}