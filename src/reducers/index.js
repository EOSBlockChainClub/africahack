import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PickerReducer from './PickerReducer';
import PickerFetchReducer from './PickerFetchReducer';
import ProductReducer from './ProductReducer';
import ProductFetchReducer from './ProductFetchReducer';
import SettingsReducer from './SettingsReducer';
import TransactionReducer from './TransactionReducer';
import SiteFetchReducer from './SiteFetchReducer';

export default combineReducers({
  auth: AuthReducer,
  picker: PickerReducer,
  pickers: PickerFetchReducer,
  product: ProductReducer,
  products: ProductFetchReducer,
  settings: SettingsReducer,
  transaction: TransactionReducer,
  sites: SiteFetchReducer
});
