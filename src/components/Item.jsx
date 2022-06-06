import React from 'react'
import { Button, Card } from 'react-bootstrap';

export default function Item({camisetas}) {
    const { club, monto, imagen } = camisetas;

  return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={imagen} />
  <Card.Body>
    <Card.Title>`Camiseta oficial de {club}`</Card.Title>
    <Card.Text>
      {monto}
    </Card.Text>
    <Button variant="primary">Agregar al carrito</Button>
  </Card.Body>
</Card>
  )
}
