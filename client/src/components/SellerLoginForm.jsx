import { Button, Checkbox, Form, Input, Col, Row } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const SellerLoginForm = ({ url, logInSeller }) => {
	const navigate = useNavigate()

	const onFinish = (values) => {
    logInSeller(values)
	}
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24}} justify='end' align='middle' style={{ width: '25%', marginRight: 'auto', marginLeft: 'auto' }}>
      <Col span={24}>
        <div style={{ padding: '32px 24px', backgroundColor: '#F5F5F5' }}>
          <Form
            layout='vertical'
            size='middle'
            name="basic"
            initialValues={{
              remember: true,
            }}
            
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

						<Form.Item
            >
              <Button type="" htmlType="submit" style={{ backgroundColor: '#ECC13B', color: '#fff' }}>
                Submit
              </Button>
            </Form.Item>
						<ToastContainer/>
    			</Form>
        </div>
      </Col>
    </Row>
  );
};
export default SellerLoginForm;