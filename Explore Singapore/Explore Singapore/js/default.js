// For an introduction to the Navigation template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232506
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var nav = WinJS.Navigation;
    WinJS.strictProcessing();

    /* splash screen trial

    //var sampleTitle = "Explore Singapore";

    //var scenarios = [
    //    { url: "/pages/home/home.html", title: "Extended for data to be loaded" }
    //];

    //var splash = null; // Variable to hold the splash screen object.
    //var dismissed = false; // Variable to track splash screen dismissal status.
    //var coordinates = { x: 0, y: 0, width: 0, height: 0 }; // Object to store splash screen image coordinates. It will be initialized during activation.

    //function activated(eventObject) {
    //    if (eventObject.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
    //        // Retrieve splash screen object
    //        splash = eventObject.detail.splashScreen;

    //        // Retrieve the window coordinates of the splash screen image.
    //        Explore_Singapore.coordinates = splash.imageLocation;

    //        // Register an event handler to be executed when the splash screen has been dismissed.
    //        splash.addEventListener("dismissed", onSplashScreenDismissed, false);

    //        // Create and display the extended splash screen using the splash screen object and the same image specified for the system splash screen.
    //        ExtendedSplash.show(splash, "/images/logo620.png");

    //        // Listen for window resize events to reposition the extended splash screen image accordingly.
    //        // This is important to ensure that the extended splash screen is formatted properly in response to snapping, unsnapping, rotation, etc...
    //        window.addEventListener("resize", onResize, false);

    //        // Use setPromise to indicate to the system that the splash screen must not be torn down
    //        // until after processAll and navigate complete asynchronously.
    //        eventObject.setPromise(WinJS.UI.processAll().then(function () {
    //            // Navigate to either the first scenario or to the last running scenario
    //            // before suspension or termination.
    //            var url = WinJS.Application.sessionState.lastUrl || scenarios[0].url;
    //            return WinJS.Navigation.navigate(url);
    //        }));
    //    }
    //}

    //nav.addEventListener("navigated", function (eventObject) {
    //    var url = eventObject.detail.location;
    //    var host = document.getElementById("contenthost");
    //    // Call unload method on current scenario, if there is one
    //    //host.winControl && host.winControl.unload && host.winControl.unload();
    //    //WinJS.Utilities.empty(host);
    //    //eventObject.detail.setPromise(WinJS.UI.Pages.render(url, host, eventObject.detail.state).then(function () {
    //    //    WinJS.Application.sessionState.lastUrl = url;
    //    //}));

    //    if (app.sessionState.history) {
    //        nav.history = app.sessionState.history;
    //    }
    //    eventObject.detail.setPromise(WinJS.UI.processAll().then(function () {
    //        if (nav.location) {
    //            nav.history.current.initialPlaceholder = true;
    //            return nav.navigate(nav.location, nav.state);
    //        } else {
    //            return nav.navigate(Application.navigator.home);
    //        }
    //    }));

    //});

    //function onSplashScreenDismissed() {
    //    // Include code to be executed when the system has transitioned from the splash screen to the extended splash screen (application's first view).
    //    console.log("dismissed");
    //    Explore_Singapore.dismissed = true;

    //    // Tear down the app's extended splash screen after completing setup operations here...
    //    // In this sample, the extended splash screen is torn down when the "Learn More" button is clicked.
    //    //document.getElementById("learnMore").addEventListener("click", ExtendedSplash.remove, false);

    //    // The following operation is only applicable to this sample to ensure that UI has been updated appropriately.
    //    // Update scenario 1's output if scenario1.html has already been loaded before this callback executes.
    //    if (document.getElementById("dismissalOutput")) {
    //        console.log("dismissed");
    //    }
    //}

    //function onResize() {
    //    // Safely update the extended splash screen image coordinates. This function will be fired in response to snapping, unsnapping, rotation, etc...
    //    if (splash) {
    //        // Update the coordinates of the splash screen image.
    //        Explore_Singapore.coordinates = splash.imageLocation;
    //        ExtendedSplash.updateImageLocation(splash);
    //    }
    //}

    //WinJS.Namespace.define("Explore_Singapore", {
    //    sampleTitle: sampleTitle,
    //    scenarios: scenarios,
    //    dismissed: dismissed,
    //    coordinates: coordinates
    //});


    //app.addEventListener("activated", activated, false);

    */

    app.addEventListener("activated", function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                 //TODO: This application has been newly launched. Initialize
                 //your application here.
            } else {
                 //TODO: This application has been reactivated from suspension.
                 //Restore application state here.
            }

            if (app.sessionState.history) {
                nav.history = app.sessionState.history;
            }
            args.setPromise(WinJS.UI.processAll().then(function () {
                if (nav.location) {
                    nav.history.current.initialPlaceholder = true;
                    return nav.navigate(nav.location, nav.state);
                } else {
                    return nav.navigate(Application.navigator.home);
                }
            }));
        }
    });

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. If you need to 
        // complete an asynchronous operation before your application is 
        // suspended, call args.setPromise().
        app.sessionState.history = nav.history;
    };

    app.start();
})();
