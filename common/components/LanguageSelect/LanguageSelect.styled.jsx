import styled from 'styled-components';

export const Wrap = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    bottom: 0;
    height: 50px;
    background-color: rgba(255,255,255,0.5);
`;

export const Select = styled.select`
    margin-top: 14px;
    padding-right: 15px;

    font-size: 1em;
    color: #e35d5b;
    font-weight: bold;
    background-color: transparent;
    background: transparent url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' fill='#e35d5b' viewBox='0 0 201.458 201.457'><path d='M193.177 46.233l8.28 8.28-100.723 100.728L0 54.495l8.28-8.279 92.46 92.46 92.437-92.443z' /></svg>") 100% 50% no-repeat;
    background-size: 12px;
    border: none;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`;
