import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
// import { toast } from 'react-toastify';
const FormComponent = (props) => {
	const { onSubmit, handleSubmit, register, errors, watch } = props;
	const watchAllFields = watch();
	const isDisabled = !watchAllFields.email || !watchAllFields.password || !watchAllFields.terms;

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-control">
					<label>Email</label>
					<input
						type="email"
						name="email"
						{...register("email", {
							required: true,
							pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
						})}
					/>
					{errors.email && errors.email.type === "required" && (
						<p className="errorMsg">Email is required.</p>
					)}
					{errors.email && errors.email.type === "pattern" && (
						<p className="errorMsg">Email is not valid.</p>
					)}
					<label>Parola</label>
					<input
						type="password"
						name="password"
						{...register("password", {
							required: true,
							minLength: 6
						})}
					/>
					{errors.password && errors.password.type === "required" && (
						<p className="errorMsg">Password is required.</p>
					)}
					{errors.password && errors.password.type === "minLength" && (
						<p className="errorMsg">Password must be at least 6 characters long.</p>
					)}
					<label>
						<input
							type="checkbox"
							name="terms"
							{...register("terms", {
								required: true,
							})}
						/>
						I accept the terms and conditions
					</label>
					{errors.terms && errors.terms.type === "required" && (
						<p className="errorMsg">You must accept the terms and conditions.</p>
					)}
				</div>
				<button type="submit" disabled={isDisabled}>Gönder</button>
			</form>
		</>
	);
};

FormComponent.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	watch: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
};

export default FormComponent;
