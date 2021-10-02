import React from "react";

let draggedItem;
let droppedItem;
export default class ListItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            editActivated: false,
            draggedOver: false,
        }
    }

    handleClick = (event) =>{
        if(event.detail==2){
            this.toggleEdit();
        }
    }

    toggleEdit = () =>{
        this.setState({
            editActivated: !this.state.editActivated,
        });
    }

    toggleDraggedOver=()=>{
        this.setState({
            draggedOver: !this.state.draggedOver,
        })
    }

    handleKeyPress = (event)=>{
        if(event.code=="Enter"){
            this.handleBlur();
        }
    }

    handleUpdate= (event)=>{
        this.setState({text:event.target.value});
    }

    handleBlur=()=>{
        let text = this.state.text;
        this.props.renameItemCallback(this.props.num,text);
        this.toggleEdit();
    }

    handleOnDrag=(event,id)=>{
        event.preventDefault();
        this.toggleDraggedOver();
    }

    handleDragOver=(event)=>{
        event.preventDefault();
        this.toggleDraggedOver();
    }
    
    
    render(){
        const {item, num}=this.props;

        if(this.state.editActivated){
            return(
                <input
                    id={'item-'+num}
                    className={'top5-item'}
                    type='text'
                    onBlur={this.handleBlur}
                    onKeyPress={this.handleKeyPress}
                    onChange={this.handleUpdate}
                    onDrag={this.handleDragOver}
                    onDragLeave={this.handleDragOver}
                    defaultValue={item}
                />
            )
        }
        else{
            if(!this.state.draggedOver){
                return(
                    <div 
                        className={'top5-item'}
                        id={'item-'+num}
                        onClick={this.handleClick}
                        onDragOver={this.handleDragOver}
                        draggable='true'
                        >
                        {item}
                    </div>
                )
            }
            else{
                return(
                    <div 
                        className={'top5-item-dragOver'}
                        id={'item-'+num}
                        onClick={this.handleClick}
                        onDragLeave={this.handleDragOver}
                        draggable='true'
                        >
                        {item}
                    </div>
                )
            }
            
        }
    }
}
