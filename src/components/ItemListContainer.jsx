import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import ItemList from './ItemList'

export default function ItemListContainer(){
  const [items, setItems] = useState([])
  const {id} = useParams()

  useEffect (() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setItems(data.products));

    fetch(`https://dummyjson.com/products/category/${id}`)
      .then(res => res.json())
      .then(console.log);
},[id])

  return (
    <ItemList items={items} />
  )
};