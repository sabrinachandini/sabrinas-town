"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Map, MapMarker, MarkerContent, MarkerPopup, MapRoute, MapControls } from "@/components/ui/map";
import Link from "next/link";
import type { MusterDetail } from "@/lib/muster";
import { remuster } from "@/app/muster/actions";

const DAY_COLORS = ["#cc3322", "#1a3a72", "#4A6A9B", "#5a7a5a", "#8B6914", "#6B21A8"];

type Stop = MusterDetail["days"][0]["stops"][0];
type Day = MusterDetail["days"][0];

function formatDate(d: Date) {
  return new Date(d).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

function SortableStop({ stop, color, dayIdx, stopIdx }: { stop: Stop; color: string; dayIdx: number; stopIdx: number }) {
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } =
    useSortable({ id: stop.id });

  const name = stop.place?.name ?? stop.localEvent?.name ?? stop.customName ?? "Stop";
  const isEvent = stop.stopType === "EVENT";

  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={`flex gap-3 py-4 border-b border-ink/8 last:border-0 ${isDragging ? "opacity-40 bg-cream" : ""} ${isEvent ? "bg-[#1a3a72]/[0.03]" : ""}`}
    >
      {/* Drag handle */}
      <button
        ref={setActivatorNodeRef}
        {...attributes}
        {...listeners}
        className="flex-shrink-0 mt-1 cursor-grab active:cursor-grabbing text-ink/20 hover:text-ink/50 transition-colors touch-none"
        aria-label="Drag to reorder"
      >
        <svg width="12" height="16" viewBox="0 0 12 16" fill="currentColor">
          <circle cx="4" cy="3" r="1.5"/><circle cx="8" cy="3" r="1.5"/>
          <circle cx="4" cy="8" r="1.5"/><circle cx="8" cy="8" r="1.5"/>
          <circle cx="4" cy="13" r="1.5"/><circle cx="8" cy="13" r="1.5"/>
        </svg>
      </button>

      {/* Stop number bubble */}
      <div
        className="flex-shrink-0 w-7 h-7 flex items-center justify-center text-[11px] font-ui font-semibold border-2 mt-0.5"
        style={isEvent ? { background: color, borderColor: color, color: "#f2e6c8" } : { borderColor: `${color}40`, color: `${color}80` }}
      >
        {stopIdx + 1}
      </div>

      <div className="flex-1 min-w-0">
        {isEvent && (
          <span className="font-ui text-[8px] uppercase tracking-[0.15em] px-1.5 py-0.5 mr-1 text-cream" style={{ background: color }}>
            Event
          </span>
        )}
        {(() => {
          const website = stop.place?.website ?? stop.localEvent?.url ?? null;
          return website ? (
            <a href={website} target="_blank" rel="noopener noreferrer" className="font-display text-[16px] text-ink leading-snug tracking-[-0.01em] no-underline border-b border-ink/20 hover:border-[#1a3a72] hover:text-[#1a3a72] transition-colors">
              {name}
            </a>
          ) : (
            <p className="font-display text-[16px] text-ink leading-snug tracking-[-0.01em]">{name}</p>
          );
        })()}
        {stop.arrivalTime && (
          <p className="font-ui text-[11px] text-ink/35 mt-0.5">
            {stop.arrivalTime}{stop.durationMinutes ? ` · ${stop.durationMinutes} min` : ""}
          </p>
        )}
        {stop.whyThisStop && (
          <p className="font-ui text-[13px] text-ink/50 leading-snug mt-1 line-clamp-2">{stop.whyThisStop}</p>
        )}
        {(() => {
          const addr = stop.place?.address ?? stop.customNote ?? null;
          const coords = stop.place?.lat && stop.place?.lng ? `${stop.place.lat},${stop.place.lng}` : null;
          const mapsUrl = coords
            ? `https://www.google.com/maps/search/?api=1&query=${coords}`
            : addr
            ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`
            : stop.place || stop.customName
            ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((stop.place?.name ?? stop.customName ?? "") + ", USA")}`
            : null;
          if (!addr && !mapsUrl) return null;
          return (
            <a href={mapsUrl ?? "#"} target="_blank" rel="noopener noreferrer"
              className="font-ui text-[11px] text-ink/35 hover:text-[#1a3a72] transition-colors mt-0.5 block">
              {addr ? `📍 ${addr}` : "📍 View on map"}
            </a>
          );
        })()}
      </div>
    </li>
  );
}

