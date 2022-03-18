import AppInfo from '../app-info/app-info';
import SearchPanel from '../app-search-panel/app-search-panel';
import './app.css';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-forms/employers-add-forms';

function App(){
const data = [
    {name: "John", salary: 800, incrise: false},
    {name: "Alex", salary: 800, incrise: true},
    {name: "Nazar", salary: 900, incrise: false},
];


    return (
        <div className="app">
            <AppInfo />
    
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            
            <EmployersList data={data}/>
            <EmployeesAddForm/>
           
        </div>
    );
}

export default App;