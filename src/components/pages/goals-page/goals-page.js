import React from "react";
import { connect } from "react-redux";
import { getGoals } from "../../../actions/index";
import TodoGoals from "./todo-goals";
// import CompletedGoals from "./completed-goals";
import { Footer } from "../reusable-components/footer";

// import { Link, Redirect } from "react-router-dom";
import "./goals-page.css";
//why this.props.goal and not just goals like in todo-goals
export class GoalsPage extends React.Component {
   componentDidMount() {
    this.props.dispatch(getGoals());
  }
//from where did it get goals? //are we sending the goals to TodoGoals?
  render() {
    let toDoGoals = this.props.goals.filter(goal => !goal.checked);
    let completedGoals = this.props.goals.filter(goal => goal.checked);

    return (
      <div className="goals">
        <TodoGoals goals={toDoGoals} title="Yay! View Your ToDo Goals" heading="Not Completed" header="Unchecked" date="Created" /> 
        <TodoGoals goals={completedGoals} title="Hurray! View Your Completed Goals" heading="Completed" header="Checked" date="Completed" />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  goals: state.data.goals
});

export default connect(mapStateToProps)(GoalsPage);
