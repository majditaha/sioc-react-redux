/* eslint-disable react/jsx-closing-tag-location,camelcase */
import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {compose, withProps, lifecycle} from 'recompose';
import {withScriptjs} from 'react-google-maps';
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox';


const PlacesWithStandaloneSearchBox = compose(
    withProps({
        // eslint-disable-next-line max-len
        googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBPcjKZsJ6A7MtY_Y3aowX6K7tJQRBuU9s&language=es&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{height: '100%'}}/>,
        containerElement: <div style={{height: '400px'}}/>
    }),
    lifecycle({
        componentWillMount() {
            const refs = {};

            this.setState({
                places: [],
                onSearchBoxMounted: ref => {
                    refs.searchBox = ref;
                },
                onPlacesChanged: () => {
                    const places = refs.searchBox.getPlaces();

                    this.setState({
                        places
                    });
                    this.props.onChange({
                        address: places[0].formatted_address,
                        latitude: places[0].geometry.location.lat(),
                        altitude: places[0].geometry.location.lng()
                    });
                }
            });
        }
    }),
    withScriptjs
)(props =>
    (<div data-standalone-searchbox="">
        <StandaloneSearchBox
            ref={props.onSearchBoxMounted}
            bounds={props.bounds}
            onPlacesChanged={props.onPlacesChanged}
        >
            <input
                type="text"
                placeholder="Escriba ubicación"
                style={{
                    boxSizing: 'border-box',
                    border: '1px solid transparent',
                    width: '240px',
                    height: '32px',
                    padding: '0 12px',
                    borderRadius: '3px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                    fontSize: '14px`',
                    outline: 'none',
                    textOverflow: 'ellipses'
                }}
            />
        </StandaloneSearchBox>
        <ol>
            {props.places.map(({place_id, formatted_address, geometry: {location}}) =>
                (<li key={place_id}>
                    {formatted_address}
                    {' at '}
                    ({location.lat()}, {location.lng()})
                </li>)
            )}
        </ol>
    </div>)
);

const enhance = _.identity;

class GoogleSearchBox extends Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired
    };
    handleChange(e) {
        this.props.onChange(e);
    }

    render() {
        return (
            <PlacesWithStandaloneSearchBox onChange={e => this.handleChange(e)} key="map"/>
        );
    }
}

export default enhance(GoogleSearchBox);
