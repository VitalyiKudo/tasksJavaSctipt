// Core
import styled from 'styled-components';

export const Container = styled.section`
    position: relative;
    text-align: center;
    .nav-link {
        color: black;
        border: 1px solid black;
        background: #F4DD41;
        font-size: 25px;
        padding: 5px 6.5px;
        margin: 5px;
    }
    .nav-link:hover {
        transform: translateY(-0.25em);
        transition-delay: 0.3;
        border-color: #ffa260;
        box-shadow:  1px 2px 8px 0px #ffa260;
    }
    .task-image {
        height: 500px;
        width: 800px;
    }
    .task-field {
        padding-top: 5px;
    }
`;
