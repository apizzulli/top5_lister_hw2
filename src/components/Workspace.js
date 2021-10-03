import React from "react";
import ListItem from "./ListItem";
let item0="", item1="", item2="", item3="", item4="";

export default class Workspace extends React.Component {
    updateListHandler = (newList) =>{
        this.props.updateList(newList);
    }
    swap=(first,last)=>{
        let temp = last;
        last=first;
        first=temp;
    }
    dropItemCallback = (dragIndex,dropIndex)=>{       
        let j =dragIndex;
        let dragged, dropped;
        //If attempting to drop the element onto itself, nothing changes.
        let list = this.props.currentList;
        if(dropIndex!=dragIndex){
            dropped=list.items[dropIndex];
            dragged=list.items[dragIndex];
            if((dragIndex==0)&&(dropIndex==4)){//CASE 1: the 1st item is dropped onto the last       
                this.swap(dragged,dropped);            
            }
            if(dropIndex==4){//the item is being dropped onto the last, but it was not dragged from the first
                //backup the items being moved
                j=dragIndex;
                while(j>0){
                    list.items[j] = list.items[j-1];
                    j--;
                }
                list.items[0]=list.items[4];
                list.items[dropIndex]=dragged;
            }
            else if(dropIndex!=4&& dropIndex!=0){
                list.items[0]=list.items[4];
                j = 4;
                while(j>dropIndex){
                    list.items[j]=list.items[j-1];
                    j--;
                }
                list.items[dropIndex]=dragged;
            }
            else{//CASE 2: the last item is dropped onto the 1st
                while(j>dropIndex){//Slide all the items below the item that has been dragged down, since there is now an open spot
                    list.items[j]=list.items[j-1];
                    j--;
                }
                list.items[dropIndex]=dragged;
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