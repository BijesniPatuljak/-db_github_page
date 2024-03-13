import React, { useState } from 'react';
import '../assets/stylesheets/pages.scss';
import Cpp from './language_content/cpp';

function Code() {
  const [language, setLanguage] = useState<string>('cpp');
  const languageOptions =['cpp', 'rust', 'ruby', 'ts', 'misc'];
  return (
    <div className="page-container">
      {language === 'cpp' &&
      <Cpp/>}
      <div className='language-picker'>
        {languageOptions.map((lang) => (
          <div className='language'>
            {lang}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Code;