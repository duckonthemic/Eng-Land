// pages/signup.js
import Link from 'next/link';

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create an account</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none"
        />
        <button className="w-full bg-green-500 text-white py-2 rounded-lg">Sign Up</button>
        <p className="text-center text-gray-500 text-sm mt-4">
          Already have an account? <Link href="/login" className="text-green-500">Log in</Link>
        </p>
      </div>
    </div>
  );
}
