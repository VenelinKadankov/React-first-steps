const baseUrl = 'http://localhost:3005/api/users';

export const GetAllUsers = async () => {
    const users = await fetch(baseUrl);
    const result = await users.json()

    return result;
}

export const GetUser = async (id) => {
    const user = await fetch(baseUrl + `/${id}`);
    const result = await user.json();
    
    return result;
}