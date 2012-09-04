(function () {
    "use strict";

    var ui = WinJS.UI;
    var utils = WinJS.Utilities;

    ui.Pages.define("/pages/spotsItemDetail/spotsItemDetail.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var item = options && options.item ? Data.resolveItemReference(options.item) : Data.items.getAt(0);
            element.querySelector(".titlearea .pagetitle").textContent = item.group.title;
            element.querySelector("article .item-title").textContent = item.title;
            //element.querySelector("article .item-subtitle").textContent = item.subtitle;
            element.querySelector("article .image1").src = item.backgroundImage;
            if (item.noOfPics > 1) {
                element.querySelector("article .image2").src = item.img1;
                if (item.noOfPics > 2) {
                    element.querySelector("article .image3").src = item.img2;
                    if (item.noOfPics > 3) {
                        element.querySelector("article .image4").src = item.img3;
                        if (item.noOfPics > 4) {
                            element.querySelector("article .image5").src = item.img4;
                        } else {
                            $(".image5").remove();
                        }
                    } else {
                        $(".image4").remove();
                        $(".image5").remove();
                    }
                } else {
                    $(".image3").remove();
                    $(".image4").remove();
                    $(".image5").remove();
                }
            } else {
                $(".image2").remove();
                $(".image3").remove();
                $(".image4").remove();
                $(".image5").remove();
            }
            //element.querySelector("article .item-image").nealt = item.subtitle;
            if ((item.phone != null) && (item.phone != "")) {
                $(".item-phone").html(item.phone);
            } else {
                $(".item-phone").html("Not Available");
            }

            if ((item.address != null) && (item.address != "")) {
                $(".item-address").html(item.address);
            } else {
                $(".item-address").html("Not Available");
            }

            if ((item.url != null) && (item.url != "")) {
                $(".item-url").html(item.url);
            } else {
                $(".item-url").html("Not Available");
            }

            if ((item.checkinsCount != null) && (item.checkinsCount != "")) {
                $(".item-users-checked-in").html(item.checkinsCount);
            } else {
                $(".item-users-checked-in").html("Not Available");
            }

            if ((item.tipsCount != null) && (item.tipsCount != "")) {
                $(".item-tip").html(item.tips);
            } else {
                $(".item-tip").html("Not Available");
            }

            element.querySelector(".content").focus();
        }
    });
})();
