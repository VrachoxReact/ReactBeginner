import { useState } from "react";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    subjects: [],
    resume: null,
    url: "",
    choice: "",
    about: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        subjects: checked
          ? [...prev.subjects, name]
          : prev.subjects.filter((subject) => subject !== name),
      }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
    // Handle form submission logic here
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "",
      subjects: [],
      resume: null,
      url: "",
      choice: "",
      about: "",
    });
    setIsSubmitted(false);
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-8 bg-white rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600">
        Awesome React Form
      </h2>
      {isSubmitted ? (
        <div className="text-center py-16 space-y-4">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          <h3 className="text-2xl font-semibold text-gray-800">
            Form Submitted Successfully!
          </h3>
          <p className="text-gray-600">Thank you for your submission.</p>
          <button
            onClick={handleReset}
            className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300"
          >
            Submit Another Response
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 text-gray-700 bg-white border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none transition-all duration-300"
                placeholder="First Name"
              />
              <label
                htmlFor="firstName"
                className="block mt-2 text-sm font-medium text-gray-600 transition-all duration-300 group-focus-within:text-indigo-600"
              >
                First Name*
              </label>
            </div>
            <div className="group">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 text-gray-700 bg-white border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none transition-all duration-300"
                placeholder="Last Name"
              />
              <label
                htmlFor="lastName"
                className="block mt-2 text-sm font-medium text-gray-600 transition-all duration-300 group-focus-within:text-indigo-600"
              >
                Last Name*
              </label>
            </div>
          </div>
          <div className="group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-gray-700 bg-white border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none transition-all duration-300"
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="block mt-2 text-sm font-medium text-gray-600 transition-all duration-300 group-focus-within:text-indigo-600"
            >
              Email*
            </label>
          </div>
          <div className="group">
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-gray-700 bg-white border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none transition-all duration-300"
              placeholder="Contact Number"
            />
            <label
              htmlFor="contact"
              className="block mt-2 text-sm font-medium text-gray-600 transition-all duration-300 group-focus-within:text-indigo-600"
            >
              Contact*
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender*
            </label>
            <div className="flex space-x-4">
              {["Male", "Female", "Other"].map((option) => (
                <label key={option} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    checked={formData.gender === option}
                    onChange={handleChange}
                    className="form-radio text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your best Subject*
            </label>
            <div className="flex flex-wrap gap-4">
              {["English", "Maths", "Physics"].map((subject) => (
                <label key={subject} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name={subject}
                    checked={formData.subjects.includes(subject)}
                    onChange={handleChange}
                    className="form-checkbox text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-gray-700">{subject}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Upload Resume*
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-indigo-500 transition-colors duration-300">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="resume"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="resume"
                      name="resume"
                      type="file"
                      className="sr-only"
                      onChange={handleChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PDF up to 10MB</p>
              </div>
            </div>
          </div>
          <div className="group">
            <input
              type="url"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-gray-700 bg-white border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none transition-all duration-300"
              placeholder="Enter URL"
            />
            <label
              htmlFor="url"
              className="block mt-2 text-sm font-medium text-gray-600 transition-all duration-300 group-focus-within:text-indigo-600"
            >
              Enter URL*
            </label>
          </div>
          <div>
            <label
              htmlFor="choice"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select your choice
            </label>
            <select
              id="choice"
              name="choice"
              value={formData.choice}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">Select your size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              About
            </label>
            <textarea
              id="about"
              name="about"
              rows="3"
              value={formData.about}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Tell us about yourself"
            ></textarea>
          </div>
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
            >
              <AlertCircle className="mr-2 h-4 w-4" />
              Reset
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SubmissionForm;
