import { createGlobalStyle } from "styled-components"
import commissionerRegular from '../fonts/commissioner-Regular.woff2';
import commissionerSemiBold from '../fonts/commissioner-SemiBold.woff2';
import delaGothicOneRegular from '../fonts/dela-gothic-one-regular.woff2';

const Font = {
    COMMISSIONER: 'var(--font-commissioner)',
    DELA_GOTHIC: 'var(--font-dela-gothic)'
}

const GlobalFonts = createGlobalStyle`
    @font-face {
    font-family: 'Commissioner';         // Название семейства шрифта
    font-weight: 400;               // Начертание шрифта: Средний (Medium)
    font-style: normal;             // Обычный стиль шрифта
    font-display: swap;             // Загрузка шрифта при необходимости
    src: url(${commissionerRegular});     // Путь к файлу шрифта
  }

  @font-face {
    font-family: 'Commissioner';         // Название семейства шрифта
    font-weight: 600;               // Начертание шрифта: Средний (Medium)
    font-style: normal;             // Обычный стиль шрифта
    font-display: swap;             // Загрузка шрифта при необходимости
    src: url(${commissionerSemiBold});     // Путь к файлу шрифта
  }

  @font-face {
    font-family: 'Dela Gothic';         // Название семейства шрифта
    font-weight: 400;               // Начертание шрифта: Средний (Medium)
    font-style: normal;             // Обычный стиль шрифта
    font-display: swap;             // Загрузка шрифта при необходимости
    src: url(${delaGothicOneRegular});     // Путь к файлу шрифта
  }

  :root {
    --font-commissioner: 'Commissioner', Arial, sans-serif;
    --font-dela-gothic: 'Dela Gothic One', var(--font-commissioner);
  }
`;

export {GlobalFonts, Font};