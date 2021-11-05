import React, { useState, useEffect } from "react";
import { createAPIEndpoint } from "../../API/API";

import { Table, Button, Alert } from "react-bootstrap";
import OrderStatus from "./OrderStatus";
import CreateOrder from "./CreateOrder";
import ViewOrder from "./ViewOrder";
import EditOrder from "./EditOrder";

function OrderTable() {
  const [orders, setOrders] = useState({ orders: [] });
  const [modalShowCreate, setModalShowCreate] = useState(false);
  const [dataid, setDataid] = useState(null);
  const [dataidedit, setDataidEdit] = useState(null);
  const [notifmess, setNotifMess] = useState("");

  const onHide = (e, neworder) => {
    console.log("onHide event", e);
    switch (e.target.id) {
      case "CREAR":
        if (neworder.id) {
          setOrders({ orders: [...orders.orders, neworder] });
          setNotifMess("Orden Creada");
        }
        setModalShowCreate(false);
        break;

      case "VIEW":
        setDataid(null);
        break;
      case "EDIT":
        if (neworder.id) {
          const filterOrder = orders.orders.filter(
            (order) => order.id !== dataidedit
          );
          setOrders({ orders: [...filterOrder, neworder] });
          setDataidEdit(null);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    createAPIEndpoint("Orders")
      .fechAll()
      .then((res) => {
        setOrders({ orders: res.data });
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (notifmess) {
      const handle = setTimeout(() => {
        setNotifMess("");
      }, 2000);
      return () => clearTimeout(handle);
    }
  }, [notifmess]);

  const onDelete = (e) => {
    createAPIEndpoint("Orders")
      .delete(e.id)
      .then(
        setOrders({
          orders: orders.orders.filter(function (order) {
            return order.id !== e.id;
          }),
        })
      )
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="pb-3">
        <div className="col-3">
          <div className="mt-2">
            <Button
              onClick={() => setModalShowCreate(true)}
              className="btn btn-info form-control text-white"
              data-toggle="modal"
            >
              Crear Orden
            </Button>
          </div>

          <div className="col-1">
            <h2>
              Manage <b>Orders</b>
            </h2>
          </div>
        </div>
        {notifmess && <Alert variant="info">{notifmess}</Alert>}
        <Table>
          <thead>
            <tr>
              <th>Entrega</th>
              <th>Costo</th>
              <th>Detalle</th>
              <th>Estatus</th>
              <th>Actiones</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(orders.orders) &&
              orders.orders.map((item) => (
                <tr key={item.id}>
                  <td>{item.deliveryDate}</td>
                  <td>{item.cost}</td>
                  <td>{item.details}</td>
                  <td>
                    <OrderStatus item={item}></OrderStatus>
                  </td>
                  <td>
                    <Button
                      onClick={() => setDataidEdit(item.id)}
                      variant="btn btn-sm btn-success"
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => setDataid(item.id)}
                      variant="btn btn-sm btn-info"
                    >
                      Details
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => onDelete(item)}
                      variant="btn btn-sm btn-danger"
                    >
                      Delete
                    </Button>
                  </td>
                  <td>
                    <Button variant="btn btn-sm btn-outline-info">
                      Abonar
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        { modalShowCreate && (<CreateOrder show={modalShowCreate} onHide={onHide}></CreateOrder>) }
        { dataid && (<ViewOrder show={Boolean(dataid)} dataid={dataid} onHide={onHide}/>) }
        { dataidedit && (<EditOrder show={Boolean(dataidedit)} dataid={dataidedit} onHide={onHide}/>) }
      </div>
    </div>
  );
}

export default OrderTable;
