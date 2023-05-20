import './productList.scss'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from '../../data/data';
import {Link} from "react-router-dom";
import { useState } from 'react';

export const ProductList = () => {

    const [data, setData] = useState(productRows);

    const handleDelete = (id)=>{
        setData(data.filter((item)=> item.id !== id));

    };

    const columns = [
        {   field: 'id', headerName: 'ID', width: 90 },
        {   field: 'product', headerName: 'Product', width: 220, renderCell:(params)=>{
            return (
                <div className='productList-img'>
                    <img 
                        src={params.row.pic} 
                        alt=""
                        className='product-img'
                    />
                    {params.row.product}
                </div>
            )
        }},
        {   field: 'stock', headerName: 'Stock', width: 220 },
        {
            field: 'status',
          headerName: 'Status',
          width: 160,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params)=>{
                return (
                    <>
                        <Link to={'/product/' + params.row.id}>
                            <button className="productList-edit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className='peoductList-delete' onClick={()=> handleDelete(params.row.id)} />
                    </>
                )
            }
        }
      ];

  return (
    <div className='product-list'>
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
