import EmployersListItem from '../employers-list-items/employers-list-items';

import './employers-list.css';

const EmployersList = ({data}) => {

const elements = data.map(item => {
    return (
        <EmployersListItem {...item}/>
    )
})


    return (
        <ul className="app-list list-group">
        {elements}
        </ul>
    )
}

export default EmployersList;