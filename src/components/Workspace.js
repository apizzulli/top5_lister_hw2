import React from "react";

export default class Workspace extends React.Component {
    render() {
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
                        <div class = "top5-item" id="item-1"></div>
                        <div class = "top5-item" id="item-2">Kiss my ass</div>
                        <div class = "top5-item" id="item-3">Kiss my ass</div>
                        <div class = "top5-item" id="item-4">Kiss my ass</div>
                        <div class = "top5-item" id="item-5">Kiss my ass</div>
                    </div>
                </div>
            </div>
        )
    }
}