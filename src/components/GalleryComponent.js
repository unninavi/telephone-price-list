import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import TileComponent from './TileComponent';
import SearchComponent from './SearchComponent';
import  {makeSelectSearch, makeSelectList} from '../selectors';
import './css/gallery.css';
const GalleryComponent = (props) => {
  let filteredArray =[];
  debugger;
  if(Array.isArray(props.list) && props.search !== '' && props.list.length>0) {
     filteredArray = props.list.reduce((prev,curr)=>{
       return (prev.cost<curr.cost)?prev:curr;
      });
  }else{
    filteredArray = props.list;
  }
          if(Object.prototype.toString.call(filteredArray) === '[object Array]' && filteredArray.length>0){
            return(
                <div>
                <SearchComponent {...props}/>
            <div className="gallery">
                {filteredArray.map(item =>
                    <div key={item.id}>
                        <TileComponent item={item}/>
                    </div>
                )}
            </div>
            </div>
          );
        }else if(Object.prototype.toString.call(filteredArray) === '[object Object]'){
            return(
                <div>
                <SearchComponent {...props}/>
            <div className="gallery">
                    <div key={filteredArray.id}>
                        <TileComponent item={filteredArray}/>
                    </div>
            </div>
            </div>
          );
          }else{
            return(
                <div>
                <SearchComponent {...props}/>
                    <div className="gallery">
                        <p>{"No number prefix found"}</p>
                    </div>
                </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  list: makeSelectList(),
  search:makeSelectSearch()
});

export default connect(mapStateToProps,null)(GalleryComponent)
