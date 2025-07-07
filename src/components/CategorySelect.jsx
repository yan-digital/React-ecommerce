import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router';


export default function CategorySelect(){

  return(
            <NavDropdown 
              title="Categorias" 
              id="basic-nav-dropdown"
              >              
                <NavDropdown.Item  
                  to='category/hogar'
                  as={NavLink}
                  >Hogar
                  </NavDropdown.Item>
                  <NavDropdown.Item  
                  to='category/indumentaria'
                  as={NavLink}
                  >Indumentaria
                  </NavDropdown.Item>
                  <NavDropdown.Item  
                  to='category/accesorios'
                  as={NavLink}
                  >Accesorios
                  </NavDropdown.Item>
            </NavDropdown>
  )
}
