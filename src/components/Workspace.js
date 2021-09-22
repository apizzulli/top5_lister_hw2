import React from "react";

export default class Workspace extends React.Component {
    render() {
        const {currentList} = this.props;
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
                        <div className = "top5-item" id="item-1">{item0}</div>
                        <div className = "top5-item" id="item-2">{item1}</div>
                        <div className = "top5-item" id="item-3">{item2}</div>
                        <div className = "top5-item" id="item-4">{item3}</div>
                        <div className = "top5-item" id="item-5">{item4}</div>
                    </div>
                </div>
            </div>
        )
    }
}