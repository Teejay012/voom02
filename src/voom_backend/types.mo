module {
  public type Item = {
    name : Text;
    price : Float;
    vendor : Vendor;
    category: Text;
    image : Text;
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
    full_name : Text;
    username : Text;
    email : Text;
    phone_no : Text;
    card_details : Text;
    itinerary : [Item];
  };
}
