import './Buttons.css';
import { FunctionalTile } from '../tiles-component/FunctionalTile';
import { ClassTile } from '../../class-components/class-tile-component/ClassTile';
import { useState } from 'react';

const Buttons = () => {
    const [functionShow, setshow]=useState(false);
    const [classShow, setClassShow]=useState(false); //classshow is state and setclassshow function
    const clickedFunctional = () => {
        setshow(!functionShow);
    }

    const clickedClass = () => {
        setClassShow(!classShow)
    }

    return (
        <div className="container">
            <h3>Styling using functional and class components</h3>
            <div className='btn-section'>
                <button onClick={clickedFunctional} className="btn btn-one">To see styling in functional component</button>
                <button onClick={clickedClass} className="btn">To see styling in class component</button>
            </div>
            <div className='tile-section'>
                <div className="tile-item">
                    {functionShow ? <FunctionalTile/> : ''}
                </div>
                <div className="tile-item">
                    {classShow ? <ClassTile/> : ''}
                </div>
            </div>
        </div>
    );
}

export default Buttons;