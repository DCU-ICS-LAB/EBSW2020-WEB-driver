import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender } from 'redux-pender';

/*--------action type--------*/
const FB_SELECT = 'basic/FB_SELECT';

/*--------create action--------*/
export const fbSelect = createAction(FB_SELECT);

/*--------state definition--------*/
const initialState = Map({
    basic: Map({
        select: 1
    }),
});

/*--------reducer--------*/
export default handleActions({
    [FB_SELECT]: (state, action) => {
        return state.setIn(['basic', 'select'], action.payload);
    },
}, initialState);