import {createSelector} from 'reselect';
//import {fromJS} from 'immutable';

const makeSelectApp = (state) => state;

const makeSelectList  = () => createSelector(
    makeSelectApp,
    (substate) => {

        const search = substate.search;
        return search.length<1
        ? substate.list
        : substate.list.filter((obj) => {
            return obj.numberprefix===search;
        });
    }
);
const makeSelectSearch  = () => createSelector(
    makeSelectApp,
    (substate) => {
        return substate.search
    }
);

export default makeSelectApp;

export{
    makeSelectList,
    makeSelectSearch
};
