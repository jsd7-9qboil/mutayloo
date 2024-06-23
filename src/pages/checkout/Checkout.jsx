import React, { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    address: '',
    firstName: '',
    lastName: '',
    phone: '',
    addressDetails: {
      subDistrict: '',
      district: '',
      province: '',
      postalCode: '',
    },
    additionalInfo: '',
    paymentMethod: 'creditCard',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      addressDetails: {
        ...prevState.addressDetails,
        [name]: value,
      },
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.addressDetails.houseAndStreet) newErrors.houseAndStreet = 'Address is required';
    if (!formData.addressDetails.subDistrict) newErrors.subDistrict = 'Subdistrict is required';
    if (!formData.addressDetails.district) newErrors.district = 'District is required';
    if (!formData.addressDetails.province) newErrors.province = 'Province is required';
    if (!formData.addressDetails.postalCode) newErrors.postalCode = 'Postal code is required';
    if (formData.paymentMethod === 'creditCard') {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.expirationDate) newErrors.expirationDate = 'Expiration date is required';
      if (!formData.cvc) newErrors.cvc = 'CVC is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formData);
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col py-20 mx-auto w-full bg-white max-w-[480px]">
        <div className="flex flex-col w-full px-4">
          <div className="self-center justify-center px-8 text-4xl font-medium leading-10 tracking-tight text-black bg-white">
            Check Out
          </div>
          <div className="flex justify-between gap-5 mt-6 text-base font-semibold whitespace-nowrap">
            <div className="flex flex-col pb-7 border-b-2 border-purple-600 border-solid leading-[162.5%]">
              <div className="flex gap-4">
                <div className="justify-center items-center px-4 py-2 text-center text-gray-50 bg-purple-600 h-[43px] rounded-[40px] w-[43px]">
                  2
                </div>
                <div className="flex-1 my-auto text-zinc-800">Checkout</div>
              </div>
            </div>
            <div className="flex self-start gap-4">
              <div className="justify-center items-center px-4 py-2 text-center text-gray-50 bg-violet-200 h-[41px] leading-[150%] rounded-[40px] w-[41px]">
                3
              </div>
              <div className="flex-1 my-auto text-gray-400 leading-[162.5%]">
                Finish
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full px-4 py-10 text-base leading-7 rounded mt-28 text-zinc-500">
          <div className="text-xl font-medium leading-7 text-black">
            Contact Information
          </div>
          <div className="mt-6 text-xs font-bold leading-3 uppercase">
            ที่อยู่การจัดส่ง (ถ้ามี)
          </div>
          <div className="flex flex-col justify-center w-full px-4 py-2 mt-3 bg-white border border-solid rounded-md whitespace-nowrap border-zinc-500">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="flex-1"
              placeholder="Address"
            />
          </div>
          <div className="mt-6 text-xs font-bold leading-3 uppercase">
            ชื่อจริง *
          </div>
          <div className="justify-center px-4 py-2 mt-3 bg-white border border-solid rounded-md border-stone-300 text-zinc-500">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="flex-1"
              placeholder="First name"
            />
            {errors.firstName && <div className="text-xs text-red-500">{errors.firstName}</div>}
          </div>
          <div className="mt-6 text-xs font-bold leading-3 uppercase">
            นามสกุล *
          </div>
          <div className="justify-center px-4 py-2 mt-3 bg-white border border-solid rounded-md border-stone-300 text-zinc-500">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="flex-1"
              placeholder="Last name"
            />
            {errors.lastName && <div className="text-xs text-red-500">{errors.lastName}</div>}
          </div>
          <div className="mt-6 text-xs font-bold leading-3 uppercase">
            โทรศัพท์ *
          </div>
          <div className="justify-center px-4 py-2 mt-3 bg-white border border-solid rounded-md whitespace-nowrap border-stone-300 text-zinc-500">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1"
              placeholder="Phone"
            />
            {errors.phone && <div className="text-xs text-red-500">{errors.phone}</div>}
          </div>
          <div className="mt-6 text-xs font-bold leading-3 uppercase">
            ที่อยู่ *
          </div>
          <div className="justify-center px-4 py-2 mt-3 bg-white border border-solid rounded-md border-stone-300 text-zinc-500">
            <input
              type="text"
              name="houseAndStreet"
              value={formData.addressDetails.houseAndStreet}
              onChange={handleAddressChange}
              className="flex-1"
              placeholder="House and street"
            />
            {errors.houseAndStreet && <div className="text-xs text-red-500">{errors.houseAndStreet}</div>}
          </div>
          <div className="flex flex-col justify-center w-full px-4 py-2 mt-3 bg-white border border-solid rounded-md border-zinc-500">
            <div className="flex gap-2">
              <input
                type="text"
                name="subDistrict"
                value={formData.addressDetails.subDistrict}
                onChange={handleAddressChange}
                className="flex-1"
                placeholder="Subdistrict"
              />
              {errors.subDistrict && <div className="text-xs text-red-500">{errors.subDistrict}</div>}
            </div>
          </div>
          <div className="flex flex-col justify-center w-full px-4 py-2 mt-3 bg-white border border-solid rounded-md border-zinc-500">
            <div className="flex gap-2">
              <input
                type="text"
                name="district"
                value={formData.addressDetails.district}
                onChange={handleAddressChange}
                className="flex-1"
                placeholder="District"
              />
              {errors.district && <div className="text-xs text-red-500">{errors.district}</div>}
            </div>
          </div>
          <div className="flex flex-col justify-center w-full px-4 py-2 mt-3 bg-white border border-solid rounded-md whitespace-nowrap border-zinc-500">
            <div className="flex gap-2">
              <input
                type="text"
                name="province"
                value={formData.addressDetails.province}
                onChange={handleAddressChange}
                className="flex-1"
                placeholder="Province"
              />
              {errors.province && <div className="text-xs text-red-500">{errors.province}</div>}
            </div>
          </div>
          <div className="flex flex-col justify-center w-full px-4 py-2 mt-3 bg-white border border-solid rounded-md border-zinc-500">
            <div className="flex gap-2">
              <input
                type="text"
                name="postalCode"
                value={formData.addressDetails.postalCode}
                onChange={handleAddressChange}
                className="flex-1"
                placeholder="Postal code"
              />
              {errors.postalCode && <div className="text-xs text-red-500">{errors.postalCode}</div>}
            </div>
          </div>
          <div className="mt-6 text-xs font-bold leading-3 uppercase">
            ข้อมูลเพิ่มเติม
          </div>
          <div className="justify-center px-4 py-2 mt-3 bg-white border border-solid rounded-md border-stone-300 text-zinc-500">
            <input
              type="text"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="flex-1"
              placeholder="Additional information"
            />
          </div>
          <div className="mt-6 text-xs font-bold leading-3 uppercase">
            วิธีการชำระเงิน
          </div>
          <div className="justify-center px-4 py-2 mt-3 bg-white border border-solid rounded-md border-stone-300 text-zinc-500">
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="flex-1"
            >
              <option value="creditCard">Credit Card</option>
              <option value="bankTransfer">Bank Transfer</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          {formData.paymentMethod === 'creditCard' && (
            <>
              <div className="mt-6 text-xs font-bold leading-3 uppercase">
                Card Number *
              </div>
              <div className="justify-center px-4 py-2 mt-3 bg-white border border-solid rounded-md border-stone-300 text-zinc-500">
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="flex-1"
                  placeholder="Card number"
                />
                {errors.cardNumber && <div className="text-xs text-red-500">{errors.cardNumber}</div>}
              </div>
              <div className="mt-6 text-xs font-bold leading-3 uppercase">
                Expiration Date *
              </div>
              <div className="justify-center px-4 py-2 mt-3 bg-white border border-solid rounded-md border-stone-300 text-zinc-500">
                <input
                  type="text"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleChange}
                  className="flex-1"
                  placeholder="Expiration date"
                />
                {errors.expirationDate && <div className="text-xs text-red-500">{errors.expirationDate}</div>}
              </div>
              <div className="mt-6 text-xs font-bold leading-3 uppercase">
                CVC *
              </div>
              <div className="justify-center px-4 py-2 mt-3 bg-white border border-solid rounded-md border-stone-300 text-zinc-500">
                <input
                  type="text"
                  name="cvc"
                  value={formData.cvc}
                  onChange={handleChange}
                  className="flex-1"
                  placeholder="CVC"
                />
                {errors.cvc && <div className="text-xs text-red-500">{errors.cvc}</div>}
              </div>
            </>
          )}
          
