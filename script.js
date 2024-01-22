var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var animals = [{ id: 1, type: 'turtle', icon: '\uD83D\uDC22' }, { id: 2, type: 'octopus', icon: '\uD83D\uDC19' }, { id: 3, type: 'fish', icon: '\uD83D\uDC20' }, { id: 4, type: 'flamingo', icon: '\uD83E\uDDA9' }, { id: 5, type: 'penguin', icon: '\uD83D\uDC27' }];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

var TableOfAnimals = function (_React$Component) {
    _inherits(TableOfAnimals, _React$Component);

    function TableOfAnimals(props) {
        _classCallCheck(this, TableOfAnimals);

        var _this = _possibleConstructorReturn(this, (TableOfAnimals.__proto__ || Object.getPrototypeOf(TableOfAnimals)).call(this, props));

        _this.state = {
            list: _this.props.list,
            styleItem: {},
            listIndex: Object.keys(_this.props.list),
            borderWidth: 0
        };


        var activeItem = setInterval(function () {
            var randomIndex = getRandomInt(0, _this.state.listIndex.length);
            var randomItem = _this.state.listIndex[randomIndex];

            _this.state.list[randomItem].active = true;
            _this.state.listIndex.splice(randomIndex, 1);

            if (!_this.state.listIndex.length) {
                clearInterval(activeItem);
                _this.state.borderWidth = '20px';
            }

            if (_this.state.listIndex.length === Math.floor(_this.state.list.length / 2)) {
                _this.state.borderWidth = '10px';
            }

            _this.setState({});
        }, 2000);
        return _this;
    }

    _createClass(TableOfAnimals, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'table',
                { style: { borderWidth: this.state.borderWidth } },
                React.createElement(
                    'thead',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            null,
                            'Type'
                        ),
                        React.createElement(
                            'th',
                            null,
                            'Icon'
                        )
                    )
                ),
                React.createElement(
                    'tbody',
                    null,
                    this.state.list.map(function (animal) {
                        return React.createElement(
                            'tr',
                            { style: animal.active && { color: 'green', fontWeight: 'bold' }, key: animal.id },
                            React.createElement(
                                'td',
                                null,
                                animal.type
                            ),
                            React.createElement(
                                'td',
                                null,
                                animal.icon
                            )
                        );
                    })
                )
            );
        }
    }]);

    return TableOfAnimals;
}(React.Component);

root.render(React.createElement(
    React.Fragment,
    null,
    React.createElement(TableOfAnimals, { list: animals })
));