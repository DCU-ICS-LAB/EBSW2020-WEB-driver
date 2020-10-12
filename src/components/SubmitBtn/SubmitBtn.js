import React, { Fragment, useEffect } from 'react';
import './SubmitBtn.css';
import Input from '@enact/moonstone/Input';
import { Link } from 'react-router-dom';
import Button from '@enact/moonstone/Button';

const SubmitBtn = ({ to,text, onClick }) => {

      return (
            <div className="login_btn">
                <Link to={to} >
                <Button onClick={onClick} size="small" >
                   {text}
                </Button>
                </Link>
            </div>
    )
}

export default SubmitBtn;