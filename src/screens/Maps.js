import '../App.css';
import React, { Component } from 'react';
import Select from 'react-select';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import fass_as_block from '../static/Viewer/fass-as-blocks.png';
import fos_s13_s14_s15_s16 from '../static/Viewer/fos-s12-s13-s14-s15.png';
import fos_s1_s2 from '../static/Viewer/fos-s1-s2.png';

const options = [
    {
        label: "Faculty of Science",
        options: [
            {
                "label": "S1",
                "value": "foss_s1_s2",
                "map": fos_s1_s2
            },
            {
                "label": "S13",
                "value": "fos_s13_s14_s15_s16",
                "map": fos_s13_s14_s15_s16
            }
        ]
    },
    {
        label: "Faculty of Arts and Social Sciences",
        options: [
            {
                "label": "Schematic",
                "value": "fass_as_blocks",
                "map": fass_as_block
            }
        ]
    },
    {
        label: "Faculty of Engineering",
        options: [
            {
            }
        ]
    },
    {
        label: "School of Computing",
        options: [
            {
            }
        ]
    },
    {
        label: "School of Business",
        options: [
            {
            }
        ]
    },
    {
        label: "School of Design and Environment",
        options: [
            {
            }
        ]
    },
    {
        label: "University Town",
        options: [
            {
            }
        ]
    }
];

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
        return this.state.selectedOption.map;
    }

    render() {
        const {selectedOption} = this.state;

        return (
            <div className="Maps">
                <div id="maps-selector">
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        placeholder={'Select location'}
                        options={options}
                    />
                </div>
                <div id="maps-display">
                    <TransformWrapper
                        minScale="1"
                        limitToBounds={true}
                    >
                        <TransformComponent>
                            <img src={this.getMap()} alt=""/>
                        </TransformComponent>
                    </TransformWrapper>
                </div>
            </div>
        )
    }
}