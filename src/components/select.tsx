import styled from "styled-components";
import { Icon, IconSize } from "./Icon";
import { IconName } from "../tokens/icons";
import { SelectHTMLAttributes } from "react";
import { Color } from "../tokens/colors";
import { Radius } from "../tokens/radiuses";
import { BaseField } from "../helpers/base-input";

const StyledSelect = styled(BaseField).attrs({
    as: 'select'
})`
    padding: 3px 22px 5px 3px;
    width: 100%;
    color: ${Color.WHITE};
    appearance: none;
    border-radius: ${Radius.RADIUS_4};
    border: 1px solid ${Color.GRAY_20};
`;

const StyledChevron = styled(Icon).attrs<{name?: IconName, size?: IconSize}>({
    name: IconName.CHEVRON_DOWN
})`
    position: absolute;
    right: 0;
    top: 1px;
    right: 1px;
    pointer-events: none;
`;

const StyledWrapper = styled.div`
    position: relative;
    width: 200px;
`;

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    label: string
}

export const Select = ({className, label, children}: SelectProps) => {
    return <StyledWrapper className={className}>
        <StyledSelect aria-label={label}>{children}</StyledSelect>
        <StyledChevron size={IconSize.MEDIUM} />
    </StyledWrapper>
}