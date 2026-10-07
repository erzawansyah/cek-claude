import { site, wa, projects, complaints, story, team, services, steps, payment, plans, domainCost, testimonials, faq } from "@/lib/content";

const Wa = ({ text, children, cls = "" }: { text: string; children: React.ReactNode; cls?: string }) => (
  <a className={`btn ${cls}`} href={wa(text)} target="_blank" rel="noopener noreferrer">{children}</a>
);
const Check = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d9f25c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="10" strokeWidth="1.5"/><path d="m8 12.5 3 3 5-6"/></svg>
);
const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M7 17 17 7M8 7h9v9"/></svg>
);

export default function Home() {
  const shown = projects.filter((p) => p.approved);
  const meta = (p: (typeof projects)[number]) => [p.type, p.city, p.days ? `${p.days} hari` : null].filter(Boolean).join(" · ");
  const hasStory = story.paragraphs.length > 0;

  return (
    <main>
      <header className="nav">
        <div className="wrap">
          <a className="logo" href="#">likrea<i>.</i></a>
          <nav>
            {shown.length > 0 && <a href="#hasil">Hasil kerja</a>}
            <a href="#layanan">Layanan</a><a href="#tim">Tim</a><a href="#harga">Harga</a><a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <div>
            <h1>Kami buatkan websitenya. Kami ajari cara pakainya. <em>Kuncinya tetap di tanganmu.</em></h1>
            <p className="lead">Jasa website, Google, dan media sosial untuk usaha kecil. Domain atas namamu, akses admin kamu pegang, dan kamu tahu cara mengubah isinya sendiri.</p>
            <Wa text="Halo Likrea, saya mau tanya soal website untuk usaha saya.">Tanya dulu via WhatsApp (gratis)</Wa>
            {site.replier && site.replyHours && (
              <p className="small" style={{ marginTop: 14, color: "#b9c4ad" }}>Dibalas oleh {site.replier}, biasanya dalam {site.replyHours} jam di jam kerja.</p>
            )}
          </div>
          <aside className="keys">
            <h3>Yang kamu pegang setelah serah terima</h3>
            <ul style={{ padding: 0 }}>
              <li><Check /><div><b>Domain atas namamu</b><span>Didaftarkan di akunmu, bukan akun kami.</span></div></li>
              <li><Check /><div><b>Akses admin</b><span>Password diganti setelah serah terima.</span></div></li>
              <li><Check /><div><b>Cara mengurusnya</b><span>Video panduan khusus untuk websitemu.</span></div></li>
            </ul>
          </aside>
        </div>
        {site.heroPhoto && <div className="wrap"><img className="heroimg" src={site.heroPhoto} alt="Tim Likrea" width={1080} height={600} /></div>}
      </section>

      {shown.length > 0 && (
        <section id="hasil">
          <div className="wrap">
            <p className="eyebrow">Hasil kerja</p>
            <h2>Website yang sudah kami buat</h2>
            <p className="sub">Semuanya online. Klik, buka di HP, dan cek sendiri.</p>
            <div className="shots">
              {shown.map((p, i) => (
                <a className={`shot${i === 0 ? " first" : ""}`} key={p.url} href={p.url} target="_blank" rel="noopener noreferrer">
                  <div className="frame">
                    <div className="chrome"><i /><i /><i /><small>{p.name}</small></div>
                    {p.shot
                      ? <img src={p.shot} alt={`Tampilan ${p.name}`} loading={i < 2 ? "eager" : "lazy"} width={1000} height={625} />
                      : <div className="noimg">{p.name}</div>}
                  </div>
                  <div className="meta">
                    <div><h3>{p.name}</h3><p className="mute small">{meta(p)}</p></div>
                    <span className="arrow"><Arrow /></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {complaints.length > 0 && (
        <section className="quotes">
          <div className="wrap">
            <h2 style={{ marginBottom: 24 }}>Kalau ini terdengar akrab</h2>
            {complaints.map((c) => <blockquote key={c}>“{c}”</blockquote>)}
          </div>
        </section>
      )}

      <section id="layanan">
        <div className="wrap">
          <p className="eyebrow">Layanan</p>
          <h2>Yang bisa kami kerjakan</h2>
          <p className="sub">Di tiap layanan ada bagian yang kami ajarkan. Itu yang membedakan kami.</p>
          <div className="svc">
            {services.map((s) => (
              <article key={s.name}>
                <h3>{s.name}</h3>
                <dl>
                  <dt>Yang kamu dapat</dt><dd>{s.get}</dd>
                  <div className="teach"><dt>Yang kami ajarkan</dt><dd>{s.teach}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tim" className="dark">
        <div className="wrap">
          <p className="eyebrow" style={{ color: "#d9f25c" }}>Tim</p>
          <h2>Siapa kami</h2>
          {hasStory ? (
            <div className="story">
              {story.paragraphs.map((t) => <p key={t}>{t}</p>)}
              <p>Sekarang kami bekerja di bawah {site.company}{site.nib ? ` (NIB ${site.nib})` : ""}.{story.nameReason ? ` ${story.nameReason}` : ""}</p>
            </div>
          ) : <p className="sub">Tim kecil di bawah {site.company}. Profil LinkedIn kami bisa dicek langsung.</p>}
          <div className="team">
            {team.map((m) => (
              <div className="member" key={m.name}>
                {m.photo ? <img className="avatar" src={m.photo} alt={m.name} /> : <div className="avatar" aria-hidden>{m.name[0]}</div>}
                <h3>{m.name}</h3>
                {m.role && <p className="role">{m.role}</p>}
                {m.bio && <p className="role">{m.bio}</p>}
                {m.linkedin && <a className="in" href={m.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cara-kerja">
        <div className="wrap">
          <p className="eyebrow">Cara kerja</p>
          <h2 style={{ marginBottom: 24 }}>Prosesnya</h2>
          <ol className="steps">
            {steps.map(([t, d], i) => (
              <li key={t}><div><h3>{t}</h3><p className="mute">{i === 2 && payment ? `${payment}. ` : ""}{d}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section id="harga" style={{ background: "var(--paper)" }}>
        <div className="wrap">
          <p className="eyebrow">Harga</p>
          <h2>Pilih yang pas untuk usahamu</h2>
          <p className="sub">Belum termasuk domain &amp; hosting{domainCost ? ` (${domainCost})` : ""}, dibayar langsung ke penyedia atas namamu.</p>
          <div className="plans">
            {plans.map((p, i) => (
              <div className={`plan${i === 1 ? " hot" : ""}`} key={p.name}>
                <h3>{p.name}</h3>
                <div className="price">{p.price ?? "Tanya via WhatsApp"}</div>
                <ul>
                  <li><span>Halaman</span><span>{p.pages}</span></li>
                  <li><span>Revisi</span><span>{p.revisi ?? "Sesuai penawaran"}</span></li>
                  <li><span>Pendampingan</span><span>{p.support}</span></li>
                </ul>
                <Wa cls="dark" text={`Halo, saya tertarik paket ${p.name}`}>Tanya paket ini</Wa>
              </div>
            ))}
          </div>
        </div>
      </section>

      {testimonials.length >= 2 && (
        <section>
          <div className="wrap">
            <h2 style={{ marginBottom: 24 }}>Kata mereka</h2>
            <div className="tgrid">
              {testimonials.map((t) => (
                <div className="card" key={t.name}>
                  <blockquote>“{t.quote}”</blockquote>
                  <p className="small"><b>{t.name}</b>, {t.biz}, {t.city}{t.link && <> · <a href={t.link} target="_blank" rel="noopener noreferrer">website</a></>}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="faq">
        <div className="wrap">
          <p className="eyebrow">FAQ</p>
          <h2 style={{ marginBottom: 24 }}>Pertanyaan yang sering muncul</h2>
          {faq.map(([q, a]) => (
            <details key={q}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="close">
            <h2>Mau tanya-tanya dulu? Boleh.</h2>
            <Wa text="Halo Likrea, saya mau tanya-tanya dulu.">Chat WhatsApp</Wa>
            {site.village && <p className="small" style={{ marginTop: 20, color: "#b9c4ad" }}>Dari {site.village}, untuk usaha di mana saja.</p>}
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <span>{[site.company, site.nib && `NIB ${site.nib}`, site.address, site.email].filter(Boolean).join(" · ")}</span>
          <a href="/privasi">Kebijakan Privasi</a>
        </div>
      </footer>

      <div className="sticky"><Wa text="Halo Likrea, saya mau tanya soal website untuk usaha saya.">Tanya via WhatsApp</Wa></div>
    </main>
  );
}
