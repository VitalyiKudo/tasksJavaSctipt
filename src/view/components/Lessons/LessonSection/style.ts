import styled from 'styled-components';

type style = {
    border?: string
}

export const codeWrapper = styled.div`
color: black;
background: #F4F4F4;
.code-example {
    margin: 10px 0px;
}
border: 1px solid ${(props:style) => props.border};
.code-solution {
    widht: 200px;
}
.function, .variable, .return {
    color: #B22222;
}
.blue {
    color: #1E90FF;
}
.yellow {
}
.green {
    color: #9ACD32;
}
.orange {
    color: #FF8C00;
}
`;
export const taskWrapper = styled.section`
.task-heading, .code-name, .solution-example, .show-ts, .example-button {
    margin-left: 10px;
}
.heading-text {
    padding-top: 5px;
}
margin-top: 10px;
.task-solution, 
.task-content,
.task-heading  {
    padding-bottom: 10px;
}
.show-ts {
    margin-top: 5px;
    background: transparent;
    border: 1px solid #4169E1;
    color: #4169E1;
}
.js-name, .ts-name {
    font-size: 20px;
    font-weight: 550;
}
.ts-name {

}
`;
