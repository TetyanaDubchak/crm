import React from 'react';
import s from '../styles/components/CategoriesList.module.scss';
import categories from '../json/categories.json';

export default function CategoriesList() {
  return (
    <ul className={s.list}>
      {categories.map((item) => {
        return (
          <li className={s.element} key={item.id}>
            <h4 className={s.title}>{item.product}</h4>
            <p className={s.content}>{item.quantity}</p>
          </li>
        );
      })}
    </ul>
  );
}
