

export default function Footer() {
  return (
        <footer className="w-11/12 mx-auto">
           <div className="text-center mb-7">
           <h2 className="text-3xl font-bold text-black mb-3">Gadget Buy</h2>
            <p className="text-sm text-gray-600 font-thin">
            Leading the way in cutting-edge technology and innovation.
            </p>
           </div>
            <hr></hr>
            <div className="grid grid-cols-1 md:grid-cols-3 text-center mt-7">
                <div>
                  <h3 className="text-lg font-extrabold mb-2">Services</h3>
                    <ul className="text-sm text-gray-500">
                        <li>Product Support</li>
                        <li>Order Tracking</li>
                        <li>Shipping & Delivery</li>
                        <li>Returns</li>
                    </ul>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold">Company</h3>
                    <ul className="text-sm text-gray-500">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold">Legal</h3>
                    <ul className="text-sm text-gray-500">
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>
        </footer>
  )
}




