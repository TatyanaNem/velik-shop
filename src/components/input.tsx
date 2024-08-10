import styled from "styled-components";
import { Radius } from "../tokens/radiuses";
import { Color } from "../tokens/colors";
import {InputHTMLAttributes} from "react";

const StyledInput = styled.input.attrs<{placeholder?: string}>(({placeholder}) => ({
    placeholder: placeholder || ''
}))`
    width: 200px;
    height: 30px;
    padding: 2px 6px 4px;
    font-size: 16px;
    line-height: 22px;
    border-radius: ${Radius.RADIUS_4};
    border: 1px solid ${Color.GRAY_20};
    outline: none;
    color: ${Color.WHITE};

    &:hover {
        border-color: ${Color.GREEN_20};
    }
    
    &:focus {
        border-color: ${Color.GREEN_40};
    }

    &::placeholder {
        color: currentColor;
    }
`;

export const Input = ({placeholder, type, value, onChange}: InputHTMLAttributes<HTMLInputElement>) => {

    return <StyledInput type={type} value={value} placeholder={placeholder} onChange={onChange}/>
}