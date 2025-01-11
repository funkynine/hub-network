import { useState, FC, useEffect } from 'react';
import { Button, Modal, Input } from 'antd';

const ModalEnterLink: FC = ({ state, setStateModal }) => {
    const [value, setValue] = useState('')
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Put here link to your daily report: ');

    const handleOk = () => {
        console.log("=>(Modal.tsx:12) value", value);
        setModalText('The modal will be closed ...');
        localStorage.setItem('dailyReportLink', value)
        setConfirmLoading(true);

        setTimeout(() => {
            setStateModal(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setStateModal(false);
    };

    return (
            <Modal
                title="Title"
                open={state}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
                <Input placeholder="Link" required={true} onChange={e => setValue(e.target.value)} />
            </Modal>
    );
};

export default ModalEnterLink;
