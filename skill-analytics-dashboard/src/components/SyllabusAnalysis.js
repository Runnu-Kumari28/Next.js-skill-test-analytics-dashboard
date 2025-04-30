const SyllabusAnalysis = ({ skill }) => {
    return (
      <div>
        <h3>Syllabus Analysis (Placeholder)</h3>
        <p>Topics: {skill.syllabus.map((item) => item.topic).join(', ')}</p>
      </div>
    );
  };
  
  export default SyllabusAnalysis;