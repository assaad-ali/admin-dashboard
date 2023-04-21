import './userList.scss'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../data/data';

export const UserList = () => {

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
                        <button className="userList-edit">Edit</button>
                        <DeleteOutlineIcon className='userList-delete'/>
                    </>
                )
            }
        }
      ];
      
  return (
    <div className='userList'>
        <DataGrid
        rows={userRows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}
