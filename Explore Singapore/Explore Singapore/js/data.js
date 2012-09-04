(function () {
    "use strict";
    var CLIENT_ID = "4NUEXVYCHW3JQRFT4FZ2CWWOSSW2WFAUMAADSMST22OKGZFQ";
    var CLIENT_SECRET = "KUJDNLVGBVWYR24Z25UR2WHTLLH2NTCJQR25GRO0F3YTGBVA";
    //var ll = "1.2844,103.8558";
    var ll = "Singapore,Singapore";
    var radius = 1000;
    var v = 20120615;
    var limit = 50;
    var GROUP_DATA = [[], [], [], [], [], []];
    var photoPromises = [];
    var intent = "browse";
    //var novelty = "old";

    var f_api_key = "1b1164783529f51f3fe9caea12813c2a";
    var f_sort = "relevance";
    var f_privacy_filter = "1";
    var f_safe_search = "1";
    var f_content_type = "1";
    var f_media = "photos";
    var f_per_page = "5";
    var f_format = "json";
    var f_nojsoncallback = "1";
    var f_api_sec = "865fcc5e0797561b";

    var dataPromises = [];
    var groupedItems;
    var list = new WinJS.Binding.List();
    var itemDescription = "Item Description: Pellentesque porta mauris quis interdum vehicula urna sapien ultrices velit nec venenatis dui odio in augue cras posuere enim a cursus convallis neque turpis malesuada erat ut adipiscing neque tortor ac erat";
    var itemContent = "<p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat";

    // Each of these sample items should have a reference to a particular
    // group.

    // Each of these sample groups must have a unique key to be displayed
    // separately.

    function getSectionUrl(type) {
        return ("https://api.foursquare.com/v2/venues/explore?near=" + ll + "&section=" + type + "&intent=" + intent + "&limit=" + limit + "&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&v=" + v);
    }

    var groups = [
        {
            key: "group1",
            title: "Outdoors",
            subtitle: "Group Subtitle: 1",
            url: getSectionUrl("Outdoors"),
            backgroundImage: "/images/map_markern.png",
            description: "Description.",
            acquireContent: acquireContent,
            dataPromise: null
        },
        {
            key: "group2",
            title: "Food",
            subtitle: "Group Subtitle: 2",
            url: getSectionUrl("Food"),
            backgroundImage: "/images/restaurantn.png",
            description: "Description.",
            acquireContent: acquireContent,
            dataPromise: null
        },
        {
            key: "group3",
            title: "Drinks",
            subtitle: "Group Subtitle: 3",
            url: getSectionUrl("Drinks"),
            backgroundImage: "/images/champagnen.png",
            description: "Description.",
            acquireContent: acquireContent,
            dataPromise: null
        },
        {
            key: "group4",
            title: "Coffee",
            subtitle: "Group Subtitle: 4",
            url: getSectionUrl("Coffee"),
            backgroundImage: "/images/cafen.png",
            description: "Description.",
            acquireContent: acquireContent,
            dataPromise: null
        },
        {
            key: "group5",
            title: "Shopping",
            subtitle: "Group Subtitle: 4",
            url: getSectionUrl("Shopping"),
            backgroundImage: "/images/shoping_bagn.png",
            description: "Description.",
            acquireContent: acquireContent,
            dataPromise: null
        },
        {
            key: "group6",
            title: "Arts",
            subtitle: "Group Subtitle: 4",
            url: getSectionUrl("Arts"),
            backgroundImage: "/images/theatre_masks1.png",
            description: "Description.",
            acquireContent: acquireContent,
            dataPromise: null
        },
    ];

    groups.forEach(function (group) {
        group.dataPromise = group.acquireContent(group.url);
        dataPromises.push(group.dataPromise);
    });

    String.prototype.hashCode = function () {
        var hash = 0; var xy; var char;
        if (this.length == 0) return hash;
        for (xy = 0; xy < this.length; xy++) {
            char = this.charCodeAt(xy);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }


    function getPics(venueId) {
        var tempUrl = "https://api.foursquare.com/v2/venues/" + venueId + "/photos?group=venue&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&v=" + v;
        return WinJS.xhr({ url: tempUrl });
    }

    function getFlickrPics(textQuery, lat, lng) {
        //var tempSig = f_api_sec + "api_key" + f_api_key + "text" + encodeURI(textQuery) + "sort" + f_sort + "privacy_filter" + f_privacy_filter + "safe_search" + f_safe_search + "content_type" + f_content_type + "media" + f_media + "per_page" + f_per_page + "format" + f_format + "nojsoncallback" + f_nojsoncallback;
        // console.log(tempSig);
        //var f_api_sig = tempSig.hashCode();
        //console.log(f_api_sig);
        textQuery = textQuery.replace("&", "");
        var tempUrl = "https://secure.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + f_api_key + "&text=" + encodeURIComponent(textQuery) + "&accuracy=11" + "&lat=" + lat + "&lng=" + lng + "&sort=relevance&privacy_filter=1&safe_search=1&content_type=1&media=photos&per_page=5&format=json&nojsoncallback=1";
        //console.log(tempUrl);
        return WinJS.xhr({ url: tempUrl });
    }

    function getVenues() {

        WinJS.Promise.join(dataPromises).then(function () {
            console.log("Promises completed successfully...");
            var GROUP_ITERATOR = 0;
            groups.forEach(function (group) {
                group.dataPromise.then(function (response) {
                    var resObj = $.parseJSON(response.responseText);
                    for (var i = 0; i < resObj.response.groups[0].items.length; i++) {
                        var tempItem = resObj.response.groups[0].items[i].venue;
                        GROUP_DATA[GROUP_ITERATOR][i] = {};
                        GROUP_DATA[GROUP_ITERATOR][i].group = group;
                        GROUP_DATA[GROUP_ITERATOR][i].title = tempItem.name;
                        GROUP_DATA[GROUP_ITERATOR][i].id = tempItem.id;
                        if (tempItem.contact.formattedPhone != null) {
                            GROUP_DATA[GROUP_ITERATOR][i].phone = tempItem.contact.formattedPhone;
                        } else {
                            GROUP_DATA[GROUP_ITERATOR][i].phone = null;
                        }
                        if (tempItem.url != null) {
                            GROUP_DATA[GROUP_ITERATOR][i].url = tempItem.url;
                        } else {
                            GROUP_DATA[GROUP_ITERATOR][i].url = null;
                        } if (tempItem.location.address != null) {
                            GROUP_DATA[GROUP_ITERATOR][i].address = tempItem.location.address;
                        } else {
                            GROUP_DATA[GROUP_ITERATOR][i].address = null;
                        }
                        GROUP_DATA[GROUP_ITERATOR][i].lat = tempItem.location.lat;
                        GROUP_DATA[GROUP_ITERATOR][i].lng = tempItem.location.lng;
                        GROUP_DATA[GROUP_ITERATOR][i].distance = tempItem.location.distance;
                        GROUP_DATA[GROUP_ITERATOR][i].category = tempItem.categories[0].pluralName;
                        GROUP_DATA[GROUP_ITERATOR][i].img1 = null;
                        GROUP_DATA[GROUP_ITERATOR][i].img2 = null;
                        GROUP_DATA[GROUP_ITERATOR][i].img3 = null;
                        GROUP_DATA[GROUP_ITERATOR][i].img4 = null;

                        //photoPromises.push({
                        //    promise: getPics(tempItem.id),
                        //    group_iterator: GROUP_ITERATOR,
                        //    i: i
                        //});
                        photoPromises.push({
                            promise: getFlickrPics(tempItem.name, tempItem.location.lat, tempItem.location.lng),
                            group_iterator: GROUP_ITERATOR,
                            i: i
                        });
                    }//Finished looping over all items in the group.
                });//Finished callback of group's promise.
                GROUP_ITERATOR++;
            });//Finished iterating over all groups.
            console.log("Stored all the Group Venues' Data");
            return WinJS.Promise.join(photoPromises);
        }).then(function () {
            photoPromises.forEach(function (photoPromise) {
                photoPromise.promise.then(function (pResponse) {

                    //THIS IS FOR FOURSQUARE PICS
                    //var pResObj = $.parseJSON(pResponse.responseText);
                    //if (pResObj.response.photos.count != 0) {
                    //    GROUP_DATA[photoPromise.group_iterator][photoPromise.i].backgroundImage = pResObj.response.photos.items[0].prefix + "original" + pResObj.response.photos.items[0].suffix;
                    //} else {
                    //    GROUP_DATA[photoPromise.group_iterator][photoPromise.i].backgroundImage = "/images/cafe.png";
                    //}

                    //var _GI = photoPromise.group_iterator;
                    //var _I = photoPromise.i;

                    //list.push({
                    //    group: GROUP_DATA[_GI][_I].group,
                    //    title: GROUP_DATA[_GI][_I].title,
                    //    id: GROUP_DATA[_GI][_I].id,
                    //    backgroundImage: GROUP_DATA[_GI][_I].backgroundImage,
                    //    phone: GROUP_DATA[_GI][_I].phone,
                    //    url: GROUP_DATA[_GI][_I].url,
                    //    address: GROUP_DATA[_GI][_I].address,
                    //    lat: GROUP_DATA[_GI][_I].lat,
                    //    lng: GROUP_DATA[_GI][_I].lng,
                    //    distance: GROUP_DATA[_GI][_I].distance,
                    //    category: GROUP_DATA[_GI][_I].category
                    //});
                    // console.log("??????????????");

                    var pResObj = $.parseJSON(pResponse.responseText);
                    //console.log(pResObj);
                    var total = 0;
                    if (pResObj.photos.total > 0) {
                        total++;
                        GROUP_DATA[photoPromise.group_iterator][photoPromise.i].backgroundImage = "http://farm" + pResObj.photos.photo[0].farm + ".staticflickr.com/" + pResObj.photos.photo[0].server + "/" + pResObj.photos.photo[0].id + "_" + pResObj.photos.photo[0].secret + ".jpg";
                        //  console.log(GROUP_DATA[photoPromise.group_iterator][photoPromise.i].backgroundImage);
                        //  console.log("eh");
                        if (pResObj.photos.photo[1] != null) {
                            total++;
                            GROUP_DATA[photoPromise.group_iterator][photoPromise.i].img1 = "http://farm" + pResObj.photos.photo[1].farm + ".staticflickr.com/" + pResObj.photos.photo[1].server + "/" + pResObj.photos.photo[1].id + "_" + pResObj.photos.photo[1].secret + ".jpg";
                        };
                        if (pResObj.photos.photo[2] != null) {
                            total++;
                            GROUP_DATA[photoPromise.group_iterator][photoPromise.i].img2 = "http://farm" + pResObj.photos.photo[2].farm + ".staticflickr.com/" + pResObj.photos.photo[2].server + "/" + pResObj.photos.photo[2].id + "_" + pResObj.photos.photo[2].secret + ".jpg";
                        };
                        if (pResObj.photos.photo[3] != null) {
                            total++;
                            GROUP_DATA[photoPromise.group_iterator][photoPromise.i].img3 = "http://farm" + pResObj.photos.photo[3].farm + ".staticflickr.com/" + pResObj.photos.photo[3].server + "/" + pResObj.photos.photo[3].id + "_" + pResObj.photos.photo[3].secret + ".jpg";
                        };
                        if (pResObj.photos.photo[4] != null) {
                            total++;
                            GROUP_DATA[photoPromise.group_iterator][photoPromise.i].img4 = "http://farm" + pResObj.photos.photo[4].farm + ".staticflickr.com/" + pResObj.photos.photo[4].server + "/" + pResObj.photos.photo[4].id + "_" + pResObj.photos.photo[4].secret + ".jpg";
                        };
                    }

                    var _GI = photoPromise.group_iterator;
                    var _I = photoPromise.i;

                    if (pResObj.photos.total > 0) {
                        list.push({
                            group: GROUP_DATA[_GI][_I].group,
                            title: GROUP_DATA[_GI][_I].title,
                            id: GROUP_DATA[_GI][_I].id,
                            backgroundImage: GROUP_DATA[_GI][_I].backgroundImage,
                            phone: GROUP_DATA[_GI][_I].phone,
                            url: GROUP_DATA[_GI][_I].url,
                            address: GROUP_DATA[_GI][_I].address,
                            lat: GROUP_DATA[_GI][_I].lat,
                            lng: GROUP_DATA[_GI][_I].lng,
                            distance: GROUP_DATA[_GI][_I].distance,
                            category: GROUP_DATA[_GI][_I].category,
                            img1: GROUP_DATA[_GI][_I].img1,
                            img2: GROUP_DATA[_GI][_I].img2,
                            img3: GROUP_DATA[_GI][_I].img3,
                            img4: GROUP_DATA[_GI][_I].img4,
                            noOfPics: total
                        });
                    }
                });
            });
        });
    }

    getVenues();

    function acquireContent(url) {
        //Calls xhr for the url to get results asynchronously
        return WinJS.xhr({ url: url });
    }

    // Get a reference for an item, using the group key and item title as a
    // unique reference to the item that can be easily serialized.
    function getItemReference(item) {
        return [item.group.key, item.title];
    }

    function resolveGroupReference(key) {
        for (var i = 0; i < groupedItems.groups.length; i++) {
            if (groupedItems.groups.getAt(i).key === key) {
                return groupedItems.groups.getAt(i);
            }
        }
    }

    function resolveItemReference(reference) {
        for (var i = 0; i < groupedItems.length; i++) {
            var item = groupedItems.getAt(i);
            if (item.group.key === reference[0] && item.title === reference[1]) {
                return item;
            }
        }
    }

    // This function returns a WinJS.Binding.List containing only the items
    // that belong to the provided group.
    function getItemsFromGroup(group) {
        return list.createFiltered(function (item) { return item.group.key === group.key; });
    }


    console.log("about to create grouped items..");
    groupedItems = list.createGrouped(
    function groupKeySelector(item) { return item.group.key; },
    function groupDataSelector(item) { return item.group; });


    WinJS.Namespace.define("Data", {
        items: groupedItems,
        groups: groupedItems.groups,
        getItemsFromGroup: getItemsFromGroup,
        getItemReference: getItemReference,
        resolveGroupReference: resolveGroupReference,
        resolveItemReference: resolveItemReference,
        GROUP_DATA: GROUP_DATA,
        photoPromises: photoPromises
    });
})();

//var photoPromise = getPics(id);
//var picUrl;
//photoPromise.then(
//    function (pResponse) {
//        var pResObj = $.parseJSON(pResponse.responseText);
//        if (pResObj.response.photos.count != 0) {
//            picUrl = pResObj.response.photos.items[0].prefix + "original" + pResObj.response.photos.items[0].suffix;
//        } else {
//            picUrl = "/images/cafe.png";
//        }
//});