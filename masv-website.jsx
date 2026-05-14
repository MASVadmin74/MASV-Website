{
  "name": "masv-website",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
  "browserslist": {
    "production": [">0.2%", "not dead"],
    "development": ["last 1 chrome version"]
  }
}<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#0a0a0a" />
    <meta name="description" content="Men Against Sexual Violence (MASV) - 501c3 Nonprofit Organization" />
    <title>MASV - Men Against Sexual Violence</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);import { useState, useEffect } from "react";

const resources = [
  { name: "RAINN", url: "https://www.rainn.org", desc: "Nation's largest anti-sexual violence organization. 24/7 hotline: 1-800-656-4673" },
  { name: "National Domestic Violence Hotline", url: "https://www.thehotline.org", desc: "Support for domestic violence survivors. Call/text: 1-800-799-7233" },
  { name: "Childhelp National Child Abuse Hotline", url: "https://www.childhelp.org", desc: "Crisis intervention for abused children. 1-800-422-4453" },
  { name: "SAMHSA", url: "https://www.samhsa.gov", desc: "Substance abuse & mental health services. 1-800-662-4357" },
  { name: "Boys Town National Hotline", url: "https://www.boystown.org", desc: "Help for youth in crisis. 1-800-448-3000" },
  { name: "1in6", url: "https://1in6.org", desc: "Support for men who have experienced sexual abuse or assault." },
  { name: "MaleSurvivor", url: "https://malesurvivor.org", desc: "Resources and community for male survivors of sexual trauma." },
  { name: "Crisis Text Line", url: "https://www.crisistextline.org", desc: "Text HOME to 741741 for free, 24/7 crisis counseling." },
];

const faqData = [
  { q: "Who does MASV serve?", a: "MASV focuses on young men ages 6–18, primarily in communities of color, who have experienced or witnessed sexual abuse, physical violence, or verbal abuse." },
  { q: "How are athlete volunteers involved?", a: "Current and former college and professional athletes volunteer at MASV camps and events. During breakout sessions, they share their personal experiences with abuse, demonstrating that survivors can go on to lead successful, fulfilling lives." },
  { q: "How can I donate?", a: "You can donate securely through our Donate button at the top of the page or the Donate section. All donations support programming, camps, and safe-haven resources for youth." },
  { q: "How do I volunteer?", a: "Reach out via our Contact page at info@masv.org. We welcome athlete volunteers, counselors, educators, and community advocates." },
  { q: "Is MASV a registered nonprofit?", a: "Yes. Men Against Sexual Violence (MASV) is a registered 501(c)3 nonprofit organization." },
];

export default function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  const nav = (p) => { setPage(p); setMenuOpen(false); };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "mission", label: "Mission" },
    { id: "plan", label: "MASV Plan" },
    { id: "events", label: "Events" },
    { id: "founder", label: "Founder" },
    { id: "resources", label: "Get Help" },
    { id: "gallery", label: "Gallery" },
    { id: "volunteers", label: "Volunteers" },
    { id: "partnerships", label: "Partnerships" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div style={styles.root}>
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <button onClick={() => nav("home")} style={styles.logo}>
            <span style={styles.logoAccent}>M</span>ASV
          </button>
          <div style={styles.navLinks}>
            {navLinks.map(l => (
              <button key={l.id} onClick={() => nav(l.id)}
                style={{ ...styles.navLink, ...(page === l.id ? styles.navLinkActive : {}) }}>
                {l.label}
              </button>
            ))}
            <button onClick={() => nav("donate")} style={styles.donateBtn}>Donate</button>
          </div>
          <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <span style={{ fontSize: 22 }}>{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
        {menuOpen && (
          <div style={styles.mobileMenu}>
            {navLinks.map(l => (
              <button key={l.id} onClick={() => nav(l.id)} style={styles.mobileLink}>{l.label}</button>
            ))}
            <button onClick={() => nav("donate")} style={{ ...styles.donateBtn, margin: "10px auto", display: "block" }}>Donate</button>
          </div>
        )}
      </nav>

      <main style={styles.main}>
        {page === "home" && <HomePage nav={nav} />}
        {page === "mission" && <MissionPage />}
        {page === "plan" && <PlanPage />}
        {page === "events" && <EventsPage />}
        {page === "founder" && <FounderPage />}
        {page === "resources" && <ResourcesPage />}
        {page === "gallery" && <GalleryPage />}
        {page === "volunteers" && <VolunteersPage />}
        {page === "partnerships" && <PartnershipsPage />}
        {page === "faq" && <FAQPage faqOpen={faqOpen} setFaqOpen={setFaqOpen} />}
        {page === "contact" && <ContactPage />}
        {page === "donate" && <DonatePage />}
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerLogo}>
            <span style={styles.logoAccent}>M</span>ASV
            <p style={styles.footerTagline}>Men Against Sexual Violence</p>
            <p style={styles.footerSub}>501(c)3 Nonprofit Organization</p>
          </div>
          <div style={styles.footerLinks}>
            {navLinks.map(l => (
              <button key={l.id} onClick={() => nav(l.id)} style={styles.footerLink}>{l.label}</button>
            ))}
          </div>
          <div style={styles.footerContact}>
            <p style={{ color: "#aaa", marginBottom: 8 }}>Connect With Us</p>
            <a href="mailto:info@masv.org" style={styles.footerEmail}>info@masv.org</a>
            <a href="https://instagram.com/masvinfo" target="_blank" rel="noopener noreferrer" style={styles.igBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 8 }}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              @masvinfo
            </a>
            <button onClick={() => nav("donate")} style={{ ...styles.donateBtn, marginTop: 14 }}>Donate Now</button>
          </div>
        </div>
        <div style={styles.footerBottom}>
          © {new Date().getFullYear()} Men Against Sexual Violence (MASV). All rights reserved. 501(c)3 Nonprofit.
        </div>
      </footer>
    </div>
  );
}

