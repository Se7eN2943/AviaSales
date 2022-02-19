import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import reducer from './reducer';
import { Provider } from 'react-redux';
import App from './components/App/App';
import 'antd/dist/antd.css';
import './components/App/App.scss';
import './components/Filters/Filters.scss';
import './components/Content/Nav/Nav.scss';
import './components/Content/TicketList/TicketList.scss';
import './components/Content/TicketList/Ticket/Ticket.scss';
import './components/Content/TicketList/Ticket/Route/Route.scss';
import './components/Content/Content.scss';

const root = document.querySelector('.root');

const store = createStore(reducer);

ReactDOM.render(
    <Provider store ={store}>
        <App />
    </Provider>, root);

