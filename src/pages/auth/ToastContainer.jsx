import { ToastContainer } from "react-toastify"; // Import Bounce
import "react-toastify/dist/ReactToastify.css";

const CustomToastContainer = () => {
	return (
		<ToastContainer
			position="top-left"
			autoClose={1500}
			hideProgressBar={false}
			newestOnTop
			closeOnClick
			rtl={false}
			pauseOnFocusLoss={false}
			draggable={false}
			pauseOnHover={false}
			theme="colored"
			style={{ zIndex: 10000 }}

			// Set a high z-index value
		/>
	);
};

export default CustomToastContainer;
