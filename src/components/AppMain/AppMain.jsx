import React from 'react';

// react router import
import { Route } from 'react-router-dom'; 

// styling import 
import './AppMain.scss'; 

// component imports 
import Login from '../Login/Login'; 
import SignUp from '../SignUp/SignUp'; 
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import PrivateRoute from '../utils/PrivateRoute'; 
import Profile from '../Profile/Profile'; 
import DesignYourPallet from '../DesignYourPallet/DesignYourPallet'; 
import DesignYourBox from '../DesignYourBox/DesignYourBox'; 
import DesignYourBoxLid from '../DesignYourBoxLid/DesignYourBoxLid'; 
import PickYourDivider from '../PickYourDivider/PickYourDivider'; 
import DesignYourFoam from '../DesignYourFoam/DesignYourFoam'; 
import OrderDetails from '../OrderDetails/OrderDetails';
import StartBuilding from '../StartBuilding/StartBuilding';  
import MySavedKits from '../MySavedKits/MySavedKits'; 
import KitComplete from '../KitComplete/KitComplete'; 

const AppMain = () => {
    return ( 
        <div className='app-main-background'>
            {/* universal routes */}
            <Route exact path='/' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route path='/account-recovery' component={ForgotPassword} />
            {/* authenticated routes */}
            <PrivateRoute path='/profile' component={Profile} />
            <PrivateRoute path="/design-your-pallet" component={DesignYourPallet} />
            <PrivateRoute path="/design-your-box" component={DesignYourBox} />
            <PrivateRoute path="/design-your-box-lid" component={DesignYourBoxLid} />
            <PrivateRoute path="/pick-your-divider" component={PickYourDivider} />
            <PrivateRoute path="/design-your-foam" component={DesignYourFoam} />
            <PrivateRoute path="/order-details" component={OrderDetails} />
            <PrivateRoute path="/start-building" component={StartBuilding} />
            <PrivateRoute path="/my-saved-kits" component={MySavedKits} /> 
            <PrivateRoute path="/kit-complete" component={KitComplete} />
        </div>
     );
}
 
export default AppMain;