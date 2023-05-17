import styles from '../styles/button.module.scss';

const Button = (props) => {
    return (
        <div 
            onClick={props.onClick}
            className={props.type === 'transparent' ?
            styles["button-skeleton"] : styles["button"]}
        >
            {props.children}
        </div>
    )
}

export default Button;