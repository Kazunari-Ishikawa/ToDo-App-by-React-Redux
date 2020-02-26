// Action Creator
export function addTodo(id, text) {
  return {
    type: 'ADD',
    id: id,
    text: text
  };
}

export function toggleDone(id, flg) {
  return {
    type: 'TOGGLE_DONE',
    id: id,
    isDone: flg
  };
}

export function updateTodo(id, text) {
  return {
    type: 'UPDATE',
    id: id,
    text: text
  }
}

export function deleteTodo(id) {
  return {
    type: 'DELETE',
    id: id
  }
}

export function searchTodo(text) {
  return {
    type: 'SEARCH',
    searchText: text
  };
}

export function toggleStar(id, flg) {
  return {
    type: 'TOGGLE_STAR',
    id: id,
    isStar: flg
  };
}
