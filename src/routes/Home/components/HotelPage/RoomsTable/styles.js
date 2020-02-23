import styled from 'styled-components';
import { Pane, Text } from 'evergreen-ui';

export const Wrapper = styled(Pane)`
.tooltip-base{
position:relative;

.tooltip{
position:absolute;
top:5px;
left:50px;
color:${({ theme }) => theme.palette.blue.lightest};
opacity:0;
background: rgba(0,0,0,0.7);
padding: 5px;
width: 200px;
z-index: 9999;
border-radius: 10px;
}
&:hover .tooltip{
opacity:1;
}
}
`;


export const Table = styled.div`
`;
export const Row = styled.div`
display:grid;
grid-template-columns:100px 90px 90px auto 90px 100px;
${({ highlight }) => highlight && 'background-color:rgba(0,0,0,0.05);'}
border-bottom:solid 1px rgba(0,0,0,0.1);;
`;
export const TableHeader = styled(Row)`
background-color:${({ theme }) => theme.palette.blue.light};
`;

export const Cell = styled.div`
padding:5px;
`;

export const NormalText = styled(Text).attrs(() => ({
  size: 300,
}))`
`;
