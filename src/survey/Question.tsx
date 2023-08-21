// Question.tsx
import React from 'react';
import TextInput from '../components/TextInput';
import RadioInput from '../components/RadioInput';
import DropdownInput from '../components/DropdownInput';

interface QuestionProps {
  id: string;
  text: string;
  type: 'text' | 'radio' | 'dropdown';
}

const Question: React.FC<QuestionProps> = ({ id, text, type }) => {
  const renderInput = () => {
    switch (type) {
      case 'text':
        return <TextInput questionId={id} placeholder={text} onChange={(response) => console.log(response)} />;
      case 'radio':
        return <RadioInput questionId={id} options={['Option 1', 'Option 2']} onChange={(response: any) => console.log(response)} />;
      case 'dropdown':
        return <DropdownInput questionId={id} options={['Option 1', 'Option 2']} onChange={(response: any) => console.log(response)} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <p>{text}</p>
      {renderInput()}
    </div>
  );
};

export default Question;
