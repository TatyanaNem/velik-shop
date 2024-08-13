import styled from "styled-components";
import { Icon, IconSize } from "./Icon";
import { IconName } from "../tokens/icons";
import { SelectHTMLAttributes } from "react";
import { Color } from "../tokens/colors";

const StyledWrapper = styled.div`
  position: relative;
  width: 200px;
  display: inline-flex;
`;

const StyledFilter = styled.select`
  appearance: none;
  width: 100%;
  font-size: 16px;
  line-height: 22px;
  color: ${Color.WHITE};
  outline: none;
  cursor: pointer;

  + svg {
    color: ${Color.WHITE};
  }

  &:hover {
  color: ${Color.ORANGE_20};

  + svg {
    color: ${Color.ORANGE_20};
    }
  }

  &:focus {
    color: ${Color.ORANGE_40};

    + svg {
      color: ${Color.ORANGE_40};
    }
  }
`;

const StyledChevron = styled(Icon).attrs({ name: IconName.CHEVRON_DOWN })`
  position: absolute;
  right: 0;
  top: 0;
  margin-left: 4px;
  pointer-events: none;
  color: inherit;
`;

type FilterProps =SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
}

const Filter = ({ className, label, children }: FilterProps) => {
  return (
    <StyledWrapper className={className}>
      <StyledFilter aria-label={label}>{children}</StyledFilter>
      <StyledChevron size={IconSize.MEDIUM} name={IconName.CHEVRON_DOWN}/>
    </StyledWrapper>
  );
}

export {Filter};