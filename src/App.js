import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Modal,
  Container,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, personaje: "Naruto", anime: "Naruto" },
  { id: 2, personaje: "Johnny Joestar", anime: "Steel Ball Run" },
  { id: 3, personaje: "Edward Elric", anime: "Fullmetal Alchemist" },
  { id: 4, personaje: "Guts", anime: "Berserk" },
  { id: 5, personaje: "Alucard", anime: "Hellsing" },
  { id: 6, personaje: "Kenji Endo", anime: "20 Century Boys" },
  { id: 7, personaje: "Hina Amano", anime: "Hina Change" },
  { id: 8, personaje: "Tenma", anime: "Lost Canvas" },
  { id: 9, personaje: "Izuku Midoriya", anime: "My Hero Academia" },
  { id: 10, personaje: "Eren yeager", anime: "Attack on Titan" },
];

class App extends React.Component {
  state = {
    data: data,
    form:{
      id:'',
      personaje:'',
      anime:''
    },
    modalInsertar: false,
    modalEditar:false
  };

  handleChange=e=>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  }

  mostrarModalInsertar=()=>{
    this.setState({modalInsertar: true});
  };

  cerrarModalInsertar=()=>{
    this.setState({modalInsertar: false});
  };

  mostrarModalEditar=()=>{
    this.setState({modalEditar: true});
  };

  cerrarModalEditar=()=>{
    this.setState({modalEditar: false});
  };

  insertar=()=>{
    var valorNuevo = {...this.state.form};
    valorNuevo.id = this.state.data.length+1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({data:lista, modalInsertar:false});
  }
  render() {
    return (
      <>
        <Container>
          <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Insertar Nuevo Personaje</Button>
          <br />
          <br />
          <Table>
            <thead>
              <th>ID</th>
              <th>Personaje</th>
              <th>Anime</th>
              <th>Accion</th>
            </thead>
            <tbody>
              {this.state.data.map((elemento) => (
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.personaje}</td>
                  <td>{elemento.anime}</td>
                  <td>
                    <Button onClick={()=>this.mostrarModalEditar()} color="primary">Editar</Button>
                    {"  "}
                    <Button color="danger">Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot></tfoot>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalInsertar}>      
          <ModalHeader>
            <div>
              <h3>Insertar Registro</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>ID:</label>
              <input className="form-control" readOnly type="text" value={this.state.data.length+1} />
            </FormGroup>
            <FormGroup>
              <label>Personaje:</label>
              <input className="form-control" name="personaje" type="text" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>Anime:</label>
              <input className="form-control" name="anime" type="text" onChange={this.handleChange} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>this.insertar()}>Insertar</Button>
            <Button color="secondary" onClick={()=>this.cerrarModalInsertar()}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      
        <Modal isOpen={this.state.modalEditar}>
          <ModalHeader>
            <div>
              <h3>Editar registro</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>ID:</label>
              <input className="form-control" readOnly type="text"/>
            </FormGroup>
            <FormGroup>
              <label>Personaje:</label>
              <input className="form-control" name="personaje" type="text" />
            </FormGroup>
            <FormGroup>
              <label>Anime:</label>
              <input className="form-control" name="anime" type="text" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Editar</Button>
            <Button onClick={()=>this.cerrarModalEditar()} color="secondary">Cancelar</Button>
          </ModalFooter>
        </Modal>       
      </>
    );
  }
}

export default App;