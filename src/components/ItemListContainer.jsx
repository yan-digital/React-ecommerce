import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import { getProducts, getProductsByCategory } from '../firebase/db'
import ItemList from './ItemList'
import { useContext } from 'react'
import { LoaderContext } from '../context/LoaderContext'
import Swal from 'sweetalert2';

export default function ItemListContainer(){
  const [items, setItems] = useState([])
  const {categoryName} = useParams()
  const { showLoader, hideLoader } = useContext(LoaderContext)

  useEffect(() => {
    showLoader()

    const fetchData = categoryName ? getProductsByCategory(categoryName) : getProducts();

    fetchData
      .then((products) => {
        setItems(products)
      })
      .catch(() => {
        Swal.fire({
        icon: 'error',
        title: 'Uy...',
        text: 'No pudimos cargar los productos 😢',
        confirmButtonColor: '#d33',
        confirmButtonText: 'Reintentar',
  });
      })
      .finally(() => {
        hideLoader()
      })

  }, [categoryName])

  return (
    <ItemList items={items} />
  )
}