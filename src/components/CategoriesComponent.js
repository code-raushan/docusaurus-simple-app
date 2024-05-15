import React, { useEffect, useState } from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import axiosInstance from '../utils/axios';
import TutorialsComponent from './TutorialsComponent';

const CategoriesComponent = ({ onSelectCategory, selectedCategoryId, onSetSelectedTutorial, onSetSelectedTopic, onSetSelectedSubtopic }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        console.log("Fetching categories");
        axiosInstance.get('/categories')
            .then(response => {
                console.log("Categories fetched:", response.data.data);
                setCategories(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    return (
        <div>
            <h2>Categories</h2>
            <Accordion allowZeroExpanded>
                {categories.map(category => (
                    <AccordionItem key={category.id} uuid={category.id}>
                        <AccordionItemHeading>
                            <AccordionItemButton onClick={() => onSelectCategory(category.id)}>
                                {category.categoryName}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            {selectedCategoryId === category.id && (
                                <TutorialsComponent
                                    categoryId={category.id}
                                    onSelectTutorial={onSetSelectedTutorial}
                                    selectedTutorialId={selectedCategoryId === category.id ? selectedTutorialId : null}
                                    onSetSelectedTopic={onSetSelectedTopic}
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

export default CategoriesComponent;
