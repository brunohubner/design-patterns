// Concrete Observable
var ConcreteObservable = /** @class */ (function () {
    function ConcreteObservable(element) {
        this.element = element;
        this.observers = [];
    }
    ConcreteObservable.prototype.subscribe = function () {
        var _this = this;
        var observers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observers[_i] = arguments[_i];
        }
        observers.forEach(function (observer) {
            if (!_this.observers.includes(observer)) {
                _this.observers.push(observer);
            }
        });
    };
    ConcreteObservable.prototype.unsubscribe = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex < 0)
            return;
        this.observers.splice(observerIndex, 1);
    };
    ConcreteObservable.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (observer) { return observer.update(_this.element); });
    };
    return ConcreteObservable;
}());
// Concrete Observer
var ParagraphObserver = /** @class */ (function () {
    function ParagraphObserver(element) {
        this.element = element;
    }
    ParagraphObserver.prototype.update = function () {
        var _this = this;
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        inputs.forEach(function (input) { return (_this.element.innerHTML = input.value); });
    };
    return ParagraphObserver;
}());
// Client code
var root = document.getElementById("root");
function makeInput() {
    var input = document.createElement("input");
    root === null || root === void 0 ? void 0 : root.appendChild(input);
    return input;
}
function makeParagraph() {
    var p = document.createElement("p");
    root === null || root === void 0 ? void 0 : root.appendChild(p);
    p.innerHTML = "...";
    return p;
}
function run() {
    var input1 = new ConcreteObservable(makeInput());
    var paragraph1 = new ParagraphObserver(makeParagraph());
    var paragraph2 = new ParagraphObserver(makeParagraph());
    var paragraph3 = new ParagraphObserver(makeParagraph());
    input1.subscribe(paragraph1, paragraph2, paragraph3);
    input1.element.addEventListener("keyup", function () { return input1.notify(); });
    input1.unsubscribe(paragraph2);
}
run();
