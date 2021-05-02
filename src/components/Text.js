import React, { Component } from 'react';
import styled from 'styled-components';

const TextElement = styled.p`
    font-style: ${ props => props.italic ? 'italic' : 'normal' };
    font-weight: ${ props => props.bold ? 'bold' : 'normal' };
    ${ props => props.color ? 'color: #bcbbbb;' : ''}
`

class Text extends React.Component {
    render() {
        return (
            <TextElement
                bold={ this.props.bold }
                italic={ this.props.italic }
                color={ this.props.color }
            >
                { this.props.text }
            </TextElement>
        )
    }
}

export default Text
