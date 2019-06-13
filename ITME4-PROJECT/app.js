
// Storage Controller
const StorageCtrl = (function () {
    // Public methods
    return {
        storeTodoList: function (list) {
            let lists;
            // Check if any items in ls
            if (localStorage.getItem('lists') === null) {
                lists = [];
                lists.push(list);   // Push new item
                localStorage.setItem('lists', JSON.stringify(lists)); // Set ls
            } else {
                lists = JSON.parse(localStorage.getItem('lists')); // Get what is already in ls
                lists.push(list);  // Push new item
                localStorage.setItem('lists', JSON.stringify(lists)); // Re set ls
            }
        },

        getTodoListFromStorage: function () {
            let lists;
            if (localStorage.getItem('lists') === null) {
                lists = [];
            } else {
                lists = JSON.parse(localStorage.getItem('lists'));
            }
            return lists;
        },

        updateTodoListStorage: function (updatedList) {
            let lists = JSON.parse(localStorage.getItem('lists'));
            lists.forEach(function (item, index) {
                if (updatedList.id === item.id) {
                    lists.splice(index, 1, updatedList);
                }
            });
            localStorage.setItem('lists', JSON.stringify(lists));
        },

        deleteTodoListFromStorage: function (id) {
            let lists = JSON.parse(localStorage.getItem('lists'));
            lists.forEach(function (item, index) {
                if (id === item.id) {
                    lists.splice(index, 1);
                }
            });
            localStorage.setItem('lists', JSON.stringify(lists));
        },

        clearTodoListFromStorage: function () {
            localStorage.removeItem('lists');
        }
    }
})();

