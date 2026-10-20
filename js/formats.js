/** Check formats of filled fields. Blank fields are handled by required.js. */
function validateFormats(form) {
    const errors = [];
    const email = form.querySelector('#email');
    const phone = form.querySelector('#phone');
    const dob = form.querySelector('#dob');
    const admissionYear = form.querySelector('#entry-year');

    if (email && email.value.trim() !== '') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            errors.push({ field: email, message: 'Enter a valid email address.' });
        }
    }

    if (phone && phone.value.trim() !== '') {
        // Allow a leading + and formatting spaces, hyphens, or parentheses.
        const normalized = phone.value.trim().replace(/[\s()-]/g, '');
        if (!/^\+?\d{7,15}$/.test(normalized)) {
            errors.push({ field: phone, message: 'Enter a valid phone number (7–15 digits).' });
        }
    }

    if (dob && dob.value.trim() !== '') {
        const date = new Date(`${dob.value}T00:00:00`);
        if (Number.isNaN(date.getTime()) || date > new Date()) {
            errors.push({ field: dob, message: 'Enter a valid date of birth that is not in the future.' });
        }
    }

    if (admissionYear && admissionYear.value.trim() !== '') {
        const year = Number(admissionYear.value);
        const currentYear = new Date().getFullYear();
        if (!Number.isInteger(year) || year < 2000 || year > currentYear) {
            errors.push({
                field: admissionYear,
                message: `Year of admission must be between 2000 and ${currentYear}.`
            });
        }
    }

    return errors;
}
