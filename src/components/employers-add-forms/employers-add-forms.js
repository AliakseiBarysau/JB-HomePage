import './employees-add-form.css';

const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Add new</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Name?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="salary in EUR" />

                <button type="submit"
                        className="btn btn-outline-light">Add person</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;