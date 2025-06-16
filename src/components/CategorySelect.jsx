import { useState, useEffect } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router';


export default function CategorySelect(){
  const [categories, setCategories]= useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then(cat => setCategories(cat));
  },[])
  
  return(
            <NavDropdown 
              title="Categorias" 
              id="basic-nav-dropdown"
              >
              {categories.map(cat=>(
                <NavDropdown.Item 
                  key={cat} 
                  to={`/category/${cat}`}
                  as={NavLink}
                  
                  >
                    {cat}</NavDropdown.Item>
              ))}
            </NavDropdown>
  )
}
