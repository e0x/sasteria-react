import { Modal, Row, Col, Button } from 'react-bootstrap'
import OrderForm from './OrderForm'
import { React, useEffect,useState, useRef } from 'react'
import { createAPIEndpoint } from '../../API/API'



function ViewOrder(props) {

    const [data, setData] = useState(null);
    const nodeRef = useRef(null);

 const inputconfig = {
   deliveryDate: true,
   complete: true,
   cost: true,
   amount: true,
   name: true,
   details: true,
   tel: true,
   address: true
 };
    
    const fecthOrder = (dataid) =>{
       createAPIEndpoint('Orders').fetchById(dataid)
       .then(res => {
        var data = res.data;
        data.deliveryDate =  (new Date(data.deliveryDate)).toISOString().substr(0,10);;
         setData(data);
        } )
       
       .catch(error => {
             console.log(error);
       })

    }; 
    useEffect(() => { 
        fecthOrder(props.dataid);
    },[props.dataid]);
    


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
              Detalle: Orden
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {data && <OrderForm data={data} inputconfig={inputconfig}></OrderForm>}
          </Modal.Body>
          <Modal.Footer>
            <Row>
              <Col></Col>
              <Col>
                <Button id="VIEW" onClick={(e) => props.onHide(e)}>Close</Button>
              </Col>
            </Row>
          </Modal.Footer>
        </Modal>
      </div>
    );
}

export default ViewOrder


