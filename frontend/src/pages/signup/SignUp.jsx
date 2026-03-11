import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-xl shadow-xl bg-black/40 backdrop-blur-lg border border-white/20">
				<h1 className="text-3xl font-semibold text-center text-white drop-shadow-lg">
					Sign Up <span className="text-blue-400">Chatify</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className="label p-2">
							<span className="text-base text-white">Full Name</span>
						</label>
						<input
							type="text"
							placeholder="Vinay Pandey"
							className="w-full input bg-black/40 text-white border-white/20 h-10"
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className="label p-2">
							<span className="text-base text-white">Username</span>
						</label>
						<input
							type="text"
							placeholder="Username"
							className="w-full input bg-black/40 text-white border-white/20 h-10"
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div>
						<label className="label">
							<span className="text-base text-white">Password</span>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							className="w-full input bg-black/40 text-white border-white/20 h-10"
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className="label">
							<span className="text-base text-white">Confirm Password</span>
						</label>
						<input
							type="password"
							placeholder="Confirm Password"
							className="w-full input bg-black/40 text-white border-white/20 h-10"
							value={inputs.confirmPassword}
							onChange={(e) =>
								setInputs({ ...inputs, confirmPassword: e.target.value })
							}
						/>
					</div>

					<GenderCheckbox
						onCheckboxChange={handleCheckboxChange}
						selectedGender={inputs.gender}
					/>

					<Link
						to={"/login"}
						className="text-sm text-gray-200 hover:underline hover:text-blue-400 mt-2 inline-block"
					>
						Already have an account?
					</Link>

					<div>
						<button
							className="btn btn-block btn-sm mt-3 bg-blue-500 hover:bg-blue-600 border-none"
							disabled={loading}
						>
							{loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
