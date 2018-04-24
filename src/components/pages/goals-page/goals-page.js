import React from "react";
import { connect } from "react-redux";
import { getGoals } from "../../../actions/index";
import TodoGoals from "./todo-goals";
import requiresLogin from '../../requires-login';
import { Footer } from "../reusable-components/footer";
import "./goals-page.css";

export class GoalsPage extends React.Component {
   componentDidMount() {
    console.log(this.props);

    this.props.dispatch(getGoals());
  }

  render() {
    console.log(this.props);

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

export default requiresLogin()(connect(mapStateToProps)(GoalsPage));
