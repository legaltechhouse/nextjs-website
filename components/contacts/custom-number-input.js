export default function CustomNumberInput({ id, changeFn, clickFn }) {
    return (
        <div className="input-group">
            <button className="btn btn-outline-primary" type="button" id="button-subtract" onClick={clickFn}>
                <i className="bi-dash-circle-fill m-auto text-primary"></i>
            </button>
            <label htmlFor={id} className="d-none">Add extras</label>
            <input className="form-control text-center" id={id} type="number" placeholder="0" onChange={changeFn} min="0" max="100" />
            <button className="btn btn-outline-primary" type="button" id="button-add" onClick={clickFn}>
                <i className="bi-plus-circle-fill m-auto text-primary"></i>
            </button>
        </div>
    );
}