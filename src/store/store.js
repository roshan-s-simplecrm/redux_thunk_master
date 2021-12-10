import { createStore , applyMiddleware, compose} from 'redux';
import { persistReducer,persistStore } from 'redux-persist';
import appReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import localforage from 'localforage';
const tranStore=()=>{
    const middle=[thunkMiddleware];
    const enhancers=[];
    const __DEV__=process.env.NODE_ENV !== "production"
    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    console.log("sttttttttttttore11111111111111111")

    let persistConfig = {
        key:'trans',
        storage:localforage,
        debug: __DEV__,
        whitelist:['auth','config','modules'],
        timeout:null
    }
    let prReducer = persistReducer(persistConfig,appReducer)
    const store = createStore(
        prReducer,
      {},
      compose(applyMiddleware(...middle),...enhancers),
    );    
const pers=persistStore(store);
    return {store,pers};
}


export const {store,pers}=tranStore();