function HomePage({ nav }) {
  return (
    <div>
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <p style={styles.heroEyebrow}>501(c)3 Nonprofit</p>
          <h1 style={styles.heroTitle}>
            Men Against<br /><span style={styles.heroAccent}>Sexual Violence</span>
          </h1>
          <p style={styles.heroSub}>
            Breaking cycles of abuse in communities of color through awareness, education, and safe spaces for young men ages 6–18.
          </p>
          <div style={styles.heroBtns}>
            <button onClick={() => nav("mission")} style={styles.heroBtnPrimary}>Our Mission</button>
            <button onClick={() => nav("donate")} style={styles.heroBtnSecondary}>Donate</button>
          </div>
        </div>
      </section>

      <section style={styles.statsBar}>
        {[["1 in 6", "Boys experience sexual abuse before 18"],
          ["Ages 6–18", "Youth MASV directly serves"],
          ["0", "Cost to families for MASV programming"],
          ["100%", "Survivor-led mission & leadership"]
        ].map(([num, label]) => (
          <div key={num} style={styles.statItem}>
            <span style={styles.statNum}>{num}</span>
            <span style={styles.statLabel}>{label}</span>
          </div>
        ))}
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What We Do</h2>
        <div style={styles.cardGrid}>
          {[
            { icon: "🛡️", title: "Awareness", desc: "Helping youth recognize abuse — in themselves and in others — before cycles continue." },
            { icon: "📚", title: "Education", desc: "Building self-awareness, emotional vocabulary, and the courage to speak up." },
            { icon: "🏀", title: "Sports as a Bridge", desc: "Athletes create connection. Former pros share their stories to show survivors what's possible." },
            { icon: "🤝", title: "Safe Haven", desc: "A community where vulnerability is strength and no secret needs to be kept alone." },
          ].map(c => (
            <div key={c.title} style={styles.card}>
              <div style={styles.cardIcon}>{c.icon}</div>
              <h3 style={styles.cardTitle}>{c.title}</h3>
              <p style={styles.cardDesc}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.igSection}>
        <a href="https://instagram.com/masvinfo" target="_blank" rel="noopener noreferrer" style={styles.igCallout}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 12 }}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
          Follow us on Instagram <strong style={{ marginLeft: 6 }}>@masvinfo</strong>
        </a>
      </section>

      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Make a Difference?</h2>
        <p style={styles.ctaSub}>Every dollar supports camps, breakout sessions, and safe spaces for young men who need them most.</p>
        <div style={styles.heroBtns}>
          <button onClick={() => nav("donate")} style={styles.heroBtnPrimary}>Donate Today</button>
          <button onClick={() => nav("contact")} style={styles.heroBtnSecondary}>Get Involved</button>
        </div>
      </section>
    </div>
  );
}

