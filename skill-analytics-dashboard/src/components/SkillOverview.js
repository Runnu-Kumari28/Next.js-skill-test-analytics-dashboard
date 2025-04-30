"use client";

import Image from 'next/image';
import { useState, useContext } from 'react';
import { SkillContext } from '../context/SkillContext';

const SkillOverview = ({ skill }) => {
  const { skills, setSkills } = useContext(SkillContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    rank: skill.rank,
    percentile: skill.percentile,
    correctAnswers: skill.correctAnswers,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseInt(value) });
  };

  const handleSave = () => {
    const updatedSkills = skills.map((s) =>
      s.id === skill.id ? { ...s, ...formData } : s
    );
    setSkills(updatedSkills);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h3 className="text-lg font-medium">Skill Overview Section</h3>
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0">
        {/* Icon */}
        <div className="flex items-center justify-center lg:justify-start flex-shrink-0">
          <Image
            src={skill.icon}
            alt={`${skill.name} Icon`}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Middle Content */}
        <div className="flex-1 text-center min-w-0">
          <h3 className="text-lg font-medium truncate">Hyper Text Markup Language</h3>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-1 text-sm text-gray-600 justify-center">
            <span className="whitespace-nowrap truncate">Questions: {skill.totalQuestions}</span>
            <span className="whitespace-nowrap truncate">Duration: {skill.duration}</span>
            <span className="whitespace-nowrap truncate">Submitted: {skill.submittedDate}</span>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center lg:justify-end flex-shrink-0">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 lg:px-3 lg:py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600 whitespace-nowrap"
          >
            Update
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:w-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Update Scores</h3>
              <Image
                src={skill.icon}
                alt={`${skill.name} Icon`}
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Update Your Rank</label>
                <input
                  type="number"
                  name="rank"
                  value={formData.rank}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Update Your Percentile</label>
                <input
                  type="number"
                  name="percentile"
                  value={formData.percentile}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Update Your Current Score (out of {skill.totalQuestions})
                </label>
                <input
                  type="number"
                  name="correctAnswers"
                  value={formData.correctAnswers}
                  onChange={handleInputChange}
                  max={skill.totalQuestions}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillOverview;