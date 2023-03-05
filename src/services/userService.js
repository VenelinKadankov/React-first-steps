const baseUrl = 'http://localhost:3005/api/users';

export const getAllUsers = async () => {
    const users = await fetch(baseUrl);
    const result = await users.json();

    return result.users;
}

export const getUser = async (id) => {
    const user = await fetch(baseUrl + `/${id}`);
    const result = await user.json();

    return result.user;
}

export const createUser = async (user, _id = null) => {
    let method = '';

    if(_id){
        method = 'put';
    } else{
        method = 'post';
    }
    
    const userRequest = await fetch(
        baseUrl, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(user)
    });

    const result = await userRequest.json();

    return result.user;
}