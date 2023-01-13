actor {
  stable var counter : Nat = 0;

  public func greet(name : Text) : async Text {
    counter += 1;
    return ("Hello" # name # "!");
  };

  public func get_count() : async Nat {
    return counter;
  };
};
