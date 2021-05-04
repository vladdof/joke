import React, { Component } from 'react';
import styled from 'styled-components';

const TextElement = styled.p`
    margin-bottom: calc(${ props => props.mb } / 1.6) };
    font-style: ${ props => props.italic ? 'italic' : '' };
    font-weight: ${ props => props.bold ? 'bold' : '' };
    ${ props => props.color ? 'color: #bcbbbb;' : ''}

    @media (min-width: 658px) {
       margin-bottom: calc(${ props => props.mb } / 1.2) };
    }
`

class Text extends React.Component {
    render() {
        return (
            <TextElement
                bold={ this.props.bold }
                italic={ this.props.italic }
                color={ this.props.color }
                mb={ this.props.mb }
            >
                { this.props.text }
            </TextElement>
        )
    }
}

export default Text
