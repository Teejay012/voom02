import { HttpAgent, Actor } from '@dfinity/agent';
import { idlFactory as motokoIDL } from '../../declarations/voom_backend/voom_backend.did.js'; // Adjust the path based on where you store the IDL

const voomBackendCanisterId = "a4tbr-q4aaa-aaaaa-qaafq-cai";

const agent = new HttpAgent();

const motokoActor = Actor.createActor(motokoIDL, {
  agent,
  canisterId: voomBackendCanisterId,
});


// /////////////// USER SIGNUP \\\\\\\\\\\\\\\\\\\\\\\\\

export const userSignUp = async (fullName, username, email, phoneNo, cardDetails, password) => {
    try {
      // Assuming motokoActor is already configured to talk to your backend canister
      const [status, message] = await motokoActor.userSignUp(fullName, username, email, phoneNo, cardDetails, password);
  
      if (status === "Success") {
        return { success: true, message: "User registered successfully" };
      } else {
        return { success: false, message };
      }
    } catch (error) {
      console.error("User registration failed:", error);
      return { success: false, message: "Registration failed due to an error" };
    }
  };



export const addVendor = async (brand, email, phoneNo, cardDetails) => {
    try {
      // Assuming motokoActor is already configured to talk to your backend canister
      const [status, error] = await motokoActor.addVendor(brand, email, phoneNo, cardDetails);
      
      if (status === "Success") {
        return { success: true, message: "Vendor registered successfully" };
      } else {
        return { success: false, message: error };
      }
    } catch (error) {
      console.error("Vendor registration failed:", error);
      return { success: false, message: "Registration failed due to an error" };
    }
};

export const uploadItem = async (name, price, vendorBrand, category, imageUrl, description) => {
  try {
    const [status, error] = await motokoActor.uploadItem(name, price, vendorBrand, category, imageUrl, description);
    if (status === "Success") {
      return { success: true, message: "Item uploaded successfully" };
    } else {
      return { success: false, message: error };
    }
  } catch (error) {
    console.error("Upload failed:", error);
    return { success: false, message: "Upload failed due to an error" };
  }
};

export const getAllItems = async () => {
  try {
    const items = await motokoActor.getAllItems();
    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};