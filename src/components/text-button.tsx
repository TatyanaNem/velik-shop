import styled, { css } from "styled-components";
import { BaseButton } from "../helpers/base-button";
import { Color } from "../tokens/colors";

enum TextButtonSize {
    MEDIUM = 'medium',
    LARGE = 'large'
  };
  
  const TextButtonSizeToCSS = {
    [TextButtonSize.MEDIUM]: css`
      font-size: 14px;
      line-height: 18px;
    `,
    [TextButtonSize.LARGE]: css`
      font-size: 16px;
      line-height: 22px;
    `
  };

  type TextButtonProps = {
    size: TextButtonSize
  }

const StyledTextButton = styled(BaseButton).attrs<TextButtonProps>(({size}) => ({
    size: size || TextButtonSize.MEDIUM
}))`
    ${({size}) => TextButtonSizeToCSS[size]};

    display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${Color.WHITE};

  &:hover,
  &:focus {
    color: ${Color.ORANGE_20};
  }

  &:active {
    color: ${Color.ORANGE_40};
  }

  &:disabled {
    color: ${Color.GRAY_30};
  }

  svg {
    color: ${Color.WHITE};
  }

  &:hover,
  &:focus,
  &:active,
  &:disabled {
    svg {
      color: currentColor;
    }
  }
`;

export {StyledTextButton as TextButton, TextButtonSize};