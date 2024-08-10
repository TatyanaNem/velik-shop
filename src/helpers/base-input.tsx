import styled from 'styled-components';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radiuses';

const StyledBaseField = styled.input`
  border: 1px solid ${Color.GRAY_20};
  border-radius: ${Radius.RADIUS_4};
  font-size: 16px;
  line-height: 22px;
  color: ${Color.WHITE};
  outline: none;

  &:hover {
    border-color: ${Color.ORANGE_20};
  }

  &:focus {
    border-color: ${Color.ORANGE_40};
  }
`;

export { StyledBaseField as BaseField };