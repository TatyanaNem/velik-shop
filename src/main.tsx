import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalResets } from './tokens/resets.tsx'
import { SpriteWithIcons } from './tokens/icons.tsx'
import { GlobalFonts } from './tokens/fonts.tsx'
import { GlobalColors } from './tokens/colors.tsx'
import { GlobalShadows } from './tokens/shadows.tsx'
import { GlobalRadiuses } from './tokens/radiuses.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalResets />
    <GlobalFonts />
    <GlobalColors />
    <GlobalShadows />
    <GlobalRadiuses />
    <SpriteWithIcons />
    <App />
  </StrictMode>,
)
