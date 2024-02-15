import { Fragment, useRef, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function CreateEventModal({ isOpen, onClose, onAddEvent }) {
  const nameRef = useRef(null);
  const createdAtRef = useRef(null); // Add a reference for the event creation date if needed
  const formRef = useRef();

  const submitFormData = async (event) => {
    event.preventDefault();

    const formData = {
      name: nameRef.current.value,
    //   created_at: new Date().toISOString(), // You can adjust this based on your requirements
    };

    try {
      console.log('Form Data:', formData);

      // Clear input values
      nameRef.current.value = "";

      const response = await fetch('http://127.0.0.1:5000/api/v1/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create event');
      }

      // Fetch updated data from the server if needed
      // const updatedData = await response.json();

      // Call the callback function to update the state in the parent component (EventList)
      onAddEvent(formData);

      // Close the modal after submitting the data
      onClose();
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };



//   const submitFormData = (e) => {
//     e.preventDefault();
// 	const formData = {
//       name: nameRef.current.value,
//     };
//     onSubmit(formData);
//   };

return (
	<Transition.Root show={isOpen} as={Fragment}>
    <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="flex items-center justify-center min-h-full">
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:max-w-md sm:w-full">
                    <form className="space-y-6 p-8" onSubmit={submitFormData} ref={formRef}>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name of the Tournament <span className='text-red-500'>*</span></label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="e.g. World Cup"
                                required
                                ref={nameRef}
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </Dialog.Panel>
            </Transition.Child>
        </div>
    </Dialog>
</Transition.Root>

);
};