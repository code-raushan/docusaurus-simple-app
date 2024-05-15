import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axiosInstance from '../utils/axios';

const TutorialsComponent = ({ categoryId, onSelectTutorial }) => {
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        if (categoryId) {
            axiosInstance.get(`/categories/${categoryId}/tutorials`)
                .then(response => {
                    setTutorials(response.data.data.map(tutorial => ({ value: tutorial.id, label: tutorial.tutorialName })));
                })
                .catch(error => {
                    console.error("Error fetching tutorials:", error);
                });
        }
    }, [categoryId]);

    return (
        <div style={{ padding: 10 }}>
            <h2>Tutorials</h2>
            <Select
                options={tutorials}
                onChange={option => onSelectTutorial(option.value)}
            />
        </div>
    );
};

export default TutorialsComponent;
