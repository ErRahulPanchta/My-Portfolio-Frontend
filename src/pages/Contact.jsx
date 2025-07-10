import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
  
    // Setup manual timeout using AbortController
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 seconds
  
    try {
      console.log('Submitting:', data); // Debug
  
const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user-message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        signal: controller.signal, // pass signal for aborting
      });
  
      clearTimeout(timeoutId); // clear timeout on success
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || 'Submission failed');
      }
  
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      console.error('Submission error:', error);
  
      if (error.name === 'AbortError') {
        toast.error('Request timed out. Please try again.');
      } else if (error.message.includes('Failed to fetch')) {
        toast.error('Network error or CORS issue.');
      } else {
        toast.error(error.message || 'Something went wrong.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <section className="p-6 md:p-10 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800 dark:text-blue-400">
          Contact Me
        </h2>

        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          aria-labelledby="contact-form-heading"
        >
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              id="name"
              type="text"
              {...register('name', { 
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters'
                },
                maxLength: {
                  value: 50,
                  message: 'Name must be less than 50 characters'
                }
              })}
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your name"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby="name-error"
            />
            {errors.name && (
              <p id="name-error" className="text-red-600 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email address'
                }
              })}
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your email"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby="email-error"
            />
            {errors.email && (
              <p id="email-error" className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              rows="5"
              {...register('message', { 
                required: 'Message is required',
                minLength: {
                  value: 10,
                  message: 'Message must be at least 10 characters'
                },
                maxLength: {
                  value: 1000,
                  message: 'Message must be less than 1000 characters'
                }
              })}
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your message"
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby="message-error"
            />
            {errors.message && (
              <p id="message-error" className="text-red-600 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                Sending...
              </>
            ) : 'Send Message'}
          </button>
        </form>

        <ToastContainer 
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          toastClassName="dark:bg-gray-700 dark:text-white"
        />
      </div>
    </section>
  );
};

export default Contact;