import React, { Component } from 'react';
import styled from 'styled-components';

import Text from './Text.js';

const JokeElement = styled.div`
    h2 {
        font-weight: 500;
    }
`
const text = "Как пояснить разницу между разными IT-специальностями не специалисту? Инженер («железячник») – он как хирург, посмотрит внутрь организма, исправит проблемы, может даже улучшить что-то. Программист похож на священника и учителя – он заботится о душе и знаниях. А столь привычный всем в офисах сисадмин – это уровень сиделки: «поставит укол», даст «таблетку», поддержит текущее состояние."

class Joke extends React.Component {
    render() {
        return (
            <JokeElement>
                <h2>Шутка:</h2>
                <Text text={text}></Text>
            </JokeElement>
            )
    }
}

export default Joke
