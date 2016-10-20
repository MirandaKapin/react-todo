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

  describe ('todosReducer', () => {
    it ('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it ('should toggle todo item', () => {
      var todoArray = [
        {
          id: 1,
          text: 'Walk dog',
          completed:false,
          createdAt: 1476932876,
          completedAt: undefined
        }
      ];

      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      };

      var res = reducers.todosReducer(df(todoArray), df(action));

      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toBeA('number');
    });
  });
});
