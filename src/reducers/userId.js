import { USER_SIGNED_IN, USER_SIGNED_OUT, getInirUserUid } from '../actions/index';

const userUid = (state = getInirUserUid(), action) => {
    switch (action.type) {
        case USER_SIGNED_IN:
            return action.userUid;
        case USER_SIGNED_OUT:
            return false;
        default:
            return state;
    }
};

export default userUid;
