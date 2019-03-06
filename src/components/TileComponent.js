import React from 'react';
import {connect} from "react-redux";
import './css/tile.css';

const TileComponent = (props) => {
    let item = props.item;
    return(
        <React.Fragment>
           <div className="todotile" >
                <div className="tileContent">
                    <h6 className="tileText">{item.Operator}</h6>
                    <hr/>
                    <p title={item.numberprefix}><i>Number Prefix: {item.numberprefix}</i></p>
                    <div style={{display:"inline-flex"}}>
                        <p className="yearOfRel">Cost: {item.cost}</p>
                    </div>
                </div>
           </div>
        </React.Fragment>
    );
}


function mapDispatchToProps(dispatch, ownProps){
    return{
    }
}


function mapStateToProps(state){
    return{
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TileComponent);
