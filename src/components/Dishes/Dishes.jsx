import React, { useState } from 'react';
import './Dishes.css';
import DishesList from '../DishesList/DishesList';
import DishForm from '../DishForm/DishForm';
import Button from '../ui/Button/Button';
import Modal from '../ui/Modal/Modal';
import { createDish } from '../../functions/dishRequests';

const Dishes = () => {
    const [forceRender, setForceRender] = useState(0);
    const [active, setActive] = useState(false);

    return (
        <div className="setting-dishes__wrapper">
            <p className="table_title">All dishes</p>
            <DishesList forceObj={{ forceRender, setForceRender }} />
            <div className="strip" />
            <Button onClick={() => setActive(true)}>New</Button>
            <Modal activeObj={{ active, setActive }}>
                <DishForm
                    title="New Category"
                    forceObj={{ forceRender, setForceRender }}
                    action={createDish}
                    setActive={setActive}
                />
            </Modal>
        </div>
    );
};

export default Dishes;
