// src/pages/account/components/AddressCard.jsx
import React, { useState, useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
	addAddress,
	getAllAddresses,
	updateAddress,
	deleteAddress,
} from "@/api/apiAddress";

const AddressCard = () => {
	const [addresses, setAddresses] = useState([]);
	const [editAddress, setEditAddress] = useState(null);
	const [isEditMode, setIsEditMode] = useState(false);

	useEffect(() => {
		fetchAddresses();
	}, []);

	const fetchAddresses = async () => {
		try {
			const response = await getAllAddresses();
			setAddresses(response.data);
		} catch (error) {
			console.error("Error fetching addresses:", error);
		}
	};

	const handleEdit = (address) => {
		setEditAddress(address);
		setIsEditMode(true);
	};

	const handleSave = async () => {
		try {
			if (editAddress._id) {
				await updateAddress(editAddress._id, editAddress);
			} else {
				await addAddress(editAddress);
			}
			setEditAddress(null);
			setIsEditMode(false);
			fetchAddresses();
		} catch (error) {
			console.error("Error saving address:", error);
		}
	};

	const handleDelete = async (id) => {
		try {
			await deleteAddress(id);
			fetchAddresses();
		} catch (error) {
			console.error("Error deleting address:", error);
		}
	};

	return (
		<div>
			{addresses.map((address) => (
				<div
					key={address._id}
					className="py-8 px-16 rounded-lg border border-base-500"
				>
					<div className="flex justify-between">
						<p className="text-lg font-bold">{address.address_line1}</p>
						<Dialog>
							<DialogTrigger asChild>
								<p
									className="flex items-center gap-1 cursor-pointer font-medium text-base-700 hover:text-black duration-300"
									onClick={() => handleEdit(address)}
								>
									<AiOutlineEdit className="text-base" />
									Edit
								</p>
							</DialogTrigger>
							<DialogContent className="sm:max-w-xl px-8">
								<DialogHeader>
									<DialogTitle>
										{isEditMode ? "Edit Address" : "Add Address"}
									</DialogTitle>
								</DialogHeader>
								<div className="grid gap-4 py-4">
									<div className="grid grid-cols-4 items-center gap-4">
										<Label htmlFor="address_line1" className="text-right">
											Address Line 1
										</Label>
										<Input
											id="address_line1"
											value={editAddress?.address_line1 || ""}
											onChange={(e) =>
												setEditAddress({
													...editAddress,
													address_line1: e.target.value,
												})
											}
											className="col-span-3"
										/>
									</div>
									<div className="grid grid-cols-4 items-center gap-4">
										<Label htmlFor="address_line2" className="text-right">
											Address Line 2
										</Label>
										<Input
											id="address_line2"
											value={editAddress?.address_line2 || ""}
											onChange={(e) =>
												setEditAddress({
													...editAddress,
													address_line2: e.target.value,
												})
											}
											className="col-span-3"
										/>
									</div>
									<div className="grid grid-cols-4 items-center gap-4">
										<Label htmlFor="postcode" className="text-right">
											Postcode
										</Label>
										<Input
											id="postcode"
											value={editAddress?.postcode || ""}
											onChange={(e) =>
												setEditAddress({
													...editAddress,
													postcode: e.target.value,
												})
											}
											className="col-span-3"
										/>
									</div>
									<div className="grid grid-cols-4 items-center gap-4">
										<Label htmlFor="province" className="text-right">
											Province
										</Label>
										<Input
											id="province"
											value={editAddress?.province || ""}
											onChange={(e) =>
												setEditAddress({
													...editAddress,
													province: e.target.value,
												})
											}
											className="col-span-3"
										/>
									</div>
									<div className="grid grid-cols-4 items-center gap-4">
										<Label htmlFor="district" className="text-right">
											District
										</Label>
										<Input
											id="district"
											value={editAddress?.district || ""}
											onChange={(e) =>
												setEditAddress({
													...editAddress,
													district: e.target.value,
												})
											}
											className="col-span-3"
										/>
									</div>
									<div className="grid grid-cols-4 items-center gap-4">
										<Label htmlFor="subdistrict" className="text-right">
											Subdistrict
										</Label>
										<Input
											id="subdistrict"
											value={editAddress?.subdistrict || ""}
											onChange={(e) =>
												setEditAddress({
													...editAddress,
													subdistrict: e.target.value,
												})
											}
											className="col-span-3"
										/>
									</div>
									<div className="flex items-center justify-end space-x-2">
										<Checkbox id="defaultAddress" />
										<label
											htmlFor="defaultAddress"
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											Set as Default Address
										</label>
									</div>
								</div>
								<DialogFooter>
									<Button type="button" onClick={handleSave}>
										Save changes
									</Button>
								</DialogFooter>
							</DialogContent>
						</Dialog>
					</div>
					<article className="mt-2 grid gap-1.5">
						<p>{address.address_line1}</p>
						<p>{address.address_line2}</p>
						<p>{address.postcode}</p>
						<p>{address.province}</p>
						<p>{address.district}</p>
						<p>{address.subdistrict}</p>
						<Button variant="danger" onClick={() => handleDelete(address._id)}>
							Delete
						</Button>
					</article>
				</div>
			))}
		</div>
	);
};

export default AddressCard;
