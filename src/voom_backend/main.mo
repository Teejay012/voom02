import Types "./types";
import Time "mo:base/Time";
import Buffer "mo:base/Buffer";
import Float "mo:base/Float";

actor {
  //stores all items on app
  stable var voomItems : [Types.Item] = [];
  //stores details of vendors registered on app
  stable var voomVendors : [Types.Vendor] = [];
  //stores details of users registered on app
  stable var voomUsers : [Types.User] = [];

  //Upload an item on the e-commerce website
  //Returns "Success" if successfully
  public func uploadItem(name : Text, price : Float, vendor_brand : Text, category: Text, image_url : Text, desc : Text) : async (Text, Text) {
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
          ratings = [];
        };
        let voomItemsBuff = Buffer.fromArray<Types.Item>(voomItems);
        voomItemsBuff.add(newItem);
        voomItems := Buffer.toArray<Types.Item>(voomItemsBuff);
        return ("Success", "Nil")
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
  public func getAllItems() : async [Types.ItemDetails] {
    let allItems = Buffer.Buffer<Types.ItemDetails>(0);
    for (item in voomItems.vals()) {
      let details = await getItemDetails(item);
      allItems.add(details);
    };
    return Buffer.toArray<Types.ItemDetails>(allItems);
  };

  public func addVendor(brand : Text, email : Text, phone_no : Text, card_details : Text) : async (Text, Text) {
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
      itinerary = [];
    };
    let voomVendorsBuff = Buffer.fromArray<Types.Vendor>(voomVendors);
    voomVendorsBuff.add(newVendor);
    voomVendors := Buffer.toArray<Types.Vendor>(voomVendorsBuff);
    return ("Success", "Nil")
  }
};
