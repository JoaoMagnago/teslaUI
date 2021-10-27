import React from 'react';
import {useTransform} from 'framer-motion';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burger, Footer } from './styles';

const UniqueOverlay = () => {
    const { scrollYProgress } = useWrapperScroll();

    const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

    return (
        <Container>
            <Header>
                <Logo />
                <Burger />
            </Header>

            <Footer style={{ opacity }}>
                <ul>
                    <li>
                        <a href="https://www.tesla.com">Tesla</a>
                    </li>
                    <li>
                        <a href="https://www.google.com">Google</a>
                    </li>
                    <li>
                        <a href="https://www.github.com">Github</a>
                    </li>
                </ul>
            </Footer>
        </Container>
    )
}

export default UniqueOverlay
