(function () {
    "use strict";
    var urlArray = ["/images/b2.jpg", "/images/b3.jpg", "/images/b4.jpg", "/images/b5.jpg", "/images/b6.jpg", "/images/b7.jpg", "/images/b1.jpg"];
    var description = ["coffee description", "food description", "shopping description", "outdoor description"];
    var currentIndex;

    //function handleLinkClick(eventInfo) {
    //    eventInfo.preventDefault();
    //    var link = eventInfo.target;
    //    WinJS.Navigation.navigate(link.href);
    //}

    //function itemInvoked(args) {
    //    var group = Data.groups.getAt(args.detail.itemIndex);
    //    nav.navigate("/pages/spotsGroupDetail/spotsGroupDetail.html", { groupKey: group.key });
    //}

    function changeImage() {
        $('#homePage').css({ 'background-image': 'url(' + urlArray[currentIndex] + ')' });
        currentIndex++;
        if (currentIndex == 7)
            currentIndex = 0;
    }

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.

        ready: function (element, options) {
            //WinJS.Utilities.query('a').listen('click', handleLinkClick);
            currentIndex = 0;
            setInterval(changeImage, 3000);            
        }
    });
})();
