import React from 'react';
import { LessonSection } from './LessonSection';

type PropTypes = {
    tasksData: Array<forTasks>
}

type forTasks = {
    heading: Array<string>
    solutionJS: string
    solutionTS: string
    example?: string
}

export const Lessons = ({ tasksData }:PropTypes) => {
    return (
        <div>
            { tasksData.map((task, index) => {
                return (
                    <LessonSection
                        { ...task }
                        key = { index }
                    />
                );
            })}
        </div>
    );
};
