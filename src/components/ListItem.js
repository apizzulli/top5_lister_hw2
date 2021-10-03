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
    }
    handleDrag=(event)=>{
        draggedItem=event.target.id;
    }

    handleDrop=(event)=>{
        droppedItem=event.target.id;
        let n1 = parseInt(draggedItem.substring(draggedItem.length-1));
        let n2 = parseInt(droppedItem.substring(droppedItem.length-1));
        this.props.dropItemCallback(n1,n2);
    }
    
    render(){
        let cname;
        if(!this.state.draggedOver)
            cname="top5-item";
        else
            cname="top5-item-dragOver";
        const {item, num, currentList}=this.props;
        if(currentList){
            if(this.state.editActivated){
                return(
                    <input
                        id={'item-'+num}
                        className={cname}
                        onBlur={this.handleBlur}
                        onKeyPress={this.handleKeyPress}
                        onChange={this.handleUpdate}
                        defaultValue={item}
                    />
                )
            }
            else{
                return(
                    <div 
                        id={'item-'+num}                    
                        className={cname}
                        onClick={this.handleClick}
                        onDrag={this.handleDrag}
                        onDragOver={this.handleDragOver}
                        onDragEnter={this.toggleDraggedOver}
                        onDragLeave={this.toggleDraggedOver}
                        draggable='true'
                        onDrop={this.handleDrop}
                        >
                        {item}
                    </div>
                )
            }
        }
        else
            return(
                <div
                id={'item-'+num}
                className={"top5-item"}
                >
                </div>
            )
    }
}