// Item Controller
const TodoListCtrl = (function () {
    // Item Constructor
    const List = function (id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    };

    const data = {
        lists: StorageCtrl.getTodoListFromStorage(),
        currentList: null
    };

    // Public methods
    return {
        getLists: function () {
            return data.lists;
        },
        addList: function (title, description) {
            let ID;
            // Create ID
            if (data.lists.length > 0) {
                ID = data.lists[data.lists.length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Calories to number
            // calories = parseInt(calories);

            // Create new item
            newList = new List(ID, title, description);

            // Add to items array
            data.lists.push(newList);

            return newList;
        },

        getListById: function (id) {
            let found = null;
            // Loop through items
            data.lists.forEach(function (list) {
                if (list.id === id) {
                    found = list;
                }
            });
            return found;
        },

        updateList: function (title, description) {
            // Calories to number
            // calories = parseInt(calories);

            let found = null;

            data.lists.forEach(function (list) {
                if (list.id === data.currentList.id) {
                    list.title = title;
                    list.description = description;
                    found = list;
                }
            });
            return found;
        },

        deleteList: function (id) {
            // Get ids
            const ids = data.lists.map(function (list) {
                return list.id;
            });

            // Get index
            const index = ids.indexOf(id);

            // Remove item
            data.lists.splice(index, 1);
        },

        clearAllLists: function () {
            data.lists = [];
        },

        setCurrentList: function (list) {
            data.currentList = list;
        },

        getCurrentList: function () {
            return data.currentList;
        },

        logData: function () {
            return data;
        }
    }
})();


// UI Controller
const UICtrl = (function () {
    const UISelectors = {
        TodoList: '#todo-list',
        listTodos: '#todo-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        clearBtn: '.clear-btn',
        titleNameInput: '#title-name',
        descriptionInput: '#description'
    };

    // Public methods
    return {
        populateTodoLists: function (lists) {
            let html = '';
            lists.forEach(function (list) {
                html += `<li class="collection-item" id="item-${list.id}">
                            <strong>${list.title}: </strong> <em>${list.description}</em>
                            <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
                          </li>`;
            });
            document.querySelector(UISelectors.TodoList).innerHTML = html; // Insert list items
        },

        getTodoListInput: function () {
            return {
                title: document.querySelector(UISelectors.titleNameInput).value,
                description: document.querySelector(UISelectors.descriptionInput).value
            }
        },

        addListTodos: function (list) {
            document.querySelector(UISelectors.TodoList).style.display = 'block'; // Show the list
            const li = document.createElement('li'); // Create li element
            li.className = 'collection-item'; // Add class
            li.id = `item-${list.id}`; // Add ID
            li.innerHTML = `<strong>${list.title}: </strong> <em>${list.description}</em> 
                                <a href="#" class="btn btn-primary btn-sm secondary-content"><i class="edit-item fa fa-pencil"></i></a>`; // Add HTML
            // Insert item
            document.querySelector(UISelectors.TodoList).insertAdjacentElement('beforeend', li)
        },

        updateListItem: function (list) {
            let listTodos = document.querySelectorAll(UISelectors.listTodos);
            // Turn Node list into array
            listTodos = Array.from(listTodos);
            listTodos.forEach(function (listItem) {
                const itemID = listItem.getAttribute('id');
                if (itemID === `item-${list.id}`) {
                    document.querySelector(`#${itemID}`).innerHTML = `<strong>${list.title}: </strong> <em>${list.description}</em>
                    <a href="#" class="btn btn-primary btn-sm secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
                }
            });
        },

        deleteListItem: function (id) {
            const itemID = `#item-${id}`;
            const item = document.querySelector(itemID);
            item.remove();
        },

        clearInput: function () {
            document.querySelector(UISelectors.titleNameInput).value = '';
            document.querySelector(UISelectors.descriptionInput).value = '';
        },

        addItemToForm: function () {
            document.querySelector(UISelectors.titleNameInput).value = TodoListCtrl.getCurrentList().title;
            document.querySelector(UISelectors.descriptionInput).value = TodoListCtrl.getCurrentList().description;
            UICtrl.showEditState();
        },

        removeItems: function () {
            let listTodos = document.querySelectorAll(UISelectors.listTodos);
            listTodos = Array.from(listTodos); // Turn Node list into array
            listTodos.forEach(function (item) {
                item.remove();
            });
        },

        hideList: function () {
            document.querySelector(UISelectors.TodoList).style.display = 'none';
        },

        clearEditState: function () {
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },

        showEditState: function () {
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        },

        getSelectors: function () {
            return UISelectors;
        }
    }
})();


// App Controller
const App = (function (TodoListCtrl, StorageCtrl, UICtrl) {
    // Load event listeners
    const loadEventListeners = function () {
        // Get UI selectors
        const UISelectors = UICtrl.getSelectors();

        // Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        // Disable submit on enter
        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) {
                e.preventDefault();
                return false;
            }
        });

        // Edit icon click event
        document.querySelector(UISelectors.TodoList).addEventListener('click', itemEditClick);
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);
        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
    };

    // Add item submit
    const itemAddSubmit = function (e) {
        const input = UICtrl.getTodoListInput();
        if (input.title !== '' && input.description !== '') {
            const newItem = TodoListCtrl.addList(input.title, input.description);
            UICtrl.addListTodos(newItem);
            StorageCtrl.storeTodoList(newItem);
            UICtrl.clearInput();
        }
        e.preventDefault();
    };

    // Click edit item
    const itemEditClick = function (e) {
        if (e.target.classList.contains('edit-item')) {
            const listId = e.target.parentNode.parentNode.id;
            const listIdArr = listId.split('-');
            const id = parseInt(listIdArr[1]);
            const itemToEdit = TodoListCtrl.getListById(id);
            TodoListCtrl.setCurrentList(itemToEdit);
            UICtrl.addItemToForm();
        }
        e.preventDefault();
    };

    // Update item submit
    const itemUpdateSubmit = function (e) {
        const input = UICtrl.getTodoListInput();
        const updatedItem = TodoListCtrl.updateList(input.title, input.description);
        UICtrl.updateListItem(updatedItem);
        StorageCtrl.updateTodoListStorage(updatedItem);
        UICtrl.clearEditState();
        e.preventDefault();
    };

    // Delete button event
    const itemDeleteSubmit = function (e) {
        const currentItem = TodoListCtrl.getCurrentList();
        TodoListCtrl.deleteList(clientInformation);
        UICtrl.deleteListItem(currentItem.id);
        StorageCtrl.deleteTodoListFromStorage(currentItem.id);
        UICtrl.clearEditState();
        e.preventDefault();
    };

    // Clear items event
    const clearAllItemsClick = function () {
        TodoListCtrl.clearAllLists();
        UICtrl.removeItems();
        StorageCtrl.clearTodoListFromStorage();
        UICtrl.hideList();
    };

    // Public methods
    return {
        init: function () {
            UICtrl.clearEditState();
            const items = TodoListCtrl.getLists();
            if (items.length === 0) {
                UICtrl.hideList();
            } else {
                UICtrl.populateTodoLists(items);
            }
            loadEventListeners();
        }
    }

})(TodoListCtrl, StorageCtrl, UICtrl);
App.init();