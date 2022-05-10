import { Modal } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";


const ModalBebida = () => {
    const { modal,handleModalClick } = useBebidas()
  return (
    <Modal show={modal} onHide={handleModalClick} >
        <Modal.Body>
            <h1>Bebida</h1>
        </Modal.Body>
    </Modal>
  )
}

export default ModalBebida