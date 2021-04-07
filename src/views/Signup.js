import "../asset/signup.css"
import { TextField, Button } from "@material-ui/core";
import {Link} from "react-router-dom"

function Signup() {
	return (
		<div id="signup-div">
			<form id="signup-form">
				<TextField id="username-input" label="Username" variant="filled" />
				<TextField id="password-input" label="Password" variant="filled" type="password" />
				<TextField id="email-input" label="Email" variant="filled" />
                <TextField id="first-name-input" label="First Name" variant="filled" />
				<TextField id="last-name-input" label="Last Name" variant="filled" />
				<Button variant="contained" color="primary">
				Submit
				</Button>
				<span>
        			Already a member? <Link to="/signin">Sign In</Link> 
        		</span>
			</form>
    	</div>
	)
}

export default Signup;