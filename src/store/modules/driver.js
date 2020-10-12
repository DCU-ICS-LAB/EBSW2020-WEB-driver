import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender } from 'redux-pender';
// import * as DriverApi from 'store/api/driver';

/*--------action type--------*/
const INPUT_DRIVERID = 'driver/INPUT_DRIVERID';
const INPUT_ROUTENUM = 'driver/INPUT_ROUTENUM';
const INPUT_VEHICLENUM = 'driver/INPUT_VEHICLENUM';
const REGISTER_DRIVER = 'driver/REGISTER_DRIVER';
/*--------create action--------*/
export const inputDriverId = createAction(INPUT_DRIVERID);
export const inputRouteNum = createAction(INPUT_ROUTENUM);
export const inputVehicleNum = createAction(INPUT_VEHICLENUM);
export const registerDriver = createAction(REGISTER_DRIVER);

/*--------state definition--------*/
const initialState = Map({
    driverInfo: Map({
        driverId :'',
        routeNum : '',
        vehicleNum:''
    }),
});

/*--------reducer--------*/
export default handleActions({
    [INPUT_DRIVERID]: (state, action) => {
        console.log('driverId -> '+ action.payload);
        return state.setIn(['driverInfo', 'driverId'], action.payload);
    },
    [INPUT_ROUTENUM]: (state, action) => {
        console.log('routeNum -> '+ action.payload);
        return state.setIn(['driverInfo', 'routeNum'], action.payload);
    },
    [INPUT_VEHICLENUM]: (state, action) => {
        console.log('vehicleNum -> '+ action.payload);
        return state.setIn(['driverInfo', 'vehicleNum'], action.payload);
    },
    ...pender({
        type: REGISTER_DRIVER,
        onSuccess: (state, action) => {
            console.log("test registerdriverResult" + action.payload.data);
            return state;
        },
    }),
}, initialState);