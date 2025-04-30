const QuestionAnalysis = ({ skill }) => {
  const percentage = (skill.correctAnswers / skill.totalQuestions) * 100;

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h3 className="text-lg font-medium">Question Analysis (HTML)</h3>
      <div className="flex items-center justify-center mt-2">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-200 stroke-current"
              strokeWidth="10"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            ></circle>
            <circle
              className="text-blue-500 stroke-current"
              strokeWidth="10"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              strokeDasharray={`${percentage * 2.51} 251`} // 251 is the circumference (2 * π * 40)
              transform="rotate(-90 50 50)"
            ></circle>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-lg font-medium">
              {skill.correctAnswers}/{skill.totalQuestions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;