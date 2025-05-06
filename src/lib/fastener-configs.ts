import type { FastenerConfig } from "@/components/fasteners/fastener-selector"

// Bolt configuration
export const boltConfig: FastenerConfig = {
  type: "Bolt",
  image: "/images/fasteners/bolts.jpg", // Replace with your actual image path
  basePrice: 0.5,
  description:"Threaded fasteners used with nuts or tapped holes. Ideal for creating strong, removable joints in metal frames, machinery, and assemblies. ", // Base price for the simplest bolt
  options: {
    headType: {
      label: "Head Type",
      required: true,
      options: [
        { id: "flat", name: "Flat" },
        { id: "pan", name: "Pan" },
        { id: "hex", name: "Hex" },
        { id: "hex-washer", name: "Hex Washer" },
        { id: "spring-washer", name: "Spring Washer" },
        { id: "button", name: "Button" },
        { id: "socket", name: "Socket" },
        { id: "hex-flange", name: "Hex Flange" },
        { id: "serrated-head", name: "Serrated Head" },
      ],
    },
    driveType: {
      label: "Drive Type",
      required: true,
      options: [
        { id: "phillip", name: "Phillip" },
        { id: "slotted", name: "Slotted" },
        { id: "combination", name: "Combination" },
        { id: "allen", name: "Allen" },
        { id: "torx", name: "Torx" },
        { id: "hex", name: "Hex" },
      ],
    },
    size: {
      label: "Size",
      required: true,
      options: [
        { id: "m2.5", name: "M2.5" },
        { id: "m3", name: "M3" },
        { id: "m4", name: "M4" },
        { id: "m5", name: "M5" },
        { id: "m6", name: "M6" },
        { id: "m8", name: "M8" },
      ],
    },
    length: {
      label: "Length (mm)",
      required: true,
      options: [
        { id: "5", name: "5" },
        { id: "6", name: "6" },
        { id: "8", name: "8" },
        { id: "10", name: "10" },
        { id: "12", name: "12" },
        { id: "15", name: "15" },
        { id: "18", name: "18" },
        { id: "20", name: "20" },
        { id: "25", name: "25" },
        { id: "30", name: "30" },
      ],
    },
    material: {
      label: "Material Type",
      required: true,
      options: [
        { id: "copper", name: "Copper" },
        { id: "mild-steel", name: "Mild Steel" },
        { id: "brass", name: "Brass" },
        { id: "stainless-steel", name: "Stainless Steel" },
      ],
    },
    coating: {
      label: "Coating Type",
      required: true,
      options: [
        { id: "blackened", name: "Blackened" },
        { id: "zinc-coated", name: "Zinc Coated" },
        { id: "nickel-coated", name: "Nickel Coated" },
      ],
    },

  },
}

// Nut configuration
export const nutConfig: FastenerConfig = {
  type: "Nut",
  image: "/images/fasteners/nut.jpg", // Replace with your actual image path
  basePrice: 0.3,
  description: "Hexagonal fasteners paired with bolts. Available in standard, lock, and flange types to provide firm clamping force.  ", // Base price for the simplest nut
  options: {
    type: {
      label: "Type",
      required: true,
      options: [
        { id: "hex", name: "Hex" },
        { id: "nylon", name: "Nylon" },
        { id: "jam", name: "Jam" },
        { id: "wing", name: "Wing" },
        { id: "cap", name: "Cap" },
        { id: "flange", name: "Flange" },
      ],
    },
    driveType: {
      label: "Drive Type",
      required: false,
      options: [
        { id: "phillip", name: "Phillip" },
        { id: "slotted", name: "Slotted" },
        { id: "combination", name: "Combination" },
        { id: "allen", name: "Allen" },
        { id: "torx", name: "Torx" },
        { id: "hex", name: "Hex" },
      ],
    },
    size: {
      label: "Size",
      required: true,
      options: [
        { id: "m3", name: "M3" },
        { id: "m4", name: "M4" },
        { id: "m5", name: "M5" },
        { id: "m6", name: "M6" },
        { id: "m8", name: "M8" },
      ],
    },
    material: {
      label: "Material Type",
      required: true,
      options: [
        { id: "copper", name: "Copper" },
        { id: "mild-steel", name: "Mild Steel" },
        { id: "brass", name: "Brass" },
        { id: "stainless-steel", name: "Stainless Steel" },
      ],
    },
    coating: {
      label: "Coating Type",
      required: true,
      options: [
        { id: "blackened", name: "Blackened" },
        { id: "zinc-coated", name: "Zinc Coated" },
        { id: "nickel-coated", name: "Nickel Coated" },
      ],
    },
  },
}

// Washer configuration
export const washerConfig: FastenerConfig = {
  type: "Washer",
  image: "/images/fasteners/washer.jpg", // Replace with your actual image path
  basePrice: 0.15, // Base price for the simplest washer
  description: " Placed under bolts or nuts to distribute load, prevent loosening, and protect surfaces. Available in flat, spring, and lock types.",
  options: {
    type: {
      label: "Type",
      required: true,
      options: [
        { id: "flat", name: "Flat" },
        { id: "spring", name: "Spring" },
      ],
    },
    size: {
      label: "Size",
      required: true,
      options: [
        { id: "m3", name: "M3" },
        { id: "m4", name: "M4" },
        { id: "m5", name: "M5" },
        { id: "m6", name: "M6" },
        { id: "m8", name: "M8" },
      ],
    },
    material: {
      label: "Material Type",
      required: true,
      options: [
        { id: "nylon", name: "Nylon" },
        { id: "ms", name: "MS" },
        { id: "stainless-steel", name: "Stainless Steel" },
      ],
    },
  },
}

