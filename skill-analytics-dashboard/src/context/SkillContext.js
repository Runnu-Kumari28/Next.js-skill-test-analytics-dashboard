"use client";

import { createContext, useState } from 'react';
import { skillData } from '../data/skillData';

export const SkillContext = createContext();

export const SkillProvider = ({ children }) => {
  const [skills, setSkills] = useState(skillData);

  return (
    <SkillContext.Provider value={{ skills, setSkills }}>
      {children}
    </SkillContext.Provider>
  );
};