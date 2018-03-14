import React from "react";
import { connect } from "react-redux";

import "../reusable-components/float-grid.css";
import "./options.css";

import "../images/budget.png";
import "../images/edit.png";
import "../images/notepad.png";

export function Options(props) {
  return (
    <div className="options">
      <div className="row">
        <div className="col-4">
          <div className="create-bucketList">
            <div className="create-budget-pic pic">
              <img
                src={require("../images/notepad.png")}
                alt="Create your BucketList"
                className="options-image transparent-portion"
              />
            </div>
            <div className="intro-part-one options-intro">
              <h4>Create your BucketList</h4>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="track-list">
            <div className="add-edit pic">
              <img
                src={require("../images/edit.png")}
                alt="Track Your List"
                className="options-image transparent-portion"
              />
            </div>
            <div className="intro-part-two options-intro">
              <h4>Track Your List</h4>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="share">
            <div className="friends-share pic">
              <img
                src={require("../images/budget.png")}
                alt="Share with Friends"
                className="options-image transparent-portion"
              />
            </div>
            <div className="intro-part-three options-intro">
              <h4>Share with Friends</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(Options);