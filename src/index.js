import ReactDOM from 'react-dom';
import App from './components/App/App';
import 'antd/dist/antd.css';
import './components/App/App.scss';
import './components/Filters/Filters.scss';
import './components/TicketList/TicketList.scss';

const root = document.querySelector('.root');



ReactDOM.render(<App />, root);
