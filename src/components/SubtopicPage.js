import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axiosInstance from '../utils/axios';

const SubtopicsComponent = ({ topicId, onSelectSubTopic }) => {
    const [subtopics, setSubtopics] = useState([]);

    useEffect(() => {
        if (topicId) {
            axiosInstance.get(`/topics/${topicId}/subtopics`)
                .then(response => {
                    setSubtopics(response.data.data.map(subtopic => ({ value: subtopic.id, label: subtopic.subTopicName })));
                })
                .catch(error => {
                    console.error("Error fetching subtopics:", error);
                });
        }
    }, [topicId]);

    return (
        <div>
            <h2>Subtopics</h2>
            <Select
                options={subtopics}
                onChange={option => onSelectSubTopic(option.value)}
            />
        </div>
    );
};

export default SubtopicsComponent;
