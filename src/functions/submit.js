export const sendEmail = async (formData) => {

    try {
        const response = await fetch('https://wilsonZhuBackend.onrender.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.status === 200) {
            alert('Data submitted successfully!');
        } else {
            console.log('Failed with status:', response.status);
            alert('Submission failed! ');
        }
    } catch (error) {
        alert('Network error. Please try again.');
    }
}