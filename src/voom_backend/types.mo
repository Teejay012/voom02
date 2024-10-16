module {
  //Type Item
  public type Item = {
    name : Text;
    price : Float;
    vendor : Vendor;
    category: Text;
    image_url : Text;
    time_of_upload : Int;
    description : Text;
    no_of_sales : Nat;
    var ratings : [Rating];
    var reviews : [(Text, Text)] //(username, review message)
  };

  //Type Rating
  public type Rating = {
    #five;
    #four;
    #three;
    #two;
    #one;
  };

  //Type User
  public type User = {
    full_name : Text;
    username : Text;
    email : Text;
    phone_no : Text;
    card_details : Text;
    password : Text;
    var cart : [Item];
    var favorites : [ItemDetails];
    var wishlist : [ItemDetails];
  };

  //Type Vendor
  public type Vendor = {
    brand : Text;
    email : Text;
    phone_no : Text;
    card_details : Text;
    password : Text;
    itinerary : [Item];
  };

  //Type ItemDetails
  public type ItemDetails = {
    name : Text;
    price : Float;
    vendor : Text;
    category : Text;
    image_url : Text;
    time_of_upload : Int;
    description : Text;
    no_of_sales : Nat;
    rating : Float;
  };

  //Type CatgRecord
  //For storing items in their appropriate category
  public type CatgRecord = {
    catg : Text;
    var catgItems : [Item];
  };
}
