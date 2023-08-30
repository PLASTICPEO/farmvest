import { Input, Tooltip, Form } from "antd";
import {
  InfoCircleOutlined,
  MailOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import CustomButton from "../../button";

const LogInContent: React.FC<{ handleLogin: (e: string) => void }> = ({
  handleLogin,
}) => {
  const [form] = useForm();

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  return (
    <Form
      name="nest-messages"
      form={form}
      layout="vertical"
      onFinish={async (e) => {
        await handleLogin(e);
        form.resetFields();
      }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name="Email"
        rules={[
          {
            required: true,
            message: "Please input your email...",
            type: "email",
          },
        ]}
      >
        <Input
          placeholder="Enter Email"
          prefix={
            <MailOutlined className="site-form-item-icon text-[#7EC11F]" />
          }
          suffix={
            <Tooltip title="Enter your email">
              <InfoCircleOutlined style={{ color: "#B0B3BF" }} />
            </Tooltip>
          }
        />
      </Form.Item>
      <Form.Item
        name="password"
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "Please input your password...",
          },
          { min: 8 },
        ]}
      >
        <Input.Password
          prefix={
            <LockOutlined className="site-form-item-icon text-[#7EC11F]" />
          }
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <div className="flex items-center justify-center">
        <CustomButton title="Sign In" isWhite />
      </div>
    </Form>
  );
};

export default LogInContent;
