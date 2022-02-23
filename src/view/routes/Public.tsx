// Core
import React, { FC } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { Lessons } from '../components/Lessons';

// Pages
import { Main } from '../pages';
import { data10 } from '../pages/Main/tasksDatas/data10';
import { data14 } from '../pages/Main/tasksDatas/data14';
import { data15 } from '../pages/Main/tasksDatas/data15';
import { data16 } from '../pages/Main/tasksDatas/data16';
import { data17 } from '../pages/Main/tasksDatas/data17';
import { data18 } from '../pages/Main/tasksDatas/data18';
import { data2 } from '../pages/Main/tasksDatas/data2';
import { data20 } from '../pages/Main/tasksDatas/data20';
import { data21 } from '../pages/Main/tasksDatas/data21';
import { data3 } from '../pages/Main/tasksDatas/data3';
import { data4 } from '../pages/Main/tasksDatas/data4';
import { data5 } from '../pages/Main/tasksDatas/data5';
import { data6 } from '../pages/Main/tasksDatas/data6';
import { data7 } from '../pages/Main/tasksDatas/data7';
import { data9 } from '../pages/Main/tasksDatas/data9';

export const Public: FC = () => {
    const routes = useRoutes([
        {
            path:     '',
            element:  <Main />,
            children: [{ path: '*', element: <Navigate to = '/' /> }],
        },
        {
            path:    '2',
            element: <Lessons tasksData = { data2 } />,
        },
        {
            path:    '3',
            element: <Lessons tasksData = { data3 } />,
        },
        {
            path:    '4',
            element: <Lessons tasksData = { data4 } />,
        },
        {
            path:    '5',
            element: <Lessons tasksData = { data5 } />,
        },
        {
            path:    '6',
            element: <Lessons tasksData = { data6 } />,
        },
        {
            path:    '7',
            element: <Lessons tasksData = { data7 } />,
        },
        {
            path:    '9',
            element: <Lessons tasksData = { data9 } />,
        },
        {
            path:    '10',
            element: <Lessons tasksData = { data10 } />,
        },
        {
            path:    '14',
            element: <Lessons tasksData = { data14 } />,
        },
        {
            path:    '15',
            element: <Lessons tasksData = { data15 } />,
        },
        {
            path:    '16',
            element: <Lessons tasksData = { data16 } />,
        },
        {
            path:    '17',
            element: <Lessons tasksData = { data17 } />,
        },
        {
            path:    '18',
            element: <Lessons tasksData = { data18 } />,
        },
        {
            path:    '20',
            element: <Lessons tasksData = { data20 } />,
        },
        {
            path:    '21',
            element: <Lessons tasksData = { data21 } />,
        },

    ]);

    return routes;
};
