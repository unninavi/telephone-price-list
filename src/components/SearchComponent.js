import React from 'react';
import {connect} from 'react-redux';
import {searchAction} from '../actions';
import './css/search.css';

class SearchComponent extends React.Component {


    render() {
    const {searchAction, search} = this.props;
    return (
    <div>
        <input type="number"
          className="searchBox"
          placeholder = "Enter numer prefix to find cheapest cost"
          onChange={(e) => searchAction(e.target.value)}
          value={search} />
    </div>
    );
  }
}

function mapStateToProps(state) {
  return { value: state.search };
}

function mapDispatchToProps(dispatch) {
  return {
      searchAction: (searchVal) =>
         dispatch(searchAction(searchVal))
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
