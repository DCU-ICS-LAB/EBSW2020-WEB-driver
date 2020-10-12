import React from 'react';
import './ReserveBtn.css';
import { MdDone } from 'react-icons/md';

const ReserveBtn = ({ onClick, context }) => {
    return (
        <div className="ReserveBtn">
            <button className="inner" onClick={onClick}>
                <div className="ico">
                    <MdDone size={14} />
                </div>
                <span>{context}</span>
            </button>
        </div>
    );
};

export default ReserveBtn;