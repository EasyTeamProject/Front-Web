import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const styles = {
    registerBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        padding: '15px',
        flexDirection: 'column',
        borderRadius: '3px',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    registerFields:{
        display: 'flex',
        flexDirection: 'column',
    },
    registerButton:{
        margin: 'auto'
    }
}


class RegisterBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        };
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    submitRegister(e){
        var pw = this.state.password;
        Axios.post('http://0.0.0.0:3000/users', {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        })
        .then((response) => {
            (Axios.post('http://0.0.0.0:3000/sessions', {
                email: response.data.email,
                password: pw
            })
            .then(function(response){
                localStorage.setItem('token', response.data.success);
            })
            .catch(function(error){
                console.log(error);
            })
            );
        })
        .catch(function(error){
            console.log(error);
        });
    }

    render(){
        return(
            <div className='registerBox-container' style={styles.registerBox}>

                <div className='box' style={styles.registerFields}>
                    <TextField id='firstname-input'
                        className='register-input'
                        label='First Name'
                        required
                        onChange={this.handleChange('first_name')}
                    />

                    <TextField id='lastname-input'
                        className='register-input'
                        label='Last Name'
                        required
                        onChange={this.handleChange('last_name')}
                    />

                    <TextField id='email-input'
                        className='register-input'
                        label='Email'
                        onChange={this.handleChange('email')}
                        type='email'
                        required
                    />

                    <TextField id='password-input'
                        className='register-input'
                        hintText='Enter your Password'
                        floatingLabelText='Password'
                        label='Password'
                        type='password'
                        required
                        onChange={this.handleChange('password')}
                        
                    />
                    <Link style={styles.registerButton} to='/homepage'>
                        <Button className='registerButton' 
                            label='Sign In'
                            onClick={this.submitRegister.bind(this)}
                        >
                            Register
                        </Button>
                    </Link>
                    
                </div>

            </div>
        );
    }
}

export default RegisterBox;