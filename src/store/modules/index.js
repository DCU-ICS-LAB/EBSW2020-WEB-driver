import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import { connectRouter } from 'connected-react-router'

import basic from 'store/modules/basic';
import driver from 'store/modules/driver';

export default (history) => combineReducers({
    router: connectRouter(history),
    basic,
    driver,
    pender: penderReducer, //pender 리듀서 추가
});