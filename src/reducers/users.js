import { USER_SIGNED_IN } from '../actions/index';

const users = (state = null, action) => {
    switch (action.type) {
        case USER_SIGNED_IN:
            return action.user;
        default:
            return state;
    }
};

export default users;
