import React from 'react';

interface RadioInputProps {
  questionId: string;
  options: string[];
  onChange: (response: string) => void;
}

const RadioInput: React.FC<RadioInputProps> = ({ questionId, options, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            name={questionId} // Use the same name for all radio buttons in this group
            value={option}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default RadioInput;
