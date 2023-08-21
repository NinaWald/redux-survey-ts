// TextInput.tsx
import React from 'react';

interface TextInputProps {
  questionId: string;
  placeholder: string;
  onChange: (response: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ questionId, placeholder, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default TextInput;
