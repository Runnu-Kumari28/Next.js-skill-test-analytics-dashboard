const QuickStatistics = ({ skill }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h3 className="text-lg font-medium">Quick Statistics</h3>
      <div className="space-y-2 mt-2">
        <p><strong>Rank:</strong> {skill.rank}</p>
        <p><strong>Percentile:</strong> {skill.percentile}%</p>
        <p><strong>Correct Answers:</strong> {skill.correctAnswers}/{skill.totalQuestions}</p>
      </div>
    </div>
  );
};

export default QuickStatistics;