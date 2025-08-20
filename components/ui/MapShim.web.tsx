// components/ui/MapShim.web.tsx
import React from 'react';

type AnyProps = Record<string, any>;

const MapView: React.FC<AnyProps> = (props) => (
  <div
    style={{
      width: '100%',
      height: props?.style?.height ?? 300,
      background: '#eef',
      border: '1px dashed #cbd5e1',
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}
    {...props}
  >
    <span style={{ color: '#64748b', fontSize: 14 }}>
      Map is not available on Web build
    </span>
  </div>
);

// 더미 컴포넌트들 (렌더링 X)
const Marker: React.FC<AnyProps> = () => null;
const Polyline: React.FC<AnyProps> = () => null;

// 타입/상수 호환
export type MapEvent = {
  nativeEvent: { coordinate: { latitude: number; longitude: number } };
};
export const PROVIDER_GOOGLE = 'google';

export default MapView;
export { Marker, Polyline };
