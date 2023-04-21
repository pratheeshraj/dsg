import React from 'react'
import Maintable from '../../components/maintable/Maintable'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Ordersdata = () => {
  return (
    <div className="list">
        <Sidebar/>
        <div className="listContainer">
            <Navbar/>
            <Maintable/>
        </div>  
    </div>
  )
}

export default Ordersdata