// Brass insert configuration
export const brassInsertConfig: FastenerConfig = {
  type: "Brass Insert",
  image: "/images/fasteners/brass-insert.png", // Replace with your actual image path
  basePrice: 0.4, // Base price for the simplest brass insert
  description: " Threaded inserts that expand inside sheet metal or tubing. Useful for adding strong threads in thin or hollow materials. ",
  options: {
    size: {
      label: "Size",
      required: true,
      options: [
        { id: "m3", name: "M3" },
        { id: "m4", name: "M4" },
        { id: "m5", name: "M5" },
        { id: "m6", name: "M6" },
      ],
    },
  },
}

// Rev Nuts configuration
export const revNutsConfig: FastenerConfig = {
  type: "Rev Nuts",
  image: "/images/fasteners/rev-nuts.jpeg", // Replace with your actual image path
  basePrice: 0.35, // Base price for the simplest rev nut
  description: " ",
  options: {
    size: {
      label: "Size",
      required: true,
      options: [
        { id: "m3", name: "M3" },
        { id: "m4", name: "M4" },
        { id: "m5", name: "M5" },
        { id: "m6", name: "M6" },
        { id: "m8", name: "M8" },
      ],
    },
  },
}

// Sand Offs configuration
export const sandOffsConfig: FastenerConfig = {
  type: "Stand Offs",
  image: "/images/fasteners/sand-offs.webp", // Replace with your actual image path
  basePrice: 0.45, // Base price for the simplest sand off
  description: "Spacer fasteners used to create fixed gaps between components. Commonly used in PCBs,electronics, and panel assemblies. ",
  options: {
    size: {
      label: "Size",
      required: true,
      helpText: "Email us for more sizes which are not available here",
      options: [
        { id: "m3", name: "M3" },
        { id: "m4", name: "M4" },
        { id: "m5", name: "M5" },
        { id: "m6", name: "M6" },
      ],
    },
    length: {
      label: "Length (mm)",
      required: true,
      options: [
        { id: "5", name: "5" },
        { id: "10", name: "10" },
        { id: "12", name: "12" },
        { id: "15", name: "15" },
        { id: "20", name: "20" },
      ],
    },
    threadLength: {
      label: "Thread Length (mm)",
      required: true,
      options: [
        { id: "5", name: "5" },
        { id: "10", name: "10" },
      ],
    },
    material: {
      label: "Material Type",
      required: true,
      options: [
        { id: "copper", name: "Copper" },
        { id: "mild-steel", name: "Mild Steel" },
        { id: "brass", name: "Brass" },
        { id: "stainless-steel", name: "Stainless Steel" },
      ],
    },
    coating: {
      label: "Coating Type",
      required: true,
      options: [
        { id: "blackened", name: "Blackened" },
        { id: "zinc-coated", name: "Zinc Coated" },
        { id: "nickel-coated", name: "Nickel Coated" },
      ],
    },
  },
}

// Screw configuration
export const screwConfig: FastenerConfig = {
  type: "Screw",
  image: "/images/fasteners/screw.jpg", // Replace with your actual image path
  basePrice: 0.25, // Base price for the simplest screw
  description: " Self-tapping or machine-threaded fasteners for wood, plastic, or metal. Essential for assembly,electronics, and structural builds. ",
  options: {
    headType: {
      label: "Head Type",
      required: true,
      options: [
        { id: "flat", name: "Flat" },
        { id: "pan", name: "Pan" },
        { id: "flange", name: "Flange" },
      ],
    },
    driveType: {
      label: "Drive Type",
      required: true,
      options: [
        { id: "phillip", name: "Phillip" },
        { id: "flat", name: "Flat" },
        { id: "combination", name: "Combination" },
        { id: "hex", name: "Hex" },
      ],
    },
    feature: {
      label: "Feature",
      required: true,
      options: [
        { id: "normal", name: "Normal" },
        { id: "self-tapping", name: "Self Tapping" },
        { id: "self-drilling", name: "Self Drilling" },
      ],
    },
    size: {
      label: "Size",
      required: true,
      options: [
        { id: "3", name: "3" },
        { id: "4", name: "4" },
        { id: "5", name: "5" },
      ],
    },
    length: {
      label: "Length (mm)",
      required: true,
      options: [
        { id: "5", name: "5" },
        { id: "6", name: "6" },
        { id: "8", name: "8" },
        { id: "10", name: "10" },
        { id: "12", name: "12" },
      ],
    },
    material: {
      label: "Material Type",
      required: true,
      options: [
        { id: "ms", name: "MS" },
        { id: "stainless-steel", name: "Stainless Steel" },
      ],
    },
  },
}
