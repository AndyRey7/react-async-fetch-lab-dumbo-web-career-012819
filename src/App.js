import React from 'react'

export default class App extends React.Component {

    state = {
        space: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                space: data
            })
        })
    }



    render() {

        return (
            <div>yep</div>
        )
    }
}
