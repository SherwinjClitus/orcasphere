// 1. EXPLICITLY EXPORT MARKER CONFIG TO ENGINE
export const markerConfig = [
  { key: "na_type1", coords: [61.0, 7.0], color: "#10b981" },     // Norway Coast (Green)
  { key: "na_type2", coords: [66.0, -35.0], color: "#06b6d4" },    // Greenland Sea (Cyan)
  { key: "iberian_pod", coords: [36.0, -5.5], color: "#fbbf24" },  // Strait of Gibraltar (Amber Gold)
  { key: "np_resident", coords: [52.0, -128.0], color: "#14b8a6" },
  { key: "np_biggs", coords: [46.0, -124.0], color: "#a855f7" },
  { key: "np_offshore", coords: [43.0, -148.0], color: "#6366f1" },
  { key: "ant_b_large", coords: [-65.0, -64.0], color: "#ec4899" },
  { key: "ant_b_small", coords: [-64.2, -61.0], color: "#db2777" },
  { key: "ant_c", coords: [-74.0, 172.0], color: "#e11d48" },
  { key: "ant_d", coords: [-46.0, 38.0], color: "#f59e0b" }
];

// 2. EXPLICITLY EXPORT GROUP OVERVIEWS FOR TABS ROUTING
export const groupOverviews = {
  common: {
    subspecies: "LINEAGE OVERVIEW",
    title: "The Tech Hunters (Common Standard)",
    habitat: "Atlantic Ocean & European Coastlines",
    diet: "Fish, Tuna, and Huge Marine Mammals",
    feature: "The most adaptive and experimental orcas on Earth",
    desc: "THE VIBE: These are the clever, shape-shifting innovators of the ocean. Instead of sticking to one rulebook, different families have invented completely wild local traditions. 🧬 THE CULTURAL RIFT: • The Norway Pods coordinate like sheepdogs to trap giant balls of herring. • The Gibraltar Pods have recently started a viral trend of working together to disable sailboat rudders. • They do not mix because their acoustic languages sound completely foreign to each other.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop"
  },
  resident: {
    subspecies: "LINEAGE OVERVIEW",
    title: "The Family Salmon Eaters (North Pacific Residents)",
    habitat: "Pacific Northwest (Washington, Canada, Alaska)",
    diet: "100% Salmon (Absolutely zero meat)",
    feature: "Lifelong family bonds led entirely by grandmothers",
    desc: "THE VIBE: Loud, deeply social, and incredibly picky eaters. They live in massive family trees and never leave their mother's side. ⚡ THE SUPERPOWER: They use a constant stream of underwater clicks like a high-tech radar to scan for juicy Chinook salmon. 🧬 THE CULTURAL RIFT: They are strict vegetarians of the marine mammal world. Even if they are starving, they will proudly swim right past a fat, helpless harbor seal without attacking, simply because their culture says seals are not food.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop"
  },
  biggs: {
    subspecies: "LINEAGE OVERVIEW",
    title: "The Ocean Ghosts (Bigg's Transients)",
    habitat: "Open Coastal Corridors of the North Pacific",
    diet: "Seals, Sea Lions, Dolphins, and Whales",
    feature: "Stealth hunters with giant, razor-sharp triangular fins",
    desc: "THE VIBE: The ultimate silent predators. While their fish-eating neighbors are incredibly noisy, Bigg's Transients swim in complete acoustic blackout. 🥷 THE SUPERPOWER: Tactical stealth. Because seals have excellent hearing, these orcas travel in tiny squads of 2 to 3, hold their breath for long periods, and use absolute silence to stalk and ambush heavy marine mammals. They are the apex wolves of the open sea.",
    image: "https://images.unsplash.com/photo-1603566234032-1b6fb95fe9f7?q=80&w=800&auto=format&fit=crop"
  },
  antarctic: {
    subspecies: "LINEAGE OVERVIEW",
    title: "The Polar Masterminds (Antarctic Lineages)",
    habitat: "Freezing Ice Fields of the Southern Ocean",
    diet: "Ice Seals, Penguins, and Deep-Sea Toothfish",
    feature: "Yellowish skin coatings and extreme cooperative logic",
    desc: "THE VIBE: High-IQ survivalists living in the harshest environment on Earth. They look different, behave differently, and have split into highly specific tactical squads. 🧊 THE TACTICAL SQUADS: • Type B (Large) act like engineers, swimming side-by-side to create massive artificial waves that wash seals off ice floes. • Type B (Small) are agile sprinters that chase down quick penguin colonies. • Type C are deep-ice experts that navigate narrow frozen cracks to find giant hidden fish.",
    image: "https://images.unsplash.com/photo-1461696114087-397271a7aedc?q=80&w=800&auto=format&fit=crop"
  }
};

