import React, { Component } from 'react';
import styled from 'styled-components';

import Title from './Title.js';
import bgBanner from '../img/staff.jpg';

const BannerElement = styled.div`
    min-height: 55vw;
    background-image: url(${bgBanner});
    background-size: cover;
`

class Banner extends React.Component {
    render() {
        return (
            <BannerElement>
                <Title text={ this.props.text } />
            </BannerElement>
            )
    }
}

export default Banner
