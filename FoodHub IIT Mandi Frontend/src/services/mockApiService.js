import mockProducts from '../data/mockProducts.json';

// Mock API delay to simulate network request
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  // Get all products
  getAllProducts: async () => {
    await delay(500); // Simulate network delay
    return {
      data: {
        success: true,
        message: "Successfully fetched all products",
        data: mockProducts
      }
    };
  },

  // Get product by ID
  getProductById: async (id) => {
    await delay(300);
    const product = mockProducts.find(p => p._id === id);
    if (product) {
      return {
        data: {
          success: true,
          message: "Successfully fetched product details",
          data: product
        }
      };
    } else {
      throw new Error('Product not found');
    }
  },

  // Mock user authentication (for demo)
  loginUser: async (credentials) => {
    await delay(800);
    // Simple mock login - in real app this would validate credentials
    return {
      data: {
        success: true,
        message: "Login successful",
        data: {
          _id: "demo-user-id",
          firstName: "Demo",
          lastName: "User",
          email: credentials.email,
          mobileNumber: "1234567890",
          role: "USER"
        }
      }
    };
  },

  // Mock user registration
  createAccount: async (userData) => {
    await delay(800);
    return {
      data: {
        success: true,
        message: "Account created successfully",
        data: {
          _id: "new-user-id",
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          mobileNumber: userData.mobileNumber,
          role: "USER"
        }
      }
    };
  }
};
