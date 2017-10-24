import { USER_SIGNED_IN } from '../actions/index';

const userUid = (state = localStorage.getItem('user_uid'), action) => {
    switch (action.type) {
        case USER_SIGNED_IN:
            return action.userUid;
        default:
            return state;
    }
};

export default userUid;
