import { useId, useState } from "react";
import styled from "styled-components";
import { Typography, TypographyVariant } from "./Typography";
import { BaseButton } from "../helpers/base-button";
import { Color } from "../tokens/colors";

const StyledLabel = styled(Typography).attrs<{variant?: TypographyVariant, htmlFor: string}>({
    as: 'label',
    variant: TypographyVariant.TEXT_1
})`
    padding-left: 8px;
    cursor: pointer;
`;

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const StyledToggle = styled(BaseButton)`
    position: relative;
    width: 22px;
    height: 22px;
    
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 8px;
        width: 100%;
        height: 8px;
        border-radius: 4px;
        background-color: ${Color.GRAY_10};
    }

    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 6px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: ${Color.GRAY_20};
    }

    &[aria-checked='true'] {
        &::before {
        background-color: ${Color.ORANGE_10};
        }

        &::after {
            right: 0;
            left: auto;
            background-color: ${Color.ORANGE_30};
        }

        &:hover,
        &:focus {
        &::after {
            background-color: ${Color.ORANGE_20};
        }
        }

        &:active {
        &::after {
            background-color: ${Color.ORANGE_40};
        }
        }
    }
`;

type ToggleProps = {
    className?: string
    label: string
}

const Toggle = ({className, label}: ToggleProps) => {
    const [checked, setChecked] = useState(false);
    const onToggleClick = () => setChecked(!checked);
    const id = useId();

    return (
        <StyledWrapper className={className}>
            <StyledToggle 
                id={id}
                role='checkbox'
                aria-checked={checked}
                onClick={onToggleClick}
            />
            <StyledLabel htmlFor={id}>{label}</StyledLabel>
        </StyledWrapper>
        
    );
}

export default Toggle;