import { GET_LIST, SEARCH } from '../constants';

const initialState = {
    list:[{
      "id":1,
      "Operator": "Airtel",
      "cost":"0.9",
      "numberprefix":"1"
    },{
      "id":2,
      "Operator": "Airtel",
      "cost":"5.1",
      "numberprefix":"268"
    },{
      "id":3,
      "Operator": "Airtel",
      "cost":"0.17",
      "numberprefix":"46"
    },{
      "id":4,
      "Operator": "Airtel",
      "cost":"0.0",
      "numberprefix":"4620"
    },{
      "id":5,
      "Operator": "Airtel",
      "cost":"0.15",
      "numberprefix":"468"
    },{
      "id":6,
      "Operator": "Airtel",
      "cost":"0.15",
      "numberprefix":"4631"
    },{
      "id":7,
      "Operator": "Airtel",
      "cost":"0.9",
      "numberprefix":"4673"
    },
    {
      "id":8,
      "Operator": "Airtel",
      "cost":"1.1",
      "numberprefix":"46732"
    },
    {
      "id":9,
      "Operator": "Idea",
      "cost":"0.92",
      "numberprefix":"1"
    },
    {
      "id":10,
      "Operator": "Idea",
      "cost":"0.5",
      "numberprefix":"44"
    },
    {
      "id":11,
      "Operator": "Idea",
      "cost":"0.2",
      "numberprefix":"46"
    },
    {
      "id":12,
      "Operator": "Idea",
      "cost":"1.0",
      "numberprefix":"467"
    },
    {
      "id":13,
      "Operator": "Idea",
      "cost":"1.2",
      "numberprefix":"48"
    }
  ],
    search:"",
}

export const reducer = (state=initialState,action) => {
    switch(action.type){
        case SEARCH:   //console.log(state.bookList, state);
                            let newsearch = action.payload;
                            return {...state, search: newsearch}
        case GET_LIST: {//console.log(action.type, action.payload)
                                return {...state}
                            }

        default:return state;
    }
}
