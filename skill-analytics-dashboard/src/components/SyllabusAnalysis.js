const SyllabusAnalysis = ({ skill }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h3 className="text-lg font-medium">Syllabus Wise Analysis (HTML)</h3>
      <div className="space-y-2 mt-2">
        {skill.syllabus.map((item, index) => (
          <div key={index}>
            <p className="text-sm">{item.topic}: {item.percentage}%</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-500 h-2.5 rounded-full"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusAnalysis;