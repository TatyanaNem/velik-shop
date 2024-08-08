import { createGlobalStyle } from "styled-components";

const Radius = {
    RADIUS_4: 'var(--radius-4)'
}

const GlobalRadiuses = createGlobalStyle`
    :root {
        --radius-4: 4px;
    }
    
`;

export {GlobalRadiuses, Radius};