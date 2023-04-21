import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { handleDownloadExcel } from "./Excel";
import "./excel.css"

const Maintable = () => {
        const Columns = [
                {
                    name: 'Name',
                    selector: row => row.name,
                    sortable: true
                },
                {
                    name: 'Email',
                    selector: row => row.email,
                    sortable: true
                },
                {
                    name: 'Age',
                    selector: row=> row.age,
                    sortable: true
                }
            ];
            const data =[
                {
                    id: 1,
                    name: 'Manikanta',
                    email: 'manikata@gmail.com',
                    age: '26'
                },
                {
                    id: 2,
                    name: 'Deepika',
                    email: 'deepika@gmail.com',
                    age: '20'
                },
                {
                    id: 3,
                    name: 'Yashu',
                    email: 'yashu@gmail.com',
                    age: '26'
                },
                {
                    id: 4,
                    name: 'Raghav',
                    email: 'raghav@gmail.com',
                    age: '46'
                },
                {
                    id: 5,
                    name: 'Savipriya',
                    email: 'savipriya@gmail.com',
                    age: '44'
                },
                {
                    id: 6,
                    name: 'Abhishek',
                    email: 'abhishek@gmail.com',
                    age: '20'
                },
                {
                    id: 7,
                    name: 'Pragnya',
                    email: 'pragnya@gmail.com',
                    age: '21'
                },
                {
                    id: 8,
                    name: 'Madhuar',
                    email: 'madhuar@gmail.com',
                    age: '22'
                },
                {
                    id: 9,
                    name: 'Sahana',
                    email: 'sahana@gmail.com',
                    age: '23'
                },
                {
                    id: 10,
                    name: 'Anusha',
                    email: 'anusha@gmail.com',
                    age: '24'
                },
                {
                    id: 11,
                    name: 'Vishalakshi',
                    email: 'vishalakshi@gmail.com',
                    age: '25'
                },
                {
                    id: 12,
                    name: 'Archana',
                    email: 'archana@gmail.com',
                    age: '26'
                }
            ];

            const downloadExcel = () => {
                handleDownloadExcel(records,"SHEET_NAME","MY_FILENAME")  
            };
            const[records, setRecords] =useState(data);

            function handleFliter(event){
                const newData= data.filter(row => {
                    return row.name.toLowerCase().includes(event.target.value.toLowerCase())
                })
                setRecords(newData)
            }
  return (
    <div className='table-container'>
        <div style={{textAlign:"end",margin:"20px 0",padding:"8px 15px"}}><input type="text" onChange={handleFliter} /></div>
        <button type={'button'} className="download-excel" text="Excel" onClick={downloadExcel}>Download Excel Data</button>
        <DataTable
           columns={Columns}
             data={records}
            //  selectableRows
             fixedHeader
             pagination
        ></DataTable>
    </div>
  )
}

export default Maintable