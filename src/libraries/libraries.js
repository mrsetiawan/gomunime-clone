import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { createStore, compose } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import axios from 'axios';

export {
  React, 
  ReactDOM, 
  Provider, 
  connect,
  createStore,
  compose,
  reduxLogger,
  reduxThunk,
  axios
};

export * from 'react';
export * from 'react-dom';
export * from 'react-router-dom';
export * from 'redux';
export * from 'react-redux';
export * from 'redux-logger';
export * from 'redux-thunk';
export * from 'antd';
export * from '@ant-design/icons';
export * from 'react-lazy-load-image-component';
export * from 'axios';

