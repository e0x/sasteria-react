import React from 'react'
import { Badge } from 'react-bootstrap';





function OrderStatus(props) {
    const currentdate = new Date();
    const dateitem = new Date(props.item.deliveryDate);
    
    if (props.item.complete) {
        return  <Badge className="bg bg-primary">Completado</Badge>     
    } else if (currentdate > dateitem ) {
        return <Badge className="bg bg-danger">Retrasado</Badge>
    } else {
        return <Badge className="badge badge-warning">Pendiente</Badge>
    }

}


export default OrderStatus
