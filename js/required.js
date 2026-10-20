/**
 * Return one error object per blank required field.
 * This file checks presence only; app.js displays the messages.
 */
function validateRequiredFields(form) {
    const errors = [];
    const requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach((field) => {
        // A value of only spaces counts as empty.
        const value = String(field.value || '').trim();

        if (value === '') {
            const label = form.querySelector(`label[for="${field.id}"]`);
            const fieldName = label
                ? label.textContent.replace(/:\s*$/, '').trim()
                : 'This field';

            errors.push({
                field,
                message: `${fieldName} is required.`
            });
        }
    });

    return errors;
}
