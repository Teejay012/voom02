import Time "mo:base/Time";
import Buffer "mo:base/Buffer";
import Float "mo:base/Float";
import Nat "mo:base/Nat";
//import Debug "mo:base/Debug";

import Types "./types";
import Utils "./utils";

actor {
  //stores all items on app
  stable var voomItems : [Types.CatgRecord] = [];
  //stores details of vendors registered on app
  stable var voomVendors : [Types.Vendor] = [];
  //stores details of users registered on app
  stable var voomUsers : [Types.User] = [];

  //Upload an item on the e-commerce website
  //Returns "Success" if successfully
  public func uploadItem(name : Text, price : Float, vendor_brand : Text, password : Text, category: Text, image_url : Text, desc : Text) : async (Text, Text) {
    let isAuth = await authenticateVendor(vendor_brand, password);
    if (isAuth == "Fail") {
      return ("Fail", "Wrong password");
    } else if (isAuth != "Success") {
      return ("Fail", isAuth);
    };
    for (c in voomItems.vals()) {
      if (c.catg == category) {
        for (item in c.catgItems.vals()) {
          if (item.name == name) {
            return ("Fail", "Item with name " # name  # " already exists");
          };
        };
      };
    };
    for (this_vendor in voomVendors.vals()) {
      if (this_vendor.brand == vendor_brand) {
        let newItem : Types.Item = {
          name = name;
          price = price;
          vendor = this_vendor;
          category = category;
          image_url = image_url;
          time_of_upload = Time.now();
          description = desc;
          no_of_sales = 0;
          var ratings = [];
          var reviews = [];
        };
        let voomItemsBuff = Buffer.fromArray<Types.CatgRecord>(voomItems);
        for (c in voomItemsBuff.vals()) {
          if (c.catg == category) {
            //Add item into voomItems under category provided
            let catg_itemsBuff = Buffer.fromArray<Types.Item>(c.catgItems);
            catg_itemsBuff.add(newItem);
            c.catgItems := Buffer.toArray<Types.Item>(catg_itemsBuff);
             return ("Success", "Nil")
          };
        };
        let newCatg = {
          catg = category;
          var catgItems = [newItem];
        };
        voomItemsBuff.add(newCatg);
        voomItems := Buffer.toArray(voomItemsBuff);
        return ("Success", "New category created");
      };
    };
    return ("Fail", "Vendor not found");
  };

  //Return details of a particular item
  //Computes average rating
  //Returns details with brand name of item vendor
  func getItemDetails(item : Types.Item) : async Types.ItemDetails {
    var no_of_rates : Int = 0;
    var total : Int = 0;

    for (rating in item.ratings.vals()) {
      no_of_rates += 1;
      let rate : Int = switch (rating) {
        case(#five) { 5 };
        case(#four) { 4 };
        case(#three) { 3 };
        case(#two) { 2 };
        case(#one) { 1 };
      };
      total += rate;
    };
    let final_rating : Float = Float.fromInt(total) / Float.fromInt(no_of_rates);
    let itemDetails : Types.ItemDetails = {
      name = item.name;
      price = item.price;
      vendor = item.vendor.brand;
      category = item.category;
      image_url = item.image_url;
      time_of_upload = item.time_of_upload;
      description = item.description;
      no_of_sales = item.no_of_sales;
      rating = final_rating;
    };
    return itemDetails;
  };

  //Get all items available on website
  /*Sample return value: [
    ("Phones", ["I-phone 11", "I-phone 12", "I-Phone 13"]),
    ("Bags", ["Gucci", "Versace"])
  ]
  */
  public func getAllItems() : async [(Text, [Types.ItemDetails])] {
    let allItems = Buffer.Buffer<(Text, [Types.ItemDetails])>(0);
    for (c in voomItems.vals()) {
      let catg_items = Buffer.Buffer<Types.ItemDetails>(0);
      for (item in c.catgItems.vals()) {
        let details = await getItemDetails(item);
        catg_items.add(details);
      };
      allItems.add((c.catg, Buffer.toArray<Types.ItemDetails>(catg_items)));
    };
    return Buffer.toArray<(Text, [Types.ItemDetails])>(allItems);
  };

  //Should be used for Vendor sign in
  //Adds vendor to website
  public func addVendor(brand : Text, email : Text, phone_no : Text, card_details : Text, password : Text) : async (Text, Text) {
    for (vendor in voomVendors.vals()) {
      if (vendor.brand == brand) {
        return ("Fail", "Brand name already exists.");
      };
    };
    let newVendor : Types.Vendor = {
      brand = brand;
      email = email;
      phone_no = phone_no;
      card_details = card_details;
      password = password;
      itinerary = [];
    };
    let voomVendorsBuff = Buffer.fromArray<Types.Vendor>(voomVendors);
    voomVendorsBuff.add(newVendor);
    voomVendors := Buffer.toArray<Types.Vendor>(voomVendorsBuff);
    return ("Success", "Nil")
  };

  //Should be used for User sign in
  //Adds user to website
  public func userSignUp(full_name : Text, username : Text, email : Text, phone_no : Text, card_details : Text, password : Text) : async (Text, Text) {
    for (user in voomUsers.vals()) {
      if (user.username == username) {
        return ("Fail", "Username already exists.");
      };
    };
    let newUser : Types.User = {
      full_name = full_name;
      username = username;
      email = email;
      phone_no = phone_no;
      card_details = card_details;
      password = password;
      var cart = [];
      var favorites = [];
      var wishlist = [];
    };
    let voomUsersBuff = Buffer.fromArray<Types.User>(voomUsers);
    voomUsersBuff.add(newUser);
    voomUsers := Buffer.toArray<Types.User>(voomUsersBuff);
    return ("Success", "Nil")
  };

  //authenticates vendor
  //returns "Success" if vendor authenticated
  //returns "Fail" if vendor not authenticated
  //returns "Vendor <brand name> does not exist" if vendor account with brand name provided does not exist
  public query func authenticateVendor(brand_name : Text, password : Text) : async Text {
    for (vendor in voomVendors.vals()) {
      if (vendor.brand == brand_name) {
        if (password == vendor.password) {
          return "Success";
        } else {
          return "Fail";
        };
      };
    };
    return "Vendor " # brand_name # " does not exist";
  };

  //authenticates user
  //returns "Success" if user authenticated
  //returns "Fail" if user not authenticated
  //returns "User <username> does not exist" if user account with username provided does not exist
  public query func authenticateUser(user_name : Text, password : Text) : async Text {
    for (user in voomUsers.vals()) {
      if (user.username == user_name) {
        if (password == user.password) {
          return "Success";
        } else {
          return "Fail";
        };
      };
    };
    return "User " # user_name # " does not exist";
  };

  //Gets items under a certain category
  //Returns ("Fail", "<error>", []) if category does not exist
  //Returns ("Success", "Nil", [<item details>]) if successfull
  public func getCategoryItems (category : Text) : async (Text, Text, [Types.ItemDetails]) {
    let all_items = await getAllItems();
    for (c in all_items.vals()) {
      if (c.0 == category) {
        return ("Success", "Nil", c.1);
      };
    };
    return ("Fail", "Category does not exist", []);
  };

  //Rates an item (1-5 stars)
  //Returns ("Fail", "<error>") if not successful
  //Returns ("Success", "Nil") if successful
  public func rate(rating : Nat, item_name : Text, category : Text) : async (Text, Text) {
    if (rating < 1 or rating > 5) {
      return ("Fail", "Invalid input");
    };
    for (c in voomItems.vals()) {
      for (item in c.catgItems.vals()) {
        if (item.name == item_name) {
          let newRating : Types.Rating = switch (rating) {
            case (1) { #one };
            case (2) { #two };
            case (3) { #three };
            case (4) { #four };
            case (5) { #five };
            case (_) { #one };
          };
          let itemRBuff = Buffer.fromArray<Types.Rating>(item.ratings);
          itemRBuff.add(newRating);
          item.ratings := Buffer.toArray(itemRBuff);
          return ("Success", "Nil");
        };
      };
    };
    return ("Fail", "Category " # category # " does not exist");
  };

  //Add item to cart
  //Returns ("Fail", "<error>") if not successful
  //Returns ("Success", "Nil") if successful
  public func addToCart(user_name : Text, password : Text, item_name : Text, category : Text) : async (Text, Text) {
    for (user in voomUsers.vals()) {
      if (user.username == user_name) {
        let isAuth = await authenticateUser(user_name, password);
        if (isAuth == "Fail") {
          return ("Fail", "Wrong passsword");
        } else if (isAuth != "Success") {
          return ("Fail", isAuth);
        };
        for (cart_item in user.cart.vals()) {
          if (cart_item.name == item_name) {
            return ("Fail", "Item already in cart");
          };
        };
        for (c in voomItems.vals()) {
          if (c.catg == category) {
            for (item in c.catgItems.vals()) {
              if (item.name == item_name) {
                let userCartBuff = Buffer.fromArray<Types.Item>(user.cart);
                userCartBuff.add(item);
                user.cart := Buffer.toArray(userCartBuff);
                return ("Success", "Nil");
              };
            };
            return ("Fail", "Item " # item_name # " with category " # category # " does not exist");
          };
        };
        return ("Fail", "Category " # category # " does not exist");
      };
    };
    return ("Fail", "User " # user_name # " does not exist");
  };

  //Add item to wishlist
  //Returns ("Fail", "<error>") if not successful
  //Returns ("Success", "Nil") if successful
  public func addToWishlist(user_name : Text, password : Text, item_name : Text, category : Text) : async (Text, Text) {
    for (user in voomUsers.vals()) {
      if (user.username == user_name) {
        let isAuth = await authenticateUser(user_name, password);
        if (isAuth == "Fail") {
          return ("Fail", "Wrong passsword");
        } else if (isAuth != "Success") {
          return ("Fail", isAuth);
        };
        for (wish_item in user.wishlist.vals()) {
          if (wish_item.name == item_name) {
            return ("Fail", "Item already in wishlist");
          };
        };
        for (w in voomItems.vals()) {
          if (w.catg == category) {
            for (item in w.catgItems.vals()) {
              if (item.name == item_name) {
                let userWishBuff = Buffer.fromArray<Types.ItemDetails>(user.wishlist);
                userWishBuff.add(await getItemDetails(item));
                user.wishlist := Buffer.toArray(userWishBuff);
                return ("Success", "Nil");
              };
            };
            return ("Fail", "Item " # item_name # " with category " # category # " does not exist");
          };
        };
        return ("Fail", "Category " # category # " does not exist");
      };
    };
    return ("Fail", "User " # user_name # " does not exist");
  };

  //Add item to favorites
  //Returns ("Fail", "<error>") if not successful
  //Returns ("Success", "Nil") if successful
  public func addToFavorites(user_name : Text, password : Text, item_name : Text, category : Text) : async (Text, Text) {
    for (user in voomUsers.vals()) {
      if (user.username == user_name) {
        let isAuth = await authenticateUser(user_name, password);
        if (isAuth == "Fail") {
          return ("Fail", "Wrong passsword");
        } else if (isAuth != "Success") {
          return ("Fail", isAuth);
        };
        for (wish_item in user.wishlist.vals()) {
          if (wish_item.name == item_name) {
            return ("Fail", "Item already in favorites");
          };
        };
        for (f in voomItems.vals()) {
          if (f.catg == category) {
            for (item in f.catgItems.vals()) {
              if (item.name == item_name) {
                let userFavBuff = Buffer.fromArray<Types.ItemDetails>(user.favorites);
                userFavBuff.add(await getItemDetails(item));
                user.favorites := Buffer.toArray(userFavBuff);
                return ("Success", "Nil");
              };
            };
            return ("Fail", "Item " # item_name # " with category " # category # " does not exist");
          };
        };
        return ("Fail", "Category " # category # " does not exist");
      };
    };
    return ("Fail", "User " # user_name # " does not exist");
  };

  //Remove item from cart
  //Returns ("Fail", "<error>") if not successful
  //Returns ("Success", "Nil") if successful
  public func removeFromCart(user_name : Text, password : Text, item_name : Text, category : Text) : async (Text, Text) {
    for (user in voomUsers.vals()) {
      if (user.username == user_name) {
        let isAuth = await authenticateUser(user_name, password);
        if (isAuth == "Fail") {
          return ("Fail", "Wrong Password");
        } else if (isAuth != "Success") {
          return ("Fail", isAuth);
        };
        for (c in voomItems.vals()) {
          if (c.catg == category) {
            for (item in c.catgItems.vals()) {
              if (item.name == item_name) {
                let userCartBuff = Buffer.fromArray<Types.Item>(user.cart);
                let itemNamesBuff = Buffer.map<Types.Item, Text>(userCartBuff, func (x) {
                    x.name;
                });
                let itemIndexOpt : ?Nat = Buffer.binarySearch<Text>(item_name, itemNamesBuff, Utils.isTextEqual);
                //itemIndexOpt is never null due to if statement "if item.name == item_name"
                let itemIndex : Nat = switch (itemIndexOpt) {
                  case (?itemIndexOpt) { itemIndexOpt };
                  case (null) {
                    return ("Fail", "Item not found");
                    0; };
                };
                let removedItem : Types.Item = userCartBuff.remove(itemIndex);
                user.cart := Buffer.toArray(userCartBuff);
                return ("Success", "Removed item " # removedItem.name);
              };
            };
            return ("Fail", "Item " # item_name # " with category " # category # " does not exist");
          };
        };
        return ("Fail", "Category " # category # " does not exist");
      };
    };
    return ("Fail", "User " # user_name # " does not exist");
  };

  //Remove item from wishlist
  //Returns ("Fail", "<error>") if not successful
  //Returns ("Success", "Nil") if successful
  public func removeFromWishlist(user_name : Text, password : Text, item_name : Text, category : Text) : async (Text, Text) {
    for (user in voomUsers.vals()) {
      if (user.username == user_name) {
        let isAuth = await authenticateUser(user_name, password);
        if (isAuth == "Fail") {
          return ("Fail", "Wrong Password");
        } else if (isAuth != "Success") {
          return ("Fail", isAuth);
        };
        for (w in voomItems.vals()) {
          if (w.catg == category) {
            for (item in w.catgItems.vals()) {
              if (item.name == item_name) {
                let userWishBuff = Buffer.fromArray<Types.ItemDetails>(user.wishlist);
                let itemNamesBuff = Buffer.map<Types.ItemDetails, Text>(userWishBuff, func (x) {
                    x.name;
                });
                let itemIndexOpt : ?Nat = Buffer.binarySearch<Text>(item_name, itemNamesBuff, Utils.isTextEqual);
                //itemIndexOpt is never null due to if statement "if item.name == item_name"
                let itemIndex : Nat = switch (itemIndexOpt) {
                  case (?itemIndexOpt) { itemIndexOpt };
                  case (null) {
                    return ("Fail", "Item not found");
                    0; };
                };
                let removedItem : Types.ItemDetails = userWishBuff.remove(itemIndex);
                user.wishlist := Buffer.toArray(userWishBuff);
                return ("Success", "Removed item " # removedItem.name);
              };
            };
            return ("Fail", "Item " # item_name # " with category " # category # " does not exist");
          };
        };
        return ("Fail", "Category " # category # " does not exist");
      };
    };
    return ("Fail", "User " # user_name # " does not exist");
  };

  //Remove item from favorites
  //Returns ("Fail", "<error>") if not successful
  //Returns ("Success", "Nil") if successful
  public func removeFromFavs(user_name : Text, password : Text, item_name : Text, category : Text) : async (Text, Text) {
    for (user in voomUsers.vals()) {
      if (user.username == user_name) {
        let isAuth = await authenticateUser(user_name, password);
        if (isAuth == "Fail") {
          return ("Fail", "Wrong Password");
        } else if (isAuth != "Success") {
          return ("Fail", isAuth);
        };
        for (f in voomItems.vals()) {
          if (f.catg == category) {
            for (item in f.catgItems.vals()) {
              if (item.name == item_name) {
                let userFavBuff = Buffer.fromArray<Types.ItemDetails>(user.favorites);
                let itemNamesBuff = Buffer.map<Types.ItemDetails, Text>(userFavBuff, func (x) {
                    x.name;
                });
                let itemIndexOpt : ?Nat = Buffer.binarySearch<Text>(item_name, itemNamesBuff, Utils.isTextEqual);
                //itemIndexOpt is never null due to if statement "if item.name == item_name"
                let itemIndex : Nat = switch (itemIndexOpt) {
                  case (?itemIndexOpt) { itemIndexOpt };
                  case (null) {
                    return ("Fail", "Item not found");
                    0; };
                };
                let removedItem : Types.ItemDetails = userFavBuff.remove(itemIndex);
                user.favorites := Buffer.toArray(userFavBuff);
                return ("Success", "Removed item " # removedItem.name);
              };
            };
            return ("Fail", "Item " # item_name # " with category " # category # " does not exist");
          };
        };
        return ("Fail", "Category " # category # " does not exist");
      };
    };
    return ("Fail", "User " # user_name # " does not exist");
  };

  //Gets user cart
  //Returns ("Success", "Nil", [<cart items>]) if successfull
  //Returns ("Fail", "<error>", []) if not successful
  public func getCart (user_name : Text, password : Text) : async (Text, Text, [Types.ItemDetails]) {
    for (user in voomUsers.vals()) {
      if (user.username == user_name) {
        let isAuth = await authenticateUser(user_name, password);
        if ((isAuth) == "Fail") {
          return ("Fail", "Wrong Password", [])
        } else if (isAuth != "Success") {
          return ("Fail", isAuth, []);
        };
        let userCartBuff = Buffer.Buffer<Types.ItemDetails>(0);
        for (item in user.cart.vals()) {
          userCartBuff.add(await getItemDetails(item));
        };
        return ("Success", "Nil", Buffer.toArray<Types.ItemDetails>(userCartBuff));
      };
    };
    return ("Fail", "User " # user_name # " does not exist", []);
  };

  //Gets user favorites
  //Returns ("Success", "Nil", [<favorites>]) if successfull
  //Returns ("Fail", "<error>", []) if not successful
  public func getFavorites (user_name : Text, password : Text) : async (Text, Text, [Types.ItemDetails]) {
    for (user in voomUsers.vals()) {
      if (user.username == user_name) {
        let isAuth = await authenticateUser(user_name, password);
        if ((isAuth) == "Fail") {
          return ("Fail", "Wrong Password", [])
        } else if (isAuth != "Success") {
          return ("Fail", isAuth, []);
        };
        return ("Success", "Nil", user.favorites);
      };
    };
    return ("Fail", "User " # user_name # " does not exist", []);
  };

  //Gets user wishlist
  //Returns ("Success", "Nil", [<wishlist items>]) if successfull
  //Returns ("Fail", "<error>", []) if not successful
  public func getWishlist (user_name : Text, password : Text) : async (Text, Text, [Types.ItemDetails]) {
    for (user in voomUsers.vals()) {
      if (user.username == user_name) {
        let isAuth = await authenticateUser(user_name, password);
        if ((isAuth) == "Fail") {
          return ("Fail", "Wrong Password", [])
        } else if (isAuth != "Success") {
          return ("Fail", isAuth, []);
        };
        return ("Success", "Nil", user.wishlist);
      };
    };
    return ("Fail", "User " # user_name # " does not exist", []);
  };
};
