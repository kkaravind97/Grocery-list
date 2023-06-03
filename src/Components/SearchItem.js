import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <div onSubmit={(e)=>e.preventDefault()}>
      <div className="container mt-4">
        <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
            <h4 className='text-center'>Search Items</h4>
        <form className="d-flex" role="search">
        <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Search Items" 
            aria-label="Search" 
            role='searchbox'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}/>
      </form>
        </div>
        <div className="col-md-3"></div>
      </div>
      </div>
    </div>
  )
}

export default SearchItem
