import Image from 'next/image';

const QuickStatistics = ({ skill }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h3 className="text-lg font-medium">Quick Statistics</h3>
      <div className="mt-2 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0">
        {/* Rank Column */}
        <div className="flex-1 flex items-center min-w-0 pr-0 lg:pr-2 border-r-0 lg:border-r border-gray-200">
          <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
            <Image
              src="/icon-rank.png"
              alt="Rank Icon"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <p className="text-sm truncate">
            <strong>Rank:</strong> {skill.rank}
          </p>
        </div>

        {/* Percentile Column */}
        <div className="flex-1 flex items-center min-w-0 px-0 lg:px-2 border-r-0 lg:border-r border-gray-200">
          <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
            <Image
              src="/icon-percentile.jpeg"
              alt="Percentile Icon"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <p className="text-sm truncate">
            <strong>Percentile:</strong> {skill.percentile}%
          </p>
        </div>

        {/* Correct Answers Column */}
        <div className="flex-1 flex items-center min-w-0 px-0 lg:px-2">
          <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
            <Image
              src="/icon-answers.png"
              alt="Correct Answers Icon"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <p className="text-sm truncate">
            <strong>Correct Answers:</strong> {skill.correctAnswers}/{skill.totalQuestions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickStatistics;