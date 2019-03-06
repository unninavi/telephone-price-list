import React, { Component } from 'react';
import GalleryComponent from './components/GalleryComponent';
import { getList } from './actions';
import {connect} from 'react-redux';
import './App.css';

//App Component starts

class App extends Component {
    componentDidMount(){
        this.props.getList();
    }

    render() {
        return (
          <div className="App">
            <h2>Telephone price list</h2>
            <div>
                <GalleryComponent />
            </div>
          </div>
        );
      }
}

function mapDispatchToProps(dispatch, ownProps){
    return{
        getList: () => {
            dispatch(getList())
        },
    }
}

function mapStateToProps(state){
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
