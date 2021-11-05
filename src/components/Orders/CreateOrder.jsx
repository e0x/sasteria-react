import { Modal, Button } from "react-bootstrap";
import OrderForm from "./OrderForm";
import { React, useState } from "react";
import { createAPIEndpoint } from "../../API/API";

function CreateOrder(props) {
  const inputconfig = {
    deliveryDate: false,
    complete: false,
    cost: false,
    amount: false,
    name: false,
    details: false,
    tel: false,
  }
  const [data, setData] = useState({});
  const [isPending, setIsPending] = useState(false);

  const onSubmit = (data) => {
    setIsPending(true);

    createAPIEndpoint("Orders")
      .create(data)
      .then((res) => {
        setIsPending(false);
        const Myevent = {target:{id:'CREAR'}};
        props.onHide(Myevent,res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onChange = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
  };
  console.log(props);
  return (
    <div>
      <Modal
        animation={false}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        size="xl"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Crear: Orden
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OrderForm
            onChange={onChange}
            data={data}
            inputconfig={inputconfig}
          ></OrderForm>
        </Modal.Body>
        <Modal.Footer>
            <div className='text-right'>
              {!isPending && <Button variant="primary" type="submit" onClick={() => onSubmit(data)}>Crear Orden</Button>}
              {isPending && <Button disabled>Creando orden...</Button>}
            </div>
            <div className='text-right'>
              <Button onClick={(e) => props.onHide(e)} id="CREAR">Close</Button>
            </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateOrder;
