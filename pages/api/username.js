import { userStore } from '../../utils/company';

export default Handler({
    post: register
});

function register(req, res) {
    // split out password from user details 
    const { user } = req.body;

    // validate
    if (userStore.find(x => x.username === user.username))
        throw `User with the username "${user.username}" already exists`;

    userStore.create(user);
    return res.status(200).json({});
}