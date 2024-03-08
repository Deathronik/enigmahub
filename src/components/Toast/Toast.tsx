const Toast = ({text}: {text: string}) => {
    return (
        <div className="alert alert-error">
            <span className="cursor-text">{text}</span>
        </div>
    )
}

export default Toast;