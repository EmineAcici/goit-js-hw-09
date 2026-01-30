const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const formData = { email: '', message: '' };

const feedbackFormState = localStorage.getItem(localStorageKey);
if (feedbackFormState) {
  const { email, message } = JSON.parse(feedbackFormState);
  formData.email = email;
  formData.message = message;

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', e => {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;

  if (!formData.email.trim() && !formData.message.trim()) {
    localStorage.removeItem(localStorageKey);
  } else {
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
