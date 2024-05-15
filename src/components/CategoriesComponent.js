import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axiosInstance from '../utils/axios';

const CategoriesComponent = ({ onSelectCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axiosInstance.get('/categories')
            .then(response => {
                setCategories(response.data.data.map(category => ({ value: category.id, label: category.categoryName })));
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    return (
        <div>
            <h2>Categories</h2>
            <Select
                options={categories}
                onChange={option => onSelectCategory(option.value)}
            />
        </div>
    );
};

export default CategoriesComponent;
