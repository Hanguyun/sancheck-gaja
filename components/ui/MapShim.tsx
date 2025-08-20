// components/ui/MapShim.tsx
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';

export type MapEvent = {
  nativeEvent: { coordinate: { latitude: number; longitude: number } };
};

export default MapView;
export { Marker, Polyline, PROVIDER_GOOGLE };