import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { editProfile, updateProfile } from "@/api/authApi";
import { toast } from "react-toastify";

const MyAccount = () => {
	const [userData, setUserData] = useState({
		fname: "",
		lname: "",
		email: "",
		password: "",
		newPassword: "",
		repeatNewPassword: "",
	});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchUserProfile = async () => {
			try {
				setIsLoading(true);
				const response = await editProfile();
				setUserData({
					fname: response.data.fname || "",
					lname: response.data.lname || "",
					email: response.data.email || "",
					password: "",
					newPassword: "",
					repeatNewPassword: "",
				});
			} catch (error) {
				console.error("Error fetching user profile:", error);
				toast.error("Error fetching user profile. Please try again later.");
			} finally {
				setIsLoading(false);
			}
		};
		fetchUserProfile();
	}, []);

	const handleChange = (e) => {
		const { id, value } = e.target;
		setUserData((prevState) => ({
			...prevState,
			[id]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (userData.newPassword !== userData.repeatNewPassword) {
			toast.error("New passwords do not match");
			return;
		}

		try {
			setIsLoading(true);
			const dataToUpdate = {
				fname: userData.fname,
				lname: userData.lname,
				email: userData.email,
			};

			if (userData.password && userData.newPassword) {
				dataToUpdate.password = userData.password;
				dataToUpdate.newPassword = userData.newPassword;
			}

			await updateProfile(dataToUpdate);
			toast.success("Profile updated successfully");

			// Clear password fields after successful update
			setUserData((prev) => ({
				...prev,
				password: "",
				newPassword: "",
				repeatNewPassword: "",
			}));
		} catch (error) {
			console.error("Error updating profile:", error);
			toast.error("รหัสผ่านของคุณไม่ถูกต้อง. โปรดลองใหม่อีกครั้ง.");
		} finally {
			setIsLoading(false);
		}
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<section>
			<form className="grid gap-8" onSubmit={handleSubmit}>
				<div className="grid w-full items-center gap-4">
					<h4 className="font-bold">Account Details</h4>

					<div className="grid w-full gap-2">
						<Label htmlFor="fname">First Name *</Label>
						<Input
							type="text"
							id="fname"
							placeholder="First Name"
							value={userData.fname}
							onChange={handleChange}
							aria-required="true"
						/>
					</div>

					<div className="grid w-full gap-2">
						<Label htmlFor="lname">Last Name *</Label>
						<Input
							type="text"
							id="lname"
							placeholder="Last Name"
							value={userData.lname}
							onChange={handleChange}
							aria-required="true"
						/>
					</div>

					<div className="grid w-full gap-2">
						<Label htmlFor="email">Email *</Label>
						<Input
							type="email"
							id="email"
							placeholder="Email"
							value={userData.email}
							onChange={handleChange}
							aria-required="true"
						/>
					</div>

					<div className="grid w-full items-center gap-4">
						<h4 className="font-bold">Change Password</h4>

						<div className="grid w-full gap-2">
							<Label htmlFor="password">Current Password</Label>
							<Input
								type="password"
								id="password"
								placeholder="Current Password"
								value={userData.password}
								onChange={handleChange}
							/>
						</div>

						<div className="grid w-full gap-2">
							<Label htmlFor="newPassword">New Password</Label>
							<Input
								type="password"
								id="newPassword"
								placeholder="New Password"
								value={userData.newPassword}
								onChange={handleChange}
							/>
						</div>

						<div className="grid w-full gap-2">
							<Label htmlFor="repeatNewPassword">Repeat New Password</Label>
							<Input
								type="password"
								id="repeatNewPassword"
								placeholder="Repeat New Password"
								value={userData.repeatNewPassword}
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>

				<div className="block">
					<Button className="mb-8" type="submit" disabled={isLoading}>
						{isLoading ? "Saving..." : "Save Changes"}
					</Button>
				</div>
			</form>
		</section>
	);
};

export default MyAccount;
