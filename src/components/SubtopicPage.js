import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../utils/axios';

const SubtopicPage = () => {
    const { id } = useParams();
    console.log(id)
    const [subtopic, setSubtopic] = useState(null);

    useEffect(() => {
        const fetchSubtopic = async () => {
            try {
                const response = await axiosInstance.get(`/subtopics/${id}`);
                console.log(response.data.data)
                setSubtopic(response.data.data);
            } catch (error) {
                console.error('Error fetching subtopic:', error);
            }
        };

        fetchSubtopic();
    }, [id]);

    if (!subtopic) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{subtopic.subTopicName}</h1>
            <p>{subtopic.content}</p>
            {/* Render additional subtopic data */}
        </div>
    );
};

export default SubtopicPage;