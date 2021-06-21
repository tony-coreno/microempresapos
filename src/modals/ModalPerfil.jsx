import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
  } from "reactstrap";
  // import Axios from 'axios';
  import styled from 'styled-components';
const ModalPerfil = ({modal, setModal}) => {
  // const [data, setData] = useState([]);
  // const [venta, setVenta] = useState(0);
  const cuenta = sessionStorage.getItem("perfil");

  // const obtenerVentas = async () => {
  //   const id = sessionStorage.getItem("idusuario");
  //   const token = sessionStorage.getItem("token");
  //   const respuesta = await Axios.get("/ventas/ventasdia/" + id, {
  //     headers: { autorizacion: token },
  //   });
  //   console.log(respuesta.data);
  //   // console.log(ventas)
  //   await setData(respuesta.data)
  //   await total()
  // };



  // useEffect(async()=> {
  //   await obtenerVentas();
  // },[])

  // let total = async() => {
  //   let resultado =  await data.reduce((totales, producto)=>{
  //     return totales + producto.total
  //   },0)
  //  await setVenta(resultado);
  //   console.log(resultado)
  // }

    return (
      <>
      <Modal isOpen={modal}>
      <ModalHeader>
        Perfil
      </ModalHeader>
      <ModalBody>
      <div>
      <Ventas>Ventas realizadas</Ventas>
      <Ventas>{`$ ${0} `}</Ventas>

      <img src="https://img.icons8.com/officel/80/000000/person-male.png" alt="POS"/>
      <hr />
      <Ventas>Tipo de cuenta: <span className="badge badge-primary">{cuenta || 'Empleado'}</span></Ventas>
      </div>
      
      <hr />
      <div>
        <h3>{sessionStorage.getItem('nombre') || 'Invitado'}</h3>

      </div>
        </ModalBody>
      <ModalFooter>
         <Button color="dark" onClick={() => setModal(false)}>Cambiar foto</Button> 
         <Button color="warning" onClick={() => setModal(false)}>Cerrar</Button> 
      </ModalFooter>
      </Modal>    
    </>
     );
}

const Ventas = styled.h5`
  text-align: right;
`;

// const Cifra = styled.h6`
//   text-align: right;
//   color: #198236;
// `;



export default ModalPerfil;