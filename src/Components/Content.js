import React from 'react'
import ItemList from './ItemList';

const Content = ({items,handleCheck,handleDelete}) => {
  return (
    <main>
      <div className='p-5 container'>
      <div className="div row">
        <div className="col-md-12 text-center">
        {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
       ) :(
        <div className='container'>
          <div className="row">
              <div className="col-md-12 text-center">
                <p className='text-danger fw-bold'>Sorry...Your list is empty !!!</p>
              </div>
          </div>
        </div>
      )}
        </div>
      </div>
      </div>
    </main>
  )
}

export default Content
