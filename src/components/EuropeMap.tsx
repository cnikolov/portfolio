'use client'

import { useState } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from 'react-simple-maps'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'

const locations = [
  {
    id: 'sofia',
    label: 'Sofia',
    country: 'Bulgaria',
    note: 'Where it all started. Grew up here, discovered coding through World of Warcraft private servers.',
    coordinates: [23.3219, 42.6977] as [number, number],
    lived: true,
  },
  {
    id: 'rhodes',
    label: 'Rhodes',
    country: 'Greece',
    note: 'Lived here for two years while studying.',
    coordinates: [28.2275, 36.4349] as [number, number],
    lived: true,
  },
  {
    id: 'shrewsbury',
    label: 'Shrewsbury',
    country: 'UK',
    note: 'First software job at the British Ironwork Centre. Learned e-commerce the hard way.',
    coordinates: [-2.7544, 52.7074] as [number, number],
    lived: true,
  },
  {
    id: 'liverpool',
    label: 'Liverpool',
    country: 'UK',
    note: 'Joined Angel Solutions. Started teaching coding meetups.',
    coordinates: [-2.9916, 53.4084] as [number, number],
    lived: true,
  },
  {
    id: 'ustka',
    label: 'Ustka',
    country: 'Poland',
    note: 'Home. Baltic coast town. Bicycle rides in the forests, cold plunges in the sea.',
    coordinates: [16.8614, 54.5805] as [number, number],
    lived: true,
  },
  {
    id: 'london',
    label: 'London',
    country: 'UK',
    note: 'Tech conferences and meetups. The energy is unmatched.',
    coordinates: [-0.1276, 51.5074] as [number, number],
    lived: false,
  },
  {
    id: 'berlin',
    label: 'Berlin',
    country: 'Germany',
    note: 'Tech conferences. Great startup scene and developer community.',
    coordinates: [13.405, 52.52] as [number, number],
    lived: false,
  },
  {
    id: 'warsaw',
    label: 'Warsaw',
    country: 'Poland',
    note: 'Tech events and conferences in the Polish capital.',
    coordinates: [21.0122, 52.2297] as [number, number],
    lived: false,
  },
  {
    id: 'krakow',
    label: 'Krakow',
    country: 'Poland',
    note: 'Tech conferences and a beautiful historic city.',
    coordinates: [19.9449, 50.0647] as [number, number],
    lived: false,
  },
  {
    id: 'paris',
    label: 'Paris',
    country: 'France',
    note: 'Tech conferences in one of the most inspiring cities in the world.',
    coordinates: [2.3522, 48.8566] as [number, number],
    lived: false,
  },
  {
    id: 'edinburgh',
    label: 'Edinburgh',
    country: 'Scotland',
    note: 'Visited the Scottish capital. Stunning architecture and history.',
    coordinates: [-3.1883, 55.9533] as [number, number],
    lived: false,
  },
  {
    id: 'novigrad',
    label: 'Novigrad',
    country: 'Serbia',
    note: 'Visited this historic town in Serbia.',
    coordinates: [20.601, 44.146] as [number, number],
    lived: false,
  },
  {
    id: 'belgrade',
    label: 'Belgrade',
    country: 'Serbia',
    note: 'Visited the Serbian capital at the confluence of the Sava and Danube.',
    coordinates: [20.4489, 44.7866] as [number, number],
    lived: false,
  },
  {
    id: 'szczecin',
    label: 'Szczecin',
    country: 'Poland',
    note: 'Poland\u2019s major port city near the German border.',
    coordinates: [14.5528, 53.4285] as [number, number],
    lived: false,
  },
  {
    id: 'budapest',
    label: 'Budapest',
    country: 'Hungary',
    note: 'Visited the Hungarian capital. Beautiful architecture split across the Danube.',
    coordinates: [19.0402, 47.4979] as [number, number],
    lived: false,
  },
  {
    id: 'katowice',
    label: 'Katowice',
    country: 'Poland',
    note: 'Visited the heart of Silesia. A growing tech hub in southern Poland.',
    coordinates: [19.0238, 50.2649] as [number, number],
    lived: false,
  },
  {
    id: 'bristol',
    label: 'Bristol',
    country: 'UK',
    note: 'Visited this vibrant city in the south-west of England.',
    coordinates: [-2.5879, 51.4545] as [number, number],
    lived: false,
  },
]

