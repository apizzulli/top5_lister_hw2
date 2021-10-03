import React from "react";
import ListItem from "./ListItem";
let item0="", item1="", item2="", item3="", item4="";
export default class Workspace extends React.Component {
    updateListHandler = (newList) =>{
        this.props.updateList(newList);
    }
    dropItemCallback = (dragIndex,dropIndex)=>{       
        let j =dragIndex;
        //If attempting to drop the element onto itself, nothing changes.
        let list = this.props.currentList;
        if(dropIndex!=dragIndex){
            while(j>0){//Slide all the items below the item that has been dragged down, since there is now an open spot
                // let newItem = "item" + j;
                // let oldItem = "item" + j-1;
                list.items[j]=list.items[j-1];
                j--;
            }
            if((dropIndex==4)){//CASE 1: the 1st item is dropped onto the last       
                let temp = list.items[4];
                list.items[4]= list.items[0];
                list.items[0] = temp;                  
            }
            // else if((dropIndex==0)){//CASE 2: the 5th item is dropped onto the 1st
            //     thisModel.currentList.setItemAt(dropIndex,dragInner);
            //     item.innerHTML=dragInner;
            // }
            else{
                let j = 4;
                let lastItem = list.items[4];
                if(dragIndex!=0)
                    list.items[dragIndex]=list.items[dragIndex-1];
                else
                    list.items[dragIndex]=lastItem;
                while(j>dropIndex){
                    list.items[j] = list.items[j-1];
                    j--;
                }
                j = dropIndex-1;
                while(j>1){
                    list.items[j]=list.items[j-1];
                    j--; 
                }
            //     thisModel.currentList.setItemAt(0,lastItemHTML);
            //     thisModel.currentList.setItemAt(dropIndex,dragInner);
            //     item.innerHTML = dragInner;
            }
            this.updateListHandler(list);
        }
    }
    render() {
        const { currentList,
                renameItemCallback} = this.props;
        if(currentList){
            item0=currentList.items[0];
            item1=currentList.items[1];
            item2=currentList.items[2];
            item3=currentList.items[3];
            item4=currentList.items[4];
        }
        return (
            <div id="top5-workspace">
                <div id="workspace-edit">
                    <div id="edit-numbering">
                        <div className="item-number">1.</div>
                        <div className="item-number">2.</div>
                        <div className="item-number">3.</div>
                        <div className="item-number">4.</div>
                        <div className="item-number">5.</div>
                    </div>
                    <div id="edit-items">
                        <ListItem
                            item={item0}
                            num={0}
                            renameItemCallback={renameItemCallback}
                            dropItemCallback={this.dropItemCallback}
                        />
                        <ListItem
                            item={item1}
                            num={1}
                            renameItemCallback={renameItemCallback}
                            dropItemCallback={this.dropItemCallback}
                        />
                        <ListItem
                            item={item2}
                            num={2}
                            renameItemCallback={renameItemCallback}
                            dropItemCallback={this.dropItemCallback}
                        />
                        <ListItem
                            item = {item3}
                            num={3}
                            renameItemCallback={renameItemCallback}
                            dropItemCallback={this.dropItemCallback}
                        />
                        <ListItem
                            item={item4}
                            num={4}
                            renameItemCallback={renameItemCallback}
                            dropItemCallback={this.dropItemCallback}
                        /> 
                    </div>
                </div>
            </div>
        )
    }
}