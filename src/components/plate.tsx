import './index.css';

const Plate = ({ children, isClickable, onClick }) => {
    return (
        <div
            className={'plate ' + (isClickable ? 'clickable' : '')}
            onClick={onClick}
            style={{ cursor: isClickable ? 'pointer' : 'default' }} 
        >
            {children}
        </div>
    );
};

export default Plate;
