import React, { useEffect, useState } from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import axiosInstance from '../utils/axios';
import TopicsComponent from './TopicsComponent';

const TutorialsComponent = ({ categoryId, onSelectTutorial, selectedTutorialId, onSetSelectedTopic, onSetSelectedSubtopic }) => {
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        if (categoryId) {
            console.log("Fetching tutorials for category:", categoryId);
            axiosInstance.get(`/categories/${categoryId}/tutorials`)
                .then(response => {
                    console.log("Tutorials fetched:", response.data.data);
                    setTutorials(response.data.data);
                })
                .catch(error => {
                    console.error("Error fetching tutorials:", error);
                });
        }
    }, [categoryId]);

    return (
        <div>
            <h2>Tutorials</h2>
            <Accordion allowZeroExpanded>
                {tutorials.map(tutorial => (
                    <AccordionItem key={tutorial.id} uuid={tutorial.id}>
                        <AccordionItemHeading>
                            <AccordionItemButton onClick={() => onSelectTutorial(tutorial.id)}>
                                {tutorial.tutorialName}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            {selectedTutorialId === tutorial.id && (
                                <TopicsComponent
                                    tutorialId={tutorial.id}
                                    onSelectTopic={onSetSelectedTopic}
                                    selectedTopicId={selectedTutorialId === tutorial.id ? selectedTopicId : null}
                                    onSetSelectedSubtopic={onSetSelectedSubtopic}
                                />
                            )}
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default TutorialsComponent;
