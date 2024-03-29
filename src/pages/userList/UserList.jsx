import './userList.scss'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../data/data';
import {Link} from "react-router-dom";
import { useState } from 'react';

export const UserList = () => {

    const [data, setData] = useState(userRows);

    const handleDelete = (id)=>{
        setData(data.filter((item)=> item.id !== id));

    };
    const columns = [
        {   field: 'id', headerName: 'ID', width: 90 },
        {   field: 'user', headerName: 'User', width: 220, renderCell:(params)=>{
            return (
                <div className='userList-user'>
                    <img 
                        src={params.row.pic} 
                        alt=""
                        className='userList-img'
                    />
                    {params.row.username}
                </div>
            )
        }},
        {   field: 'email', headerName: 'Email', width: 220 },
        {
            field: 'status',
          headerName: 'Status',
          width: 160,
        },
        {
            field: 'transaction',
            headerName: 'Transactions',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params)=>{
                return (
                    <>
                        <Link to={'/user/' + params.row.id}>
                            <button className="userList-edit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className='userList-delete' onClick={()=> handleDelete(params.row.id)} />
                    </>
                )
            }
        }
      ];
      
  return (
    <div className='userList'>
        <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}
