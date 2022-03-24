import EmployersListItem from '../employers-list-items/employers-list-items';

import './employers-list.css';

const EmployersList = ({data}) => {

const elements = data.map(item => {
   const {id, ...itemProps} = item;
    return (
        <EmployersListItem key={id} {...itemProps}/>
    )
})


    return (
        <ul className="app-list list-group">
        {elements}
        </ul>
    )
}

export default EmployersList;