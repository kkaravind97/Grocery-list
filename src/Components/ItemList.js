import React from 'react'
import {ListGroup,Button} from 'react-bootstrap';

const ItemList = ({items,handleCheck,handleDelete}) => {
  return (
    <div>
      <ListGroup className='mb-5'>
        {items.map((item)=>(
        <ListGroup.Item className='' key={item.id}>
        <input
           type="checkbox"
           onChange={()=>handleCheck(item.id)}
           checked={item.checked}
           className='form-check-input mx-2 float-start'
        />
        <label
           onDoubleClick={()=>handleDelete(item.id)}
           style={(item.checked) ? {textDecoration:"line-through"}:null}
           htmlFor=""
           className='ms-2 float-start'
        >{item.item}</label>
        <Button 
          variant="danger"
          className='float-end ms-2 fw-bold' 
          onClick={()=>handleDelete(item.id)}>Delete</Button>
      </ListGroup.Item>
      ))}
      </ListGroup>
    </div>
  )
}

export default ItemList
