import React, { useEffect, useState } from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import axiosInstance from '../utils/axios';
import SubtopicsComponent from './SubtopicsComponent';

const TopicsComponent = ({ tutorialId, onSelectTopic, selectedTopicId, onSetSelectedSubtopic }) => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        if (tutorialId) {
            console.log("Fetching topics for tutorial:", tutorialId);
            axiosInstance.get(`/tutorials/${tutorialId}/topics`)
                .then(response => {
                    console.log("Topics fetched:", response.data.data);
                    setTopics(response.data.data);
                })
                .catch(error => {
                    console.error("Error fetching topics:", error);
                });
        }
    }, [tutorialId]);

    return (
        <div>
            <h2>Topics</h2>
            <Accordion allowZeroExpanded>
                {topics.map(topic => (
                    <AccordionItem key={topic.id} uuid={topic.id}>
                        <AccordionItemHeading>
                            <AccordionItemButton onClick={() => onSelectTopic(topic.id)}>
                                {topic.topicName}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            {selectedTopicId === topic.id && (
                                <SubtopicsComponent
                                    topicId={topic.id}
                                    onSelectSubTopic={onSetSelectedSubtopic}
                                    selectedSubtopicId={selectedTopicId === topic.id ? selectedSubtopicId : null}
                                />
                            )}
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default TopicsComponent;
