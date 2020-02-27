// Action Creator
export function addTodo(id, text) {
  return {
    type: 'ADD',
    id: id,
    text: text
  };
}

export function toggleDone(id) {
  return {
    type: 'TOGGLE_DONE',
    id: id,
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

export function toggleStar(id) {
  return {
    type: 'TOGGLE_STAR',
    id: id,
  };
}

export function toggleAllDone() {
  return {
    type: 'TOGGLE_ALL_DONE',
  };
}

export function deleteAllTodo() {
  return {
    type: 'DELETE_ALL_TODO',
  };
}
