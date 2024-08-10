import styled, { css } from "styled-components";
import { IconName } from "../tokens/icons";
import { Color } from "../tokens/colors";

type IconProps = {
color?: Color
name: IconName
className?: string
size: IconSize
}

enum IconSize {
    MEDIUM = 'medium',
    LARGE = 'large'
  };

const IconSizeToCSS = {
[IconSize.MEDIUM]: css`
    width: 22px;
    height: 22px;
`,
[IconSize.LARGE]: css`
    width: 36px;
    height: 36px;
`
};

const StyledIcon = styled.svg.attrs<IconProps>(({color}) => ({
    color: color || Color.ORANGE_30,
    }))`
        ${({name}) => name};
        ${({size}) => IconSizeToCSS[size]};
        color: ${({ color }) => color};
    `;

function Icon({ className, name, color, size }: IconProps) {
    const xlinkHref = `#${name}`;

    return (
        <StyledIcon className={className} size={size} name={name} color={color} xmlns='http://www.w3.org/2000/svg'>
        <use xlinkHref={xlinkHref} />
        </StyledIcon>
    );
}

export {Icon, IconSize};