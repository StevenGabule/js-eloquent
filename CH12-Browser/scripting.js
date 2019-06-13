function talksAbout(node, string) {
    if (node.nodeType === document.ELEMENT_NODE) {
        for (let i = 0; i < node.childNodes.length; i++) {
            if (talksAbout(node.childNodes[i], string))
                return true;
        }
        return false;
    } else if(node.nodeType === document.TEXT_NODE) {
        return node.nodeValue.indexOf(string) > -1;
    }
}
// console.log(talksAbout(document.body, "book"));

// convert the collection to a real array by calling the array slice method
let arrayish = {0: "one", 1: "two", 2 : "three", length: 3};
let real = Array.prototype.slice.call(arrayish, 0);
real.forEach(function (elt) { console.log(elt); });