<div className="flex flex-col p-4 mx-auto w-full bg-white rounded-md max-w-[480px]">
      <div className="text-xl font-medium leading-7 text-neutral-900">
        Order summary
      </div>
      <div className="flex flex-col justify-center py-4 mt-4 border-b border-gray-200 border-solid">
        <div className="flex gap-4">
          <div className="flex flex-col justify-center">
            <div className="w-24 h-24 bg-purple-600 shrink-0" />
          </div>
          <div className="flex flex-col items-start pb-1.5 pl-8">
            <div className="text-sm font-semibold leading-5 text-neutral-900">
              Tray Table
            </div>
            <div className="mt-2 text-xs leading-5 text-zinc-500">
              Color: Black
            </div>
            <div className="flex flex-col justify-center items-start py-1.5 mt-2 rounded border border-solid border-zinc-500">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&"
                className="w-16 aspect-[3.23]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center py-4 mt-6 border-b border-gray-200 border-solid">
        <div className="flex gap-4">
          <div className="flex flex-col justify-center">
            <div className="w-24 h-24 bg-purple-600 shrink-0" />
          </div>
          <div className="flex flex-col items-start pb-1.5 pl-8">
            <div className="text-sm font-semibold leading-5 text-neutral-900">
              Tray Table
            </div>
            <div className="mt-2 text-xs leading-5 text-zinc-500">
              Color: Red
            </div>
            <div className="flex flex-col justify-center items-start py-1.5 mt-2 rounded border border-solid border-zinc-500">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&"
                className="w-16 aspect-[3.23]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center py-4 mt-6 border-b border-gray-200 border-solid">
        <div className="flex gap-4">
          <div className="flex flex-col justify-center">
            <div className="w-24 h-24 bg-purple-600 shrink-0" />
          </div>
          <div className="flex flex-col items-start pb-1.5 pl-8">
            <div className="text-sm font-semibold leading-5 text-neutral-900">
              Table Lamp
            </div>
            <div className="mt-2 text-xs leading-5 text-zinc-500">
              Color: Gold
            </div>
            <div className="flex flex-col justify-center items-start py-1.5 mt-2 rounded border border-solid border-zinc-500">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ab97a84e404a2a0174f266e474e44557c203f67cd779865947826d002e45a59?apiKey=301c9cad64f241bd80d4b2125f8b02a2&"
                className="w-16 aspect-[3.23]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-6 text-base whitespace-nowrap">
        <div className="justify-center px-4 py-3.5 bg-white rounded-md border border-solid border-stone-300 leading-[162.5%] text-zinc-600">
          Input
        </div>
        <div className="justify-center py-3 font-medium leading-7 tracking-tight text-center text-white bg-purple-600 rounded-lg px-7">
          Apply
        </div>
      </div>
      <div className="flex flex-col justify-center py-3.5 mt-4 text-base leading-7 border-b border-gray-200 border-solid">
        <div className="flex justify-center w-full gap-5">
          <div className="flex flex-1 gap-2 whitespace-nowrap text-neutral-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cebfcb5e4788737dcb6dc75251bba3ca921ac5d4f139f9f21b869fccfd6aa970?apiKey=301c9cad64f241bd80d4b2125f8b02a2&"
              className="self-start w-6 shrink-0 aspect-square"
            />
            <div>JenkateMW</div>
          </div>
          <div className="flex-auto my-auto font-semibold text-right text-green-700">
            -$25.00 [Remove]
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center py-3.5 text-base leading-7 whitespace-nowrap border-b border-gray-200 border-solid text-neutral-900">
        <div className="flex justify-center gap-5">
          <div>Shipping</div>
          <div className="my-auto font-semibold text-right">Free</div>
        </div>
      </div>
      <div className="flex flex-col justify-center py-3.5 text-base leading-7 whitespace-nowrap border-b border-gray-200 border-solid text-neutral-900">
        <div className="flex justify-center gap-5">
          <div>Subtotal</div>
          <div className="my-auto font-semibold text-right">$99.00</div>
        </div>
      </div>
      <div className="flex gap-5 justify-center mt-3.5 text-xl font-medium leading-7 whitespace-nowrap text-neutral-900">
        <div>Total</div>
        <div className="my-auto text-right">$234.00</div>
      </div>
    </div>
          <button type="submit" className="px-4 py-2 mt-6 text-white bg-purple-600 rounded-md">
            สั่งซื้อ
          </button>
        </div>
      </div>
    </form>
  );
};

export default Checkout;

