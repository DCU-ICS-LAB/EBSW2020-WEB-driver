import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as basicActions from 'store/modules/basic';
import * as driverActions from 'store/modules/driver';
import {
    LoginBoard,
    FooterBox,
    InputContainer
  } from "components";
import SubmitBtn from '../components/SubmitBtn/SubmitBtn';
class LoginPage extends Component {

    _fbSelect = (idx) => {
        const { basicActions } = this.props;
        basicActions.fbSelect(idx);
    }
    _inputDriverId =(e) => {
        const {driverActions} = this.props;
        driverActions.inputDriverId(e.value);
    }
    _inputRouteNum =(e) => {
        const {driverActions} = this.props;
        driverActions.inputRouteNum(e.value);
    }
    _inputVehicleNum =(e) => {
        const {driverActions} = this.props;
        driverActions.inputVehicleNum(e.value);
    }
    _registerDriver=() => {
        const { 
            driverActions,
            driverInfo,
        } = this.props;

        driverActions.registerDriver({
            driver: {
                driverId : driverInfo.driverId,
                routeNum : driverInfo.routeNum,
                vehicleNum : driverInfo.vehicleNum,
            }
        });
        // driverActions.driverRegInputClear();
    }
    componentDidMount() {
    }

    render() {
        const {
            select,
            driverId, routeNum, vehicleNum
        } = this.props;

        return (
            <Fragment>
                <LoginBoard />
                <InputContainer 
                        label="기사 ID"
                        placeholder="ID"
                        onChange={this._inputDriverId}
                        value={driverId}
                />
                <InputContainer 
                    label="노선 번호"
                    placeholder="M0000"
                    onChange={this._inputRouteNum}
                    value={routeNum}
                />
                <InputContainer 
                    label="차량 번호"
                    placeholder="00가0000"
                    onChange={this._inputVehicleNum}
                    value={vehicleNum}
                />
                <SubmitBtn to='./main' text="로그인" onClick={this._registerDriver}/>
                <FooterBox select={select} fbSelect={this._fbSelect}/>
            </Fragment>
        )
    }
}


export default withRouter(
    connect(
        // props 로 넣어줄 스토어 상태값
        state => ({
            select: state.basic.getIn(['basic', 'select']),
            driverInfo :{
                driverId: state.driver.getIn(['driverInfo', 'driverId']),
                routeNum: state.driver.getIn(['driverInfo', 'routeNum']),
                vehicleNum: state.driver.getIn(['driverInfo', 'vehicleNum']),    
            },
        }),
        // props 로 넣어줄 액션 생성함수
        dispatch => ({
            basicActions: bindActionCreators(basicActions, dispatch),
            driverActions: bindActionCreators(driverActions, dispatch),
        })
    )(LoginPage)
)