const journeyPath = [
  locations.find((l) => l.id === 'sofia')!,
  locations.find((l) => l.id === 'rhodes')!,
  locations.find((l) => l.id === 'shrewsbury')!,
  locations.find((l) => l.id === 'liverpool')!,
  locations.find((l) => l.id === 'ustka')!,
]

export function EuropeMap() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [pinned, setPinned] = useState<string | null>(null)
  const active = pinned ?? hovered
  const activeLocation = locations.find((l) => l.id === active)

  return (
    <div className="mt-12">
      <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        Places I&apos;ve lived &amp; visited
      </h2>
      <div className="relative mt-4 overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-800/50">
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [-10, -50, 0],
            scale: 700,
          }}
          width={800}
          height={400}
          style={{ width: '100%', height: 'auto' }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="currentColor"
                  stroke="currentColor"
                  className="fill-zinc-200 stroke-zinc-300 dark:fill-zinc-700 dark:stroke-zinc-600"
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {journeyPath.map((loc, i) =>
            i < journeyPath.length - 1 ? (
              <Line
                key={`${loc.id}-${journeyPath[i + 1].id}`}
                from={loc.coordinates}
                to={journeyPath[i + 1].coordinates}
                stroke="currentColor"
                className="text-teal-500/40 dark:text-teal-400/30"
                strokeWidth={1}
                strokeDasharray="4 3"
                strokeLinecap="round"
              />
            ) : null,
          )}

          {locations.map((loc) => (
            <Marker
              key={loc.id}
              coordinates={loc.coordinates}
              onMouseEnter={() => setHovered(loc.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setPinned(pinned === loc.id ? null : loc.id)}
            >
              {loc.lived && (
                <circle
                  r={8}
                  fill="currentColor"
                  className="text-teal-500/15 dark:text-teal-400/15"
                >
                  <animate
                    attributeName="r"
                    values="8;12;8"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="1;0.4;1"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
              <circle
                r={loc.lived ? 4 : 3}
                fill="currentColor"
                className={
                  active === loc.id
                    ? 'text-teal-400 dark:text-teal-300'
                    : loc.lived
                      ? 'text-teal-500 dark:text-teal-400'
                      : 'text-zinc-400 dark:text-zinc-500'
                }
                style={{ cursor: 'pointer' }}
              />
              <text
                textAnchor="middle"
                y={-10}
                fill="currentColor"
                className={`text-[8px] font-medium ${
                  active === loc.id
                    ? 'text-zinc-800 dark:text-zinc-100'
                    : 'text-zinc-500 dark:text-zinc-400'
                }`}
                style={{ fontFamily: 'system-ui, sans-serif' }}
              >
                {loc.label}
              </text>
            </Marker>
          ))}
        </ComposableMap>

        {activeLocation && (
          <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-white/95 p-3 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur-sm sm:left-auto sm:right-3 sm:max-w-xs dark:bg-zinc-900/95 dark:ring-white/10">
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {activeLocation.label}, {activeLocation.country}
              {activeLocation.lived && (
                <span className="ml-2 inline-flex items-center rounded-full bg-teal-500/10 px-2 py-0.5 text-xs font-medium text-teal-600 dark:text-teal-400">
                  Lived here
                </span>
              )}
            </p>
            <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
              {activeLocation.note}
            </p>
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-teal-500 dark:bg-teal-400" />
          Lived
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-full bg-zinc-400 dark:bg-zinc-500" />
          Visited
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-px w-4 border-t border-dashed border-teal-500/50 dark:border-teal-400/40" />
          Journey
        </span>
      </div>
    </div>
  )
}
