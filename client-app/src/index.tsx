import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/styles.css';
import reportWebVitals from './reportWebVitals';
import App from './app/layout/App';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './app/styles/theme';

// import DashBoard from './DashBoard/Dashboard'


class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
