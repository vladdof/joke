import React, { Component } from 'react';
import styled from 'styled-components';

const LinkElement = styled.a`
    font-weight: 500;
    text-decoration-line: underline;
    color: var(--orange-color, #f66c41);
    cursor: pointer;
    transition: filter 0.3s;

    &:hover {
        filter: grayscale(0.7);
    }
`;

class Link extends React.Component {
    render() {
        return (
            <LinkElement>
                остальные шутки здесь
            </LinkElement>
            )
    }
}

export default Link
