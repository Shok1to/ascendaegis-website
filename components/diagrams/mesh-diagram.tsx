const nodes = [
  { x: 80, y: 190, label: "Clinic A" },
  { x: 200, y: 262, label: "Clinic B" },
  { x: 300, y: 172, label: "Clinic C" },
  { x: 430, y: 252, label: "Clinic D" },
  { x: 490, y: 160, label: "Clinic E" },
]

const links: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 2],
  [1, 3],
  [2, 3],
  [2, 4],
  [3, 4],
]

export function MeshDiagram() {
  return (
    <svg
      viewBox="0 0 560 330"
      role="img"
      aria-label="Five clinic sites linked to each other in a mesh. The link from the central cloud is cut, and the sites stay connected to each other."
      className="w-full text-primary-foreground"
    >
      <rect
        x="200"
        y="14"
        width="160"
        height="44"
        rx="8"
        className="fill-primary-foreground/10 stroke-primary-foreground/30"
      />
      <text
        x="280"
        y="41"
        textAnchor="middle"
        className="fill-primary-foreground text-[13px]"
      >
        Central cloud
      </text>

      <line
        x1="280"
        y1="58"
        x2="300"
        y2="150"
        className="stroke-primary-foreground/25"
        strokeWidth="2"
      />
      <g className="stroke-destructive" strokeWidth="2">
        <line x1="268" y1="88" x2="282" y2="102" />
        <line x1="282" y1="88" x2="268" y2="102" />
      </g>
      <text
        x="300"
        y="98"
        className="fill-primary-foreground/60 text-[11px]"
      >
        Internet link down
      </text>

      <g className="stroke-accent/50" strokeWidth="1.5">
        {links.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
          />
        ))}
      </g>

      {nodes.map((node) => (
        <circle
          key={node.label}
          cx={node.x}
          cy={node.y}
          r="20"
          className="fill-accent/20 stroke-accent"
          strokeWidth="2"
        />
      ))}
      {nodes.map((node) => (
        <text
          key={node.label}
          x={node.x}
          y={node.y + 38}
          textAnchor="middle"
          className="fill-primary-foreground/80 text-[12px]"
        >
          {node.label}
        </text>
      ))}
    </svg>
  )
}
