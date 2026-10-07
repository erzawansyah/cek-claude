import { site, wa, projects, complaints, story, team, services, steps, payment, plans, domainCost, testimonials, faq, type Project } from "@/lib/content";

const Arrow = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M7 17 17 7M8 7h9v9" /></svg>
);
const Chat = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" /></svg>
);
const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CCFF4A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m5 12.5 4.5 4.5L19 7" /></svg>
);
const Wa = ({ text, children, cls = "" }: { text: string; children: React.ReactNode; cls?: string }) => (
  <a className={`btn ${cls}`} href={wa(text)} target="_blank" rel="noopener noreferrer">{children}</a>
);

const initials = (n: string) => n.split(" ").filter((w) => /^[A-Za-z]/.test(w)).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
const meta = (p: Project, withType = true) => [withType ? p.type : null, p.city, p.days ? `${p.days} hari pengerjaan` : null].filter(Boolean).join(" · ");

function Tile({ p, i, last }: { p: Project; i: number; last: boolean }) {
  const ext = { href: p.url, target: "_blank", rel: "noopener noreferrer" };
  if (!p.shot)
    return (
      <a className="tile solid" {...ext}>
        <p className="kind">{meta(p)}</p>
        <div className="meta"><h3>{p.name.replace(/\.(?=[^.]+$)/, "\n.")}</h3><span className="arrow"><Arrow size={20} /></span></div>
      </a>
    );
  if (i === 0)
    return (
      <a className="tile big span2 row2" {...ext}>
        <div className="frame"><div>
          <div className="chrome"><i /><i /><i /><span>{p.name}</span></div>
          <img src={p.shot} alt={`Beranda ${p.name}`} width={1600} height={1000} />
        </div></div>
        <div className="meta">
          <div><p className="kind">{p.type}</p><h3>{p.title}</h3>{meta(p, false) && <p>{meta(p, false)}</p>}</div>
          <span className="arrow"><Arrow size={20} /></span>
        </div>
      </a>
    );
  return (
    <a className={`tile${last ? " span2" : ""}`} {...ext}>
      <img src={p.shot} alt={`Beranda ${p.name}`} width={1600} height={1000} loading="lazy" />
      <div className="meta"><div><h3>{p.title}</h3><p>{meta(p)}</p></div><span className="arrow"><Arrow /></span></div>
    </a>
  );
}

