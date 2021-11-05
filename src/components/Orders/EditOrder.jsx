import { Modal, Button } from 'react-bootstrap'
import OrderForm from './OrderForm'
import { React, useEffect,useState, useRef } from 'react'
import { createAPIEndpoint } from '../../API/API'



function EditOrder(props) {
    const [data, setData] = useState(null);
    const nodeRef = useRef(null);
    const inputconfig = {
      deliveryDate: false,
      complete: false,
      cost: true,
      amount: true,
      name: true,
      details: false,
      tel: true,
      address: true
    };
    const [isPending, setIsPending] = useState(false);
    const onSubmit = (data) => {
      setIsPending(true);
  
      createAPIEndpoint("Orders")
        .update(data.id, data)
        .then((res) => {
          console.log('update_result:', res.data)
          setIsPending(false); 
          const Myevent = {target:{id:'EDIT'}};         
          props.onHide(Myevent,data);
        })
        .catch((error) => {
          console.log(error);
        });
    };



    const fecthOrder = (dataid) =>{
       createAPIEndpoint('Orders').fetchById(dataid)
       .then(res => {
        let resdata = res.data;
        resdata.deliveryDate =  (new Date(resdata.deliveryDate)).toISOString().substr(0,10);;
        setData(resdata); 
      })
       .catch(error => {
             console.log(error);
       })

    }; 
    useEffect(() => { 
        fecthOrder(props.dataid);
    },[props.dataid]);
    const onChange = (event) => {
      setData({ ...data, [event.target.id]: event.target.value });
    };


    return (
      <div>
        <Modal
          animation={false}
          ref={nodeRef}
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          size="xl"
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Modificar: Orden
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {data && <OrderForm  onChange={onChange} data={data} inputconfig={inputconfig}></OrderForm>}
          </Modal.Body>
          <Modal.Footer>
            <div className="text-right">
            {!isPending && <Button variant="primary" type="submit" onClick={() => onSubmit(data)}>Modificar Orden</Button>}
              {isPending && <Button disabled>Salvando orden...</Button>}              
            </div>
            <div className="text-right">
            <Button id="EDIT" onClick={(e) => props.onHide(e)}>Close</Button>
            </div>

          </Modal.Footer>
        </Modal>
      </div>
    );
}

export default EditOrder


