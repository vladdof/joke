import React, { Component } from 'react';
import styled from 'styled-components';

import Text from './Text.js';
import FetchData from '../service/FetchData';

const JokeElement = styled.div`
    margin-bottom: calc(var(--mb));

    h2 {
        margin-bottom: 20px;
        font-size: 36px;
        line-height: 120%;
        font-weight: 500;
        text-transform: uppercase;
    }

    @media (min-width: 658px) {
        margin-bottom: calc(var(--mb) / 2);

        h2 {
            font-size: 70px;
            line-height: 85px;
        }
    }
`

const text = "Как пояснить разницу между разными IT-специальностями не специалисту? Инженер («железячник») – он как хирург, посмотрит внутрь организма, исправит проблемы, может даже улучшить что-то. Программист похож на священника и учителя – он заботится о душе и знаниях. А столь привычный всем в офисах сисадмин – это уровень сиделки: «поставит укол», даст «таблетку», поддержит текущее состояние."

class Joke extends React.Component {
    fetchData = new FetchData();

    state = {
        text: text
    }

    componentDidMount() {
        this.updateText();
    }

    updateText() {
        this.fetchData.getJoke()
            .then(data => {
                this.setState({ text: data.map(item => item.quoteText) });
            })
    }

    render() {
        return (
            <JokeElement>
                <h2>Шутка:</h2>
                <Text text={ this.state.text } mb="var(--mb)"></Text>
            </JokeElement>
            )
    }
}

export default Joke
