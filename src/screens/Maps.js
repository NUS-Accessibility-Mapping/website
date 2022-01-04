import '../App.css';
import React, { Component } from 'react';
import Select from 'react-select';
import utown from '../static/Viewer/21743298_1406722539365107_4308832733562613967_n.png';
import foe from '../static/Viewer/nus-logo-png-transparent.png';
import soc from '../static/Viewer/pngwing.com.png';
import foss from '../static/Viewer/Screenshot (4).png';
import biz from '../static/Viewer/1200px-NUS_coat_of_arms.svg.png';
import fass from '../static/Viewer/21743298_1406722539365107_4308832733562613967_n.png';

const options = [
    {
        label: "University Town",
        value: "utown"
    },
    {
        label: "Faculty of Engineering",
        value: "foe"
    },
    {
        label: "Faculty of Arts and Social Sciences",
        value: "fass"
    },
    {
        label: "School of Computing",
        value: "soc"
    },
    {
        label: "Faculty of Science",
        value: "foss"
    },
    {
        label: "Business School",
        value: "biz"
    },
]

const mapPath = {
    'utown': utown,
    'foe': foe,
    'soc': soc,
    'foss': foss,
    'biz': biz,
    'fass': fass
}

export class Maps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selectedOption) {
        this.setState({selectedOption});
    }

    getMap = () => {
        let location = this.state.selectedOption['value'];
        return mapPath[location];
    }

    render() {
        const {selectedOption} = this.state;

        return (
            <div className="Maps">
                <div id="selector">
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        placeholder={'Select location'}
                        options={options}
                    />
                </div>
                <div id="maps-container">
                    <img src={this.getMap()} height={"100%"} width={'100%'}/>
                </div>
            </div>
        )
    }
}