import React from 'react'

const OrderComplete = () => {
  return (
    <div>
            <div className="min-w-min">
        <div>
          <div className="lg:max-w-4xl w-full  mx-auto ">
            <h1 className="text-center font-bold my-8">Complete !!</h1>
            <div className="grid grid-cols-3 gap-8">
              <div className="hidden lg:flex flex items-center gap-4 lg:block">
                <div
                  className="lg:w-12 w-8 lg:h-12 h-5 rounded-full  
                    inline-flex items-center justify-center  
                    bg-primary text-white text-xl font-bold"
                >
                  1
                </div>
                <p className="lg:text-xl font-bold">Shopping Cart</p>
              </div>
              <div className="flex items-center gap-4 ">
                <div
                  className="lg:w-12 w-8 lg:h-12 h-5  rounded-full  
                    inline-flex items-center justify-center  
                    bg-primary text-white text-xl font-bold text-center"
                >
                  2
                </div>
                <p className="lg:text-xl font-bold text-center">Checkout Detail</p>
              </div>
              <div className="hidden lg:block lg:flex flex items-center gap-4">
                <div
                  className="lg:w-12 w-8 lg:h-12 h-5  rounded-full  
                    inline-flex items-center justify-center  
                    bg-primary text-white text-xl font-bold"
                >
                  3
                </div>
                <p className="lg:text-xl font-bold">Oder Complete</p>
              </div>
            </div>
          </div>
        </div>
      </div>







    </div>
  )
}

export default OrderComplete;