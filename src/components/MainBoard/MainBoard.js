import React, { Fragment } from 'react';
import './MainBoard.css';
import Input from '@enact/moonstone/Input';
import Dialog from '@enact/moonstone/Dialog';
import Button from '@enact/moonstone/Button';

import {
    SubmitBtn
  } from "components";

const MainBoard = ({onClick }) => {
      return (
        <div className="MainBoard">
            <div className="out-background">
                <div className="inside-background">
                    
                <SubmitBtn id="btn" to='./' text="로그아웃" onClick={onClick}/>
                </div>
            </div>
        </div>
    )
}

export default MainBoard;