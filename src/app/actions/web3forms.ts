'use server';

/**
 * Server-side action for handling Web3Forms submissions
 * This keeps the API access key secure on the server side
 */
export async function submitToWeb3Forms(formData: FormData) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error('WEB3FORMS_ACCESS_KEY is not configured');
    return {
      success: false,
      message: 'Server configuration error. Please contact support.',
    };
  }

  // Create a new FormData object and copy all fields from the original
  // This is necessary because FormData from client is read-only
  const serverFormData = new FormData();
  
  // Copy all existing fields
  for (const [key, value] of formData.entries()) {
    serverFormData.append(key, value);
  }
  
  // Add the access key securely on the server side
  serverFormData.append('access_key', accessKey);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: serverFormData,
    });

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: 'Form submitted successfully!',
        data,
      };
    } else {
      console.error('Web3Forms API error:', data);
      return {
        success: false,
        message: data.message || 'Failed to submit form. Please try again.',
      };
    }
  } catch (error) {
    console.error('Error submitting to Web3Forms:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }
}
