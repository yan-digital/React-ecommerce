import Item from './Item'

export default function ItemList ({ items }){
  return(
    <div className= "grid grid-cols-3 gap-4 p-3">
      {items.map(prod=> <Item Item key={prod.id} prod={prod} />)}
    </div>
  )
}