import { useState } from "react";
import BaseModal from "./BaseModal";
import Button from "../Button/Button";

export default function FormModalView() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Contact form submitted!");
    setIsContactOpen(false);
  };

  const handleSettingSubmit = (e) => {
    e.preventDefault();
    // Handle settings save
    alert("Settings saved!");
    setIsSettingsOpen(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <Button onClick={() => setIsContactOpen(true)}>
          Contact Form Modal
        </Button>
        <Button
          className="bg-purple-500 hover:bg-purple-600"
          onClick={() => setIsSettingsOpen(true)}
        >
          Settings Form Modal
        </Button>
      </div>

      {/* Contact Form Modal */}
      <BaseModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        title="Contact Us"
        size="lg"
      >
        <form onSubmit={handleContactSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Subject *
            </label>
            <select
              id="subject"
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technial Support</option>
              <option value="billing">Billing Question</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Message *
            </label>
            <textarea
              id="message"
              rows={4}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none dark:bg-gray-700 dark:text-gray-100"
              placeholder="Please describe your question or issue..."
            ></textarea>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="newsletter"
              className="h-4 w-4 text-blue-600 rounded"
            />
            <label
              htmlFor="newsletter"
              className="ml-2 text-sm block text-gray-700 dark:text-gray-300"
            >
              Subscribe to our newsletter for updates
            </label>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-300 dark:border-gray-700">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setIsContactOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" onClick={() => setIsSettingsOpen(false)}>
              Send Message
            </Button>
          </div>
        </form>
      </BaseModal>

      {/* Settings Form Modal */}
      <BaseModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        title="User Settings"
        size="lg"
      >
        <form onSubmit={handleSettingSubmit} className="space-y-4">
          {/* Profile section */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
              Profile Settings
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="displayName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Display Name
                </label>
                <input
                  type="text"
                  id="displayName"
                  defaultValue="John Doe"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-100"
                />
              </div>
              <div>
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={3}
                  placeholder="Tell us about yourself..."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none dark:bg-gray-700 dark:text-gray-100"
                />
              </div>
            </div>
          </div>

          {/* Notification section */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
              Notification Preferences
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <label
                    htmlFor="emailNotifications"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email Notifications
                  </label>
                  <p className="text-sm text-gray-500">
                    Recieve updates via email
                  </p>
                </div>
                <input
                  type="checkbox"
                  id="emailNotifications"
                  defaultChecked
                  className="w-4 h-4"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label
                    htmlFor="pushNotifications"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Push Notifications
                  </label>
                  <p className="text-sm text-gray-500">
                    Receive browser notifications
                  </p>
                </div>
                <input
                  type="checkbox"
                  id="pushNotifications"
                  className="w-4 h-4"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label
                    htmlFor="marketingEmails"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Marketing Emails
                  </label>
                  <p className="text-sm text-gray-500">
                    Receive promotional content
                  </p>
                </div>
                <input
                  type="checkbox"
                  id="marketingEmails"
                  className="w-4 h-4"
                />
              </div>
            </div>
          </div>

          {/* Privacy section */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
              Privacy Settings
            </h3>
            <div>
              <label
                htmlFor="profileVisibilty"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Profile Visibility
              </label>
              <select
                id="profileVisibilty"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-100"
              >
                <option value="public">Public</option>
                <option value="friends">Friends Only</option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-800">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setIsSettingsOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600"
              onClick={() => setIsSettingsOpen(false)}
            >
              Save Settings
            </Button>
          </div>
        </form>
      </BaseModal>
    </div>
  );
}
