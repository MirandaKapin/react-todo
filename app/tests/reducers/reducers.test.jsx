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
        todo: {
          id: 'abc123',
          text: 'Something todo',
          completed: false,
          createdAt: 98745612
        }
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it ('should update todo item', () => {
      var todoArray = [
        {
          id: '123',
          text: 'Walk dog',
          completed: true,
          createdAt: 1476932876,
          completedAt: 1476932888
        }
      ];

      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todoArray[0].id,
        updates
      };

      var res = reducers.todosReducer(df(todoArray), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todoArray[0].text);
    });

    it ('should add existing todos', () => {
      var todos = [{
        id: 111,
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it ('should remove todos on logout', () => {
      const authData = {uid: 'abc123'};
      const todos = [{
        id: 111,
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];
      const action = {
        type: 'LOGOUT'
      };

      var resTodos = reducers.todosReducer(df(todos), df(action))

      expect(resTodos.length).toEqual(0);
    });
  });

  describe('authReducer', () => {
    it ('should store uid on LOGIN', () => {
      var uid = '1234abc';
      var action = {
        type: 'LOGIN',
        uid: uid
      };

      var res = reducers.authReducer(undefined, df(action));

      expect(res).toEqual({uid});
    });

    it ('should remove uid on LOGOUT', () => {
      const authData = {uid: 'abc123'};
      const action = {
        type: 'LOGOUT'
      };

      var resAuth = reducers.authReducer(df(authData), df(action));

      expect(resAuth).toEqual({});
    });

  });
});
