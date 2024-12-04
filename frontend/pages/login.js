// pages/login.js
import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome!</h2>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg mb-3">Continue with Google</button>
        <button className="w-full bg-gray-800 text-white py-2 rounded-lg mb-3">Continue with GitHub</button>
        <button className="w-full bg-green-600 text-white py-2 rounded-lg mb-3">Sign in with SSO</button>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-400">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <input
          type="email"
          placeholder="Enter an email address"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none"
        />
        <button className="w-full bg-green-500 text-white py-2 rounded-lg">Sign in by email</button>
        <p className="text-center text-gray-500 text-sm mt-4">
          No account? <Link href="/signup" className="text-green-500">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
