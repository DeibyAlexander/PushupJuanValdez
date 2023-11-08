
import React, {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../assets/css/App.css';
import CollapsibleExample from "../components/navbar";


function Home() {

  const url = 'http://localhost:4000/juanvaldez/cafes'

  const [usuarios, setUsuarios] = useState([])
        
  const getUsuarios = async () => {
    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();

      setUsuarios(datos);
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  
  useEffect(()=>{
    getUsuarios()
},[])


  return (
    <div className="App">
      <CollapsibleExample>
      </CollapsibleExample>
        <div className="container-card">
          {usuarios.map((usuario, i) => (
            <Card className="card" style={{ width: '18rem' }} key={i}>
              <div className="contenido-card">
                <Card.Img variant="top" src={usuario.image} />
                <Card.Body>
                  <Card.Title>{usuario.name}</Card.Title>
                  <Card.Text>
                    {usuario.description}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{usuario.size}</ListGroup.Item>
                  <ListGroup.Item>{usuario.price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </div>
            </Card>
          ))}
   
        </div>
      
    </div>
  );
}

export default Home;
