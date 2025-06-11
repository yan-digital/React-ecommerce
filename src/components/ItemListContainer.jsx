import {useState, useEffect} from 'react'
import ItemList from './ItemList'

export default function ItemListContainer(){
  const [items, setItems] = useState([])

  useEffect (() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setItems(data.products));
  }, [])

  return (
    <ItemList items={items} />
  )
};