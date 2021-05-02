import React, { Component } from 'react';
import styled from 'styled-components';

class ListItem extends React.Component {
    render() {
        return (
            <li> {this.props.text} </li>
            )
    }
}

export default ListItem
