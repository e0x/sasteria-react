import React from 'react'
import { Row, Col,  Form} from 'react-bootstrap'

function OrderForm(props) {

    return (

        <Form>
            <Row className="align-items-center">
                <Col className='col-6'>
                    <Form.Group as={Row} className="mb-3" controlId="tel">
                        <Form.Label column sm={2}>
                            Telefono
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" placeholder="809-568-2222" value={props.data.tel} onChange={props.onChange}  readOnly={props.inputconfig.tel}/>                            
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="name">
                        <Form.Label column sm={2}>
                            Nombre:
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" placeholder="Nombre" value={props.data.name} onChange={props.onChange} readOnly={props.inputconfig.name}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="address">
                        <Form.Label column sm={2}>
                            Direccion:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" placeholder="Direccion" value={props.data.address} onChange={props.onChange} readOnly={props.inputconfig.address}/>
                        </Col>
                    </Form.Group>
                </Col>

                <Col className='col-6'>
                    <Form.Group as={Row} className="mb-3" controlId="deliveryDate">
                        <Form.Label column sm={2}>
                            Entrega:
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="date"  value={props.data.deliveryDate} onChange={props.onChange} readOnly={props.inputconfig.deliveryDate}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="cost">
                        <Form.Label column sm={2}>
                            Costo:
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control type="number" placeholder="Costo" value={props.data.cost} onChange={props.onChange} readOnly={props.inputconfig.cost}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="amount">
                        <Form.Label column sm={2}>
                            Abono:
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control type="number" placeholder="Abono" value={props.data.amount} onChange={props.onChange} readOnly={props.inputconfig.amount}/>
                        </Col>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group as={Row} className="mb-3" controlId="details">
                <Form.Label column sm={2}>
                    Detalles:
                </Form.Label>
                <Col sm={15}>
                    <Form.Control as="textarea" placeholder="Detalles" value={props.data.details} onChange={props.onChange} readOnly={props.inputconfig.details}/>
                </Col>
            </Form.Group>

            <Form.Group className="mb-3" controlId="complete">
                <Form.Check type="checkbox" label="Complete" value={props.data.complete} onChange={props.onChange} readOnly= {props.inputconfig.complete}/>
            </Form.Group>
            

        </Form>
    
    )
}

export default OrderForm

