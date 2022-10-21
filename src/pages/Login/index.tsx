import { Button, Form, Input } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import md5 from 'blueimp-md5'
import './css/index.scss'
import { login } from '@/api/login'
import { setToken } from '@/utils/token'
import { connect, useDispatch } from 'react-redux'
import { setUser } from '@/store/actions/user'
interface loginHandle {
  username: string
  password: string
}
interface ajaxInfo {
  token: string
}
const Login: React.FC = (props: any) => {
  const dispatch = useDispatch()
  let navigete = useNavigate()

  const loginHandle = ({ username, password }: loginHandle) => {
    const ajaxjson = {
      username,
      password: md5(password),
    }
    console.log(ajaxjson)

    login(ajaxjson).then((res: any) => {
      // console.log('login_res--', res);
      setToken(res.token)
      dispatch(setUser(res))
      props.setUser(res)
      localStorage.setItem('user', JSON.stringify(res))
      navigete('/first/home')
    })
  }
  const onFinish = (values: loginHandle) => {
    loginHandle(values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const initialValues = {
    /* username: 'admin',
      password: '123456', */
    username: '',
    password: '',
  }
  return (
    <div className="login_con">
      <Form
        name="basic"
        labelAlign="right"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ width: 300 }}
        className="form_in"
      >
        <Form.Item label="用户" name="username" rules={[{ required: true }]}>
          <Input size="large" placeholder="用户名" />
        </Form.Item>

        <Form.Item label="密码" name="password" rules={[{ required: true }]}>
          <Input.Password
            size="large"
            placeholder="密码"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button style={{ width: '100%' }} type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default connect(
  ({ user }) => ({
    user,
  }), //映射状态
  { setUser } //映射操作状态的方法
)(Login)
