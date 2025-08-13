import { useEffect, useState } from "react";

export default function Toast() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.electronAPI.ReceiveFromElectron("toast:recieve", (event, arg) => {
      setMessage(arg.toString());
      const toast = document.getElementById("toast");
      toast.classList.add("flex");
      toast.classList.remove("hidden");
      setTimeout(() => handleClose(), 5000);
    });
  }, []);

  function handleClose() {
    setMessage("");
    const toast = document.getElementById("toast");
    toast.classList.add("hidden");
    toast.classList.remove("flex");
  }

  return (
    <div
      id="toast"
      className="absolute right-0 bottom-20 hidden z-10 items-center justify-between rounded-t-lg border-b-2 border-primary-200 bg-primary-100 bg-clip-padding px-4 pb-2 pt-2.5 tt-sm"
    >
      <p className="flex items-center font-bold text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        {message}
      </p>
      <div className="flex items-center">
        <button
          type="button"
          className="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-toast-desmiss
          aria-label="Close"
          onClick={handleClose}
        >
          <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