// 3. EXPLICITLY EXPORT INDIVIDUAL ORCA REGISTRY TARGETS
export const orcaRegistry = {
  na_type1: {
    id: "na_type1",
    subspecies: "Global Common Orca (O. o. orca)",
    title: "North Atlantic Type 1 (Herring Specialist)",
    group: "common",
    habitat: "Coastal Fjords of Norway, Iceland, and Scotland",
    diet: "Schooling Herring & Mackerel",
    feature: "Smaller body size, highly curved saddle patch",
    desc: "Masters of the 'Carousel Hunt'. These family pods cooperate to surround schools of herring, blow a wall of bubbles to trap them, and use powerful tail slaps to stun the fish before eating.",
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=800&auto=format&fit=crop",
    bounds: [[55, -25], [72, 20]]
  },
  na_type2: {
    id: "na_type2",
    subspecies: "Global Common Orca (O. o. orca)",
    title: "North Atlantic Type 2 (Whale Specialist)",
    group: "common",
    habitat: "Deep Open Waters between Greenland and Iceland",
    diet: "Baleen Whales, Dolphins, & Seals",
    feature: "Significantly larger, robust body profiles",
    desc: "Strict mammal specialists tracking migrations in deep offshore waters. They hunt silently and cooperatively to exhaust and drown calves of much larger baleen whale species.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
    bounds: [[58, -45], [75, -15]]
  },
  iberian_pod: {
    id: "iberian_pod",
    subspecies: "Iberian Sub-Population",
    title: "Gladis Iberian Pod (Boat Interacters)",
    group: "common",
    habitat: "Strait of Gibraltar and Atlantic Iberian Coast",
    diet: "Atlantic Bluefin Tuna",
    feature: "Highly endangered, small localized social groups",
    desc: "A distinct cultural group that has rapidly spread a unique behavioral tradition of interacting with maritime vessels, specifically targeting and disabling sailboat rudders.",
    image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?q=80&w=800&auto=format&fit=crop",
    bounds: [[34, -10], [42, -5]]
  },
  np_resident: {
    id: "np_resident",
    subspecies: "Resident Killer Whale (O. o. ater)",
    title: "North Pacific Residents (Salmon Eaters)",
    group: "resident",
    habitat: "Inshore Coastal Corridors from Washington to Alaska",
    diet: "100% Fish (Strictly Chinook Salmon)",
    feature: "Rounded, wave-curved dorsal fin top",
    desc: "Living in tight matrilineal societies led by grandmothers, these pods use loud echolocation loops to catch salmon. Culturally isolated, they will choose to starve rather than hunt a seal.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop",
    bounds: [[45, -135], [60, -120]]
  },
  np_biggs: {
    id: "np_biggs",
    subspecies: "Bigg's / Transient Whale (O. o. rectipinnus)",
    title: "Bigg's Transients (Apex Mammal Hunters)",
    group: "biggs",
    habitat: "Shallow Coastal Inlets of the Pacific Rim",
    diet: "Harbor Seals, Sea Lions, and Porpoises",
    feature: "Razor-sharp, pointed triangular dorsal fin",
    desc: "Traveling in tiny stealth packs of 2 to 6, Bigg's orcas hunt in total silence so prey can't hear them. They stalk rocky shores and coordinate explosive, high-speed ambush strikes.",
    image: "https://images.unsplash.com/photo-1603566234032-1b6fb95fe9f7?q=80&w=800&auto=format&fit=crop",
    bounds: [[32, -130], [58, -115]]
  },
  np_offshore: {
    id: "np_offshore",
    subspecies: "Global Common Orca (O. o. orca)",
    title: "North Pacific Offshores (Shark Hunters)",
    group: "resident",
    habitat: "Pelagic Open Ocean (9+ Miles off the Shelf Break)",
    diet: "Deep-Sea Sharks (Sleeper & Opah Sharks)",
    feature: "Teeth completely ground down flat to the gum line",
    desc: "Nomadic pods hunting the deep open sea. Because shark skin is armored with abrasive denticles that mimic heavy sandpaper, an Offshore's teeth are completely worn down flat over their lifespan.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=800&auto=format&fit=crop",
    bounds: [[30, -160], [55, -135]]
  },
  ant_b_large: {
    id: "ant_b_large",
    subspecies: "Global Common Orca (O. o. orca)",
    title: "Antarctic Type B (Pack Ice Seal Hunter)",
    group: "antarctic",
    habitat: "Floating Pack Ice Sheets of Antarctica",
    diet: "Weddell, Crabeater, and Leopard Seals",
    feature: "Diatom-tinted yellowish skin coat, massive eye patches",
    desc: "Inventors of the 'Wave-Wash'. When a seal is spotted on an ice floe, the pod syncs up side-by-side, charges the ice block together, and dives under at the last second to create a localized wave that flushes the seal into the water.",
    image: "https://images.unsplash.com/photo-1461696114087-397271a7aedc?q=80&w=800&auto=format&fit=crop",
    bounds: [[-72, -80], [-62, -50]]
  },
  ant_b_small: {
    id: "ant_b_small",
    subspecies: "Global Common Orca (O. o. orca)",
    title: "Antarctic Type B (Penguin Pursuer)",
    group: "antarctic",
    habitat: "Sheltered Channels of the Antarctic Peninsula",
    diet: "Chinstrap, Gentoo, and Adelie Penguins",
    feature: "Sleek, exceptionally fast and agile build",
    desc: "Also known as the Gerlache Orcas. They patrol island shorelines at high speeds to chase down agile penguin colonies diving off the coastlines.",
    image: "https://images.unsplash.com/photo-1470569601575-f2634358a6c9?q=80&w=800&auto=format&fit=crop",
    bounds: [[-66, -66], [-62, -58]]
  },
  ant_c: {
    id: "ant_c",
    subspecies: "Global Common Orca (O. o. orca)",
    title: "Antarctic Type C (Ross Sea Toothfish Specialist)",
    group: "antarctic",
    habitat: "Dense Frozen Ice Fields of the Deep Ross Sea",
    diet: "Antarctic Toothfish",
    feature: "The smallest orcas on earth, forward-slanted eye patches",
    desc: "Living deeper inside the dense ice than any other marine mammal, these small orcas navigate narrow fractures in the frozen sheets to hunt massive, fat toothfish under the ice cap.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    bounds: [[-78, 160], [-70, -170]]
  },
  ant_d: {
    id: "ant_d",
    subspecies: "Global Common Orca (O. o. orca)",
    title: "Sub-Antarctic Type D (The Storm Rider)",
    group: "antarctic",
    habitat: "The Furious Fifties Latitudes (Circumpolar Open Ocean)",
    diet: "Patagonian Toothfish",
    feature: "Bulbous forehead, tiny squinting white eye patch",
    desc: "An evolutionary marvel. They diverged 390,000 years ago and avoided discovery until recently by living inside the most violent, storm-battered open ocean bands on earth where few ships ever sail.",
    image: "https://images.unsplash.com/photo-1574870111867-089730e5a7ce?q=80&w=800&auto=format&fit=crop",
    bounds: [[-60, -80], [-50, -40]]
  }
};