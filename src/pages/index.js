import Layout from '@theme/Layout';
import React, { useState } from 'react';
import CategoriesComponent from '../components/CategoriesComponent';
import SubtopicDataComponent from '../components/SubtopicDataComponent';

const HomePage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedTutorialId, setSelectedTutorialId] = useState(null);
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [selectedSubtopicId, setSelectedSubtopicId] = useState(null);

  return (
    <Layout title="Tutorials" description="A tutorials application built with Docusaurus">
      <div style={{ display: 'flex', padding: '20px' }}>
        <div style={{ flex: '1' }}>
          <CategoriesComponent
            onSelectCategory={id => { setSelectedCategoryId(id); setSelectedTutorialId(null); setSelectedTopicId(null); setSelectedSubtopicId(null); }}
            selectedCategoryId={selectedCategoryId}
            onSetSelectedTutorial={id => { setSelectedTutorialId(id); setSelectedTopicId(null); setSelectedSubtopicId(null); }}
            onSetSelectedTopic={id => { setSelectedTopicId(id); setSelectedSubtopicId(null); }}
            onSetSelectedSubtopic={setSelectedSubtopicId}
          />
        </div>
        <div style={{ flex: '2', padding: '0 20px' }}>
          {selectedSubtopicId && (
            <SubtopicDataComponent subTopicId={selectedSubtopicId} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
