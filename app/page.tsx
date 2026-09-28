"use client";

import { useEffect, useRef, useState } from "react";

const classes = [
  {
    time: "06:00",
    period: "AM",
    name: "IRON HOUR",
    type: "Strength",
    coach: "Marcus Vale",
    level: "ALL LEVELS",
    spots: 4,
  },
  {
    time: "07:30",
    period: "AM",
    name: "ENGINE ROOM",
    type: "Conditioning",
    coach: "Nova Reyes",
    level: "INTERMEDIATE",
    spots: 7,
  },
  {
    time: "09:00",
    period: "AM",
    name: "FOUNDATION",
    type: "Strength",
    coach: "Drew Carter",
    level: "BEGINNER",
    spots: 8,
  },
  {
    time: "05:30",
    period: "PM",
    name: "POWER HOUR",
    type: "Performance",
    coach: "Marcus Vale",
    level: "INTERMEDIATE",
    spots: 3,
  },
  {
    time: "07:00",
    period: "PM",
    name: "THE GRIND",
    type: "Hybrid",
    coach: "Nova Reyes",
    level: "ALL LEVELS",
    spots: 5,
  },
  {
    time: "08:30",
    period: "PM",
    name: "LAST ROUND",
    type: "Conditioning",
    coach: "Drew Carter",
    level: "ADVANCED",
    spots: 6,
  },
];

const coaches = [
  {
    number: "01",
    name: "MARCUS VALE",
    role: "STRENGTH / POWER",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    name: "NOVA REYES",
    role: "CONDITIONING / ENGINE",
    image:
      "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    name: "DREW CARTER",
    role: "ATHLETIC / HYBRID",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
  },
];

const benefits = [
  "Unlimited gym access",
  "All group training sessions",
  "Personalized onboarding",
  "Coach support",
  "Recovery zone access",
];

