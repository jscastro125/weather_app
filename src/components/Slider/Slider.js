import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.css'

const Slider = ({ min, max, value, label, onChange }) => {
    const inputEl = useRef(null);
    const [width, setWidth] = useState(0);
    const [xPos, setXPos] = useState(0);

    useEffect(() => {
        if(inputEl && typeof inputEl.current?.getBoundingClientRect === 'function' ) {
            setWidth(inputEl.current.getBoundingClientRect().width);
            setXPos(inputEl.current.getBoundingClientRect().x)
        }
    }, [inputEl])

    const ratio = (width - 20) / 100;
    const newValue = ((value - min) * 100) / (max - min);
    const newPosition = (xPos) + newValue * ratio;

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderLabel}>
                {label}
            </div>
            <input ref={inputEl} className={styles.customSlider} type="range" min={min} max={max} value={value} onChange={(event) => onChange(event.target.value)}/>
            <div className={styles.rangeValue}>
              <span style={{ left: `calc(${newValue}% + (${newPosition}px))` }}>
                {value}
              </span>
            </div>
        </div>
    );
};

Slider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Slider;
