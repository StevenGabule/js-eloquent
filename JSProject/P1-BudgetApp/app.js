// budget controller
var budgetController = (() => {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: (type, des, val) => {
            
            var newItem, ID;

            // Create new ID
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }         
            
            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if(type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            
            // push it into our data structure
            data.allItems[type].push(newItem);
            
            // return the new element
            return newItem;
        },
        testing: () => console.log(data)
    }


})();


// ui controller
var UIController = (() => {
    
    var _x = (value) => document.querySelector(value).value;
    
    var DOMStrings = {
      inputType: '.add__type',
      inputDesc: '.add__description',
      inputValue: '.add__value',
      inputBtn: '.add__btn',
      incomeContainer: '.income__list',
      expensesContainer: '.expenses__list',
    };

    return {
        getInput: () => {
            return {
                type: _x(DOMStrings.inputType),
                desc: _x(DOMStrings.inputDesc),
                value: _x(DOMStrings.inputValue)
            };
        },

        addListItem: (obj, type) => {
            var html, newHtml, element;

            // create HTML string with placeholder text
            if(type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if(type === 'exp') {
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            // replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // insert the html into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);            
        },
 
        getDOMStrings: () => DOMStrings,

    }

})();

// global app controller
var controller = ((budgetCtrl, UICtrl) => {

    var setupEventListeners = () => {
        var DOM = UICtrl.getDOMStrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', (e) => {
            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
            }
        });
    };


    var ctrlAddItem = function() {
        var input, newItem;
        // 1. field input
        input = UICtrl.getInput();
        
        // 2. add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.desc, input.value);

        // 3. add the item in the ui
        UICtrl.addListItem(newItem, input.type);
        
        // 4. calculate the budget
        
        // 5. display
    };

    return {
        init: () => {
            console.log("Application has started.");
            setupEventListeners();
        }
    }
    
})(budgetController, UIController);

controller.init();