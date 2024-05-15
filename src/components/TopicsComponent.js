import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axiosInstance from '../utils/axios';

const TopicsComponent = ({ tutorialId, onSelectTopic }) => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        if (tutorialId) {
            axiosInstance.get(`/tutorials/${tutorialId}/topics`)
                .then(response => {
                    setTopics(response.data.data.map(topic => ({ value: topic.id, label: topic.topicName })));
                })
                .catch(error => {
                    console.error("Error fetching topics:", error);
                });
        }
    }, [tutorialId]);

    return (
        <div>
            <h2>Topics</h2>
            <Select
                options={topics}
                onChange={option => onSelectTopic(option.value)}
            />
        </div>
    );
};

export default TopicsComponent;
