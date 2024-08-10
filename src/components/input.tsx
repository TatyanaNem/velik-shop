import styled from "styled-components";
import { Color } from "../tokens/colors";
import {InputHTMLAttributes} from "react";
import { BaseField } from "../helpers/base-input";

const StyledInput = styled(BaseField).attrs<{placeholder?: string}>(({placeholder}) => ({
    placeholder: placeholder || ''
}))`
    width: 200px;
    height: 30px;
    padding: 2px 6px 4px;
    color: ${Color.WHITE};

    &::placeholder {
        color: currentColor;
    }
`;

export const Input = ({placeholder, type, value, onChange}: InputHTMLAttributes<HTMLInputElement>) => {

    return <StyledInput type={type} value={value} placeholder={placeholder} onChange={onChange}/>
}