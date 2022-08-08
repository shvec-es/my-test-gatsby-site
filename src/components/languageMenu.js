import React from "react";
import { useTranslation } from "react-i18next";

const LanguageMenu = (props) => {
  const { i18n } = useTranslation();
  const { language, changeLanguage } = i18n;

  const currentLng = language.slice(0, 2);

  const handleChange = (event) => {
    const { value } = event.target;
    changeLanguage(value);
  };

  return (
    <select value={currentLng} onChange={handleChange}>
      <option value="uk">UA</option>
      <option value="ru">RU</option>
    </select>
  );
};

export default LanguageMenu;
