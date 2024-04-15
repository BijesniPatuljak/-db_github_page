import React, { useState } from 'react';
import '../assets/stylesheets/pages.scss';
import Cpp from './language_content/cpp';
import Misc from './language_content/misc';
import Python from './language_content/python';
import Ruby from './language_content/ruby';
import Rust from './language_content/rust';
import Sql from './language_content/sql';
import Ts from './language_content/ts';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import cLogo from '../assets/images/cpp.png';
import miscLogo from '../assets/images/misc.png';
import pythonLogo from '../assets/images/python.png';
import rubyLogo from '../assets/images/ruby.png';
import rustLogo from '../assets/images/rust.png';
import sqlLogo from '../assets/images/sql.png';
import tsLogo from '../assets/images/ts.png';

function Code() {
  const [language, setLanguage] = useState<string>('cpp');
  const languageOptions = ['ruby', 'ts', 'rust', 'cpp', 'sql', 'python', 'misc'];

  const horizontalScroll = (event: any) => {
    const delta = Math.max(-1, Math.min(1, (event.nativeEvent.wheelDelta || -event.nativeEvent.detail)));
    event.currentTarget.scrollLeft -= (delta * 100);
  };

  const handleLanguageClick = (index: number) => {
    setLanguage(languageOptions[index]);
  };

  return (
    <div className="page-container experience">
      {language === 'cpp' &&
      <Cpp/>}
      {language === 'ruby' &&
      <Ruby/>}
      {language === 'ts' &&
      <Ts/>}
      {language === 'rust' &&
      <Rust/>}
      {language === 'sql' &&
      <Sql/>}
      {language === 'python' &&
      <Python/>}
      {language === 'misc' &&
      <Misc/>}
      <div className="language-picker" onWheel={horizontalScroll}>
        {languageOptions.map((lang, index) => (
          <div className="language" onClick={() => handleLanguageClick(index)}>
            {lang === 'cpp' &&
            <img src={cLogo} alt={lang}></img>}
            {lang === 'ruby' &&
             <img src={rubyLogo} alt={lang}></img>}
            {lang === 'ts' &&
            <img src={tsLogo} alt={lang}></img>}
            {lang === 'rust' &&
            <img src={rustLogo} alt={lang}></img>}
            {lang === 'sql' &&
            <img src={sqlLogo} alt={lang}></img>}
            {lang === 'python' &&
            <img src={pythonLogo} alt={lang}></img>}
            {lang === 'misc' &&
            <img src={miscLogo} alt={lang}></img>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Code;