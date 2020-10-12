import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as basicActions from 'store/modules/basic';
import * as driverActions from 'store/modules/driver';
import {
    MainBoard,
    FooterBox,
    InputContainer
  } from "components";
import SubmitBtn from '../components/SubmitBtn/SubmitBtn';
import { handleAction } from 'redux-actions';
class MainPage extends Component {

    _fbSelect = (idx) => {
        const { basicActions } = this.props;
        basicActions.fbSelect(idx);
    }
   
    componentDidMount() {
    }

    render() {
        const {
            select,
        } = this.props;

        return (
            <Fragment>
                <MainBoard />
                
                <FooterBox select={select} fbSelect={this._fbSelect}>
                </FooterBox>
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
    )(MainPage)
)