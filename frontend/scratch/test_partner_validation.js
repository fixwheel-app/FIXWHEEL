const axios = require('axios');

async function test() {
  try {
    const payload = {
      garageName: "",
      ownerName: "test",
      phone: "9490909475",
      city: "gurgaon",
      address: "jbcjsckjsbckjbsjcjsc",
      vehicleType: "Bike",
      servicesOffered: ["General Service"],
      garagePhotos: [],
      licensePhoto: "https://grvbunnfnqeyfafcaaaf.supabase.co/storage/v1/object/public/partner-uploads/licenses/1785241753909-download.jpeg"
    };
    
    console.log('Sending payload to Render production URL...');
    const res = await axios.post('https://fixwheel-backend.onrender.com/api/partners', payload);
    console.log('Response:', res.data);
  } catch (err) {
    if (err.response) {
      console.error('Error Response Status:', err.response.status);
      console.error('Error Response Data:', err.response.data);
    } else {
      console.error('Error:', err.message);
    }
  }
}

test();
