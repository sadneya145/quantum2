// VirtualLab.js
import React from "react";
import "./VirtualLab.css";

/* ===================== ICONS ===================== */
const QuantumIcon = ({ type }) => {
  const stroke = "currentColor";

  switch (type) {
    case "encoding":
      return (
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke={stroke} fill="none" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="50" y1="10" x2="50" y2="90" stroke={stroke} strokeWidth="1.5" />
          <line x1="10" y1="50" x2="90" y2="50" stroke={stroke} strokeWidth="1.5" />
          <line x1="22" y1="22" x2="78" y2="78" stroke={stroke} strokeWidth="0.5" />
          <line x1="78" y1="22" x2="22" y2="78" stroke={stroke} strokeWidth="0.5" />
          <circle cx="50" cy="50" r="3" fill={stroke} />
        </svg>
      );

    case "transmission":
      return (
        <svg viewBox="0 0 100 100">
          <path d="M10 50 Q 30 20, 50 50 T 90 50" stroke={stroke} fill="none" strokeWidth="1" />
          <circle cx="15" cy="50" r="2" fill={stroke} />
          <circle cx="45" cy="50" r="2" fill={stroke} />
          <circle cx="85" cy="50" r="2" fill={stroke} />
          <line x1="0" y1="60" x2="100" y2="60" stroke={stroke} strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      );

    case "measurement":
      return (
        <svg viewBox="0 0 100 100">
          <rect x="30" y="30" width="40" height="40" stroke={stroke} fill="none" strokeWidth="1" />
          <line x1="50" y1="10" x2="50" y2="30" stroke={stroke} strokeWidth="1" />
          <path d="M40 80 L50 70 L60 80" stroke={stroke} fill="none" strokeWidth="1" />
          <circle cx="50" cy="50" r="10" stroke={stroke} fill="none" strokeDasharray="2 2" />
        </svg>
      );

    case "sifting":
      return (
        <svg viewBox="0 0 100 100">
          <rect x="20" y="20" width="25" height="25" fill={stroke} />
          <rect x="55" y="20" width="25" height="25" stroke={stroke} fill="none" />
          <rect x="20" y="55" width="25" height="25" stroke={stroke} fill="none" />
          <rect x="55" y="55" width="25" height="25" fill={stroke} />
        </svg>
      );

    case "qber":
      return (
        <svg viewBox="0 0 100 100" className="qber-icon">
          <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="2" />
          <line x1="80" y1="20" x2="20" y2="80" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="40" stroke="currentColor" fill="none" strokeWidth="0.5" />
        </svg>
      );

    case "privacy":
      return (
        <svg viewBox="0 0 100 100">
          <path d="M30 40 V70 H70 V40 Z" fill="none" stroke={stroke} strokeWidth="1.5" />
          <path d="M40 40 V30 C40 20, 60 20, 60 30 V40" fill="none" stroke={stroke} strokeWidth="1.5" />
        </svg>
      );

    default:
      return null;
  }
};

/* ===================== DATA ===================== */
const STEPS = [
  {
    id: "01",
    icon: "encoding",
    title: "Quantum State Mapping",
    subtitle: "Alice’s Source Initialization",
    desc: "Alice selects a random bit value and a random basis. She prepares a photon in one of four states.",
    theory: "Non-orthogonal states ensure wrong-basis measurements yield random outcomes."
  },
  {
    id: "02",
    icon: "transmission",
    title: "The Secure Channel",
    subtitle: "Physical Qubit Propagation",
    desc: "Single-photon pulses are sent across a one-way quantum channel.",
    theory: "The No-Cloning Theorem prevents perfect interception."
  },
  {
    id: "03",
    icon: "measurement",
    title: "Basis Reconciliation",
    subtitle: "Bob’s Detection Choice",
    desc: "Bob measures each photon using a randomly chosen basis.",
    theory: "Measurement in the wrong basis irreversibly alters the state."
  },
  {
    id: "04",
    icon: "sifting",
    title: "Classical Sifting",
    subtitle: "Discarding Mismatches",
    desc: "Alice and Bob compare bases publicly and keep only matches.",
    theory: "Statistically, half the raw key survives."
  },
  {
    id: "05",
    icon: "qber",
    title: "Security Threshold",
    subtitle: "QBER Estimation",
    desc: "A subset of bits is revealed to estimate the error rate.",
    theory: "If QBER > 11%, the protocol aborts."
  },
  {
    id: "06",
    icon: "privacy",
    title: "Privacy Amplification",
    subtitle: "Final Key Distillation",
    desc: "Hashing compresses the key to eliminate Eve’s information.",
    theory: "Produces a provably secure one-time pad."
  }
];

/* ===================== COMPONENT ===================== */
export default function VirtualLab() {
  return (
    <div className="virtual-lab">
      <div className="v-technical-grid" />

      <main className="v-container">

        {/* HEADER */}
        <section className="v-header">
          <h1>
            The Physics <br />
            <span className="serif-italic">of Privacy.</span>
          </h1>
          <p className="v-subtitle">
            A complete breakdown of the BB84 Quantum Key Distribution protocol.
          </p>
        </section>

        <div className="v-divider-label">
          <span className="mono">System Architecture</span>
        </div>

        {/* ENCODING GRID */}
        <section className="v-encoding-grid">
          {["↑ 0°", "→ 90°", "↗ 45°", "↘ 135°"].map((s, i) => (
            <div key={i} className="v-state-bubble">
              <div className="mono">{s}</div>
            </div>
          ))}
        </section>

        {/* PHASE GRID */}
        <section className="v-phase-grid">
          {STEPS.map(step => (
            <div key={step.id} className="v-phase-card">
              <div className="v-phase-header">
                <span className="mono">PHASE_{step.id}</span>
                <QuantumIcon type={step.icon} />
              </div>

              <h3>{step.title}</h3>
              <p className="mono">{step.subtitle}</p>
              <p>{step.desc}</p>

              <div className="v-physics-core">
                <strong>Physics Core:</strong> {step.theory}
              </div>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}
