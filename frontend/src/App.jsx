import { useState } from "react";
import axios from "axios";

const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    userName: "",
    senderEmail: "",
    recieversEmail: "",
    subject: "",
    message: "",
  });
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(emailData);
    const response = await axios.post(
      "http://localhost:4000/api/send-mail",
      emailData
    );
    console.log(response);
  };
  const [darkMode, setDarkMode] = useState(false);

  // Toggling dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900`}
    >
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-600"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
          Send an Email
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 dark:text-gray-300 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              onChange={(e) =>
                setEmailData({ ...emailData, userName: e.target.value })
              }
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-300 font-semibold mb-2">
              From
            </label>
            <input
              type="email"
              placeholder="Your Email"
              onChange={(e) =>
                setEmailData({ ...emailData, senderEmail: e.target.value })
              }
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-300 font-semibold mb-2">
              To
            </label>
            <input
              type="email"
              placeholder="Recievers email"
              onChange={(e) =>
                setEmailData({ ...emailData, recieversEmail: e.target.value })
              }
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-300 font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              placeholder="Subject"
              onChange={(e) =>
                setEmailData({ ...emailData, subject: e.target.value })
              }
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label className="block text-gray-600 dark:text-gray-300 font-semibold mb-2">
              Message
            </label>
            <textarea
              placeholder="Your Message"
              onChange={(e) =>
                setEmailData({ ...emailData, message: e.target.value })
              }
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              rows="5"
            ></textarea>
          </div>

          <button
            type="submit"
            onClick={handleFormSubmit}
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
