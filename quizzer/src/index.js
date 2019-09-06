import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";

class Quizzer extends Component {
  state = {
    questionBank: []
  };
  getQuestions = () => {
    quizService().then(question => {
      this.setState({
        questionBank: question
      });
    });
  };
  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div className="container">
        <div className="title">Quiz Time</div>
        {this.state.questionBank.length > 0 &&
          this.state.questionBank.map(
            ({question, answers, correct, questionID}) => (
              <QuestionBox
                question={question}
                options={answers}
                key={questionID}
              />
            )
          )}
      </div>
    );
  }
}

ReactDOM.render(<Quizzer />, document.getElementById('root'));
