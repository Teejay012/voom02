module {
  public type Item = {
    name : Text;
    price : Float;
    vendor : Vendor;
    category: Text;
    image_url : Text;
    time_of_upload : Int;
    description : Text;
    no_of_sales : Nat;
    ratings : [Rating];
  };
  public type Rating = {
    #five;
    #four;
    #three;
    #two;
    #one;
  };
  public type User = {
    full_name : Text;
    username : Text;
    email : Text;
    phone_no : Text;
    card_details : Text;
    cart : [Item];
  };
  public type Vendor = {
    brand : Text;
    email : Text;
    phone_no : Text;
    card_details : Text;
    itinerary : [Item];
  };
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
  }

