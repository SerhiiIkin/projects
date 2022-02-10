class User {
    static getUser(inputValue) {
        return fetch(`https://api.github.com/users/${inputValue}`)
            .then((response) => response.json())
            .catch((e) => console.log(e));
    }
}

export default User;
