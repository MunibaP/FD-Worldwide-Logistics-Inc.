import { useEffect } from "react";

import L from "leaflet";

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline,
    useMap,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

function MapBounds({
    origin,
    current,
    destination,
}) {
    const map = useMap();

    useEffect(() => {
        map.fitBounds(
            [
                origin,
                current,
                destination,
            ],
            {
                padding: [35, 35],
            }
        );
    }, [
        map,
        origin,
        current,
        destination,
    ]);

    return null;
}

const originIcon = L.divIcon({
    className: "custom-map-marker",
    html: `
        <div class="map-marker map-marker-origin">
            <span></span>
        </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
});


const destinationIcon = L.divIcon({
    className: "custom-map-marker",
    html: `
        <div class="map-marker map-marker-destination">
            <span></span>
        </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
});


const shipmentIcon = L.divIcon({
    className: "custom-map-marker",
    html: `
        <div class="shipment-parcel-simple">
            📦
        </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [10, 40],
});


const deliveredIcon = L.divIcon({
    className: "custom-map-marker",
    html: `
        <div class="map-marker map-marker-delivered">
            <span>✓</span>
        </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 29],
});


function ShipmentMap({ shipment }) {

    if (!shipment) {
        return null;
    }


    const originPosition = [
        shipment.originCoordinates.lat,
        shipment.originCoordinates.lng,
    ];

    const currentPosition = [
        shipment.currentCoordinates.lat,
        shipment.currentCoordinates.lng,
    ];

    const destinationPosition = [
        shipment.destinationCoordinates.lat,
        shipment.destinationCoordinates.lng,
    ];

    const fullRoute = [
        originPosition,
        currentPosition,
        destinationPosition,
    ];

    const completedRoute = [
        originPosition,
        currentPosition,
    ];

    const currentAtOrigin =
    shipment.currentCoordinates.lat === shipment.originCoordinates.lat &&
    shipment.currentCoordinates.lng === shipment.originCoordinates.lng;

    const currentAtDestination =
    shipment.currentCoordinates.lat === shipment.destinationCoordinates.lat &&
    shipment.currentCoordinates.lng === shipment.destinationCoordinates.lng;


    return (
        <MapContainer
            center={currentPosition}
            zoom={8}
            scrollWheelZoom={false}
            className="shipment-map"
        >
            <MapBounds
                origin={originPosition}
                current={currentPosition}
                destination={destinationPosition}
            />

            <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* FULL / PLANNED ROUTE */}

            <Polyline
                positions={fullRoute}
                pathOptions={{
                    color: "#0A2342",
                    weight: 3,
                    opacity: 0.65,
                    dashArray: "8 9",
                }}
            />


            {/* COMPLETED ROUTE */}

            {/* {shipment.progress > 1 && (
                <Polyline
                    positions={completedRoute}
                    pathOptions={{
                        color: "#C9362C",
                        weight: 4,
                        opacity: 0.9,
                    }}
                />
            )} */}

            {shipment.progress > 1 && (
                <Polyline
                    positions={
                        shipment.status === "Delivered"
                            ? [originPosition, destinationPosition]
                            : completedRoute
                    }
                    pathOptions={{
                        color: "#C9362C",
                        weight: 4,
                        opacity: 0.9,
                    }}
                />
            )}

            {/* ORIGIN */}
            {/* <Marker 
                position={originPosition}
                icon={originIcon}
            >
                <Popup>
                    <strong>Origin</strong>
                    <br />
                    {shipment.origin}
                </Popup>
            </Marker> */}

            {!currentAtOrigin && (
                <Marker
                    position={originPosition}
                    icon={originIcon}
                >
                    <Popup>
                        <strong>Origin</strong>
                        <br />
                        {shipment.origin}
                    </Popup>
                </Marker>
            )}


            {/* CURRENT SHIPMENT LOCATION */}
            <Marker 
                position={currentPosition}
                icon={
                    shipment.status === "Delivered"
                        ? deliveredIcon
                        : shipmentIcon
                }
                zIndexOffset={1000}
            >
                <Popup>
                    <strong>
                        {shipment.status}
                    </strong>
                    <br />
                    {shipment.currentLocation}
                </Popup>
            </Marker>


            {/* DESTINATION */}
            {/* <Marker 
                position={destinationPosition}
                icon={destinationIcon}
            >
                <Popup>
                    <strong>Destination</strong>
                    <br />
                    {shipment.destination}
                </Popup>
            </Marker> */}

            {!currentAtDestination && (
                <Marker
                    position={destinationPosition}
                    icon={destinationIcon}
                >
                    <Popup>
                        <strong>Destination</strong>
                        <br />
                        {shipment.destination}
                    </Popup>
                </Marker>
            )}

        </MapContainer>
    );
}


export default ShipmentMap;