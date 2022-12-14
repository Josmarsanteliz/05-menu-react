import React from 'react';

const Categories = ({categories,filterItems}) => {
 {/* esto funciona pero muchos problemas, es mejor hacerlo de forma dinamica  javascript nuggets 
    <button className="filter-btn" onClick={() => filterItems('breakfast')}>
       breakfast
    </button>
    <button className="filter-btn" onClick={() => filterItems('all')}>
       all
    </button> */}
  return <div className="btn-container">
   {categories.map((category,index) => {
    return <button type='button' className='filter-btn' key={index} onClick={()=> filterItems(category)}>{category}</button>
   })}
   
  </div>;
};

export default Categories;
