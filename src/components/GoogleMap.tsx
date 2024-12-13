import React, { memo, useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

interface IGoogleMapsProps {
  children: React.ReactNode;
}
interface MapProps {
  center: google.maps.LatLngLiteral;
}

const containerStyle = {
  width: "100%",
  height: "100%",
};

const OPTIONS = {
  minZoom: 4,
  maxZoom: 18,
};

const GoogleMaps = ({ center }: MapProps) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    // googleMapsApiKey: `${process.env.GOOGLE_MAPS_API_KEY}`,
    googleMapsApiKey: "AIzaSyBfj1cEl8MpIqeyG3Y5503lFo4DKLK8D5M",
  });
  const [map, setMap] = useState(null);

  const onLoad = useCallback((map: any) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);
  const onUnmount = useCallback((map: any) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="w-full h-96 md:h-96 lg:h-96 xl:h-120">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={OPTIONS}
      >
        <Marker position={center}></Marker>
      </GoogleMap>
    </div>
  ) : null;
};

export default memo(GoogleMaps);
