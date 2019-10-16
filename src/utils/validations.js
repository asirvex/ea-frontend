export const validatePassword = (password) => {
    const passwordValid = password.length >= 6;
    const { formErrors } = this.state;
    this.setState({ passwordValid });
    if (passwordValid) {
        this.setState({passwordValid: true, formErrors: {...formErrors, password: ''}});
    } else {
        this.setState({passwordValid: false, formErrors: {...formErrors, password: 'Invalid password'}});
    }
    return passwordValid;
}

export const validateEmail = (value) => {
    const { formErrors } = this.state;
    const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false;
    if (emailValid) {
        this.setState({emailValid: true, formErrors: {...formErrors, email: ''}})
    } else {
        this.setState({emailValid: false, formErrors: {...formErrors, email: 'Invalid email' } });
    }
    return emailValid;
}