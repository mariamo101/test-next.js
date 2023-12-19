import React from 'react';
import styles from './Button.module.scss';

type Props = {
    title: string;
    className?: string;
    disabled?: boolean;
    mode?: 'fill' | 'outline';
};

const Button = (props: Props) => {
    const classes = [styles.container, props.className];
    if (props.mode === 'outline') {
        classes.push(styles.outline);
    } else {
        classes.push(styles.fill);
    }

    return (
        <button disabled={props.disabled} className={classes.join(' ').trim()}>
            {props.title}
        </button>
    );
};

export default Button;
