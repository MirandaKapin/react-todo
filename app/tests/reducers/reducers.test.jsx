var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe ('Reducers', () => {
  describe ('searchTextReducer', () => {
    it ('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe ('showCompletedReducer', () => {
    describe ('should flip showCompletedStatus', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      it ('if true', () => {
        var res = reducers.showCompletedReducer(df(true), df(action));
        expect(res).toEqual(false);
      });

      it ('if false', () => {
        var res = reducers.showCompletedReducer(df(false), df(action));
        expect(res).toEqual(true);
      });
    });
  });
});
