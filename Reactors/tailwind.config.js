/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sideBarBg:
          "radial-gradient(circle, rgba(0,0,0,1) 15%, rgba(37,37,37,1) 85%);",
        "background-image": "url('/src/assets/img/auth/background.jpg')",
        "background-courses":
          "url('/src/assets/img/courses/background-courses.png')",
        basket: "url('/src/assets/img/courses/basket.png')",
        editprofile: "url('/src/assets/img/editProfile/bg.png')",
        logo: "url('/src/assets/logo.png')",
        star: "url('/src/assets/img/news/star.png')",
        starDisable: "url('/src/assets/img/news/starDisable.png')",
      },
      backgroundColor: {
        "smoke-white": "#F7F4F3",
      },
      boxShadow: {
        shadow1:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        sideBarShadow: "1px 2px 10px 1px rgba(0,0,0,0.54);",
      },
      spacing: {
        18: "4.5rem",
        112: "28rem",
        118: "32rem",
        128: "34rem",
        132: "38rem",
        138: "42rem",
        142: "46rem",
        146: "50rem",
        150: "55rem",
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      keyframes: {
        slideInLeft: {
          "0%": {
            transform: "translateX(-1000px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        toTop: {
          "0%": { transform: "translateY(85px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        rollInBlurredLeft: {
          "0%": {
            transform: "translateX(-1000px) rotate(-720deg)",
            filter: "blur(50px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0) rotate(0deg)",
            filter: "blur(0)",
            opacity: 1,
          },
        },
        rollInBlurredRight: {
          "0%": {
            transform: "translateX(1000px) rotate(-720deg)",
            filter: "blur(50px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0) rotate(0deg)",
            filter: "blur(0)",
            opacity: 1,
          },
        },
        puffIn: {
          "0%": {
            transform: "scale(2)",
            filter: "blur(4px)",
            opacity: 0,
          },
          "100%": {
            transform: "scale(1)",
            filter: "blur(0px)",
            opacity: 1,
          },
        },
        scaleIn: {
          "0%": {
            transform: "scale(0)",
            opacity: 1,
          },
          "100%": {
            transform: "scale(1)",
            opacity: 1,
          },
        },
      },
      animation: {
        scaleIn: " scaleIn 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        scaleInFast:
          " scaleIn 0.12s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        scaleOut:
          " scaleIn 0.12s reverse cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        toTop: "toTop 0.8s ease-out forwards  ",
        rollInBlurredLeft:
          "rollInBlurredLeft 0.9s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
        rollInBlurredRight:
          "rollInBlurredRight 0.9s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
        puffIn: "puffIn 0.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;",
        slideInLeft:
          "slideInLeft 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      minHeight: {
        48: "12rem",
      },
      maxHeight: {
        64: "16rem",
      },
    },
  },
  plugins: [],
};
