import { Modal, Button } from "react-bootstrap";
import { postCreateUser } from "../services/UserServices";
import "react-toastify/dist/ReactToastify.css";

const ModalConfirm = (props) => {
  const { show, handleClose, dataUserDelete } = props;

  const confirmDelete = () => {};
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            this action can't be undone! Do you want to delete this user? <br />
            <b>email = {dataUserDelete.email} ?</b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => confirmDelete()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalConfirm;
