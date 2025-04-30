const QuestionAnalysis = ({ skill }) => {
    return (
      <div>
        <h3>Question Analysis (Placeholder)</h3>
        <p>Correct Answers: {skill.correctAnswers}/{skill.totalQuestions}</p>
      </div>
    );
  };
  
  export default QuestionAnalysis;