import shoppingCardSlice from "./shoppingCard/shoppingCardSlice";
import userAuthSlice from "./userAuth/userAuthSlice";
import PersonalDetailsSlice from "./userAuth/userPersonalDetails"

const rootReducer = {
    shoppingCardSlice,
    userAuthSlice,
    PersonalDetailsSlice,
}
export default rootReducer;
