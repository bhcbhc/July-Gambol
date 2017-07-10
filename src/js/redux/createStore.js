/**
 * Created by Ninghai on 2017/7/10.
 */
import {createStore, applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import  thunkMiddleware from 'redux-thunk'
import reducer from './reducer'


const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    logger
)(createStore)


export default function configureStore(initialState) {
    return createStoreWithMiddleware(reducer, initialState);
}
