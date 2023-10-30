import "./index.css";
import { driver, Config } from "driver.js";
import "driver.js/dist/driver.css";

const welcomeToHC = {
  element:
    "html body div#root div.MuiContainer-root.MuiContainer-maxWidthXl.css-141bmmb div.MuiBox-root.css-0 h4.MuiTypography-root.MuiTypography-h4.MuiTypography-alignCenter.css-25t8ob",
  popover: {
    title: "Welcome to HC App",
    description:
      "We hope this app helps you discover your feelings and how they relate to your needs.  Please click next to continue.",
  },
};

const fourSteps = {
  element:
    "html body div#root div.MuiContainer-root.MuiContainer-maxWidthXl.css-141bmmb div.css-1v0xnyz div.MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel.css-1187icl",
  popover: {
    title: "4 steps",
    description: `These are the 4 steps in the app which will help you understand your feelings with respect to your needs.`,
  },
};

const howAreYouStep = {
  element:
    "html body div#root div.MuiContainer-root.MuiContainer-maxWidthXl.css-141bmmb div.css-1v0xnyz div.MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel.css-1187icl div.MuiStep-root.MuiStep-horizontal.MuiStep-alternativeLabel.css-166ciyp span.MuiStepLabel-root.MuiStepLabel-horizontal.MuiStepLabel-alternativeLabel.css-1abj2s5",
  popover: {
    title: "How are you feeling?",
    description: 'This is the first step.  Click "Next" to continue',
  },
};

const thumbsUpOrDown = {
  element:
    "html body div#root div.MuiContainer-root.MuiContainer-maxWidthXl.css-141bmmb div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.css-1jjdl4v div.MuiCardContent-root.css-1qw96cp div.css-1t62lt9",
  popover: {
    title: "Thumbs up or down",
    description:
      "Click on thumbs-up if you're feeling good, positive, happy, excited or any of those uplifting feelings else click on thumbs down.",
  },
};

const nextButtonToSelectFeelings = {
  element:
    "html body.driver-active.driver-fade div#root div.MuiContainer-root.MuiContainer-maxWidthXl.css-141bmmb div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.css-1jjdl4v div.MuiCardActions-root.MuiCardActions-spacing.css-1xf6bf9 div.MuiBox-root.css-1i27l4i button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1xgrsx4:nth-child(2)",
  popover: {
    title: "Go to the next step to select your feelings",
    description:
      "If you have not selected thumbs-up or down; this button will be disabled. If it is enabled, click on it.Then click 'Next' to continue",
  },
};

const feelings = {
  element:
    "html body.driver-active.driver-fade div#root div.MuiContainer-root.MuiContainer-maxWidthXl.css-141bmmb div.css-1v0xnyz div.MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel.css-1187icl div.MuiStep-root.MuiStep-horizontal.MuiStep-alternativeLabel.css-166ciyp:nth-child(2)",
  popover: {
    title: "How are you feeling?",
    description: "this is the second step.  Click next to continue",
  },
};

const feelingsList = {
  element:
    "html body div#root div.MuiContainer-root.MuiContainer-maxWidthXl.css-141bmmb div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.css-1jjdl4v div.MuiCardContent-root.css-1qw96cp div.MuiGrid-root.MuiGrid-container.css-1d3bbye div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.MuiGrid-grid-sm-4.MuiGrid-grid-md-3.MuiGrid-grid-lg-3.MuiGrid-grid-xl-2.css-yd7xg8",
  popover: {
    title: "List of feelings",
    description:
      "You can select one or more feelings that closely matches what you're feeling. Click on this feeling to select it.  Then click the 'Next' button.",
  },
};

const selectOneMoreFeeling = {
  element:
    "html body div#root div.MuiContainer-root.MuiContainer-maxWidthXl.css-141bmmb div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.css-1jjdl4v div.MuiCardContent-root.css-1qw96cp div.MuiGrid-root.MuiGrid-container.css-1d3bbye div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.MuiGrid-grid-sm-4.MuiGrid-grid-md-3.MuiGrid-grid-lg-3.MuiGrid-grid-xl-2.css-yd7xg8:nth-child(6)",
  popover: {
    title: "Select one more feeling",
    description:
      "Click on this feeling to select it too.  Now, you have selected 2 feelings. Click the 'Next' button.",
  },
};

const driverConfig: Config = {
  showProgress: true,
  steps: [
    welcomeToHC,
    fourSteps,
    howAreYouStep,
    thumbsUpOrDown,
    nextButtonToSelectFeelings,
    feelings,
    feelingsList,
    selectOneMoreFeeling,
  ],
};

const driverObj = driver(driverConfig);

driverObj.drive();
