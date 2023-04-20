import './userList.scss'
import { DataGrid } from '@mui/x-data-grid';

export const UserList = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 220, renderCell:(params)=>{
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
        { field: 'email', headerName: 'Email', width: 220 },
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
      ];
      
      const rows = [
        {
            id: 1,
            pic:"https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_1600,w_1600/v1553878910/user-876519/profile/x8y2hkybvuulsfaw2058.jpg",
            username: 'Jon Snow',
            email: 'Lorem@gmail.com',
            status: 'Active',
            transaction: '15.00$'
        },
        {
            id: 2,
            pic:"https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_1600,w_1600/v1553878910/user-876519/profile/x8y2hkybvuulsfaw2058.jpg",
            username: 'Cersei Lannister',
            email: 'Lorem@gmail.com',
            status: 'Active',
            transaction: '15.00$'
        },
        {
            id: 3,
            pic:"https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_1600,w_1600/v1553878910/user-876519/profile/x8y2hkybvuulsfaw2058.jpg",
            username: 'Jaime Lannister',
            email: 'Lorem@gmail.com',
            status: 'Active',
            transaction: '15.00$'
        },
        {
            id: 4,
            pic:"https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_1600,w_1600/v1553878910/user-876519/profile/x8y2hkybvuulsfaw2058.jpg",
            username: 'Arya Stark',
            email: 'Lorem@gmail.com',
            status: 'Active',
            transaction: '15.00$'
        },
        {
            id: 5,
            pic:"https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_1600,w_1600/v1553878910/user-876519/profile/x8y2hkybvuulsfaw2058.jpg",
            username: 'Daenerys Targaryen',
            email: 'Lorem@gmail.com',
            status: 'Active',
            transaction: '15.00$'
        },
        {
            id: 6,
            pic:"https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_1600,w_1600/v1553878910/user-876519/profile/x8y2hkybvuulsfaw2058.jpg",
            username: 'Melisandre',
            email: 'Lorem@gmail.com',
            status: 'Active',
            transaction: '15.00$'
        },
        {
            id: 7,
            pic:"https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_1600,w_1600/v1553878910/user-876519/profile/x8y2hkybvuulsfaw2058.jpg",
            username: 'Ferrara Clifford',
            email: 'Lorem@gmail.com',
            status: 'Active',
            transaction: '15.00$'
        },
        {
            id: 8,
            pic:"https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_1600,w_1600/v1553878910/user-876519/profile/x8y2hkybvuulsfaw2058.jpg",
            username: 'Rossini Frances',
            email: 'Lorem@gmail.com',
            status: 'Active',
            transaction: '15.00$'
        },
        {
            id: 9,
            pic:"https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_1600,w_1600/v1553878910/user-876519/profile/x8y2hkybvuulsfaw2058.jpg",
            username: 'Harvey Roxie',
            email: 'Lorem@gmail.com',
            status: 'Active',
            transaction: '15.00$'
        },
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
