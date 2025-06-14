import ItemCount from './ItemCount'

export default function ItemDetail({ detail }){
  return(
    <div>
      <h2>{detail?.title}</h2>
      <img 
        src={detail?.thumbnail} 
        alt={detail?.nombre} />
      <p>{detail?.description}</p>
      <p>{detail?.price}</p>
      <ItemCount/>
    </div>
  )
}