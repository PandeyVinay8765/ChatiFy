import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import { useEffect } from "react";

function App() {
	const { authUser } = useAuthContext();

	useEffect(() => {
		// request notification permission
		if ("Notification" in window && Notification.permission !== "granted") {
			Notification.requestPermission();
		}

		// unlock audio after first user interaction
		const unlockAudio = () => {
			const audio = new Audio("/notification.mp3");
			audio.play().then(() => {
				audio.pause();
				audio.currentTime = 0;
			}).catch(() => {});
			window.removeEventListener("click", unlockAudio);
		};

		window.addEventListener("click", unlockAudio);
	}, []);

	return (
		<div className='p-4 h-screen flex items-center justify-center'>
			<Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
