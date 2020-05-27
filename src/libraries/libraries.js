import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, compose } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';

export {
  React, 
  ReactDOM, 
  Provider, 
  connect,
  createStore,
  compose,
  reduxLogger,
  reduxThunk
};

export * from 'react';
export * from 'react-dom';
export * from 'react-router-dom';
export * from 'redux';
export * from 'react-redux';
export * from 'redux-logger';
export * from 'redux-thunk';
export * from 'antd';

//melanjutkan setting redux
