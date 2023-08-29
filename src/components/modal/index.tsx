import { useState, forwardRef, useImperativeHandle } from "react";
import { ConfigProvider, Modal } from "antd";
import CustomButton from "../button";

import { ModalTypes } from "./modal.types";

const CustomModal: React.FC<ModalTypes> = forwardRef(
  ({ as, children, triggerProps, title }, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };

    useImperativeHandle(ref, () => ({
      closeModal: () => {
        handleCancel();
      },
      openModal: () => {
        showModal();
      },
      isModalOpen,
    }));

    const Trigger = as ? as : CustomButton;

    return (
      <>
        <Trigger onClick={showModal} {...triggerProps} />
        <ConfigProvider
          theme={{
            token: {
              colorBgContainer: "bg-[red]",
              lineWidthFocus: 0,
            },
          }}
        >
          <Modal
            title={
              <div className="flex items-center justify-center font-Roboto text-[#B0B3BF]">
                <p>{title}</p>
              </div>
            }
            open={isModalOpen}
            onCancel={handleCancel}
            footer={
              <div
                className="flex items-center justify-center"
                onClick={handleCancel}
              ></div>
            }
          >
            <>{children}</>
          </Modal>
        </ConfigProvider>
      </>
    );
  }
);

export default CustomModal;
