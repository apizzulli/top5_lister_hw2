import React from "react";

let draggedItem;
let droppedItem;
export default class ListItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            editActivated: false,
            beingDragged: false,
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
    toggleDrag=()=>{//an element is being dragged, so toggle being dragged property
        this.setState({
            beingDragged: !this.state.beingDragged,
        })
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
    handleDrag=(item)=>{
        item.preventDefault();
        this.toggleDrag();
        draggedItem = item;
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
                        onDrag={this.handleDrag}
                        onDragOver={this.handleDragOver}
                        onDragEnd={this.handleDragEnd}
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
                        onDrag={this.handleDrag}
                        onDragOver={this.handleDragOver}
                        draggable='true'
                        >
                        {item}
                    </div>
                )
            }
            
        }
    }
}
