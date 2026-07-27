const axios = require('axios');

async function check() {
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

  try {
    const res = await axios.post('https://fixwheel-backend.onrender.com/api/partners', payload);
    return { status: 200, data: res.data };
  } catch (err) {
    if (err.response) {
      return { status: err.response.status, data: err.response.data };
    }
    return { status: 0, error: err.message };
  }
}

async function poll() {
  const maxAttempts = 6;
  const delayMs = 30000; // 30 seconds

  for (let i = 1; i <= maxAttempts; i++) {
    console.log(`[Poll Attempt ${i}/${maxAttempts}] Checking Render backend...`);
    const result = await check();
    
    if (result.status === 200 || (result.status === 400 && result.data.error === 'You have already filled the partner form.')) {
      console.log('🎉 SUCCESS! Render backend has successfully deployed the updated code!');
      console.log('Result:', result.data);
      process.exit(0);
    } else if (result.status === 400 && result.data.details && result.data.details.some(d => d.field === 'garageName')) {
      console.log('⌛ Render backend is still running the old validation schema (garageName is required).');
    } else {
      console.log('Response:', result);
    }
    
    if (i < maxAttempts) {
      console.log(`Waiting ${delayMs / 1000}s before next attempt...`);
      await new Promise(r => setTimeout(r, delayMs));
    }
  }
  
  console.log('❌ Polling finished. Render backend has not updated yet. You may need to trigger deployment manually on Render if auto-deploy is disabled.');
}

poll();
