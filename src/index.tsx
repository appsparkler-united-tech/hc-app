import "./index.css";
import { driver, Config, DriveStep } from "driver.js";
import "driver.js/dist/driver.css";

const observeDOM = (function () {
  var MutationObserver = window.MutationObserver;

  return function (
    obj: HTMLElement,
    callback: EventListenerOrEventListenerObject | MutationCallback
  ) {
    if (!obj || obj.nodeType !== 1) return;

    if (MutationObserver) {
      // define a new observer
      var mutationObserver = new MutationObserver(callback as MutationCallback);

      // have the observer observe for changes in children
      mutationObserver.observe(obj, { childList: true, subtree: true });
      return mutationObserver;
    }

    // browser support fallback
    obj.addEventListener(
      "DOMNodeInserted",
      callback as EventListenerOrEventListenerObject,
      false
    );
    obj.addEventListener(
      "DOMNodeRemoved",
      callback as EventListenerOrEventListenerObject,
      false
    );
  };
})();

observeDOM(document.body, () => {
  const tourButton = `<button class="tour-button">🚀 Take Tour</button>`;
  console.log("changed");
  const tourContainer = document.getElementById("tour-button-container");
  if (tourContainer !== null) {
    const likeDislikeSVGs = document.querySelectorAll(".css-6flbmm");
    const handleClickTakeTour: (ev: MouseEvent) => any = () => {
      beginTour();
    };
    tourContainer.removeEventListener("click", handleClickTakeTour);
    if (likeDislikeSVGs.length >= 2) {
      const tourContainerHasInnerHTML = tourContainer.innerHTML !== "";
      if (!tourContainerHasInnerHTML) {
        tourContainer.innerHTML = tourButton;
        tourContainer.addEventListener("click", handleClickTakeTour);
      }
    } else {
      tourContainer.innerHTML = "";
      tourContainer.removeEventListener("click", handleClickTakeTour);
    }
  }
});

const beginTour = () => {
  const welcomeToHC = {
    element:
      "html body div#root div.MuiContainer-root.MuiContainer-maxWidthXl.css-141bmmb div.MuiBox-root.css-0 h4.MuiTypography-root.MuiTypography-h4.MuiTypography-alignCenter.css-25t8ob",
    popover: {
      title: "Welcome to HC App",
      description:
        "We hope this app helps you discover your feelings and how they relate to your needs.  Please click next to continue.  Anytime you feel lost, click on the tour button.",
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

  const nextButtonToSelectNeeds: DriveStep = {
    element:
      "#root > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.css-1jjdl4v > div.MuiCardActions-root.MuiCardActions-spacing.css-1b3ea8l > div > button:nth-child(3)",
    popover: {
      title: "Go to the next step to select your needs",
      description:
        "If you have not selected any feelings; this button will be disabled. If it is enabled, click on it.  Then click 'Next' to continue",
    },
  };

  const needsStepTitle: DriveStep = {
    element: "#root > div > div.css-1v0xnyz > div > div:nth-child(3) > span",
    popover: {
      title: "Needs Step",
      description:
        "In this step, you can select the underlying needs that make you feel the way you do.  This is at the core of <a href='https://en.wikipedia.org/wiki/Nonviolent_Communication'>Non Violent Communication</a> and <a href='https://heartfulness.org/hc/'>Heartful Communication</a> that <strong>we feel the way we do because of our needs</strong>",
    },
  };

  const selectNeed1: DriveStep = {
    element:
      "div.MuiGrid-grid-sm-6:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > label:nth-child(1)",
    popover: {
      title: "Select a need",
      description:
        "Click on this need to select it and then click the 'Next' button.",
    },
  };
  const selectNeed2: DriveStep = {
    element:
      "div.MuiGrid-grid-sm-6:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > label",
    popover: {
      title: "Select another need",
      description:
        "Click on this one too to select it.  Then click the 'Next' button.",
    },
  };

  const nextButtonToCompleteStatement: DriveStep = {
    element:
      "div.MuiCardActions-root:nth-child(1) > div:nth-child(1) > button:nth-child(3)",
    popover: {
      title: "Go to next step",
      description:
        "If you have not selected any needs; this button will be disabled. If it is enabled, click on it.  Then click 'Next' to continue",
    },
  };
  const enterText: DriveStep = {
    element:
      "html body div#root div.MuiContainer-root.MuiContainer-maxWidthXl.css-141bmmb div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.css-1jjdl4v div.MuiCardContent-root.css-1qw96cp div.css-j7qwjs",
    popover: {
      title: "Complete your statement",
      description:
        "Once you complete your statement, you can either copy it to clipboard or share it via WhatsApp.",
    },
  };
  const copyToClipboard: DriveStep = {
    element:
      "html body div#root div.MuiContainer-root.MuiContainer-maxWidthXl.css-141bmmb div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.css-1jjdl4v div.MuiCardActions-root.MuiCardActions-spacing.css-1xf6bf9 div.MuiBox-root.css-1i27l4i button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1xgrsx4:nth-child(2)",
    popover: {
      title: "Copy to clipboard",
      description: "Click to copy to clipboard.  Now, click the 'Next' button.",
    },
  };

  const shareOnWhatsapp: DriveStep = {
    element:
      "html body div#root div.MuiContainer-root.MuiContainer-maxWidthXl.css-141bmmb div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.css-1jjdl4v div.MuiCardActions-root.MuiCardActions-spacing.css-1xf6bf9 div.MuiBox-root.css-1i27l4i button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1xgrsx4:nth-child(3)",
    popover: {
      title: "Share on WhatsApp",
      description:
        "Click this button to share your feelings on WhatsApp.  Now, click the 'Next' button.",
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
      nextButtonToSelectNeeds,
      needsStepTitle,
      selectNeed1,
      selectNeed2,
      nextButtonToCompleteStatement,
      enterText,
      copyToClipboard,
      shareOnWhatsapp,
    ],
  };

  const driverObj = driver(driverConfig);

  driverObj.drive();
};

const initialize = () => {};

initialize();
