import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import '../sign-in/sign-in.styles.scss'

export default class SignIn extends React.Component {
    constructor(){
        super();
        this.state=({
            email:'',
            password:'',
        })
    }
        handleSubmit=(event)=>{
            event.preventDefault();
            this.setState({email:'',password:''})
        }
        handleChange=(event)=>{
            console.log(event.target);
        const {value,name}=event.target;
        this.setState({[name]:value})
        }
    


    render() {
        return (
            <div className="sign-in">
                <h2> I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" label="Email" value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput type="password" name="password" label="Password" value={this.state.password} handleChange={this.handleChange} required/>
                    <CustomButton type="submit">SIGN IN</CustomButton> 
                    <CustomButton>Google Signin</CustomButton>
                </form>
            </div>
        )
    }
}
