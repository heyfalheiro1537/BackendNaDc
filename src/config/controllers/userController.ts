export const getUser = async (request, reply) => {
    const { id } = request.params;
    // Logic to get the user from the database
    return { message: `Fetching user with ID: ${id}` };
  };

 export const putUser = async (request, reply) => {
    const { id } = request.params;
    // Logic to get update from the database
    return { message: `Fetching user with ID: ${id}` };
  };
  
  export const createUser = async (request, reply) => {
    const { name } = request.body;
    // Logic to create a user in the database
    return { message: `User ${name} has been created` };
  };
  
  export const deleteUser = async (request, reply) => {
    const { id } = request.params;
    // Logic to delete the user from the database
    return { message: `User with ID ${id} has been deleted` };
  };