import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

injectGlobal`
    ${normalize()}
`;

export const RootWrapper = styled.div`
    border-top: 5px solid green;
`;
