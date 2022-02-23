/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
import React, { FC, useState } from 'react';
import { addStyles } from './addColor';
import * as S from './style';

type PropTypes = {
    heading: Array<string>
    solutionJS: string
    solutionTS: string
    example?: string
}

export const LessonSection:FC<PropTypes> = ({ solutionJS, solutionTS, example, heading }:PropTypes) => {
    // eslint-disable-next-line no-eval
    const taskSol = example ? eval(solutionJS + example) : null;
    const runTask = () => {
        // eslint-disable-next-line no-eval
        console.log(taskSol);
    };
    const [ showTS, setShowTS ] = useState(false);

    const typeHandler = () => showTS ? setShowTS(false) : setShowTS(true);

    return (
        <S.taskWrapper>
            <div className = 'task'>
                <h1 className = 'task-heading'>
                    {heading.map((st, index) => (
                        <p
                            className = 'heading-text'
                            key = { index }>{st}</p>
                    ))}
                </h1>
                <main className = 'task-content'>
                    <div className = 'task-solution js-solution'>
                        <h2 className = 'code-name js-name'>Java Script</h2>
                        <S.codeWrapper border = '#f7e018'>
                            <pre>
                                <code className = 'code-solution'>
                                    {addStyles(solutionJS)}
                                </code>
                            </pre>
                        </S.codeWrapper>
                        { solutionTS ? <button
                            className = 'show-ts'
                            onClick = { typeHandler }>{ showTS ? 'Hide TS' : 'Show TS'}</button> : null}
                    </div>
                    {showTS
                        ? <div className = 'task-solution ts-solution'>
                            <h2 className = 'code-name ts-name'>Type Script</h2>
                            <S.codeWrapper border = '#4169E1'>
                                <pre>
                                    <code className = 'code-solution'>
                                        {addStyles(solutionTS)}
                                    </code>
                                </pre>
                            </S.codeWrapper>
                        </div> : null}
                    {example
                        ? <div className = 'solution-example'>
                            <h3>Example:</h3>
                            <S.codeWrapper border = 'none' >
                                <pre className = 'code-example'>
                                    <code>
                                        {typeof example === 'string' ? addStyles(example) : null}
                                    </code>
                                </pre>
                            </S.codeWrapper>
                        </div> : null}
                    {example ? <button
                        className = 'example-button'
                        onClick = { runTask }>get in console</button> : null}
                </main>
            </div>
        </S.taskWrapper>
    );
};

