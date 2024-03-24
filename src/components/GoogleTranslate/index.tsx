import { useEffect, useState } from 'react';
// import './index.css';

export const GoogleTranslate = () => {
  const [language, setSelectedLanguge] = useState('en');
  const [translateScriptUrl, setTranslateScriptUrl] = useState('en');
  const [scriptExists, setScriptExists] = useState(false);

  const googleTranslateElementInit = () => {
    const translate = (window as any).google.translate;

    if (translate) {
      translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,zh-CN,rs,fr,pt,ru,hi',
        },
        'google_translate_element'
      );
    }
  };

  useEffect(() => {
    const translateScriptUrl =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    const scriptExists =
      document?.querySelectorAll(`script[src="${translateScriptUrl}"]`).length >
      0;
    setTranslateScriptUrl(translateScriptUrl);
    setScriptExists(scriptExists);

    if (!scriptExists) {
      const recaptchaScript = document?.createElement('script');
      recaptchaScript?.setAttribute('src', translateScriptUrl);
      document?.body.appendChild(recaptchaScript);
    } else {
      setTimeout(() => {
        googleTranslateElementInit();

        const lang = document?.getElementsByClassName('goog-te-combo');
        if (lang && lang.length) {
          lang[0].addEventListener('change', (e: any) => {
            setSelectedLanguge(e.target.value);
          });
        }
      }, 5000);
    }
  }, []);

  return (
    <div className="translate-holder">
      <div id="google_translate_element" className={language}></div>
    </div>
  );
};
