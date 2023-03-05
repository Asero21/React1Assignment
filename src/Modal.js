import "./Content.css"

const Modal = ({toggle1, setToggle1}) => {
    return (
        <div onClick={() => setToggle1(!toggle1)} className="modal-design">
            <div className="modal-input">
            <input className="modal-input1" placeholder="New Task"/>
            <button className="modal-input1">Add Task</button>
            </div>
        </div>
        
    )
}

export default Modal