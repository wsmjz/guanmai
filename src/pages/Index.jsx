import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { history, useModel } from '@umijs/max';
// import { Button, NumScroll } from "@ping-home/butterfly";

function Pages() {
  const { user, setUser } = useModel('user');

  useEffect(() => {
    setUser({
      name: '默认用户'
    })
  }, [])

  const onFinish = (values) => {
    setUser({
      name: values?.username
    })
    history.push('/Shopping')
  }

  return (
    <div>
      {/* <Button>测试</Button>
      <NumScroll number={2356} animation={true} /> */}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input width={400} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            设置用户名
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Pages;
