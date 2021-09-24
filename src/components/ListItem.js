import React from "react";

export default class ListItem extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        const {item, num}=this.props;
        return(
           <div className={'top5-item'}
                id={'item-'+num} >
                {item}
           </div>
        );
    }
}
