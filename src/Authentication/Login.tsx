import { Button, message, Form, Input } from "antd";
import { useHistory } from "react-router";
const Login = (props: any) => {
  const { loginfunction } = props;
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = (values: any) => {
    if (values.username === "admin" && values.password === "admin123") {
      loginfunction(true);
      message.success("Login Successfully");
      history.push("/dashboard");
      form.resetFields();
    } else {
      message.error("Invalid Crendential");
      form.resetFields();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        margin: "auto",
        maxWidth: "500px",
      }}
    >
      <h1>Login</h1>
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
