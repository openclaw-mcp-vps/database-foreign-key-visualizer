export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Database Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Visual Database<br />
          <span className="text-[#58a6ff]">Relationship Mapper</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-8">
          Connect to any database via connection string. Auto-generate interactive SVG diagrams
          showing every foreign key relationship — instantly. Built for backend devs and DBAs.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Access — $19/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        {/* Diagram preview */}
        <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-6 max-w-2xl mx-auto">
          <svg viewBox="0 0 480 220" className="w-full" aria-label="Example relationship diagram">
            {/* Table: users */}
            <rect x="20" y="30" width="130" height="90" rx="6" fill="#0d1117" stroke="#58a6ff" strokeWidth="1.5" />
            <rect x="20" y="30" width="130" height="28" rx="6" fill="#1f3a5f" />
            <rect x="20" y="52" width="130" height="6" fill="#1f3a5f" />
            <text x="85" y="50" textAnchor="middle" fill="#58a6ff" fontSize="11" fontWeight="bold">users</text>
            <text x="32" y="76" fill="#8b949e" fontSize="9">🔑 id (PK)</text>
            <text x="32" y="92" fill="#c9d1d9" fontSize="9">name</text>
            <text x="32" y="108" fill="#c9d1d9" fontSize="9">email</text>
            {/* Table: orders */}
            <rect x="175" y="10" width="130" height="105" rx="6" fill="#0d1117" stroke="#3fb950" strokeWidth="1.5" />
            <rect x="175" y="10" width="130" height="28" rx="6" fill="#1a3a25" />
            <rect x="175" y="32" width="130" height="6" fill="#1a3a25" />
            <text x="240" y="30" textAnchor="middle" fill="#3fb950" fontSize="11" fontWeight="bold">orders</text>
            <text x="187" y="56" fill="#8b949e" fontSize="9">🔑 id (PK)</text>
            <text x="187" y="72" fill="#c9d1d9" fontSize="9">🔗 user_id (FK)</text>
            <text x="187" y="88" fill="#c9d1d9" fontSize="9">total</text>
            <text x="187" y="104" fill="#c9d1d9" fontSize="9">created_at</text>
            {/* Table: products */}
            <rect x="175" y="135" width="130" height="75" rx="6" fill="#0d1117" stroke="#f78166" strokeWidth="1.5" />
            <rect x="175" y="135" width="130" height="28" rx="6" fill="#3a1a1a" />
            <rect x="175" y="157" width="130" height="6" fill="#3a1a1a" />
            <text x="240" y="155" textAnchor="middle" fill="#f78166" fontSize="11" fontWeight="bold">products</text>
            <text x="187" y="179" fill="#8b949e" fontSize="9">🔑 id (PK)</text>
            <text x="187" y="195" fill="#c9d1d9" fontSize="9">name</text>
            {/* Table: order_items */}
            <rect x="330" y="60" width="130" height="90" rx="6" fill="#0d1117" stroke="#d2a8ff" strokeWidth="1.5" />
            <rect x="330" y="60" width="130" height="28" rx="6" fill="#2a1a3a" />
            <rect x="330" y="82" width="130" height="6" fill="#2a1a3a" />
            <text x="395" y="80" textAnchor="middle" fill="#d2a8ff" fontSize="11" fontWeight="bold">order_items</text>
            <text x="342" y="106" fill="#8b949e" fontSize="9">🔑 id (PK)</text>
            <text x="342" y="122" fill="#c9d1d9" fontSize="9">🔗 order_id (FK)</text>
            <text x="342" y="138" fill="#c9d1d9" fontSize="9">🔗 product_id (FK)</text>
            {/* Arrows */}
            <line x1="150" y1="72" x2="175" y2="62" stroke="#58a6ff" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrow-blue)" />
            <line x1="305" y1="72" x2="330" y2="105" stroke="#3fb950" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrow-green)" />
            <line x1="305" y1="172" x2="330" y2="138" stroke="#f78166" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrow-red)" />
            <defs>
              <marker id="arrow-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#58a6ff" />
              </marker>
              <marker id="arrow-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#3fb950" />
              </marker>
              <marker id="arrow-red" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#f78166" />
              </marker>
            </defs>
          </svg>
          <p className="text-xs text-[#8b949e] mt-3">Auto-generated from your real schema — interactive, zoomable, exportable</p>
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#21262d] bg-[#161b22] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            ["Any Database", "PostgreSQL, MySQL, SQLite, MSSQL"],
            ["Auto-Introspect", "Reads FK metadata instantly"],
            ["Interactive SVG", "Zoom, pan, click to explore"],
            ["Export & Share", "PNG, SVG, or shareable link"]
          ].map(([title, desc]) => (
            <div key={title}>
              <p className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</p>
              <p className="text-[#8b949e] text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] text-sm mb-8">One plan. Everything included.</p>
        <div className="rounded-xl border border-[#58a6ff] bg-[#161b22] p-8">
          <p className="text-[#58a6ff] text-sm font-medium uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-xs mb-6">Cancel anytime</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited database connections",
              "Auto-generated FK diagrams",
              "Interactive zoom & pan",
              "PNG / SVG export",
              "Shareable diagram links",
              "PostgreSQL, MySQL, SQLite, MSSQL"
            ].map(f => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started — $19/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "Which databases are supported?",
              "PostgreSQL, MySQL, SQLite, and Microsoft SQL Server. We read system catalog tables to extract foreign key metadata — no schema changes required."
            ],
            [
              "Is my connection string stored securely?",
              "Connection strings are encrypted at rest and never logged. You can delete them at any time from your dashboard."
            ],
            [
              "Can I export or share diagrams?",
              "Yes. Export as PNG or SVG, or generate a shareable read-only link you can send to teammates or embed in docs."
            ]
          ].map(([q, a]) => (
            <div key={q} className="rounded-lg border border-[#21262d] bg-[#161b22] p-5">
              <p className="text-white font-medium mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} DB Schema Visualizer. All rights reserved.
      </footer>
    </main>
  )
}
