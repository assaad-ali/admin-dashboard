import './userList.scss'
import { DataGrid } from '@mui/x-data-grid';

export const UserList = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'userName', headerName: 'Username', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
        {
          field: 'transaction',
          headerName: 'Transactions',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
      ];
      
      const rows = [
        { id: 1, userName: 'Jon Snow', email: 'Lorem@gmail.com', status: 'Active', transaction: '15.00$' },
        { id: 2, userName: 'Cersei Lannister', email: 'Lorem@gmail.com', status: 'Active', transaction: '15.00$' },
        { id: 3, userName: 'Jaime Lannister', email: 'Lorem@gmail.com', status: 'Active', transaction: '15.00$' },
        { id: 4, userName: 'Arya Stark', email: 'Lorem@gmail.com', status: 'Active', transaction: '15.00$' },
        { id: 5, userName: 'Daenerys Targaryen', email: 'Lorem@gmail.com', status: 'Active', transaction: '15.00$' },
        { id: 6, userName: 'Melisandre', email: 'Lorem@gmail.com', status: 'Active', transaction: '15.00$' },
        { id: 7, userName: 'Ferrara Clifford', email: 'Lorem@gmail.com', status: 'Active', transaction: '15.00$' },
        { id: 8, userName: 'Rossini Frances', email: 'Lorem@gmail.com', status: 'Active', transaction: '15.00$' },
        { id: 9, userName: 'Harvey Roxie', email: 'Lorem@gmail.com', status: 'Active', transaction: '15.00$' },
      ];
      
  return (
    <div className='userList'>
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
