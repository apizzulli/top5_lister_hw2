import React from "react";
import ListItem from "./ListItem";
export default class Workspace extends React.Component {
    render() {
        const { currentList,
                renameItemCallback} = this.props;
        let item0="";
        let item1="";
        let item2="";
        let item3="";
        let item4="";
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
                        />
                        <ListItem
                            item={item1}
                            num={1}
                            renameItemCallback={renameItemCallback}
                        />
                        <ListItem
                            item={item2}
                            num={2}
                            renameItemCallback={renameItemCallback}
                        />
                        <ListItem
                            item = {item3}
                            num={3}
                            renameItemCallback={renameItemCallback}
                        />
                        <ListItem
                            item={item4}
                            num={4}
                            renameItemCallback={renameItemCallback}
                        /> 
                    </div>
                </div>
            </div>
        )
    }
}