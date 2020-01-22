import styled from 'styled-components';
import { Checkbox } from 'evergreen-ui';

export const FilterCheckBox = styled(Checkbox)`
${(props) => props.isHalf && `
width:50%;
display:inline-flex;
`}`;
