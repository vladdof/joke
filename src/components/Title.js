import React, { Component } from 'react';
import styled from 'styled-components';

const TitleElement = styled.h1`
    font-weight: bold;
    font-size: 70px;
    line-height: 85px;
    color: #fff;

    span {
        color: var(--orange-color, #f66c41);
    }
`

class Title extends React.Component {
    render() {
        return (
            <TitleElement>
                10 <span>смешных</span>? шуток
                для разрботчика
            </TitleElement>
        )
    }
}

export default Title
