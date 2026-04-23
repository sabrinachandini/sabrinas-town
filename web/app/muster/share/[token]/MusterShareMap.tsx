"use client";

import { Map, MapMarker, MarkerContent, MapRoute, MapControls } from "@/components/ui/map";

const DAY_COLORS = ["#cc3322", "#1a3a72", "#4A6A9B", "#5a7a5a", "#8B6914", "#6B21A8"];

interface StopCoord {
  id: string;
  lat: number;
  lng: number;
  dayIdx: number;
  name: string;
}

interface Props {
  stops: StopCoord[];
}

export function MusterShareMap({ stops }: Props) {
  if (stops.length === 0) {
    return (
      <div className="h-full bg-[#1a3a72]/5 flex items-center justify-center">
        <p className="font-ui text-[13px] text-ink/30 uppercase tracking-[0.1em]">Map pins appear for sites with coordinates</p>
      </div>
    );
  }

  const centerLat = stops.reduce((sum, s) => sum + s.lat, 0) / stops.length;
  const centerLng = stops.reduce((sum, s) => sum + s.lng, 0) / stops.length;
  const routeCoords = stops.map((s) => [s.lng, s.lat] as [number, number]);

  return (
    <Map
      viewport={{ center: [centerLng, centerLat], zoom: 9 }}
      theme="light"
      className="w-full h-full"
    >
      <MapControls />
      {routeCoords.length >= 2 && (
        <MapRoute coordinates={routeCoords} color="#1a3a72" width={2} opacity={0.5} dashArray={[4, 3]} />
      )}
      {stops.map((stop, i) => (
        <MapMarker key={stop.id} latitude={stop.lat} longitude={stop.lng}>
          <MarkerContent>
            <div
              className="w-7 h-7 flex items-center justify-center text-cream font-ui font-bold text-[11px] border-2 border-white shadow-md"
              style={{ background: DAY_COLORS[stop.dayIdx % DAY_COLORS.length] }}
              title={stop.name}
            >
              {i + 1}
            </div>
          </MarkerContent>
        </MapMarker>
      ))}
    </Map>
  );
}
