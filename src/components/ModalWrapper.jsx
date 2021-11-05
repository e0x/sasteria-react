import React, { Children } from 'react'

const ModalWrapper = (props,{children}) => {
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
        {children}
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
    )
}

export default ModalWrapper
