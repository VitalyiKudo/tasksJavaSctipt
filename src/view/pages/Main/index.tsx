// Core
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorBoundary } from '../../components/ErrorBoundary';

// Components
import { tasks } from './items';

// Styles
import { Container } from './styles';

// Icons

const Main: FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <img
                alt = 'JavaScript'
                className = 'task-image'
                src = 'https://analyticsindiamag.com/wp-content/uploads/2019/11/javascript.png'
            />
            <nav className = 'task-nav'>
                <p className = 'task-field'>
                    {tasks.map((task, index) => {
                        if (index < 8) {
                            return                     (
                                <button
                                    className = 'nav-link'
                                    key = { index }
                                    onClick = { () => navigate(task.id) }>
                                    {task.name}
                                </button>
                            );
                        }

                        return null;
                    })}
                </p>
                <p className = 'task-field'>
                    {tasks.map((task, index) => {
                        if (index > 8) {
                            return                     (
                                <button
                                    className = 'nav-link'
                                    key = { index }
                                    onClick = { () => navigate(task.id) }>
                                    {task.name}
                                </button>
                            );
                        }

                        return null;
                    })}
                </p>
            </nav>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
