import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import "./Footer.css";


const markerIcon = L.divIcon({
    className: "footer-map-pin",
    html: `
        <div class="footer-map-pin-outer">
            <div class="footer-map-pin-inner"></div>
        </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -18]
});


const FooterMap = () => {

    const position = [
        43.62733429027086,
        -79.6337724045586
    ];


    return (

        <div className="footer-map">

            <MapContainer
                center={position}
                zoom={15}
                scrollWheelZoom={false}
                zoomControl={false}
                dragging={true}
                className="footer-leaflet-map"
            >

                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


                <Marker
                    position={position}
                    icon={markerIcon}
                >

                    <Popup>

                        <strong>
                            FastDrop Worldwide Logistics
                        </strong>

                        <br />

                        5004 Timberlea Blvd, Unit 45

                        <br />

                        Mississauga, ON L4W 5C5

                    </Popup>

                </Marker>

            </MapContainer>

        </div>

    );

};


export default FooterMap;