export default function BlackboxPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<
    (typeof classes)[number] | null
  >(null);
  const [booked, setBooked] = useState(false);
  const [activeCoach, setActiveCoach] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const coachImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCoach((current) => (current + 1) % coaches.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <main className="blackbox">
      <div className="grain" />

      {/* NAVIGATION */}
      <nav className={`nav ${scrolled ? "navScrolled" : ""}`}>
        <button className="logo" onClick={() => scrollTo("home")}>
          <span className="logoMark">
            <i />
            <i />
            <i />
          </span>
          BLACKBOX
        </button>

        <div className={`navLinks ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollTo("training")}>TRAINING</button>
          <button onClick={() => scrollTo("coaches")}>COACHES</button>
          <button onClick={() => scrollTo("schedule")}>SCHEDULE</button>
          <button onClick={() => scrollTo("membership")}>MEMBERSHIP</button>
        </div>

        <button
          className="navCta"
          onClick={() => scrollTo("membership")}
        >
          JOIN BLACKBOX <span>↗</span>
        </button>

        <button
          className={`menuButton ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="heroLeft">
          <div className="eyebrow">
            <span className="liveDot" />
            PRIVATE TRAINING STUDIO · EST. 2018
          </div>

          <h1>
            TRAIN
            <br />
            <span>HARD.</span>
            <br />
            LIVE
            <br />
            <em>BETTER.</em>
          </h1>

          <p className="heroText">
            Strength. Conditioning. Performance.
            <br />
            Everything you need to become harder to break.
          </p>

          <div className="heroActions">
            <button
              className="primaryButton"
              onClick={() => scrollTo("schedule")}
            >
              VIEW TRAINING <span>↗</span>
            </button>

            <button
              className="secondaryButton"
              onClick={() => scrollTo("membership")}
            >
              START YOUR MEMBERSHIP
            </button>
          </div>

          <div className="heroBottomInfo">
            <div>
              <strong>06:00</strong>
              <span>FIRST SESSION</span>
            </div>
            <div>
              <strong>22:00</strong>
              <span>LAST SESSION</span>
            </div>
            <div>
              <strong>7 DAYS</strong>
              <span>OPEN EVERY WEEK</span>
            </div>
          </div>
        </div>

        <div className="heroRight">
          <div className="heroImageWrap">
            <div className="imageCounter">
              <span>BLACKBOX / 001</span>
              <span>TRAINING FLOOR</span>
            </div>

            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90"
              alt="Blackbox training floor"
              className="heroImage"
            />

            <div className="heroImageOverlay" />

            <div className="heroFloatingCard">
              <span className="smallLabel">TODAY</span>
              <strong>18 SESSIONS</strong>
              <span>BOOK YOUR SPOT →</span>
            </div>

            <div className="verticalText">
              BUILT FOR PEOPLE WHO SHOW UP
            </div>
          </div>

          <div className="heroScroll">
            <span>SCROLL TO EXPLORE</span>
            <i />
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="introStrip">
        <div className="stripItem">
          <span>01</span>
          <strong>NO EGOS</strong>
        </div>

        <div className="stripItem">
          <span>02</span>
          <strong>NO SHORTCUTS</strong>
        </div>

        <div className="stripItem">
          <span>03</span>
          <strong>REAL PROGRESS</strong>
        </div>

        <div className="stripItem">
          <span>04</span>
          <strong>GOOD ENERGY</strong>
        </div>
      </section>

      {/* TRAINING */}
      <section className="trainingSection" id="training">
        <div className="sectionTop reveal">
          <div>
            <span className="sectionNumber">01 / TRAINING</span>
            <h2>
              TRAINING
              <br />
              THAT <span>WORKS.</span>
            </h2>
          </div>

          <p>
            No complicated systems. No random workouts.
            Every session is designed around strength,
            conditioning and long-term performance.
          </p>
        </div>

        <div className="trainingGrid reveal">
          <div className="trainingCard large">
            <div className="cardNumber">01</div>
            <div className="trainingCardContent">
              <span>01 — STRENGTH</span>
              <h3>GET STRONGER.</h3>
              <p>
                Build real strength through progressive
                training and intelligent programming.
              </p>
            </div>
            <span className="cardArrow">↗</span>
          </div>

          <div className="trainingCard">
            <div className="cardNumber">02</div>
            <div className="trainingCardContent">
              <span>02 — CONDITIONING</span>
              <h3>BUILD ENGINE.</h3>
              <p>
                Improve stamina, movement and work capacity.
              </p>
            </div>
            <span className="cardArrow">↗</span>
          </div>

          <div className="trainingCard accent">
            <div className="cardNumber">03</div>
            <div className="trainingCardContent">
              <span>03 — PERFORMANCE</span>
              <h3>MOVE BETTER.</h3>
              <p>
                Athletic training for people who want
                more from their bodies.
              </p>
            </div>
            <span className="cardArrow">↗</span>
          </div>
        </div>
      </section>

      {/* COACHES */}
      <section className="coachesSection" id="coaches">
        <div className="coachHeading reveal">
          <div>
            <span className="sectionNumber">02 / THE TEAM</span>
            <h2>
              COACHES<span>.</span>
            </h2>
          </div>

          <p>
            Experienced coaches. Personal attention.
            A training floor where everybody knows your name.
          </p>
        </div>

        <div className="coachExperience reveal">
          <div className="coachImageBox" ref={coachImageRef}>
            {coaches.map((coach, index) => (
              <img
                key={coach.name}
                src={coach.image}
                alt={coach.name}
                className={`coachImage ${
                  index === activeCoach ? "active" : ""
                }`}
              />
            ))}

            <div className="coachImageShade" />

            <div className="coachImageLabel">
              <span>BLACKBOX COACHING</span>
              <strong>03</strong>
            </div>
          </div>

          <div className="coachDetails">
            <div className="coachTop">
              <span>COACH PROFILE</span>
              <span>0{activeCoach + 1} / 03</span>
            </div>

            <div className="coachMain">
              <span className="coachIndex">
                {coaches[activeCoach].number}
              </span>

              <h3>{coaches[activeCoach].name}</h3>

              <p>{coaches[activeCoach].role}</p>

              <div className="coachLine" />

              <p className="coachDescription">
                Training should be challenging, but it should
                also make sense. Our coaches focus on technique,
                consistency and measurable progress.
              </p>

              <button
                className="coachButton"
                onClick={() => scrollTo("schedule")}
              >
                TRAIN WITH {coaches[activeCoach].name.split(" ")[0]}
                <span>↗</span>
              </button>
            </div>

            <div className="coachSelectors">
              {coaches.map((coach, index) => (
                <button
                  key={coach.name}
                  className={index === activeCoach ? "selected" : ""}
                  onClick={() => setActiveCoach(index)}
                >
                  <span>0{index + 1}</span>
                  <strong>{coach.name}</strong>
                  <i>↗</i>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="scheduleSection" id="schedule">
        <div className="scheduleHeader reveal">
          <div>
            <span className="sectionNumber">03 / THIS WEEK</span>
            <h2>
              FIND YOUR
              <br />
              <span>SESSION.</span>
            </h2>
          </div>

          <div className="scheduleMeta">
            <span>MON — SAT</span>
            <strong>06:00 — 22:00</strong>
          </div>
        </div>

        <div className="scheduleList reveal">
          {classes.map((item, index) => (
            <button
              className="classRow"
              key={`${item.name}-${index}`}
              onClick={() => {
                setSelectedClass(item);
                setBooked(false);
              }}
            >
              <div className="classTime">
                <strong>{item.time}</strong>
                <span>{item.period}</span>
              </div>

              <div className="className">
                <strong>{item.name}</strong>
                <span>{item.type}</span>
              </div>

              <div className="classCoach">
                <span>COACH</span>
                <strong>{item.coach}</strong>
              </div>

              <div className="classLevel">
                <span>{item.level}</span>
              </div>

              <div className="classSpots">
                <span>{item.spots}</span>
                <small>SPOTS</small>
              </div>

              <div className="classArrow">↗</div>
            </button>
          ))}
        </div>

        <div className="scheduleNote">
          <span>+</span>
          <p>
            First session? <strong>No problem.</strong> Every
            new member starts with a simple onboarding session.
          </p>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="membershipSection" id="membership">
        <div className="membershipVisual reveal">
          <div className="membershipImage">
            <img
              src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1400&q=85"
              alt="Training at Blackbox"
            />
          </div>

          <div className="membershipStamp">
            <span>BLACKBOX</span>
            <strong>MEMBERS</strong>
            <span>ONLY</span>
          </div>
        </div>

        <div className="membershipContent reveal">
          <span className="sectionNumber">04 / MEMBERSHIP</span>

          <h2>
            SHOW UP.
            <br />
            <span>WE'LL HANDLE</span>
            <br />
            THE REST.
          </h2>

          <p className="membershipIntro">
            One membership. Full access. Everything you need
            to build a stronger body and a better routine.
          </p>

          <div className="price">
            <span>FROM</span>
            <strong>₹2,499</strong>
            <small>/ MONTH</small>
          </div>

          <div className="benefitList">
            {benefits.map((benefit, index) => (
              <div key={benefit}>
                <span>0{index + 1}</span>
                <p>{benefit}</p>
                <i>✓</i>
              </div>
            ))}
          </div>

          <button className="membershipButton">
            START YOUR MEMBERSHIP
            <span>↗</span>
          </button>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="finalCta">
        <div className="ctaNumber">05</div>

        <div className="ctaContent">
          <span>READY?</span>
          <h2>
            LET'S
            <br />
            <em>WORK.</em>
          </h2>

          <p>
            Your first session is the hardest one to book.
            After that, just keep showing up.
          </p>

          <button onClick={() => scrollTo("schedule")}>
            BOOK A SESSION <span>↗</span>
          </button>
        </div>

        <div className="ctaSide">
          <span>BLACKBOX TRAINING CLUB</span>
          <strong>EST. 2018</strong>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footerTop">
          <div className="footerBrand">
            <div className="footerLogo">
              <span className="logoMark">
                <i />
                <i />
                <i />
              </span>
              BLACKBOX
            </div>

            <p>
              Strength. Conditioning.
              <br />
              Performance.
            </p>
          </div>

          <div className="footerColumn">
            <span>VISIT</span>
            <p>
              14 Industrial Lane
              <br />
              New Delhi, India
            </p>
          </div>

          <div className="footerColumn">
            <span>CONTACT</span>
            <p>
              hello@blackbox.fit
              <br />
              +91 98765 43210
            </p>
          </div>

          <div className="footerColumn">
            <span>FOLLOW</span>
            <p>
              Instagram ↗
              <br />
              YouTube ↗
            </p>
          </div>
        </div>

        <div className="footerBottom">
          <span>© 2026 BLACKBOX TRAINING CLUB</span>
          <span>BUILT FOR THE COMMITTED.</span>
        </div>
      </footer>

      {/* CLASS MODAL */}
      {selectedClass && (
        <div
          className="modalBackdrop"
          onClick={() => setSelectedClass(null)}
        >
          <div
            className="bookingModal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="closeModal"
              onClick={() => setSelectedClass(null)}
            >
              ×
            </button>

            {!booked ? (
              <>
                <span className="sectionNumber">BOOKING</span>

                <div className="modalTime">
                  <strong>{selectedClass.time}</strong>
                  <span>{selectedClass.period}</span>
                </div>

                <h3>{selectedClass.name}</h3>

                <div className="modalInfo">
                  <div>
                    <span>COACH</span>
                    <strong>{selectedClass.coach}</strong>
                  </div>

                  <div>
                    <span>LEVEL</span>
                    <strong>{selectedClass.level}</strong>
                  </div>

                  <div>
                    <span>AVAILABLE</span>
                    <strong>{selectedClass.spots} SPOTS</strong>
                  </div>
                </div>

                <button
                  className="confirmButton"
                  onClick={() => setBooked(true)}
                >
                  RESERVE MY SPOT <span>↗</span>
                </button>
              </>
            ) : (
              <div className="successState">
                <div className="successIcon">✓</div>
                <span>YOU'RE IN.</span>
                <h3>{selectedClass.name}</h3>
                <p>
                  Your spot has been reserved. See you on the
                  training floor.
                </p>
                <button
                  className="confirmButton"
                  onClick={() => setSelectedClass(null)}
                >
                  DONE
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #11110f;
          color: #f1eee7;
          font-family: Arial, Helvetica, sans-serif;
        }

        button {
          font: inherit;
        }

        .blackbox {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 85% 10%,
              rgba(255, 78, 25, 0.08),
              transparent 25%
            ),
            #11110f;
          position: relative;
        }

        .grain {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E");
        }

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 82px;
          z-index: 90;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 42px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          transition: 0.35s ease;
        }

        .navScrolled {
          background: rgba(17,17,15,0.88);
          backdrop-filter: blur(18px);
          height: 70px;
        }

        .logo,
        .nav button {
          color: inherit;
        }

        .logo {
          border: 0;
          background: none;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: -0.04em;
          cursor: pointer;
        }

        .logoMark {
          width: 23px;
          height: 23px;
          display: flex;
          gap: 3px;
          align-items: flex-end;
        }

        .logoMark i {
          display: block;
          width: 5px;
          background: #ff5a1f;
        }

        .logoMark i:nth-child(1) {
          height: 11px;
        }

        .logoMark i:nth-child(2) {
          height: 18px;
        }

        .logoMark i:nth-child(3) {
          height: 23px;
        }

        .navLinks {
          display: flex;
          gap: 34px;
          align-items: center;
        }

        .navLinks button {
          background: none;
          border: 0;
          color: #aaa79f;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.15em;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .navLinks button:hover {
          color: #ff5a1f;
        }

        .navCta {
          border: 1px solid rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.03);
          color: #f1eee7;
          padding: 13px 17px;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .navCta span {
          margin-left: 14px;
          color: #ff5a1f;
        }

        .navCta:hover {
          background: #ff5a1f;
          border-color: #ff5a1f;
          color: #11110f;
        }

        .navCta:hover span {
          color: #11110f;
        }

        .menuButton {
          display: none;
        }

        .hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 48% 52%;
          padding-top: 82px;
        }

        .heroLeft {
          padding: 85px 50px 55px 7vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-right: 1px solid rgba(255,255,255,0.09);
        }

        .eyebrow {
          color: #8f8d86;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.17em;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 38px;
        }

        .liveDot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff5a1f;
          box-shadow: 0 0 14px rgba(255,90,31,0.8);
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          50% {
            opacity: 0.35;
            transform: scale(0.65);
          }
        }

        .hero h1 {
          font-size: clamp(64px, 8.8vw, 142px);
          line-height: 0.8;
          letter-spacing: -0.075em;
          margin: 0;
          font-weight: 950;
          text-transform: uppercase;
          animation: heroIn 1s cubic-bezier(.2,.8,.2,1) both;
        }

        .hero h1 span {
          color: #ff5a1f;
        }

        .hero h1 em {
          font-style: normal;
          color: transparent;
          -webkit-text-stroke: 1px #f1eee7;
        }

        @keyframes heroIn {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .heroText {
          margin: 42px 0 0;
          color: #99968e;
          line-height: 1.7;
          font-size: 14px;
        }

        .heroActions {
          display: flex;
          gap: 12px;
          margin-top: 34px;
        }

        .primaryButton,
        .secondaryButton {
          padding: 16px 19px;
          cursor: pointer;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.12em;
          transition: 0.3s ease;
        }

        .primaryButton {
          background: #ff5a1f;
          border: 1px solid #ff5a1f;
          color: #11110f;
        }

        .primaryButton:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 35px rgba(255,90,31,0.22);
        }

        .primaryButton span {
          margin-left: 25px;
        }

        .secondaryButton {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: #f1eee7;
        }

        .secondaryButton:hover {
          border-color: #ff5a1f;
          color: #ff5a1f;
        }

        .heroBottomInfo {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 70px;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
        }

        .heroBottomInfo div {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .heroBottomInfo strong {
          font-size: 18px;
        }

        .heroBottomInfo span {
          color: #77756e;
          font-size: 8px;
          letter-spacing: 0.12em;
          font-weight: 800;
        }

        .heroRight {
          position: relative;
          min-height: calc(100vh - 82px);
          padding: 25px;
        }

        .heroImageWrap {
          height: 100%;
          min-height: 700px;
          position: relative;
          overflow: hidden;
          background: #222;
        }

        .heroImage {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(0.8);
          transform: scale(1.02);
          animation: imageIn 1.5s ease both;
        }

        @keyframes imageIn {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1.02);
          }
        }

        .heroImageOverlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(0,0,0,0.45), transparent 35%),
            linear-gradient(0deg, rgba(0,0,0,0.65), transparent 45%),
            linear-gradient(90deg, rgba(0,0,0,0.3), transparent);
        }

        .imageCounter {
          position: absolute;
          z-index: 2;
          top: 25px;
          left: 25px;
          right: 25px;
          display: flex;
          justify-content: space-between;
          font-size: 8px;
          letter-spacing: 0.16em;
          font-weight: 800;
        }

        .heroFloatingCard {
          position: absolute;
          right: 25px;
          bottom: 25px;
          z-index: 4;
          padding: 22px;
          min-width: 175px;
          background: rgba(17,17,15,0.88);
          backdrop-filter: blur(15px);
          border-left: 2px solid #ff5a1f;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .heroFloatingCard .smallLabel {
          color: #ff5a1f;
          font-size: 8px;
          letter-spacing: 0.16em;
        }

        .heroFloatingCard strong {
          font-size: 20px;
        }

        .heroFloatingCard span:last-child {
          color: #8d8b84;
          font-size: 8px;
          letter-spacing: 0.12em;
        }

        .verticalText {
          position: absolute;
          z-index: 3;
          right: 8px;
          top: 50%;
          writing-mode: vertical-rl;
          transform: translateY(-50%);
          font-size: 8px;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.65);
        }

        .heroScroll {
          position: absolute;
          bottom: 25px;
          left: 0;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          display: flex;
          gap: 15px;
          align-items: center;
          color: #77756e;
          font-size: 8px;
          letter-spacing: 0.15em;
        }

        .heroScroll i {
          width: 1px;
          height: 55px;
          background: #ff5a1f;
        }

        .introStrip {
          min-height: 95px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .stripItem {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 0 35px;
          border-right: 1px solid rgba(255,255,255,0.1);
        }

        .stripItem span {
          color: #ff5a1f;
          font-size: 9px;
        }

        .stripItem strong {
          font-size: 11px;
          letter-spacing: 0.12em;
        }

        .trainingSection,
        .coachesSection,
        .scheduleSection,
        .membershipSection {
          padding: 145px 7vw;
        }

        .sectionTop,
        .coachHeading,
        .scheduleHeader {
          display: flex;
          justify-content: space-between;
          gap: 50px;
        }

        .sectionNumber {
          color: #ff5a1f;
          font-size: 9px;
          letter-spacing: 0.17em;
          font-weight: 900;
        }

        .sectionTop h2,
        .coachHeading h2,
        .scheduleHeader h2 {
          font-size: clamp(55px, 7vw, 105px);
          line-height: 0.85;
          letter-spacing: -0.065em;
          margin: 28px 0 0;
        }

        .sectionTop h2 span,
        .scheduleHeader h2 span {
          color: #ff5a1f;
        }

        .sectionTop > p,
        .coachHeading > p {
          max-width: 310px;
          color: #85837d;
          line-height: 1.7;
          font-size: 13px;
          padding-top: 30px;
        }

        .trainingGrid {
          margin-top: 90px;
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr;
          min-height: 430px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .trainingCard {
          position: relative;
          padding: 30px;
          min-height: 430px;
          border-right: 1px solid rgba(255,255,255,0.1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          transition: 0.45s ease;
        }

        .trainingCard:last-child {
          border-right: 0;
        }

        .trainingCard::before {
          content: "";
          position: absolute;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: #ff5a1f;
          filter: blur(100px);
          opacity: 0;
          right: -100px;
          bottom: -100px;
          transition: 0.5s ease;
        }

        .trainingCard:hover::before {
          opacity: 0.2;
        }

        .trainingCard:hover {
          background: #181815;
          transform: translateY(-7px);
        }

        .trainingCard.accent {
          background: #ff5a1f;
          color: #11110f;
        }

        .trainingCard.accent::before {
          display: none;
        }

        .cardNumber {
          font-size: 9px;
          color: #77756e;
        }

        .trainingCard.accent .cardNumber {
          color: rgba(0,0,0,0.5);
        }

        .trainingCardContent span {
          font-size: 8px;
          letter-spacing: 0.15em;
          font-weight: 900;
          color: #ff5a1f;
        }

        .trainingCard.accent .trainingCardContent span {
          color: rgba(0,0,0,0.6);
        }

        .trainingCard h3 {
          font-size: clamp(30px, 3.5vw, 54px);
          letter-spacing: -0.06em;
          line-height: 0.9;
          margin: 15px 0;
        }

        .trainingCard p {
          max-width: 270px;
          color: #85837d;
          font-size: 12px;
          line-height: 1.6;
        }

        .trainingCard.accent p {
          color: rgba(0,0,0,0.65);
        }

        .cardArrow {
          position: absolute;
          right: 30px;
          top: 30px;
          font-size: 22px;
        }

        .coachExperience {
          margin-top: 80px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          min-height: 650px;
        }

        .coachImageBox {
          position: relative;
          overflow: hidden;
          background: #20201d;
        }

        .coachImage {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1);
          opacity: 0;
          transform: scale(1.08);
          transition:
            opacity 0.7s ease,
            transform 1.1s cubic-bezier(.2,.8,.2,1),
            filter 0.7s ease;
        }

        .coachImage.active {
          opacity: 1;
          transform: scale(1);
          filter: grayscale(0.15);
        }

        .coachImageShade {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(0,0,0,0.1), transparent 40%),
            linear-gradient(0deg, rgba(0,0,0,0.8), transparent 50%);
        }

        .coachImageLabel {
          position: absolute;
          left: 30px;
          right: 30px;
          bottom: 28px;
          display: flex;
          justify-content: space-between;
          align-items: end;
        }

        .coachImageLabel span {
          font-size: 8px;
          letter-spacing: 0.18em;
        }

        .coachImageLabel strong {
          font-size: 70px;
          line-height: 0.7;
          color: #ff5a1f;
        }

        .coachDetails {
          background: #e9e5db;
          color: #11110f;
          padding: 42px;
          display: flex;
          flex-direction: column;
        }

        .coachTop {
          display: flex;
          justify-content: space-between;
          font-size: 8px;
          letter-spacing: 0.15em;
          font-weight: 900;
        }

        .coachMain {
          flex: 1;
          padding-top: 60px;
        }

        .coachIndex {
          font-size: 10px;
          color: #ff5a1f;
          font-weight: 900;
        }

        .coachMain h3 {
          font-size: clamp(45px, 5vw, 78px);
          letter-spacing: -0.07em;
          line-height: 0.85;
          margin: 18px 0 10px;
        }

        .coachMain > p {
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.14em;
        }

        .coachLine {
          height: 1px;
          background: rgba(0,0,0,0.15);
          margin: 38px 0 25px;
        }

        .coachMain .coachDescription {
          max-width: 350px;
          color: #65635d;
          font-size: 12px;
          line-height: 1.7;
          font-weight: 400;
          letter-spacing: 0;
        }

        .coachButton {
          margin-top: 30px;
          padding: 15px 17px;
          background: #11110f;
          color: #f1eee7;
          border: 0;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.1em;
          cursor: pointer;
        }

        .coachButton span {
          color: #ff5a1f;
          margin-left: 25px;
        }

        .coachSelectors {
          border-top: 1px solid rgba(0,0,0,0.15);
          margin-top: 30px;
        }

        .coachSelectors button {
          width: 100%;
          display: grid;
          grid-template-columns: 35px 1fr 20px;
          gap: 15px;
          align-items: center;
          padding: 15px 0;
          border: 0;
          border-bottom: 1px solid rgba(0,0,0,0.12);
          background: transparent;
          color: #11110f;
          text-align: left;
          cursor: pointer;
        }

        .coachSelectors button span {
          color: #99968e;
          font-size: 9px;
        }

        .coachSelectors button strong {
          font-size: 10px;
          letter-spacing: 0.08em;
        }

        .coachSelectors button i {
          font-style: normal;
          opacity: 0;
          transition: 0.25s ease;
        }

        .coachSelectors button:hover i,
        .coachSelectors button.selected i {
          opacity: 1;
          color: #ff5a1f;
        }

        .scheduleSection {
          background: #e9e5db;
          color: #11110f;
        }

        .scheduleHeader h2 {
          color: #11110f;
        }

        .scheduleMeta {
          padding-top: 35px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: right;
        }

        .scheduleMeta span {
          color: #ff5a1f;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.16em;
        }

        .scheduleMeta strong {
          font-size: 20px;
          letter-spacing: -0.04em;
        }

        .scheduleList {
          margin-top: 75px;
          border-top: 1px solid rgba(17,17,15,0.25);
        }

        .classRow {
          width: 100%;
          min-height: 105px;
          display: grid;
          grid-template-columns: 0.7fr 1.5fr 1fr 0.8fr 0.6fr 35px;
          gap: 20px;
          align-items: center;
          border: 0;
          border-bottom: 1px solid rgba(17,17,15,0.15);
          background: transparent;
          color: #11110f;
          text-align: left;
          cursor: pointer;
          transition: 0.3s ease;
          padding: 0 10px;
        }

        .classRow:hover {
          background: #11110f;
          color: #f1eee7;
          padding-left: 25px;
          padding-right: 25px;
        }

        .classTime strong {
          font-size: 28px;
          letter-spacing: -0.06em;
        }

        .classTime span {
          color: #77756e;
          font-size: 8px;
          margin-left: 4px;
        }

        .className,
        .classCoach {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .className strong {
          font-size: 14px;
          letter-spacing: 0.03em;
        }

        .className span,
        .classCoach span,
        .classLevel span {
          color: #88857e;
          font-size: 8px;
          letter-spacing: 0.12em;
        }

        .classCoach strong {
          font-size: 10px;
        }

        .classSpots {
          display: flex;
          flex-direction: column;
        }

        .classSpots span {
          font-size: 20px;
          color: #ff5a1f;
          font-weight: 900;
        }

        .classSpots small {
          color: #88857e;
          font-size: 7px;
        }

        .classArrow {
          font-size: 18px;
          color: #ff5a1f;
        }

        .scheduleNote {
          margin-top: 40px;
          display: flex;
          align-items: center;
          gap: 15px;
          color: #65635d;
        }

        .scheduleNote > span {
          color: #ff5a1f;
          font-size: 22px;
        }

        .scheduleNote p {
          font-size: 11px;
        }

        .membershipSection {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }

        .membershipVisual {
          position: relative;
        }

        .membershipImage {
          height: 700px;
          overflow: hidden;
        }

        .membershipImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(0.65);
          transition: 0.8s ease;
        }

        .membershipVisual:hover .membershipImage img {
          filter: grayscale(0);
          transform: scale(1.04);
        }

        .membershipStamp {
          position: absolute;
          right: -30px;
          bottom: 50px;
          width: 145px;
          height: 145px;
          border-radius: 50%;
          background: #ff5a1f;
          color: #11110f;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          transform: rotate(-12deg);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
        }

        .membershipStamp span {
          font-size: 7px;
          letter-spacing: 0.14em;
        }

        .membershipStamp strong {
          font-size: 21px;
          margin: 5px 0;
        }

        .membershipContent h2 {
          font-size: clamp(50px, 6vw, 90px);
          line-height: 0.85;
          letter-spacing: -0.07em;
          margin: 30px 0;
        }

        .membershipContent h2 span {
          color: #ff5a1f;
        }

        .membershipIntro {
          max-width: 420px;
          color: #85837d;
          font-size: 13px;
          line-height: 1.7;
        }

        .price {
          margin: 42px 0 30px;
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .price span,
        .price small {
          color: #77756e;
          font-size: 8px;
          letter-spacing: 0.12em;
          font-weight: 900;
        }

        .price strong {
          font-size: 52px;
          letter-spacing: -0.06em;
        }

        .benefitList {
          border-top: 1px solid rgba(255,255,255,0.12);
        }

        .benefitList div {
          display: grid;
          grid-template-columns: 35px 1fr 20px;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.12);
          padding: 14px 0;
        }

        .benefitList span {
          color: #ff5a1f;
          font-size: 8px;
        }

        .benefitList p {
          margin: 0;
          font-size: 11px;
          color: #b3b0a8;
        }

        .benefitList i {
          font-style: normal;
          color: #ff5a1f;
        }

        .membershipButton {
          margin-top: 35px;
          width: 100%;
          border: 0;
          background: #ff5a1f;
          color: #11110f;
          padding: 19px;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.13em;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .membershipButton:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(255,90,31,0.2);
        }

        .membershipButton span {
          margin-left: 30px;
        }

        .finalCta {
          min-height: 650px;
          padding: 100px 7vw;
          position: relative;
          overflow: hidden;
          background: #ff5a1f;
          color: #11110f;
          display: flex;
          align-items: center;
        }

        .ctaNumber {
          position: absolute;
          top: 45px;
          left: 7vw;
          font-size: 9px;
          font-weight: 900;
        }

        .ctaContent {
          margin-left: 18%;
        }

        .ctaContent > span {
          font-size: 9px;
          letter-spacing: 0.18em;
          font-weight: 900;
        }

        .ctaContent h2 {
          font-size: clamp(100px, 14vw, 220px);
          line-height: 0.7;
          letter-spacing: -0.09em;
          margin: 40px 0;
        }

        .ctaContent h2 em {
          font-style: normal;
          color: transparent;
          -webkit-text-stroke: 2px #11110f;
        }

        .ctaContent p {
          max-width: 380px;
          font-size: 13px;
          line-height: 1.6;
        }

        .ctaContent button {
          margin-top: 30px;
          background: #11110f;
          color: #f1eee7;
          border: 0;
          padding: 18px 22px;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.12em;
          cursor: pointer;
        }

        .ctaContent button span {
          color: #ff5a1f;
          margin-left: 30px;
        }

        .ctaSide {
          position: absolute;
          right: 7vw;
          bottom: 50px;
          display: flex;
          flex-direction: column;
          text-align: right;
          gap: 7px;
          font-size: 8px;
          letter-spacing: 0.15em;
        }

        footer {
          padding: 75px 7vw 25px;
        }

        .footerTop {
          display: grid;
          grid-template-columns: 2fr repeat(3, 1fr);
          gap: 40px;
          padding-bottom: 70px;
        }

        .footerLogo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          font-weight: 900;
        }

        .footerBrand p {
          color: #77756e;
          font-size: 11px;
          line-height: 1.6;
          margin-top: 20px;
        }

        .footerColumn span {
          color: #ff5a1f;
          font-size: 8px;
          letter-spacing: 0.15em;
          font-weight: 900;
        }

        .footerColumn p {
          color: #9b9992;
          font-size: 11px;
          line-height: 1.8;
        }

        .footerBottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          color: #55534f;
          font-size: 8px;
          letter-spacing: 0.12em;
        }

        .modalBackdrop {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.25s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .bookingModal {
          width: min(520px, 100%);
          background: #e9e5db;
          color: #11110f;
          padding: 45px;
          position: relative;
          animation: modalIn 0.35s cubic-bezier(.2,.8,.2,1);
        }

        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .closeModal {
          position: absolute;
          right: 20px;
          top: 18px;
          border: 0;
          background: none;
          font-size: 27px;
          cursor: pointer;
        }

        .modalTime {
          display: flex;
          align-items: baseline;
          gap: 5px;
          margin-top: 45px;
        }

        .modalTime strong {
          font-size: 65px;
          line-height: 0.8;
          letter-spacing: -0.07em;
        }

        .modalTime span {
          color: #ff5a1f;
          font-size: 10px;
          font-weight: 900;
        }

        .bookingModal h3 {
          font-size: 43px;
          letter-spacing: -0.06em;
          margin: 25px 0;
        }

        .modalInfo {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(17,17,15,0.18);
          border-bottom: 1px solid rgba(17,17,15,0.18);
          padding: 20px 0;
          gap: 15px;
        }

        .modalInfo div {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .modalInfo span {
          color: #77756e;
          font-size: 7px;
          letter-spacing: 0.12em;
        }

        .modalInfo strong {
          font-size: 9px;
        }

        .confirmButton {
          width: 100%;
          margin-top: 30px;
          border: 0;
          background: #11110f;
          color: #f1eee7;
          padding: 18px;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.12em;
          cursor: pointer;
        }

        .confirmButton span {
          color: #ff5a1f;
          margin-left: 20px;
        }

        .successState {
          text-align: center;
          padding: 40px 0 10px;
        }

        .successIcon {
          width: 60px;
          height: 60px;
          margin: 0 auto 25px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #ff5a1f;
          font-size: 25px;
        }

        .successState > span {
          font-size: 9px;
          letter-spacing: 0.15em;
          font-weight: 900;
          color: #ff5a1f;
        }

        .successState h3 {
          margin: 15px 0;
        }

        .successState p {
          color: #77756e;
          font-size: 12px;
          line-height: 1.6;
        }

        .reveal {
          opacity: 0;
          transform: translateY(35px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1000px) {
          .nav {
            padding: 0 25px;
          }

          .navLinks {
            gap: 17px;
          }

          .hero {
            grid-template-columns: 1fr;
          }

          .heroLeft {
            padding: 120px 25px 60px;
          }

          .heroRight {
            min-height: 600px;
          }

          .heroImageWrap {
            min-height: 600px;
          }

          .introStrip {
            grid-template-columns: repeat(2, 1fr);
          }

          .stripItem {
            min-height: 70px;
          }

          .trainingSection,
          .coachesSection,
          .scheduleSection,
          .membershipSection {
            padding: 100px 25px;
          }

          .trainingGrid {
            grid-template-columns: 1fr;
          }

          .trainingCard {
            min-height: 300px;
            border-right: 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }

          .coachExperience {
            grid-template-columns: 1fr;
          }

          .coachImageBox {
            min-height: 600px;
          }

          .membershipSection {
            grid-template-columns: 1fr;
            gap: 70px;
          }

          .membershipImage {
            height: 550px;
          }

          .ctaContent {
            margin-left: 0;
          }

          .ctaSide {
            right: 25px;
          }
        }

        @media (max-width: 700px) {
          .navLinks {
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background: rgba(17,17,15,0.97);
            backdrop-filter: blur(20px);
            display: none;
            flex-direction: column;
            align-items: flex-start;
            padding: 25px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }

          .navLinks.open {
            display: flex;
          }

          .navLinks button {
            padding: 10px 0;
          }

          .navCta {
            display: none;
          }

          .menuButton {
            display: flex;
            width: 42px;
            height: 42px;
            border: 1px solid rgba(255,255,255,0.2);
            background: transparent;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 5px;
          }

          .menuButton span {
            width: 16px;
            height: 1px;
            background: #f1eee7;
          }

          .hero {
            padding-top: 70px;
          }

          .heroLeft {
            padding: 80px 20px 50px;
          }

          .hero h1 {
            font-size: 19vw;
          }

          .heroActions {
            flex-direction: column;
          }

          .heroBottomInfo {
            margin-top: 50px;
          }

          .heroRight {
            padding: 15px;
          }

          .heroImageWrap {
            min-height: 500px;
          }

          .heroScroll {
            display: none;
          }

          .sectionTop,
          .coachHeading,
          .scheduleHeader {
            flex-direction: column;
          }

          .sectionTop h2,
          .coachHeading h2,
          .scheduleHeader h2 {
            font-size: 18vw;
          }

          .trainingGrid {
            margin-top: 55px;
          }

          .coachImageBox {
            min-height: 450px;
          }

          .coachDetails {
            padding: 30px 22px;
          }

          .coachMain h3 {
            font-size: 15vw;
          }

          .classRow {
            grid-template-columns: 0.7fr 1.5fr 30px;
            gap: 10px;
            min-height: 90px;
          }

          .classCoach,
          .classLevel,
          .classSpots {
            display: none;
          }

          .membershipImage {
            height: 430px;
          }

          .membershipStamp {
            right: 15px;
          }

          .membershipContent h2 {
            font-size: 17vw;
          }

          .finalCta {
            min-height: 600px;
            padding: 90px 25px;
          }

          .ctaNumber {
            left: 25px;
          }

          .ctaContent h2 {
            font-size: 26vw;
          }

          .ctaSide {
            right: 25px;
          }

          .footerTop {
            grid-template-columns: 1fr 1fr;
          }

          .footerBrand {
            grid-column: span 2;
          }

          .footerBottom {
            flex-direction: column;
            gap: 12px;
          }

          .bookingModal {
            padding: 30px 22px;
          }

          .modalInfo {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}