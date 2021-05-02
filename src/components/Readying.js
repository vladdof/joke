import React, { Component } from 'react';
import styled from 'styled-components';

import Text from './Text.js';
import ListItem from './ListItem';

const ReadyingElement = styled.div`
    h2 {
        font-style: italic;
        font-weight: bold;
    }
`

const List = styled.ul`
    font-weight: 500;
`

class Readying extends React.Component {
    render() {
        return (
            <ReadyingElement>
                <Text text="но сначала, подготовьтесь:" bold italic></Text>
                <List>
                    <ListItem text="сядьте на стул," />
                    <ListItem text="вдохните," />
                    <ListItem text="выдохните," />
                    <ListItem text="расслабьтесь." />
                </List>
            </ReadyingElement>
            )
    }
}

export default Readying
