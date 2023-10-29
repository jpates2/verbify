import classes from "./Header.module.css";
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Header() {
  const { scrollY } = useScroll();

  const gradientBackground = useTransform(scrollY, [0, 200, 300, 500], ["linear-gradient(-15deg, #F4442E 49%, #FFB400 49%)", "linear-gradient(-15deg, #F4442E 45%, #FFB400 45%)", "linear-gradient(-15deg, #F4442E 40%, #FFB400 40%)", "linear-gradient(-15deg, #F4442E 40%, #FFB400 40%)"]);
  const yTitle = useTransform(scrollY, [0, 200, 300, 500], ["0%", "24%", "60%", "60%"]);
  const scaleTitle = useTransform(scrollY, [0, 200, 300, 500], [1, 1.2, 1.2, 1.2]);
  const yText = useTransform(scrollY, [0, 200, 300, 500], ["20vh", "40vh", "40vh", "65vh"]);
  const scaleText = useTransform(scrollY, [0, 300], [1, 1.5]);

  return (
    <section id="header">
      <motion.div className={classes["header__container"]}>
        <motion.h2 className={classes["header__title"]} style={{ scale: scaleTitle}}>verbify</motion.h2>
        <motion.div className={classes["header__slogan"]} style={{scale: scaleText, y: yText}}>
          <span>Unlock Spanish fluency, </span>
          <span>verb by verb</span>
        </motion.div>
      </motion.div>
    </section>
  )
}



// export default function Header() {
//   const { scrollY } = useScroll();
//   const [screenSize, setScreenSize] = useState(window.innerWidth)

//   const updateMedia = () => {
//     setScreenSize(window.innerWidth);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", updateMedia);
//     return () => window.removeEventListener("resize", updateMedia);
//   });

//   const gradientBackground = useTransform(scrollY, [0, 200, 300, 500], ["linear-gradient(-15deg, #F4442E 49%, #FFB400 49%)", "linear-gradient(-15deg, #F4442E 45%, #FFB400 45%)", "linear-gradient(-15deg, #F4442E 40%, #FFB400 40%)", "linear-gradient(-15deg, #F4442E 40%, #FFB400 40%)"]);
//   const yTitle = useTransform(scrollY, [0, 200, 300, 500], ["0%", "24%", "60%", "60%"]);
//   const scaleTitle = useTransform(scrollY, [0, 200, 300, 500], [1, 1.2, 1.2, 1.2]);
//   const yText = useTransform(scrollY, [0, 200, 300, 500], ["20vh", "40vh", "40vh", "65vh"]);
//   const scaleText = useTransform(scrollY, [0, 300], [1, 1.5]);

//   const gradientBackgroundMobile = useTransform(scrollY, [0, 200, 300, 500], ["linear-gradient(-15deg, #F4442E 49%, #FFB400 49%)", "linear-gradient(-15deg, #F4442E 45%, #FFB400 45%)", "linear-gradient(-15deg, #F4442E 40%, #FFB400 40%)", "linear-gradient(-15deg, #F4442E 34%, #FFB400 34%)"]);
//   const yTitleMobile = useTransform(scrollY, [0, 200, 300, 500], ["0%", "31%", "74%", "122%"]);
//   const scaleTitleMobile = useTransform(scrollY, [0, 200, 300, 500], [1, 1.2, 1.2, 1.2]);
//   const yTextMobile = useTransform(scrollY, [0, 200, 300, 500], ["20vh", "40vh", "40vh", "60vh"]);
//   const scaleTextMobile = useTransform(scrollY, [0, 300], [1, 1.5]);

//   const colorText = useTransform(scrollY, [0, 200, 300, 500], ["red", "black", "yellow", "blue"]);

//   const mobileContent = (
//     <section id="header">
//         <motion.div className={classes["header__container"]} style={{background: gradientBackgroundMobile}}>
//           <motion.h2 className={classes["header__title"]} style={{y: yTitleMobile, scale: scaleTitleMobile}}>verbify</motion.h2>
//           <motion.p className={classes["header__slogan"]} style={{scale: scaleTextMobile, y: yTextMobile, color: colorText}}><span>Unlock Spanish fluency, </span><span>verb by verb</span></motion.p>
//         </motion.div>
//       </section>
//   )

//   const desktopContent = (
//     <section id="header">
//         <motion.div className={classes["header__container"]}>
//           <motion.h2 className={classes["header__title"]} style={{ scale: scaleTitle}}>verbify</motion.h2>
//           <motion.p className={classes["header__slogan"]} style={{scale: scaleText, y: yText, color: colorText}}><span>Unlock Spanish fluency, </span><span>verb by verb</span></motion.p>
//         </motion.div>
//       </section>
//   )


//   return (
//     <>
//     {desktopContent}
//       {/* {screenSize < 1200 && mobileContent} */}
//       {/* {(screenSize >= 800 && screenSize <= 1200) && desktopContent} */}
//       {/* {screenSize > 1200 && desktopContent} */}
//     </>
//   )
// }
