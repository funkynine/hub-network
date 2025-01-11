import './index.css';

const Plate = ({children, isClickable}) => {
    return (
        <div className={'plate ' + (isClickable ? 'clickable' : '' )}>
            {children}
        </div>
    );
}

export default Plate;