export function MusterBuilder({ muster }: { muster: MusterDetail }) {
  const router = useRouter();
  const [localDays, setLocalDays] = useState<Day[]>(muster.days);
  const [isSaving, setIsSaving] = useState(false);
  const [isRemustering, setIsRemustering] = useState(false);
  const [mobileTab, setMobileTab] = useState<"agenda" | "map">("agenda");
  const [showShare, setShowShare] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = useCallback(async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const dayIdx = localDays.findIndex((d) => d.stops.some((s) => s.id === active.id));
    if (dayIdx === -1) return;

    const day = localDays[dayIdx];
    const oldIdx = day.stops.findIndex((s) => s.id === active.id);
    const newIdx = day.stops.findIndex((s) => s.id === over.id);
    if (oldIdx === newIdx) return;

    const newStops = arrayMove(day.stops, oldIdx, newIdx);
    setLocalDays((prev) => prev.map((d, i) => i === dayIdx ? { ...d, stops: newStops } : d));

    setIsSaving(true);
    try {
      await fetch(`/api/muster/${muster.id}/stops`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dayId: day.id, stopIds: newStops.map((s) => s.id) }),
      });
    } finally {
      setIsSaving(false);
    }
  }, [localDays, muster.id]);

  const handleRemuster = async () => {
    setIsRemustering(true);
    try {
      const newId = await remuster(muster.id);
      router.push(`/muster/${newId}`);
    } finally {
      setIsRemustering(false);
    }
  };

  // Collect map coords from stops with place lat/lng
  const allStopsWithCoords = localDays.flatMap((day, di) =>
    day.stops
      .filter((s) => s.place?.lat && s.place?.lng)
      .map((s) => ({ ...s, dayIdx: di, lat: s.place!.lat!, lng: s.place!.lng! }))
  );

  const routeCoords = allStopsWithCoords.map((s) => [s.lng, s.lat] as [number, number]);

  const mapCenter = allStopsWithCoords.length > 0
    ? {
        lat: allStopsWithCoords.reduce((sum, s) => sum + s.lat, 0) / allStopsWithCoords.length,
        lng: allStopsWithCoords.reduce((sum, s) => sum + s.lng, 0) / allStopsWithCoords.length,
      }
    : { lat: 42.3, lng: -71.5 };

  return (
    <div className="flex flex-col" style={{ minHeight: "calc(100vh - 200px)" }}>
      {/* Top bar */}
      <div className="border-b border-ink/8 bg-white/60 sticky top-0 z-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-2.5 flex items-center gap-3 flex-wrap">
          <Link href="/muster/new" className="no-underline font-ui text-[10px] uppercase tracking-[0.15em] text-ink/40 hover:text-ink transition-colors">
            ← New
          </Link>
          <div className="flex-1" />
          {isSaving && <span className="font-ui text-[10px] text-ink/30 uppercase tracking-[0.1em]">Saving…</span>}
          <button
            onClick={handleRemuster}
            disabled={isRemustering}
            className="font-ui text-[10px] uppercase tracking-[0.14em] text-ink/50 border border-ink/15 px-3 py-1.5 hover:border-[#1a3a72]/40 hover:text-[#1a3a72] transition-colors disabled:opacity-40"
          >
            {isRemustering ? "Re-mustering…" : "Re-muster ↺"}
          </button>
          <a href={`/muster/${muster.id}/print`} className="no-underline font-ui text-[10px] uppercase tracking-[0.14em] text-ink/50 border border-ink/15 px-3 py-1.5 hover:border-ink/40 hover:text-ink transition-colors">
            Print
          </a>
          <button
            type="button"
            onClick={() => setShowShare((v) => !v)}
            className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] bg-[#cc3322] text-cream px-4 py-1.5 hover:bg-[#a32818] transition-colors"
          >
            Share →
          </button>
          {/* Mobile map toggle */}
          <button
            className="sm:hidden font-ui text-[10px] uppercase tracking-[0.14em] text-ink/50 border border-ink/15 px-3 py-1.5"
            onClick={() => setMobileTab((t) => t === "agenda" ? "map" : "agenda")}
          >
            {mobileTab === "agenda" ? "Map" : "Agenda"}
          </button>
        </div>
      </div>

      {/* Share panel */}
      {showShare && (() => {
        const shareUrl = typeof window !== "undefined"
          ? `${window.location.origin}/muster/share/${muster.shareToken}`
          : `/muster/share/${muster.shareToken}`;
        const text = encodeURIComponent(`Check out my Revolutionary War road trip: ${muster.title}`);
        const encodedUrl = encodeURIComponent(shareUrl);
        return (
          <div className="border-b border-ink/10 bg-[#1a3a72]/[0.04] px-4 md:px-8 py-4">
            <div className="max-w-[1400px] mx-auto">
              <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-ink/40 mb-3">Share this Muster</p>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex-1 min-w-0 flex items-center gap-2 bg-white border border-ink/15 px-3 py-2">
                  <span className="font-ui text-[12px] text-ink/50 truncate flex-1">{shareUrl}</span>
                  <button
                    type="button"
                    onClick={() => { navigator.clipboard.writeText(shareUrl); }}
                    className="font-ui text-[10px] uppercase tracking-[0.12em] text-[#1a3a72] hover:text-ink transition-colors whitespace-nowrap flex-shrink-0"
                  >
                    Copy
                  </button>
                </div>
                <a href={`https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`}
                  target="_blank" rel="noopener noreferrer"
                  className="no-underline font-ui text-[10px] uppercase tracking-[0.12em] bg-black text-white px-4 py-2 hover:bg-zinc-800 transition-colors whitespace-nowrap">
                  𝕏 Post
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                  target="_blank" rel="noopener noreferrer"
                  className="no-underline font-ui text-[10px] uppercase tracking-[0.12em] bg-[#1877F2] text-white px-4 py-2 hover:bg-[#1565d8] transition-colors whitespace-nowrap">
                  Facebook
                </a>
                <a href={`https://api.whatsapp.com/send?text=${text}%20${encodedUrl}`}
                  target="_blank" rel="noopener noreferrer"
                  className="no-underline font-ui text-[10px] uppercase tracking-[0.12em] bg-[#25D366] text-white px-4 py-2 hover:bg-[#1da851] transition-colors whitespace-nowrap">
                  WhatsApp
                </a>
                <a href={`/muster/share/${muster.shareToken}`}
                  className="no-underline font-ui text-[10px] uppercase tracking-[0.12em] text-ink/50 border border-ink/15 px-4 py-2 hover:border-ink/40 hover:text-ink transition-colors whitespace-nowrap">
                  View share page →
                </a>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Two-column layout */}
      <div className="flex flex-1">
        {/* Left: agenda */}
        <div className={`${mobileTab === "map" ? "hidden" : "block"} sm:block sm:w-[55%] overflow-y-auto`}>
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <div className="max-w-[680px] mx-auto px-6 md:px-10 py-8">
              {localDays.map((day, di) => {
                const color = DAY_COLORS[di % DAY_COLORS.length];
                return (
                  <section key={day.id} className="mb-12">
                    <div className="border-t-[3px] border-ink pt-5 mb-6" style={{ borderColor: color }}>
                      <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-ink/40">{formatDate(day.date)}</p>
                      <h2 className="font-display text-[clamp(20px,3vw,28px)] text-ink tracking-[-0.02em] leading-tight">{day.theme}</h2>
                      <p className="font-editorial italic text-[15px] text-ink/50 mt-2 leading-relaxed">{day.narrative}</p>
                    </div>
                    <SortableContext items={day.stops.map((s) => s.id)} strategy={verticalListSortingStrategy}>
                      <ol className="space-y-0">
                        {day.stops.map((stop, si) => (
                          <SortableStop key={stop.id} stop={stop} color={color} dayIdx={di} stopIdx={si} />
                        ))}
                      </ol>
                    </SortableContext>
                  </section>
                );
              })}
            </div>
          </DndContext>
        </div>

        {/* Right: map */}
        <div className={`${mobileTab === "agenda" ? "hidden" : "block"} sm:block sm:w-[45%] sm:sticky sm:top-[52px] sm:h-[calc(100vh-52px)]`}>
          {allStopsWithCoords.length > 0 ? (
            <Map
              viewport={{ center: [mapCenter.lng, mapCenter.lat], zoom: 9 }}
              theme="light"
              className="w-full h-full"
            >
              <MapControls />
              {routeCoords.length >= 2 && (
                <MapRoute coordinates={routeCoords} color="#1a3a72" width={2} opacity={0.5} dashArray={[4, 3]} />
              )}
              {allStopsWithCoords.map((stop, i) => {
                const stopName = stop.place?.name ?? stop.customName ?? "Stop";
                const website = stop.place?.website ?? stop.localEvent?.url ?? null;
                const addr = stop.place?.address ?? stop.customNote ?? null;
                const coords = `${stop.lat},${stop.lng}`;
                const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${coords}`;
                return (
                  <MapMarker key={stop.id} latitude={stop.lat} longitude={stop.lng}>
                    <MarkerContent>
                      <div
                        className="w-7 h-7 flex items-center justify-center text-cream font-ui font-bold text-[11px] border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform"
                        style={{ background: DAY_COLORS[stop.dayIdx % DAY_COLORS.length] }}
                      >
                        {i + 1}
                      </div>
                    </MarkerContent>
                    <MarkerPopup closeButton>
                      <div className="min-w-[200px] max-w-[260px] space-y-1.5 p-1">
                        <p className="font-display text-[15px] text-ink leading-tight">{stopName}</p>
                        {stop.arrivalTime && (
                          <p className="font-ui text-[11px] text-ink/40">{stop.arrivalTime}{stop.durationMinutes ? ` · ${stop.durationMinutes} min` : ""}</p>
                        )}
                        {stop.whyThisStop && (
                          <p className="font-ui text-[12px] text-ink/60 leading-snug">{stop.whyThisStop}</p>
                        )}
                        {addr && <p className="font-ui text-[11px] text-ink/40">📍 {addr}</p>}
                        <div className="flex gap-2 pt-1">
                          <a href={mapsUrl} target="_blank" rel="noopener noreferrer"
                            className="font-ui text-[10px] uppercase tracking-[0.1em] text-[#1a3a72] hover:underline">
                            Directions
                          </a>
                          {website && (
                            <a href={website} target="_blank" rel="noopener noreferrer"
                              className="font-ui text-[10px] uppercase tracking-[0.1em] text-[#cc3322] hover:underline">
                              Website
                            </a>
                          )}
                        </div>
                      </div>
                    </MarkerPopup>
                  </MapMarker>
                );
              })}
            </Map>
          ) : (
            <div className="h-full bg-[#1a3a72]/5 flex items-center justify-center">
              <p className="font-ui text-[13px] text-ink/30 uppercase tracking-[0.1em]">Map pins appear for sites with coordinates</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
