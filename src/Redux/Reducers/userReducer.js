const initialState = {
  user: {
    id: '',
    email: '',
    password: ''
  },
  users: [] // Initialize as an empty array
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEWUSERDATA':
      return {
        ...state,
        user: {
          ...state.user, // Keep existing user data
          ...action.payload 
        }
      };

    case 'USERDATA':
      return {
        ...state,
        users: [...state.users, action.payload] 
    };

    case 'DELETEUSERDATA':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload) 
      };

    default:
      return state; 
  }
};

export default userReducer;
