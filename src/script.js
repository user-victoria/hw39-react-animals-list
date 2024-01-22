const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const animals = [
    { id: 1, type: `turtle`, icon: `🐢` },
    { id: 2, type: `octopus`, icon: `🐙` },
    { id: 3, type: `fish`, icon: `🐠` },
    { id: 4, type: `flamingo`, icon: `🦩` },
    { id: 5, type: `penguin`, icon: `🐧` }
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

class TableOfAnimals extends React.Component {
    constructor(props) {
        super(props);

        const activeItem = setInterval(() => {
            let randomIndex = getRandomInt(0, this.state.listIndex.length);
            let randomItem = this.state.listIndex[randomIndex];

            this.state.list[randomItem].active = true;
            this.state.listIndex.splice(randomIndex, 1);

            if (!this.state.listIndex.length) {
                clearInterval(activeItem);
                this.state.borderWidth = '20px';
            }

            if (this.state.listIndex.length === Math.floor(this.state.list.length / 2)) {
                this.state.borderWidth = '10px';
            }

            this.setState({});
        }, 2000);
    }

    state = {
        list: this.props.list,
        styleItem: {},
        listIndex: Object.keys(this.props.list),
        borderWidth: 0
    }

    render() {
        return (
            <table style={{ borderWidth: this.state.borderWidth }}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Icon</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.list.map((animal) => (
                        <tr style={animal.active && { color: 'green', fontWeight: 'bold' }} key={animal.id}>
                            <td>{animal.type}</td>
                            <td>{animal.icon}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

root.render(
    <React.Fragment>
        <TableOfAnimals list={animals}></TableOfAnimals>
    </React.Fragment>
);