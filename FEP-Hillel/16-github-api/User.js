class User {
    static getUser(inputValue) {
        return fetch(`https://api.github.com/users/${inputValue}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }

                throw new Error(
                    `Can't found user with this name ${inputValue}`
                );
            })
            .catch((e) => console.log(e.message));
    }
}

export default User;
