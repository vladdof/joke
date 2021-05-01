import React, { Component } from 'react';
import styled from 'styled-components';

const LinkElement = styled.a`
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    text-decoration-line: underline;
    color: var(--orange-color, #f66c41);
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
