import React from 'react';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import axios from 'axios'


export default function DeletItem({ deletItem,getItems }) {

  const deletItems =async()=>{
   const data = await axios.post('/deletmuve',{id:deletItem});
   getItems()
   
    }
    
    
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
