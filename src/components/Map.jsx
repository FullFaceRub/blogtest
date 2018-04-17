import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
 
const params = {v: '3.exp', key: 'AIzaSyAi6wowflA74UMGwtlsGUeo2hXaHjwdxiA'};
 
export default class Map extends React.Component {
 
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }
 
  render(props) {
    return (
      <Gmaps
        width={'300px'}
        height={'300px'}
        lat={this.props.lat}
        lng={this.props.lng}
        zoom={12}
        loadingMessage={'Loading'}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={this.props.lat}
          lng={this.props.lng}
          draggable={false} />
      </Gmaps>
    );
  }
 
}