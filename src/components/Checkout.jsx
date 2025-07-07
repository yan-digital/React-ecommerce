import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { createOrden } from '../firebase/db'
import { serverTimestamp } from 'firebase/firestore'

export default function Checkout() {
  const { cart } = useContext(CartContext)

  const handleSubmit = e => {
    e.preventDefault()

    const form = e.target
    const email = form.email.value
    const nombre = form.nombre.value
    const apellido = form.apellido.value
    const telefono = form.telefono.value

    createOrden({
      email,
      nombre,
      apellido,
      telefono,
      products:cart,
      time: serverTimestamp()
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control placeholder="Pepito" required/>
        </Form.Group>

        <Form.Group as={Col} controlId="apellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control placeholder="Prego" required/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="telefono">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="tel" placeholder="1122334456" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="pepitoprego@mail.com" required/>
      </Form.Group>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Confirmar compra" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Finalizar compra
      </Button>
    </Form>
  );
}
