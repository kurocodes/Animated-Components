import { useState } from "react";
import BaseModal from "./BaseModal";

export default function SuccessModalView() {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isCompletionOpen, setIsCompletionOpen] = useState(false);
  const [isAchivementOpen, setIsAchivementOpen] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <button
          className="bg-green-500 hover:bg-green-600 text-sm px-4 py-2 text-white rounded-lg cursor-pointer"
          onClick={() => setIsSuccessOpen(true)}
        >
          Success Message
        </button>
        <button
          className="bg-slate-900 hover:bg-slate-800 text-sm px-4 py-2 text-white rounded-lg cursor-pointer"
          onClick={() => setIsCompletionOpen(true)}
        >
          Task Completion
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-600 text-sm px-4 py-2 text-white rounded-lg cursor-pointer"
          onClick={() => setIsAchivementOpen(true)}
        >
          Achivement Unlocked
        </button>
      </div>

      {/* Success Modal (No Title) */}
      <BaseModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        showHeader={false}
        size="sm"
      >
        <div className="text-center space-y-4">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30">
            <svg
              className="h-8 w-8 text-green-600 dark:text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Success!
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Your changes have been saved successfully. You can continue
              working or close this dialog.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setIsSuccessOpen(false)}
              className={`bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-3.5 py-2 rounded-md cursor-pointer`}
            >
              Continue
            </button>
          </div>
        </div>
      </BaseModal>

      {/* Task Completion Modal */}
      <BaseModal
        isOpen={isCompletionOpen}
        onClose={() => setIsCompletionOpen(false)}
        showHeader={false}
        size="sm"
      >
        <div className="text-center space-y-4">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30">
            <svg
              className="h-10 w-10 text-blue-600 dark:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.25-4.875c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0117.25 18.75h-10.5A2.25 2.25 0 014.5 16.5V6.108c0-1.135.845-2.098 1.976-2.192.374-.03.748-.057 1.124-.08M15 12.75a3 3 0 11-6 0 3 3 0 016 0zm-3 2.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              />
            </svg>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Task Completed!
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              You have successfully completed the onboarding process. Welcome to
              our platform!
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
              What's Next?
            </h4>
            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 text-left">
              <li>• Explore your dashboard</li>
              <li>• Set up your profile</li>
              <li>• Connect with team members</li>
              <li>• Start your first project</li>
            </ul>
          </div>

          <div className="flex justify-center space-x-3">
            <button
              className="bg-slate-100 hover:bg-slate-200 text-sm font-medium px-4 py-2 rounded-md cursor-pointer"
              onClick={() => setIsCompletionOpen(false)}
            >
              Later
            </button>
            <button
              className={`bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-md cursor-pointer`}
              onClick={() => setIsCompletionOpen(false)}
            >
              Get Started
            </button>
          </div>
        </div>
      </BaseModal>

      {/* Achievement Modal */}
      <BaseModal
        isOpen={isAchivementOpen}
        onClose={() => setIsAchivementOpen(false)}
        showHeader={false}
        size="sm"
      >
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-gradient-to-r from-purple-400 to bg-pink-400 animate-pulse">
              <svg
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.228a25.014 25.014 0 004.244.247C20.058 4.764 19.156 4.9 18 5.08m0 0V9.25c0 .621-.504 1.125-1.125 1.125M18 5.08a25.014 25.014 0 01-4.244.247A25.014 25.014 0 0112 5.25M7.73 9.728V9.25c0-.621.504-1.125 1.125-1.125M9.497 14.25H12m-2.503 0a7.454 7.454 0 01-.982-3.172M12 14.25a7.454 7.454 0 01-.981-3.172"
                />
              </svg>
            </div>
            <div className="absolute -top-2 -right-2">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-yellow-400 text-xs">
                🎉
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              Achievement Unlocked!
            </h3>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-1">
              First Modal Master
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Congratulations! You've successfully opened your first modal
              component. You're on your way to becoming a UI master!
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h5 className="text-sm font-medium text-purple-800 dark:text-purple-200">
                  Progress
                </h5>
                <p className="text-xs text-purple-600 dark:text-purple-300">
                  Next: Open 10 different modals
                </p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                  50+ XP
                </div>
                <div className="text-xs text-purple-500 dark:text-purple-400">
                  Level 1
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="bg-purple-200 dark:bg-purple-800 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-3">
            <button
              className={`bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 text-white text-sm font-medium px-4 py-2 rounded-md cursor-pointer`}
              onClick={() => setIsAchivementOpen(false)}
            >
              Awesome!
            </button>
          </div>
        </div>
      </BaseModal>
    </div>
  );
}
