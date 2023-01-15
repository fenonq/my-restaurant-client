import React, { useState } from 'react';
import Button from '../ui/Button/Button';
import './Categories.css';
import CategoriesList from '../CategoriesList/CategoriesList';
import CategoryForm from '../CategoryForm/CategoryForm';
import Modal from '../ui/Modal/Modal';
import {createCategory} from "../../functions/categoryRequests";

const Categories = () => {
    const [forceRender, setForceRender] = useState(0);
    const [active, setActive] = useState(false);

    return (
        <div className="setting-categories__wrapper">
            <p className="table_title">All categories</p>
            <CategoriesList forceObj={{ forceRender, setForceRender }} />
            <div className="strip" />
            <Button onClick={() => setActive(true)}>New</Button>
            <Modal activeObj={{ active, setActive }}>
                <CategoryForm
                    title="New Category"
                    forceObj={{ forceRender, setForceRender }}
                    action={createCategory}
                    setActive={setActive}
                />
            </Modal>
        </div>
    );
};

export default Categories;
