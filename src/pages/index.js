import Layout from '@theme/Layout';
import React, { useState } from 'react';
import CategoriesComponent from '../components/CategoriesComponent';
import SubtopicDataComponent from '../components/SubtopicDataComponent';
import SubtopicsComponent from '../components/SubtopicsComponent';
import TopicsComponent from '../components/TopicsComponent';
import TutorialsComponent from '../components/TutorialsComponent';

const HomePage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedTutorialId, setSelectedTutorialId] = useState(null);
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [selectedSubtopicId, setSelectedSubtopicId] = useState(null);

  return (
    <Layout title="Tutorials" description="A tutorials application built with Docusaurus">
      <div style={{ display: 'flex', padding: '20px' }}>
        <div style={{ flex: '1', padding: 10 }}>
          <CategoriesComponent onSelectCategory={id => { setSelectedCategoryId(id); setSelectedTutorialId(null); setSelectedTopicId(null); setSelectedSubtopicId(null); }} />
          {selectedCategoryId && (
            <TutorialsComponent
              categoryId={selectedCategoryId}
              onSelectTutorial={id => { setSelectedTutorialId(id); setSelectedTopicId(null); setSelectedSubtopicId(null); }}
            />
          )}
          {selectedTutorialId && (
            <TopicsComponent
              tutorialId={selectedTutorialId}
              onSelectTopic={id => { setSelectedTopicId(id); setSelectedSubtopicId(null); }}
            />
          )}
          {selectedTopicId && (
            <SubtopicsComponent
              topicId={selectedTopicId}
              onSelectSubTopic={setSelectedSubtopicId}
            />
          )}
        </div>
        <div style={{ flex: '2', padding: '0 20px' }}>
          {selectedSubtopicId && (
            <SubtopicDataComponent
              subTopicId={selectedSubtopicId}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