function MissionPage() {
  return (
    <section style={styles.section}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Our <span style={styles.heroAccent}>Mission</span></h1>
        <div style={styles.divider} />
      </div>
      <div style={styles.missionBlock}>
        <p style={styles.missionText}>
          Our goal is to discontinue the reciprocal sexual abuse and physical violence that plague communities of color by providing our youth with awareness, education, and in some cases a safe haven from physical abuse. MASV focuses on young men from the ages 6 to 18 years of age.
        </p>
        <p style={styles.missionText}>
          In many cases children — especially young men — don't know they are being abused, nor can they express witnessing physical or verbal abuse. The underlying issue within the African American community, especially with young men, is that they are taught at an early age to not show emotion, vulnerability, or in most cases are told to "be a man." Never told how to be aware of abuse, nor whom to go to if and when they or someone they know is being abused. They are told not to snitch, or to keep a secret. In turn, the abused becomes the abuser — causing further damage within our community.
        </p>
        <h2 style={styles.missionSubtitle}>Our Four Pillars</h2>
        <div style={styles.pillarsGrid}>
          {[
            { num: "01", title: "Trust & Confidence", desc: "Establishing trust and building confidence within every young man we serve." },
            { num: "02", title: "Self-Awareness", desc: "Developing self-awareness and the ability to spot abusive situations for others." },
            { num: "03", title: "Dialogue", desc: "Finding comfort in the ability to share experiences of sexual abuse or having witnessed abuse." },
            { num: "04", title: "Finding Help", desc: "Connecting youth to professional resources and community support systems." },
          ].map(p => (
            <div key={p.num} style={styles.pillar}>
              <span style={styles.pillarNum}>{p.num}</span>
              <div>
                <h3 style={styles.pillarTitle}>{p.title}</h3>
                <p style={styles.pillarDesc}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanPage() {
  return (
    <section style={styles.section}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>The <span style={styles.heroAccent}>MASV Plan</span></h1>
        <div style={styles.divider} />
      </div>
      <div style={styles.missionBlock}>
        <p style={styles.missionText}>
          MASV uses current and former college and professional athletes as volunteers at camps and events. Most athletes spend time during breakout sessions expressing their personal experience with sexual abuse and violence. The goal is to use sports as a tool to bring kids together, while former athletes serve as guides — showing that even after experiencing physical or verbal abuse, they were capable of going on to become successful in their respective sport or second career.
        </p>
        <div style={styles.planGrid}>
          {[
            { icon: "🏆", title: "Athlete Volunteers", desc: "Current and former college/professional athletes donate their time and stories to inspire youth." },
            { icon: "⛺", title: "Camps & Games", desc: "Sports-based camps create a neutral, fun space where connections are made before the deeper conversations begin." },
            { icon: "💬", title: "Breakout Sessions", desc: "Small group conversations led by athletes sharing personal stories of abuse, recovery, and resilience." },
            { icon: "🌟", title: "Success Stories", desc: "Athletes demonstrate that survivors can go on to achieve extraordinary things in sports and in life." },
          ].map(p => (
            <div key={p.title} style={styles.planCard}>
              <div style={styles.planIcon}>{p.icon}</div>
              <h3 style={styles.planCardTitle}>{p.title}</h3>
              <p style={styles.cardDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventsPage() {
  return (
    <section style={styles.section}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>MASV <span style={styles.heroAccent}>Events</span></h1>
        <div style={styles.divider} />
      </div>
      <div style={styles.comingSoon}>
        <div style={styles.comingSoonIcon}>📅</div>
        <h2 style={styles.comingSoonTitle}>Events Coming Soon</h2>
        <p style={styles.comingSoonText}>
          We're planning our first series of athlete-led camps and community sessions. Check back here for announcements, or follow us on Instagram <a href="https://instagram.com/masvinfo" target="_blank" rel="noopener noreferrer" style={{ color: "#1a4fbb" }}>@masvinfo</a> for the latest updates.
        </p>
        <a href="mailto:info@masv.org" style={styles.heroBtnPrimary}>Get Notified: info@masv.org</a>
      </div>
    </section>
  );
}

function FounderPage() {
  return (
    <section style={styles.section}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Meet the <span style={styles.heroAccent}>Founder</span></h1>
        <div style={styles.divider} />
      </div>
      <div style={styles.founderLayout}>
        <div style={styles.founderPhotoWrap}>
          <img src="/founder.jpg" alt="MASV Founder" style={styles.founderPhoto} />
          <div style={styles.founderBadge}>Founder & Executive Director</div>
        </div>
        <div style={styles.founderBio}>
          <h2 style={styles.founderName}>MASV Founder</h2>
          <p style={styles.missionText}>
            The founder of Men Against Sexual Violence (MASV) established this 501(c)3 nonprofit with a singular mission: to break the cycle of sexual abuse and physical violence that silently devastates communities of color — starting with the youngest and most vulnerable members.
          </p>
          <p style={styles.missionText}>
            Understanding that young men are rarely given the language, permission, or safe space to process abuse, the founder built MASV around four core pillars: trust, self-awareness, dialogue, and finding help. By partnering with athletes who understand the culture, MASV meets youth where they are — on the field — and walks with them toward healing.
          </p>
          <div style={styles.founderContactBlock}>
            <a href="mailto:info@masv.org" style={styles.heroBtnPrimary}>Contact Us</a>
            <a href="https://instagram.com/masvinfo" target="_blank" rel="noopener noreferrer" style={styles.igBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 8 }}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              @masvinfo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResourcesPage() {
  return (
    <section style={styles.section}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Get <span style={styles.heroAccent}>Help</span></h1>
        <div style={styles.divider} />
      </div>
      <p style={styles.resourcesIntro}>
        You are not alone. Below are trusted organizations providing immediate and ongoing support for survivors of abuse, domestic violence, child abuse, and addiction. All resources are free and confidential.
      </p>
      <div style={styles.resourceGrid}>
        {resources.map(r => (
          <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" style={styles.resourceCard}>
            <h3 style={styles.resourceName}>{r.name}</h3>
            <p style={styles.resourceDesc}>{r.desc}</p>
            <span style={styles.resourceLink}>Visit →</span>
          </a>
        ))}
      </div>
      <div style={styles.crisisBar}>
        <strong>🚨 In immediate danger?</strong> Call <strong>911</strong>. For mental health crisis: <strong>988 Suicide & Crisis Lifeline</strong> — call or text <strong>988</strong>.
      </div>
    </section>
  );
}

function GalleryPage() {
  return (
    <section style={styles.section}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Photo <span style={styles.heroAccent}>Gallery</span></h1>
        <div style={styles.divider} />
      </div>
      <div style={styles.comingSoon}>
        <div style={styles.comingSoonIcon}>📸</div>
        <h2 style={styles.comingSoonTitle}>Gallery Coming Soon</h2>
        <p style={styles.comingSoonText}>
          As MASV events and programs launch, photos will be shared here. Follow <a href="https://instagram.com/masvinfo" target="_blank" rel="noopener noreferrer" style={{ color: "#1a4fbb" }}>@masvinfo</a> on Instagram for real-time updates.
        </p>
      </div>
    </section>
  );
}

function VolunteersPage() {
  return (
    <section style={styles.section}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}><span style={styles.heroAccent}>Volunteers</span></h1>
        <div style={styles.divider} />
      </div>
      <div style={styles.missionBlock}>
        <p style={styles.missionText}>
          MASV is built on the commitment of athletes, counselors, educators, and community advocates who believe every young man deserves to be heard and protected. Whether you're a former athlete ready to share your story or a professional who works with youth, your time can change lives.
        </p>
        <div style={styles.planGrid}>
          {[
            { icon: "🏅", title: "Athlete Volunteers", desc: "Current or former college/pro athletes who want to inspire youth through breakout sessions and camps." },
            { icon: "🧠", title: "Counselors & Therapists", desc: "Mental health professionals to support youth during and after sessions." },
            { icon: "👨‍🏫", title: "Educators & Coaches", desc: "Community leaders who facilitate workshops and curriculum on abuse awareness." },
            { icon: "📋", title: "Event Organizers", desc: "Help plan, coordinate, and run MASV camps and community events." },
          ].map(p => (
            <div key={p.title} style={styles.planCard}>
              <div style={styles.planIcon}>{p.icon}</div>
              <h3 style={styles.planCardTitle}>{p.title}</h3>
              <p style={styles.cardDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href="mailto:info@masv.org" style={styles.heroBtnPrimary}>Volunteer: info@masv.org</a>
        </div>
      </div>
    </section>
  );
}

function PartnershipsPage() {
  return (
    <section style={styles.section}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}><span style={styles.heroAccent}>Partnerships</span></h1>
        <div style={styles.divider} />
      </div>
      <div style={styles.comingSoon}>
        <div style={styles.comingSoonIcon}>🤝</div>
        <h2 style={styles.comingSoonTitle}>Partnership Opportunities</h2>
        <p style={styles.comingSoonText}>
          MASV is actively seeking corporate sponsors, sports organizations, universities, and community partners who share our commitment to ending cycles of abuse. Your partnership provides funding, visibility, and resources that directly impact youth.
        </p>
        <a href="mailto:info@masv.org" style={styles.heroBtnPrimary}>Partner With Us</a>
      </div>
    </section>
  );
}

function FAQPage({ faqOpen, setFaqOpen }) {
  return (
    <section style={styles.section}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Frequently Asked <span style={styles.heroAccent}>Questions</span></h1>
        <div style={styles.divider} />
      </div>
      <div style={styles.faqList}>
        {faqData.map((item, i) => (
          <div key={i} style={styles.faqItem}>
            <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} style={styles.faqQuestion}>
              <span>{item.q}</span>
              <span style={{ fontSize: 20, color: "#1a4fbb" }}>{faqOpen === i ? "−" : "+"}</span>
            </button>
            {faqOpen === i && <p style={styles.faqAnswer}>{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section style={styles.section}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Contact <span style={styles.heroAccent}>Us</span></h1>
        <div style={styles.divider} />
      </div>
      <div style={styles.contactGrid}>
        <div style={styles.contactInfo}>
          <h2 style={styles.contactSubtitle}>Reach Out</h2>
          <p style={styles.missionText}>Whether you're seeking help, want to volunteer, partner with us, or simply learn more — we'd love to hear from you.</p>
          <div style={styles.contactItems}>
            <a href="mailto:info@masv.org" style={styles.contactItem}>
              <span style={styles.contactIcon}>✉️</span>
              <div>
                <div style={styles.contactLabel}>Email</div>
                <div style={styles.contactValue}>info@masv.org</div>
              </div>
            </a>
            <a href="https://instagram.com/masvinfo" target="_blank" rel="noopener noreferrer" style={styles.contactItem}>
              <span style={styles.contactIcon}>📸</span>
              <div>
                <div style={styles.contactLabel}>Instagram</div>
                <div style={styles.contactValue}>@masvinfo</div>
              </div>
            </a>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>🏢</span>
              <div>
                <div style={styles.contactLabel}>Organization Type</div>
                <div style={styles.contactValue}>501(c)3 Nonprofit</div>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.contactFormWrap}>
          <div style={styles.contactFormCard}>
            <h3 style={{ color: "#fff", marginBottom: 20, fontFamily: "'Georgia', serif", fontSize: 22 }}>Send a Message</h3>
            <input placeholder="Your Name" style={styles.input} />
            <input placeholder="Your Email" type="email" style={styles.input} />
            <select style={styles.input}>
              <option>General Inquiry</option>
              <option>Volunteer</option>
              <option>Partnership</option>
              <option>Get Help</option>
              <option>Donate</option>
            </select>
            <textarea placeholder="Your Message" rows={5} style={{ ...styles.input, resize: "vertical" }} />
            <a href="mailto:info@masv.org" style={{ ...styles.heroBtnPrimary, display: "inline-block", textAlign: "center", width: "100%", boxSizing: "border-box" }}>
              Send via Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DonatePage() {
  return (
    <section style={styles.section}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Make a <span style={styles.heroAccent}>Donation</span></h1>
        <div style={styles.divider} />
      </div>
      <div style={styles.donateLayout}>
        <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center" }}>
          <p style={styles.missionText}>
            Every contribution to MASV directly funds youth camps, athlete volunteer programs, breakout sessions, and safe-haven resources for young men who need them most. MASV is a registered 501(c)3 — your donation may be tax-deductible.
          </p>
          <div style={styles.donateAmounts}>
            {["$25", "$50", "$100", "$250", "$500", "Other"].map(a => (
              <div key={a} style={styles.donateAmount}>{a}</div>
            ))}
          </div>
          <a href="mailto:info@masv.org?subject=Donation%20Inquiry" style={{ ...styles.heroBtnPrimary, display: "inline-block", marginTop: 24, fontSize: 18, padding: "16px 48px" }}>
            Donate Now
          </a>
          <p style={{ color: "#888", marginTop: 16, fontSize: 13 }}>
            To donate, please contact us at <a href="mailto:info@masv.org" style={{ color: "#1a4fbb" }}>info@masv.org</a>. Online payment processing coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  root: { fontFamily: "'Georgia', 'Times New Roman', serif", background: "#0a0a0a", color: "#f0ece4", minHeight: "100vh" },
  nav: { position: "sticky", top: 0, zIndex: 100, background: "rgba(10,10,10,0.97)", borderBottom: "1px solid #1e1e1e", backdropFilter: "blur(12px)" },
  navInner: { maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 },
  logo: { background: "none", border: "none", cursor: "pointer", fontSize: 26, fontWeight: 900, color: "#f0ece4", letterSpacing: 3, fontFamily: "'Georgia', serif" },
  logoAccent: { color: "#1a4fbb" },
  navLinks: { display: "flex", gap: 4, alignItems: "center", flexWrap: "wrap" },
  navLink: { background: "none", border: "none", color: "#aaa", cursor: "pointer", fontSize: 12, letterSpacing: 1, textTransform: "uppercase", padding: "6px 10px", transition: "color 0.2s", fontFamily: "'Georgia', serif" },
  navLinkActive: { color: "#1a4fbb" },
  donateBtn: { background: "#1a4fbb", color: "#fff", border: "none", borderRadius: 4, padding: "9px 20px", cursor: "pointer", fontWeight: 700, fontSize: 13, letterSpacing: 1, fontFamily: "'Georgia', serif", textDecoration: "none" },
  hamburger: { display: "block", background: "none", border: "none", color: "#f0ece4", cursor: "pointer" },
  mobileMenu: { padding: "12px 24px 20px", borderTop: "1px solid #1e1e1e", display: "flex", flexDirection: "column", gap: 4 },
  mobileLink: { background: "none", border: "none", color: "#ccc", cursor: "pointer", padding: "10px 0", fontSize: 15, textAlign: "left", fontFamily: "'Georgia', serif" },
  main: { minHeight: "calc(100vh - 64px)" },
  hero: { position: "relative", minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #0a0a0a 0%, #030d1a 40%, #0d0d0d 100%)", overflow: "hidden" },
  heroOverlay: { position: "absolute", inset: 0, background: "radial-gradient(ellipse at 60% 50%, rgba(26,79,187,0.12) 0%, transparent 70%)", pointerEvents: "none" },
  heroContent: { position: "relative", textAlign: "center", padding: "0 24px", maxWidth: 800 },
  heroEyebrow: { color: "#1a4fbb", letterSpacing: 4, textTransform: "uppercase", fontSize: 13, marginBottom: 16 },
  heroTitle: { fontSize: "clamp(42px, 8vw, 88px)", fontWeight: 900, lineHeight: 1.05, margin: "0 0 24px", color: "#f0ece4" },
  heroAccent: { color: "#1a4fbb" },
  heroSub: { fontSize: 18, color: "#aaa", lineHeight: 1.7, marginBottom: 40, maxWidth: 600, margin: "0 auto 40px" },
  heroBtns: { display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" },
  heroBtnPrimary: { background: "#1a4fbb", color: "#fff", border: "none", borderRadius: 4, padding: "14px 36px", cursor: "pointer", fontWeight: 700, fontSize: 15, letterSpacing: 1, fontFamily: "'Georgia', serif", textDecoration: "none", display: "inline-block" },
  heroBtnSecondary: { background: "transparent", color: "#f0ece4", border: "2px solid #444", borderRadius: 4, padding: "12px 34px", cursor: "pointer", fontWeight: 700, fontSize: 15, letterSpacing: 1, fontFamily: "'Georgia', serif" },
  statsBar: { display: "flex", flexWrap: "wrap", background: "#111", borderTop: "1px solid #1e1e1e", borderBottom: "1px solid #1e1e1e" },
  statItem: { flex: "1 1 200px", padding: "32px 24px", textAlign: "center", borderRight: "1px solid #1e1e1e" },
  statNum: { display: "block", fontSize: 36, fontWeight: 900, color: "#1a4fbb", fontFamily: "'Georgia', serif" },
  statLabel: { display: "block", color: "#888", fontSize: 13, marginTop: 6, letterSpacing: 0.5 },
  section: { maxWidth: 1200, margin: "0 auto", padding: "80px 24px" },
  sectionTitle: { textAlign: "center", fontSize: 36, fontWeight: 900, marginBottom: 48, color: "#f0ece4" },
  cardGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 },
  card: { background: "#111", border: "1px solid #1e1e1e", borderRadius: 8, padding: 32, transition: "border-color 0.2s" },
  cardIcon: { fontSize: 36, marginBottom: 16 },
  cardTitle: { fontSize: 20, fontWeight: 700, color: "#f0ece4", marginBottom: 10 },
  cardDesc: { color: "#888", lineHeight: 1.7, fontSize: 14 },
  igSection: { background: "#111", borderTop: "1px solid #1e1e1e", borderBottom: "1px solid #1e1e1e", padding: "24px", textAlign: "center" },
  igCallout: { display: "inline-flex", alignItems: "center", color: "#1a4fbb", textDecoration: "none", fontSize: 16 },
  igBtn: { display: "inline-flex", alignItems: "center", background: "linear-gradient(45deg,#1a4fbb,#3a7bd5,#5b9bd5)", color: "#fff", border: "none", borderRadius: 4, padding: "10px 20px", cursor: "pointer", fontWeight: 700, fontSize: 14, textDecoration: "none", marginTop: 12 },
  ctaSection: { background: "linear-gradient(135deg, #030d1a, #0a0a0a)", textAlign: "center", padding: "80px 24px", borderTop: "1px solid #1e1e1e" },
  ctaTitle: { fontSize: 40, fontWeight: 900, marginBottom: 16, color: "#f0ece4" },
  ctaSub: { color: "#888", fontSize: 16, maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7 },
  pageHeader: { textAlign: "center", marginBottom: 48 },
  pageTitle: { fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "#f0ece4", marginBottom: 12 },
  divider: { width: 60, height: 4, background: "#1a4fbb", margin: "0 auto" },
  missionBlock: { maxWidth: 860, margin: "0 auto" },
  missionText: { fontSize: 17, lineHeight: 1.85, color: "#bbb", marginBottom: 24 },
  missionSubtitle: { fontSize: 28, fontWeight: 800, color: "#f0ece4", margin: "48px 0 28px" },
  pillarsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 },
  pillar: { background: "#111", border: "1px solid #1e1e1e", borderRadius: 8, padding: 28, display: "flex", gap: 20 },
  pillarNum: { fontSize: 42, fontWeight: 900, color: "#1a4fbb", lineHeight: 1, minWidth: 56 },
  pillarTitle: { fontSize: 18, fontWeight: 700, color: "#f0ece4", marginBottom: 8 },
  pillarDesc: { color: "#888", fontSize: 14, lineHeight: 1.65 },
  planGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24, marginTop: 32 },
  planCard: { background: "#111", border: "1px solid #1e1e1e", borderRadius: 8, padding: 28, textAlign: "center" },
  planIcon: { fontSize: 40, marginBottom: 14 },
  planCardTitle: { fontSize: 18, fontWeight: 700, color: "#f0ece4", marginBottom: 10 },
  comingSoon: { textAlign: "center", padding: "60px 24px", maxWidth: 600, margin: "0 auto" },
  comingSoonIcon: { fontSize: 56, marginBottom: 20 },
  comingSoonTitle: { fontSize: 28, fontWeight: 800, color: "#f0ece4", marginBottom: 16 },
  comingSoonText: { color: "#888", lineHeight: 1.8, marginBottom: 32, fontSize: 16 },
  founderLayout: { display: "flex", gap: 48, flexWrap: "wrap", alignItems: "flex-start", maxWidth: 960, margin: "0 auto" },
  founderPhotoWrap: { flex: "0 0 280px", textAlign: "center" },
  founderPhoto: { width: "100%", maxWidth: 280, borderRadius: 12, border: "3px solid #1a4fbb", display: "block" },
  founderBadge: { background: "#1a4fbb", color: "#fff", padding: "8px 16px", borderRadius: 4, fontSize: 13, fontWeight: 700, marginTop: 16, display: "inline-block" },
  founderBio: { flex: 1, minWidth: 280 },
  founderName: { fontSize: 32, fontWeight: 900, color: "#f0ece4", marginBottom: 20 },
  founderContactBlock: { display: "flex", gap: 16, flexWrap: "wrap", marginTop: 28 },
  resourcesIntro: { textAlign: "center", color: "#aaa", fontSize: 16, maxWidth: 700, margin: "0 auto 48px", lineHeight: 1.7 },
  resourceGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 },
  resourceCard: { background: "#111", border: "1px solid #1e1e1e", borderRadius: 8, padding: 28, textDecoration: "none", display: "block", transition: "border-color 0.2s" },
  resourceName: { fontSize: 18, fontWeight: 700, color: "#f0ece4", marginBottom: 8 },
  resourceDesc: { color: "#888", fontSize: 14, lineHeight: 1.65, marginBottom: 12 },
  resourceLink: { color: "#1a4fbb", fontWeight: 700, fontSize: 13 },
  crisisBar: { background: "#030d1a", border: "1px solid #1a4fbb44", borderRadius: 8, padding: "20px 28px", textAlign: "center", color: "#ddd", marginTop: 40, lineHeight: 1.7 },
  faqList: { maxWidth: 760, margin: "0 auto" },
  faqItem: { border: "1px solid #1e1e1e", borderRadius: 8, marginBottom: 12, overflow: "hidden" },
  faqQuestion: { width: "100%", background: "#111", border: "none", color: "#f0ece4", padding: "20px 24px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 16, fontFamily: "'Georgia', serif", textAlign: "left", gap: 16 },
  faqAnswer: { background: "#0d0d0d", padding: "16px 24px", color: "#999", lineHeight: 1.75, fontSize: 15, margin: 0 },
  contactGrid: { display: "flex", gap: 48, flexWrap: "wrap", maxWidth: 1000, margin: "0 auto" },
  contactInfo: { flex: 1, minWidth: 280 },
  contactSubtitle: { fontSize: 26, fontWeight: 800, color: "#f0ece4", marginBottom: 16 },
  contactItems: { display: "flex", flexDirection: "column", gap: 20, marginTop: 32 },
  contactItem: { display: "flex", gap: 16, alignItems: "center", textDecoration: "none", color: "#f0ece4" },
  contactIcon: { fontSize: 28 },
  contactLabel: { color: "#888", fontSize: 12, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 },
  contactValue: { color: "#f0ece4", fontSize: 16, fontWeight: 600 },
  contactFormWrap: { flex: 1, minWidth: 280 },
  contactFormCard: { background: "#111", border: "1px solid #1e1e1e", borderRadius: 12, padding: 32 },
  input: { display: "block", width: "100%", background: "#0d0d0d", border: "1px solid #2a2a2a", borderRadius: 6, color: "#f0ece4", padding: "12px 16px", marginBottom: 14, fontSize: 14, fontFamily: "'Georgia', serif", boxSizing: "border-box", outline: "none" },
  donateLayout: { maxWidth: 700, margin: "0 auto", textAlign: "center" },
  donateAmounts: { display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 32 },
  donateAmount: { background: "#111", border: "2px solid #2a2a2a", borderRadius: 8, padding: "16px 24px", fontSize: 22, fontWeight: 800, color: "#f0ece4", cursor: "pointer", minWidth: 90, textAlign: "center" },
  footer: { background: "#060606", borderTop: "1px solid #1a1a1a" },
  footerInner: { maxWidth: 1200, margin: "0 auto", padding: "60px 24px 40px", display: "flex", gap: 48, flexWrap: "wrap", justifyContent: "space-between" },
  footerLogo: { minWidth: 160 },
  footerTagline: { color: "#888", fontSize: 14, marginTop: 8, marginBottom: 4 },
  footerSub: { color: "#555", fontSize: 12 },
  footerLinks: { display: "flex", flexDirection: "column", gap: 8 },
  footerLink: { background: "none", border: "none", color: "#666", cursor: "pointer", textAlign: "left", fontSize: 13, fontFamily: "'Georgia', serif", padding: 0, letterSpacing: 0.5 },
  footerContact: { display: "flex", flexDirection: "column", alignItems: "flex-start" },
  footerEmail: { color: "#1a4fbb", textDecoration: "none", fontSize: 14, marginBottom: 8 },
  footerBottom: { borderTop: "1px solid #1a1a1a", padding: "20px 24px", textAlign: "center", color: "#444", fontSize: 12 },
};
