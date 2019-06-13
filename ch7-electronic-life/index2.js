let test = {
    prop: 10,
    addDropTo: function (array) {
        return array.map(function (elt) {
            return this.prop + elt;
        // }, this);
        }.bind(this));
    }
};
console.log(test.addDropTo([5,4,3,2,1]).toString());