export default function Home() {
  const shown = projects.filter((p) => p.approved);

  return (
    <main>
      <header className="hero">
        <div className="wrap">
          <div className="nav">
            <a className="logo" href="#">likrea<span>.</span></a>
            <nav aria-label="Utama">
              {shown.length > 0 && <a href="#hasil">Hasil kerja</a>}
              <a href="#layanan">Layanan</a><a href="#tim">Tim</a><a href="#harga">Harga</a><a href="#faq">FAQ</a>
            </nav>
          </div>
          <div className="hero-grid">
            <div>
              <p className="eyebrow"><span className="dot" />Jasa website untuk usaha kecil</p>
              <h1>Kami buatkan websitenya. Kami ajari cara pakainya.</h1>
              <p className="lead">Website, Google, dan media sosial untuk usahamu. Domain atas namamu, akses admin kamu pegang, dan kamu tahu cara mengubah isinya sendiri.</p>
              <div className="cta-row">
                <Wa text="Halo Likrea, saya mau tanya soal website untuk usaha saya."><Chat />Tanya dulu via WhatsApp — gratis</Wa>
                {site.replier && site.replyHours && <p>Dibalas oleh {site.replier}, biasanya dalam {site.replyHours} jam.</p>}
              </div>
            </div>
            <div className="tagwrap">
              <div className="tag">
                <div className="hole" />
                <p className="lbl">Serah terima</p>
                <p className="to">Diserahkan kepada</p>
                <p className="who">Pemilik usaha.<br />Bukan kami.</p>
                <ul>
                  <li><span className="ok"><Check /></span><div><b>Domain atas namamu</b><small>Terdaftar di akunmu sendiri</small></div></li>
                  <li><span className="ok"><Check /></span><div><b>Akses admin</b><small>Password kamu ganti sendiri</small></div></li>
                  <li><span className="ok"><Check /></span><div><b>Video panduan</b><small>Khusus untuk websitemu</small></div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {shown.length > 0 && (
        <div className="strip">
          <div className="wrap"><span className="eyebrow">Sudah online</span>{shown.map((p) => <span key={p.url}>{p.name}</span>)}</div>
        </div>
      )}

      {shown.length > 0 && (
        <section id="hasil">
          <div className="wrap">
            <div className="head"><h2 style={{ maxWidth: 640 }}>Website yang sudah kami buat</h2><p>Semuanya online. Klik, buka di HP, dan cek sendiri.</p></div>
            <div className="bento">
              {shown.map((p, i) => <Tile key={p.url} p={p} i={i} last={i === shown.length - 1 && i > 0} />)}
            </div>
          </div>
        </section>
      )}

      {complaints.length > 0 && (
        <section className="mist">
          <div className="wrap">
            <h2 style={{ marginBottom: 40 }}>Kalau ini terdengar akrab</h2>
            {complaints.map((c) => <p key={c} className="d" style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-.02em", marginBottom: 20 }}>“{c}”</p>)}
          </div>
        </section>
      )}

      <section id="layanan" className="mist">
        <div className="wrap">
          <h2 style={{ marginBottom: 16 }}>Yang bisa kami kerjakan</h2>
          <p className="mute" style={{ maxWidth: 560, marginBottom: 56 }}>Tiap layanan ada bagian yang kami ajarkan. Supaya setelah selesai, kamu tidak perlu chat kami hanya untuk ganti harga.</p>
          <div className="svc-row th"><span>Layanan</span><span>Yang kamu dapat</span><span>Yang kami ajarkan</span></div>
          {services.map((s) => (
            <div className="svc-row" key={s.name}><h3>{s.name}</h3><p>{s.get}.</p><p className="teach">{s.teach}.</p></div>
          ))}
        </div>
      </section>

      <section id="tim" className="dark">
        <div className="wrap">
          <div className="team-head">
            <h2>Siapa kami</h2>
            <div>
              {story.paragraphs.length > 0
                ? story.paragraphs.map((t) => <p key={t}>{t}</p>)
                : <p>Tim kecil, lima orang. Profil kami bisa dicek langsung di LinkedIn.</p>}
              <p>Kami bekerja di bawah {site.company}{site.nib ? ` (NIB ${site.nib})` : ""}.{story.nameReason ? ` ${story.nameReason}` : ""}</p>
            </div>
          </div>
          <div className="team">
            {team.map((m) => (
              <div className="member" key={m.name}>
                {m.photo ? <img className="avatar" src={m.photo} alt={m.name} width={72} height={72} /> : <div className="avatar" aria-hidden>{initials(m.name)}</div>}
                <h3>{m.name}</h3>
                {m.role && <p>{m.role}</p>}
                {m.bio && <p>{m.bio}</p>}
                {m.linkedin && <a href={m.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow size={14} /></a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cara-kerja">
        <div className="wrap">
          <h2 style={{ marginBottom: 56 }}>Prosesnya</h2>
          <ol className="steps">
            {steps.map(([t, d], i) => (
              <li key={t}><p className="n">{String(i + 1).padStart(2, "0")}</p><h3>{t}</h3><p>{i === 2 && payment ? `${payment}. ` : ""}{d}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section id="harga" className="mist">
        <div className="wrap">
          <div className="head"><h2>Harga</h2><p>Belum termasuk domain dan hosting{domainCost ? ` (${domainCost})` : ""}, dibayar langsung ke penyedia atas namamu.</p></div>
          <div className="plans">
            {plans.map((p, i) => (
              <div className={`plan${i === 1 ? " hot" : ""}`} key={p.name}>
                <div className="top"><h3>{p.name}</h3>{i === 1 && <span className="badge">Paling sering</span>}</div>
                <p className={`price${p.price ? "" : " ask"}`}>{p.price ?? "Tanya via WhatsApp"}</p>
                <div className="r"><span>Halaman</span><span>{p.pages}</span></div>
                <div className="r"><span>Revisi</span><span>{p.revisi ?? "Sesuai penawaran"}</span></div>
                <div className="r"><span>Pendampingan</span><span>{p.support}</span></div>
                <Wa cls={i === 1 ? "" : "ghost"} text={`Halo, saya tertarik paket ${p.name}`}>Tanya paket ini</Wa>
              </div>
            ))}
          </div>
        </div>
      </section>

      {testimonials.length >= 2 && (
        <section>
          <div className="wrap">
            <h2 style={{ marginBottom: 56 }}>Kata mereka</h2>
            <div className="plans">
              {testimonials.map((t) => (
                <div className="plan" key={t.name}>
                  <p className="d" style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-.02em" }}>“{t.quote}”</p>
                  <p className="mute" style={{ marginTop: 20, fontSize: 15 }}><b>{t.name}</b>, {t.biz}, {t.city}{t.link && <> · <a href={t.link} target="_blank" rel="noopener noreferrer">website</a></>}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="faq">
        <div className="wrap faq">
          <h2>Yang sering ditanyakan</h2>
          <div>
            {faq.map(([q, a], i) => (
              <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0, paddingBottom: 80 }}>
        <div className="wrap close">
          <div>
            <h2>Mau tanya-tanya dulu? Boleh.</h2>
            {site.village && <p>Dari {site.village}, untuk usaha di mana saja.</p>}
          </div>
          <Wa cls="ink" text="Halo Likrea, saya mau tanya-tanya dulu."><Chat />Chat WhatsApp</Wa>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <p><b>likrea.</b> · {[site.company, site.nib && `NIB ${site.nib}`, site.address].filter(Boolean).join(" · ")}</p>
          <p>{site.email && <>{site.email} · </>}<a href="/privasi">Kebijakan Privasi</a></p>
        </div>
      </footer>

      <div className="sticky"><Wa text="Halo Likrea, saya mau tanya soal website untuk usaha saya."><Chat />Tanya via WhatsApp</Wa></div>
    </main>
  );
}
