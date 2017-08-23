//this index js file will import all reduxers
import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
//this combineReducer assigns the libraryReducer to the librarys key
//application state now has a key of librarys
export default combineReducers({
  libraries : LibraryReducer,
  selectedLibraryId : SelectionReducer
});
