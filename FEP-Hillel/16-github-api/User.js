class User {
    static getUser(inputValue) {
        return new Promise((resolve, reject) => {
            resolve(
                fetch(`https://api.github.com/users/${inputValue}`)
                    .then((response) => response.json())
                    .catch((e) => console.log(e))
            );
        }).catch((e) => console.log(e));
    }
}

export default User;
