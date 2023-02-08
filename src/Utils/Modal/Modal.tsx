import { useState, forwardRef, useImperativeHandle } from 'react';

import { Modal } from 'antd';

const ModalWrapper = forwardRef((props: any, forwardedRef) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { children, title = '', className = '', onCloseCallBack =  null } = props;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    if (onCloseCallBack !== null) {
      onCloseCallBack();
    }
    setIsOpen(false);
  }

  useImperativeHandle(forwardedRef, () => ({
    openModal,
    closeModal,
  }));

  return (
    <>
      <Modal className={`${className ?  className : ''}`}  footer={null} onCancel={() =>{
        if (onCloseCallBack !== null) {
          onCloseCallBack();
        }
        setIsOpen(false);
      }} open={modalIsOpen} title={title}>
        {children}
      </Modal>
    </>
  );
});

export default ModalWrapper;
