const Toast = ({text}: {text: string}) => {
    return (
        <div className="alert alert-error">
            <span>{text}</span>
        </div>
    )
}

export default Toast;