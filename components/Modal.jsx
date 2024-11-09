import { X } from 'lucide-react';
import React from 'react';

const Modal = ({ showModal, setShowModal, title, body }) => {
    if (!showModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-end">
                    <button onClick={() => setShowModal(false)}><X /></button>
                </div>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                {body}
            </div>
        </div>
    );
}

export default Modal;
