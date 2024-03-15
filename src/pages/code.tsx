import React, { useState } from 'react';
import '../assets/stylesheets/pages.scss';
import Cpp from './language_content/cpp';
import Ruby from './language_content/ruby';

function Code() {
  const [language, setLanguage] = useState<string>('cpp');
  const languageOptions =['cpp', 'rust', 'ruby', 'ts', 'misc'];

  const handleLanguageClick = (index: number) => {
    setLanguage(languageOptions[index]);
  }

  return (
    <div className="page-container experience">
      {language === 'cpp' &&
      <Cpp/>}
      {language === 'ruby' &&
      <Ruby/>}
      <div className='language-picker'>
        {languageOptions.map((lang, index) => (
          <div className='language' onClick={() => handleLanguageClick(index)}>
            {lang}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Code;