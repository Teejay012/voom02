import Order "mo:base/Order";

module {
  //checks the equality of two text values or strings
  public func isTextEqual(str1 : Text, str2 : Text) : Order.Order {
    let isEqual : Bool = (str1 == str2);
    return switch (isEqual) {
      case (true) { #equal };
      case (false) { #greater };
    };
  };
};
