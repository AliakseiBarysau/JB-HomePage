import AppInfo from '../app-info/app-info';
import SearchPanel from '../app-search-panel/app-search-panel';
import './app.css';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-forms/employers-add-forms';

function App(){
    return (
        <div className="app">
            <AppInfo />
    
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            
            <EmployersList/>
            <EmployeesAddForm/>
           
        </div>
    );
}

export default App;