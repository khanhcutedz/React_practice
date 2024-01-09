import { Modal, Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { deleteUser } from "../services/UserServices";
import { toast } from "react-toastify";


const ModalConfirm = (props) => {
  const { show, handleClose, dataUserDelete, handerDeleteUserFromModal} = props;

  const confirmDelete = async () => {
    let res = await deleteUser(dataUserDelete.id);
    if (res && +res.statusCode === 204) {
        toast.success("Delete user succeed!");
        handerDeleteUserFromModal(dataUserDelete);  // dataUserDelete: user va handerDeleteUserFromModal show ra listUsers tru thg user 
        handleClose();
    }
    else{
        toast.error("Error delete user");
    }
    console.log(">>> check res: ", res);
  };
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
