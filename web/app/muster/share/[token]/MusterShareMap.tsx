"use client";

import { Map, MapMarker, MarkerContent, MarkerPopup, MapRoute, MapControls } from "@/components/ui/map";

const DAY_COLORS = ["#cc3322", "#1a3a72", "#4A6A9B", "#5a7a5a", "#8B6914", "#6B21A8"];

interface StopCoord {
  id: string;
  lat: number;
  lng: number;
  dayIdx: number;
  name: string;
  whyThisStop?: string | null;
  arrivalTime?: string | null;
  durationMinutes?: number | null;
  address?: string | null;
  website?: string | null;
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
      {stops.map((stop, i) => {
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${stop.lat},${stop.lng}`;
        return (
          <MapMarker key={stop.id} latitude={stop.lat} longitude={stop.lng}>
            <MarkerContent>
              <div
                className="w-7 h-7 flex items-center justify-center text-cream font-ui font-bold text-[11px] border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform"
                style={{ background: DAY_COLORS[stop.dayIdx % DAY_COLORS.length] }}
                title={stop.name}
              >
                {i + 1}
              </div>
            </MarkerContent>
            <MarkerPopup closeButton>
              <div className="min-w-[190px] max-w-[250px] space-y-1.5 p-1">
                <p className="font-display text-[15px] text-ink leading-tight">{stop.name}</p>
                {stop.arrivalTime && (
                  <p className="font-ui text-[11px] text-ink/40">{stop.arrivalTime}{stop.durationMinutes ? ` · ${stop.durationMinutes} min` : ""}</p>
                )}
                {stop.whyThisStop && (
                  <p className="font-ui text-[12px] text-ink/60 leading-snug">{stop.whyThisStop}</p>
                )}
                {stop.address && <p className="font-ui text-[11px] text-ink/40">📍 {stop.address}</p>}
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer"
                  className="font-ui text-[10px] uppercase tracking-[0.1em] text-[#1a3a72] hover:underline block pt-1">
                  Get Directions →
                </a>
                {stop.website && (
                  <a href={stop.website} target="_blank" rel="noopener noreferrer"
                    className="font-ui text-[10px] uppercase tracking-[0.1em] text-[#cc3322] hover:underline block">
                    Official Website →
                  </a>
                )}
              </div>
            </MarkerPopup>
          </MapMarker>
        );
      })}
    </Map>
  );
}
