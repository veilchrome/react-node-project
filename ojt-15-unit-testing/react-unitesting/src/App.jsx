import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Modal from "./components/Modal";
import { useState } from "react";
function App() {
  const [ModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <Navbar />
      <Form />
      <h1>Contoh Modal</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={ModalOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
}

export default App;
