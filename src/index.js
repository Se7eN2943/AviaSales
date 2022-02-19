import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
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

const logger = store => next => actions => {
    const res = next(actions);
    console.log(store.getState())
    return res
}

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, root);

