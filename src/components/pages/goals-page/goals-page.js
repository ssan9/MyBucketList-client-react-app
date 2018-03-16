import React from "react";
import { connect } from "react-redux";
import { getGoals } from "../../../actions/index";
import ToDoGoals from "./todo-goals";
import CompletedGoals from "./completed-goals";
// import { Link, Redirect } from "react-router-dom";
import "./goals-page.css";

export class GoalsPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(getGoals());
  }
  render() {
    console.log(this.props.goals);

    return (
      <div className="goals">
        <ToDoGoals goals={this.props.goals} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  goals: state.data.goals
});

export default connect(mapStateToProps)(GoalsPage);
