//Toast function called showToast() to provide feedback
    // after form submission
    function showToast({toastElement, toastBodyElement, bgColor, msg}){
        // execute code run BS toast to show status of activity.
        // html with toast id
        const toastEl = toastElement;
        const toastBody = toastBodyElement;
        toastEl.classList.remove("text-bg-danger");  //remove all known used colors
        toastEl.classList.remove("text-bg-success"); //remove all known used colors
        toastEl.classList.add(`text-bg-${bgColor}`); //Use template string to change color for code readability
        toastBody.textContent = "Hello! " + msg;                 //add message to toast's body
        const toast = new bootstrap.Toast(toastEl);  //create new instance of toast
        toast.show();                                //display the new instance of toast 
    }