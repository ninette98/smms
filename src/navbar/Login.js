import React, { Component } from 'react';
import {
    Form, Icon, Input, Modal, Button, Checkbox,
  } from 'antd';

class Login extends Component {
  state = {
    visible: false,
    confirmLoading: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      this.setState({
        ModalText: 'The modal will be closed after two seconds',
        confirmLoading: true,
      });
      setTimeout(() => {
        this.setState({
          visible: false,
          confirmLoading: false,
        });
      }, 2000);
      });
    }


  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible, confirmLoading } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button  onClick={this.showModal}>
          Login
        </Button>
        <Modal
          title="Login"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item> {/*email input */}
            {getFieldDecorator('Email', {
              rules: [{ required: true, message: 'Please input your email!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Email" />
            )}
          </Form.Item>
          <Form.Item> {/*mdp input */}
            {getFieldDecorator('Mot de passe', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Mot de passe" />
            )}
          </Form.Item>
          <Form.Item> {/* remember input*/}
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Se souvenir</Checkbox>
            )}
            <br></br>{/* choose to signup or recover account */}
            <a className="login-form-forgot" href="/">Mot de passe oublié</a>
            &nbsp; Ou &nbsp; <a href="/">s'inscrire</a>
          </Form.Item>
        </Form>
        </Modal>
      </div>
    );
  }
}
const Loginn = Form.create({ name: 'normal_login' })(Login);
export default Loginn;