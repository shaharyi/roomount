import React from 'react';
import { useSelector } from 'react-redux';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';
import {
  minorScale, Text, Pane,
} from 'evergreen-ui';


export const MapWrapper = () => {
  const { search: { viewedHotel } } = useSelector((state) => state);
  const center = viewedHotel ? viewedHotel.location : [50.879, 4.6997];

  return (
    <Map center={center} zoom={12} width={290} height={290}>
      <Marker
        anchor={center}
        payload={1}
        onClick={({ event, anchor, payload }) => { console.table({ event, anchor, payload }); }}
      />

      {viewedHotel && (
      <Overlay anchor={center}>
        <Pane
          elevation={2}
          borderRadius={3}
          padding={minorScale(2)}
          background="white"
        >
          <Text>{viewedHotel.name}</Text>

        </Pane>
      </Overlay>
      )}
    </Map>
  );
};
