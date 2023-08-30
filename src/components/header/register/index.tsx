import CustomButton from "../../button";
import { Input, Tooltip, Form } from "antd";
import {
  InfoCircleOutlined,
  UserOutlined,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";

const RegisterContent: React.FC<{ handleRegister: (e: string) => void }> = ({
  handleRegister,
}) => {
  const [form] = useForm();

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={async (e) => {
        await handleRegister(e);
        form.resetFields();
      }}
    >
      <Form.Item
        name="Username"
        rules={[{ required: true, message: "Please input your email..." }]}
      >
        <Input
          placeholder="Username"
          prefix={
            <UserOutlined className="site-form-item-icon text-[#7EC11F]" />
          }
          suffix={
            <Tooltip title="Enter your FarmVest username">
              <InfoCircleOutlined style={{ color: "#B0B3BF" }} />
            </Tooltip>
          }
        />
      </Form.Item>
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
            <Tooltip title="Enter your FarmVest email">
              <InfoCircleOutlined style={{ color: "#B0B3BF" }} />
            </Tooltip>
          }
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
          { min: 8 },
        ]}
        hasFeedback
      >
        <Input.Password
          placeholder="Enter-Password"
          prefix={
            <LockOutlined className="site-form-item-icon text-[#7EC11F]" />
          }
        />
      </Form.Item>

      <Form.Item
        name="confirm"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          { min: 8 },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="Confirm-Password"
          prefix={
            <LockOutlined className="site-form-item-icon text-[#7EC11F]" />
          }
        />
      </Form.Item>

      <div className="flex items-center justify-center">
        <CustomButton title="Get Started" />
      </div>
    </Form>
  );
};

export default RegisterContent;
