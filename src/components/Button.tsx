import styled, { css } from "styled-components";
import { Radius } from "../tokens/radiuses";
import { Color } from "../tokens/colors";
import { Shadow } from "../tokens/shadows";
import { BaseButton } from "../helpers/base-button";

const ButtonSize = {
	MEDIUM: 'medium',
	LARGE: 'large'
} as const;

type ButtonProps = {
	color?: 'orange' | 'green'
	size?: 'medium' | 'large'
	variant?: 'filled' | 'outlined'
}

const ButtonSizeToCSS = {
	[ButtonSize.MEDIUM]: css`
    padding: 0 4px 2px;
  `,
  [ButtonSize.LARGE]: css`
    padding: 2px 6px 4px;
  `
};

const ButtonVariantToCSS = {
	'filled': css`
		background-color: var(--color-button);
		color: ${Color.WHITE};
		border-color: transparent;
	`,
	'outlined': css`
		background-color: transparent;
		color: var(--color-button);
		border: 1px solid var(--color-button);
	`
}

const ButtonColorToCss = {
	'orange': css`
		--color-button: ${Color.ORANGE_30};

		&:hover,
		&:focus {
			--color-button: ${Color.ORANGE_20};
		}
		
		&:active {
			--color-button: ${Color.ORANGE_40};
		}
		
		&:disabled {
			--color-button: ${Color.GRAY_30};
		}
	`,
	'green': css`
		--color-button: ${Color.GREEN_30};

		&:hover,
		&:focus {
			--color-button: ${Color.GREEN_20};
		}
		
		&:active {
			--color-button: ${Color.GREEN_40};
		}
		
		&:disabled {
			--color-button: ${Color.GRAY_30};
		}
	`
}

const StyledButton = styled(BaseButton).attrs<ButtonProps>(({size, color, variant}) => ({
	size: size || 'medium',
	color: color || 'green',
	variant: variant || 'outlined'
}))`
	display: inline-flex;
  	align-items: center;
  	gap: 4px;
	font-size: 16px;
	line-height: 22px;
  	color: ${Color.WHITE};
	border-radius: ${Radius.RADIUS_4};
	box-shadow: ${Shadow.CHILD_DEFAULT};
	${({size}) => size && ButtonSizeToCSS[size]};
	${({color}) => color && ButtonColorToCss[color]};
	${({variant}) => variant && ButtonVariantToCSS[variant]};
`;

export {StyledButton as Button};