import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './Map.css';

const Map = (props) => {
	return (
		<div className={`map ${props.className}`} style={props.style}>
			<MapContainer
				center={props.center}
				zoom={props.zoom}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={props.center}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default Map;
