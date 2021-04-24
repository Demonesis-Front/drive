import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderActions } from "store/order/reducer";
import { getOrder } from "store/order/selectors";
import { PickUpType } from "store/order/types";
import Leaflet, { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import icon from "assets/marker.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import iconRetina from "assets/marker.png";

let DefaultIcon = Leaflet.icon({
	...Leaflet.Icon.Default.prototype.options,
	iconUrl: icon,
	iconRetinaUrl: iconRetina,
	shadowUrl: iconShadow,
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;

// INFO: That will come in handy in the future.

// Leaflet.Icon.Default.mergeOptions({
// 	iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
// 	iconUrl: require("leaflet/dist/images/marker-icon.png"),
// 	shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });

type MyComponentPropType = {
	center: LatLngExpression;
	zoom: number;
};

const MyComponent = ({ center, zoom }: MyComponentPropType) => {
	let map = useMap();
	map.setView(center, zoom);
	return null;
};

export const MapComponent = () => {
	const order = useSelector(getOrder);
	const dispatch = useDispatch();
	const [position] = useState<LatLngExpression>([53.205167, 50.133539]);

	const markerHandler = (pickup: PickUpType) => {
		console.log("click");

		dispatch(orderActions.setPickUp(pickup));
	};

	return (
		<>
			<MapContainer
				style={{ height: "352px", width: "100%", maxWidth: "700px" }}
				center={order.city?.coordinates}
				zoom={12}
				scrollWheelZoom={false}
			>
				<MyComponent center={order.city?.coordinates || position} zoom={12} />
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>

				{order.city &&
					order.city?.pickups.map((marker: PickUpType) => (
						<Marker
							key={marker.id}
							position={marker.coordinates}
							eventHandlers={{
								click: () => markerHandler(marker),
							}}
						>
							<Popup>{marker.title}</Popup>
						</Marker>
					))}
			</MapContainer>
		</>
	);
};
