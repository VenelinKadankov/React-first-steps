const baseUrl = 'http://localhost:3005/api/users';

export const getAllUsers = async () => {
    const users = await fetch(baseUrl);
    const result = await users.json();

    console.log(result.users);

    return result.users;
}

export const getUser = async (id) => {
    const user = await fetch(baseUrl + `/${id}`);
    const result = await user.json();
    
    return result.user;
}