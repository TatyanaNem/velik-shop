import { createGlobalStyle } from "styled-components"

const Shadow = {
    CHILD_DEFAULT: 'var(--shadow-card-default-child)',
    ADULT_HOVER_FOCUS: 'var(--shadow-card-hover-or-focus-adult)',
    CHILD_HOVER_FOCUS: 'var(--shadow-card-hover-or-focus-child)'
}

const GlobalShadows = createGlobalStyle`
    :root {
        --shadow-card-default-child: rgba(0, 0, 0, 0.07);
        --shadow-card-hover-or-focus-adult: rgba(255, 131, 62, 1);
        --shadow-card-hover-or-focus-child: rgba(95, 203, 69, 1);
    }
`;

export {GlobalShadows, Shadow};