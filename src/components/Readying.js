import React, { Component } from 'react';
import styled from 'styled-components';

const ReadyingElement = styled.div`
    h4 {
        font-style: italic;
        font-weight: bold;
    }
    ul {
        font-weight: 500;
    }
`

class Readying extends React.Component {
    render() {
        return (
            <ReadyingElement>
                <h4>но сначала, подготовьтесь:</h4>
                <ul>
                    <li>сядьте на стул,</li>
                    <li>вдохните,</li>
                    <li>выдохните,</li>
                    <li>расслабьтесь.</li>
                </ul>
            </ReadyingElement>
            )
    }
}

export default Readying
