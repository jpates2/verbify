import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import classes from "./Nav.module.css";
import { useSelector } from 'react-redux';

const navVariant = {
  opened: {
    height: "100vh",
    background: "#FFB400",
    zIndex: 100
  },
  closed: {
    height: "4rem",
    background: "#FFB400",
    zIndex: 30
  }
}

const burgerIconVariant = {
  opened: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  closed: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 1,
      duration: 0.5,
      ease: "easeInOut"
    }
  }
}

const mobileMenuVariant = {
  opened: {
    y: "0%",
    height: "100vh",
    transition: {
      delay: 0.15,
      duration: 1,
      ease: [0.75, 0, 0.2, 1]
    }
  },
  closed: {
    y: "-100%",
    height: 0,
    transition: {
      delay: 0.35,
      duration: 0.5,
      ease: [0.75, 0, 0.5, 1]
    }
  }
}

const closeIconVariant = {
  opened: {
    opacity: 1,
    transition: {
      delay: 1
    }
  },
  closed: { opacity: 0 }
}

const listVariant = {
  opened: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.15
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}

const linkVariant = {
  opened: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.65,
      ease: "easeOut"
    }
  },
  closed: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.25,
      ease: "easeInOut"
    }
  }
}

export default function Nav({ showModal, timerStatus }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const {pathname} = useLocation();
  const userDetails = useSelector(state => state.user);
  const { loggedInStatus } = useSelector(state => state.status);
  console.log(loggedInStatus);

  const mobileClasses = (showModal === true || timerStatus === "end") ? `${classes["mobile-nav"]}` : `${classes["mobile-nav"]} ${classes["mobile-nav-absolute"]}`

  const mobileNav = (
    <motion.nav
      className={mobileClasses}
      initial="closed"
      animate={mobileNavOpen ? "opened" : "closed"}
      variants={navVariant}
    >
      <motion.div variants={burgerIconVariant}>
        {pathname !== "/" &&
          <div className={classes["mobile-nav__logo"]}>
            <Link to="/">
              vb
            </Link>
          </div>
        }

        <div
          className={classes["hamburger"]}
          onClick={() => setMobileNavOpen(true)}
        >
          <span className={classes["hamburger-top"]}></span>
          <span className={classes["hamburger-middle"]}></span>
          <span className={classes["hamburger-bottom"]}></span>
        </div>
      </motion.div>

      <motion.div variants={mobileMenuVariant} className="mobile-navbar_container">
        <motion.div
          variants={closeIconVariant}
          onClick={() => setMobileNavOpen(false)}
          className={classes["mobile-navbar__close"]}
        >
          X
        </motion.div>
        <motion.div variants={listVariant} className={classes["mobile-navbar__links"]}>
          <div className={classes["mobile-navbar__top-links"]}>
            <motion.div variants={linkVariant}>
              <Link to="/verbs" onClick={() => setMobileNavOpen(false)} className={classes["mobile-navbar__link"]}>Verb Library</Link>
            </motion.div>
            <motion.div variants={linkVariant}>
              <Link to="/flashcards" onClick={() => setMobileNavOpen(false)} className={classes["mobile-navbar__link"]}>Flashcards</Link>
            </motion.div>
          </div>
          <div className={classes["mobile-navbar__bottom-links"]}>
            <motion.div variants={linkVariant} className={classes["mobile-navbar__line"]}></motion.div>
            <motion.div variants={linkVariant}>
              {!loggedInStatus && <Link to="/signup" className={classes["mobile-navbar__link"]}>
                <motion.button
                  className={classes["mobile-nav__button"]}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.3
                    }
                  }}
                  whileTap={{
                    scale: 0.9,
                    color: "#FFB400",
                  }}
                >
                  Sign Up
                </motion.button>
              </Link>}
              {loggedInStatus && <Link to={`/profile/${userDetails.username}`} className={classes["mobile-navbar__link"]}>
                <motion.button
                  className={classes["mobile-nav__button"]}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.3
                    }
                  }}
                  whileTap={{
                    scale: 0.9,
                    color: "#FFB400",
                  }}
                >
                  Profile
                </motion.button>
              </Link>}
            </motion.div>
          </div>

        </motion.div>
      </motion.div>
    </motion.nav>
  )

  const desktopNav = (
    <nav className={classes["desktop-nav"]}>
      {pathname !== "/" &&
        <Link to="/">
          <div className={classes["desktop-nav__logo"]}>verbify</div>
        </Link>
      }
      <div className={classes["desktop-nav__container"]}>
        <Link to="/verbs">Verb Library</Link>
        <Link to="/flashcards">Flashcards</Link>
        {!loggedInStatus && <Link to="/signup">
          <motion.button
            className={classes["nav__button"]}
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.3
              }
            }}
            whileTap={{
              scale: 0.9,
              color: "#FFB400",
            }}
          >Sign Up</motion.button>
        </Link>}
        {loggedInStatus && <Link to={`/profile/${userDetails.username}`}>
          <motion.button
            className={classes["nav__button"]}
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.3
              }
            }}
            whileTap={{
              scale: 0.9,
              color: "#FFB400",
            }}
          >Profile</motion.button>
        </Link>}
      </div>
    </nav>
  )

  return (
    <>
      {mobileNav}
      {desktopNav}
    </>
  )
}
