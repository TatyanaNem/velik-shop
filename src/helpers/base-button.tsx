import styled from "styled-components";

type BaseButtonProps = {
    type?: 'button' | 'submit' | 'reset'
}

export const StyledBaseButton = styled.button.attrs<BaseButtonProps>(({type}) => ({
    type: type || 'button'
}))`
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
    }
`;

export {StyledBaseButton as BaseButton};