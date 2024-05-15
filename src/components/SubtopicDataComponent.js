import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axios';

const SubtopicDataComponent = ({ subTopicId }) => {
    const [subtopic, setSubtopic] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (subTopicId) {
            axiosInstance.get(`/subtopics/${subTopicId}`)
                .then(response => {
                    setSubtopic(response.data.data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
        }
    }, [subTopicId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading subtopic: {error.message}</div>;
    }

    return (
        <div>
            <h2>{subtopic.subTopicName}</h2>
            <div>{subtopic.content}</div>
        </div>
    );
};

export default SubtopicDataComponent;
