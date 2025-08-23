import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

export default function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Windows name="cabin-form">
        <CreateCabinForm />
      </Modal.Windows>

      <Modal.Open opens="table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Windows name="table">
        <CreateCabinForm />
      </Modal.Windows>
    </Modal>
  );
}
