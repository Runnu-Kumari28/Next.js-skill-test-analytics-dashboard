"use client";

import { useContext } from 'react';
import { SkillContext } from '../../context/SkillContext';
import SkillOverview from '../../components/SkillOverview';
import QuickStatistics from '../../components/QuickStatistics';
import ComparisonGraph from '../../components/ComparisonGraph';
import SyllabusAnalysis from '../../components/SyllabusAnalysis';
import QuestionAnalysis from '../../components/QuestionAnalysis';

export default function SkillTest() {
  const { skills } = useContext(SkillContext);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Skill Test Analytics Dashboard</h1>
      {skills.map((skill) => (
        <div key={skill.id} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-4">
              <SkillOverview skill={skill} />
              <QuickStatistics skill={skill} />
              <ComparisonGraph skill={skill} />
            </div>
            <div className="space-y-4">
              <SyllabusAnalysis skill={skill} />
              <QuestionAnalysis skill={skill} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}