import React, { useEffect, useState } from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import axiosInstance from '../utils/axios';
import SubtopicDataComponent from './SubtopicDataComponent';

const SubtopicsComponent = ({ topicId, onSelectSubTopic, selectedSubtopicId }) => {
    const [subtopics, setSubtopics] = useState([]);

    useEffect(() => {
        if (topicId) {
            console.log("Fetching subtopics for topic:", topicId);
            axiosInstance.get(`/topics/${topicId}/subtopics`)
                .then(response => {
                    console.log("Subtopics fetched:", response.data.data);
                    setSubtopics(response.data.data);
                })
                .catch(error => {
                    console.error("Error fetching subtopics:", error);
                });
        }
    }, [topicId]);

    return (
        <div>
            <h2>Subtopics</h2>
            <Accordion allowZeroExpanded>
                {subtopics.map(subtopic => (
                    <AccordionItem key={subtopic.id} uuid={subtopic.id}>
                        <AccordionItemHeading>
                            <AccordionItemButton onClick={() => onSelectSubTopic(subtopic.id)}>
                                {subtopic.subTopicName}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            {selectedSubtopicId === subtopic.id && (
                                <SubtopicDataComponent subTopicId={subtopic.id} />
                            )}
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default SubtopicsComponent;
