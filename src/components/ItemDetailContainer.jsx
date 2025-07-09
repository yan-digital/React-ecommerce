import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'
import { getProduct } from '../firebase/db'
import { useContext } from 'react'
import { LoaderContext } from '../context/LoaderContext'

export default function ItemDetailContainer(){
  const { showLoader, hideLoader } = useContext(LoaderContext)
  
  const [detail, setDetail] = useState()
  const { id } = useParams()

  useEffect (() => {
    showLoader()

    setTimeout(() => {
      getProduct(id)
        .then(producto => {
          setDetail(producto)
          hideLoader()
    })}, 1000)
  },[id])

  return(
    <ItemDetail detail ={detail}/>
  )
}