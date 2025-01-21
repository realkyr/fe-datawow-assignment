import SignInButton from '@/features/SignIn/_components/SignInButton';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-dark-green shadow-lg overflow-hidden h-screen w-screen">
        {/* Image Section */}
        <div className="flex items-center justify-center bg-green-app p-8 md:order-2 rounded-br-2xl md:rounded-br-none rounded-bl-2xl md:rounded-tl-2xl md:rounded-bl-2xl">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/200" // Placeholder image
              alt="Placeholder"
              className="mx-auto mb-4"
            />
            <p className="text-white text-lg font-semibold">a Board</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex items-center justify-center p-8">
          <form className="w-full max-w-sm space-y-4">
            <h2 className="text-white text-xl font-bold">Sign in</h2>
            <SignInButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
