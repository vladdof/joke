import React, { Component } from 'react';
import styled from 'styled-components';

const TitleElement = styled.h1`
    margin-bottom: calc(${ props => props.mb } / 2);
    font-weight: bold;
    font-size: 36px;
    line-height: 120%;
    color: #fff;

    span {
        color: var(--orange-color, #f66c41);
    }

    @media (min-width: 768px) {
        margin-bottom: ${ props => props.mb };
        font-size: 70px;
        line-height: 85px;
    }
`

class Title extends React.Component {
    render() {
        return (
            <TitleElement mb={ this.props.mb }>
                { this.props.text }
            </TitleElement>
        )
    }
}

export default Title
