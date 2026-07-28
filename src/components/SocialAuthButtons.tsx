"use client";

interface SocialAuthButtonsProps {
  onGoogleClick?: () => void;
  onMicrosoftClick?: () => void;
  dividerText?: string;
  className?: string;
}

export default function SocialAuthButtons({
  onGoogleClick,
  onMicrosoftClick,
  dividerText = "Or continue with",
  className = "",
}: SocialAuthButtonsProps) {
  return (
    <div className={`mt-6 ${className}`}>
      {dividerText && (
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">{dividerText}</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={onGoogleClick}
          className="w-full inline-flex justify-center items-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
        >
          <span className="sr-only">Sign in with Google</span>
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="hidden sm:inline">Google</span>
        </button>

        <button
          type="button"
          onClick={onMicrosoftClick}
          className="w-full inline-flex justify-center items-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
        >
          <span className="sr-only">Sign in with Microsoft</span>
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
            <path fill="#F25022" d="M11.4 11.4H2.6V2.6h8.8v8.8z" />
            <path fill="#7FBA00" d="M21.4 11.4h-8.8V2.6h8.8v8.8z" />
            <path fill="#00A4EF" d="M11.4 21.4H2.6v-8.8h8.8v8.8z" />
            <path fill="#FFB900" d="M21.4 21.4h-8.8v-8.8h8.8v8.8z" />
          </svg>
          <span className="hidden sm:inline">Microsoft</span>
        </button>
      </div>
    </div>
  );
}
