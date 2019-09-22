import React from 'react';

import './signIn-and-signUp.component.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SingInAndSignUpPage = () => (
    <div className='signIn-and-signUp'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SingInAndSignUpPage;