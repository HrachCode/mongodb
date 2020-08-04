import React from 'react'
import axios from 'axios'
import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};


const Demo = ({ redirect }) => {
  const onFinish = async values => {
  try {
    const data = await axios.post('/additem',values);
    redirect.push('/')
  } catch (error) {
    console.log(error);
    
  }
   
    
  };

  return (
   <div className="formwrap">
        <Form {...layout} name="nest-messages" onFinish={onFinish} >
      <Form.Item name={['user', 'name']} label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'img']} label="image" rules={[{required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'rating']} label="rating" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
     
      <Form.Item name={['user', 'description']} label="description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
   </div>
  );
};

export default Demo 