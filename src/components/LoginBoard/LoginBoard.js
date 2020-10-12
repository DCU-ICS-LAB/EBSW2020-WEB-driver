import React, { Fragment, useEffect } from 'react';
import './LoginBoard.css';
import Input from '@enact/moonstone/Input';
import Dialog from '@enact/moonstone/Dialog';
import Button from '@enact/moonstone/Button';
import logo from 'resources/logo.png'

const LoginBoard = ({ }) => {
      return (
        <div className="Login">
            <div className="out-background">
                <div className="inside-background">
                    <div style={{margin:'5px 0 5px 50px'}}><img src={logo} width={350} /></div>
                    {/* <div className="input-box">
                        <label>
                            <span><strong>기사 ID</strong></span>
                            <Input 
                                placeholder="ID" 
                                onChange={onChange} 
                                size="small" 
                                type="text"
                                value={driverId} />
                        </label>
                        <label>
                            <span><strong>노선 번호</strong></span>
                            <Input 
                                placeholder="M0000"
                                onChange={onChange} 
                                size="small" 
                                type="text"
                                value={routeNum} />
                        </label>
                        <label>
                            <span><strong>차량 번호</strong></span>
                            <Input 
                                placeholder="00가0000" 
                                onChange={onChange} 
                                size="small" 
                                type="text" 
                                value={vehicleNum}/>
                        </label>
                        
                    </div> */}
                    
                </div>
            </div>
        </div>
    )
}

export default LoginBoard;