import styled from 'styled-components';
import car1 from '../../assets/car01.jpeg';
import car2 from '../../assets/car02.jpeg';

export const Container = styled.div`
    .colored:nth-child(1) {
        /* background: #f1ffe7; */
        background-image: url(${car1});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

    }
    .colored:nth-child(2) {
        /* background: #dfffd9; */
        background-image: url(${car2});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .colored:nth-child(3) {
        /* background: #cdfeca; */
        background-image: url(${car1});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

    }
    .colored:nth-child(4) {
        /* background: #bbfebb; */
        background-image: url(${car2});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .colored:nth-child(5) {
        /* background: #a9fdac; */
        background-image: url(${car1});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .colored:nth-child(6) {
        /* background: #90f29c; */
        background-image: url(${car2});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .colored:nth-child(7) {
        /* background: #77e68c; */
        background-image: url(${car1});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
`;