import React, { Fragment, useEffect } from 'react';
import './FooterBox.css';
import { Link } from 'react-router-dom';
// import route from 'resources/route.png'
// import driveInfo from 'resources/driveInfo.png'
// import reserve from 'resources/reserve.png'
// import info from 'resources/info.png'
// import notice from 'resources/notice.png'
import Clock from 'react-live-clock';

const FooterBoxItem = ({children, isSelect, text, href,iconsrc,onClick}) => {
    return (
        <Link to={href}>
            <button className="FooterBoxItem" 
            id={isSelect? 'select': ''} 
            onClick={onClick}
            disabled={isSelect}>
                <div>{children}</div>
                <div><img src={iconsrc}/></div>
                <div><strong>{text}</strong></div>
            </button>
        </Link>
    )
}

const FooterBox = ({select, fbSelect}) => {

    return (
        <div className="Footer-Box">
            <div className="time-box">
            <br/>
            <strong><Clock format={'HH:mm'} id="time" ticking={true} /></strong>
            
            <br/>
            <Clock format={'YYYY.MM.DD, ddd'} id="date" ticking={true} />
            </div>
            {/* <FooterBoxItem text="로그인" href="/" 
            iconsrc={route}
            onClick={()=>fbSelect(1)} isSelect={select==1} 
            />
            <FooterBoxItem text="" href="/driveInfo" 
            iconsrc={driveInfo}
            onClick={()=>fbSelect(2)} isSelect={select==2} 
            />
            <FooterBoxItem text="하차예약" href="/reserve" 
            iconsrc={reserve}
            onClick={()=>fbSelect(3)} isSelect={select==3} 
            />
            <FooterBoxItem text="이용안내" href="/info" 
            iconsrc={info}
            onClick={()=>fbSelect(4)} isSelect={select==4} 
            />
            <FooterBoxItem text="공지사항" href="/notice" 
            iconsrc={notice}
            onClick={()=>fbSelect(5)} isSelect={select==5} 
            /> */}
        </div>
    )
}

export default FooterBox;