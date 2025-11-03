
import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
      {['Todos', ...categories].map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-5 py-2.5 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 ${
            selectedCategory === category
              ? 'bg-emerald-600 text-white shadow-lg scale-105'
              : 'bg-white text-gray-700 hover:bg-emerald-100 hover:text-emerald-800'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
