import React, { useState } from 'react';
import { Button, Form, Container, Alert } from 'react-bootstrap';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleEnviar = () => {
    if (!nombre || !apellido || !dni || !email) {
      setAlertMessage('Completar todos los datos');
      setShowAlert(true);
    } else {
      setAlertMessage('Datos enviados');
      setShowAlert(true);
    }
  };

  return (
    <Container>
      <h1 style={{ backgroundColor: '#d53507', padding: '1rem', color: 'white' }}>
        Formulario
      </h1>
      <Form>
        <Form.Group controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="apellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="dni">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su DNI"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleEnviar}>
          Enviar
        </Button>
      </Form>

      {showAlert && (
        <Alert variant={alertMessage === 'Datos enviados' ? 'success' : 'danger'} className="mt-3">
          {alertMessage}
        </Alert>
      )}
    </Container>
  );
};

export default Formulario;