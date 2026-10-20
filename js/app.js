/** Connect validators to the form (frontend-only: no data is sent or saved). */
const form = document.getElementById('biodata-form');
const submitButton = document.getElementById('submit-button');
const formStatus = document.getElementById('form-status');
const admissionYear = document.getElementById('entry-year');

if (form && submitButton && formStatus) {
    // The HTML has a disabled submit button until JavaScript is ready.
    submitButton.disabled = false;

    if (admissionYear) {
        admissionYear.max = String(new Date().getFullYear());
    }

    function clearFieldError(field) {
        field.classList.remove('error');
        field.removeAttribute('aria-invalid');
        const errorMessage = document.getElementById(`${field.id}-error`);
        if (errorMessage) errorMessage.textContent = '';
    }

    function clearAllErrors() {
        form.querySelectorAll('[required]').forEach(clearFieldError);
        formStatus.textContent = '';
        formStatus.className = '';
    }

    form.addEventListener('input', (event) => {
        if (event.target.matches('input, select, textarea')) {
            clearFieldError(event.target);
            formStatus.textContent = '';
            formStatus.className = '';
        }
    });

    form.addEventListener('change', (event) => {
        if (event.target.matches('input, select, textarea')) {
            clearFieldError(event.target);
            formStatus.textContent = '';
            formStatus.className = '';
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // This assignment has no backend.
        clearAllErrors();

        const errors = [
            ...validateRequiredFields(form),
            ...validateFormats(form)
        ];

        if (errors.length > 0) {
            errors.forEach(({ field, message }) => {
                field.classList.add('error');
                field.setAttribute('aria-invalid', 'true');
                const errorMessage = document.getElementById(`${field.id}-error`);
                if (errorMessage) errorMessage.textContent = message;
            });

            formStatus.textContent = `Please correct ${errors.length} field${errors.length === 1 ? '' : 's'} and try again.`;
            formStatus.className = 'error';
            errors[0].field.focus();
            return;
        }

        formStatus.textContent = 'Biodata validated successfully! This is a demo; no information was submitted or saved.';
        formStatus.className = 'success';
    });
}
