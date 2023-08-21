import React from 'react';

interface DropdownInputProps {
  questionId: string;
  options: string[];
  onChange: (response: string) => void;
}

const DropdownInput: React.FC<DropdownInputProps> = ({ questionId, options, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropdownInput;
