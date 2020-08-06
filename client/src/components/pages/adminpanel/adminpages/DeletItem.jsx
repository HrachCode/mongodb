import React from 'react';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import axios from 'axios'
import { useSelector,shallowEqual } from 'react-redux'


export default function DeletItem({ deletItem,getItems }) {

  const deletItems =async()=>{
   const data = await axios.post('/deletmuve',{id:deletItem});
   getItems()
   
    }
    const { movies } = useSelector(state => state.adminpanel,shallowEqual)
   
   
    
    return (
        <div>
            <Button
          type="Dust Red "
          icon={<DeleteOutlined />}
         
          onClick={deletItems}
        />
        </div>
    )
}
