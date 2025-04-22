// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid'; // Correctly import uuid
// import './App.css';

// function App() {
//   const [image, setImage] = useState(null);
//   const [uploadResultMessage, setUploadResultMessage] = useState('Please upload an image for authentication');
//   const [visitorName, setVisitorName] = useState('placeholder.jpg');
//   const [isAuth, setAuth] = useState(false);

//   async function authenticate(visitorImageName) {
//     const requestUrl = `https://cbbb9lp878.execute-api.eu-west-2.amazonaws.com/dev/employee?${new URLSearchParams({
//       objectKey: `${visitorImageName}.jpg`,
//     })}`;

//     try {
//       const response = await fetch(requestUrl, {
//         method: 'GET',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//       });
//       return await response.json();
//     } catch (error) {
//       console.error('Error during authentication:', error);
//       return null;
//     }
//   }

//   function sendImage(e) {
//     e.preventDefault();

//     if (!image) {
//       setUploadResultMessage('No image selected. Please choose an image.');
//       return;
//     }

//     const visitorImageName = uuidv4();
//     setVisitorName(image.name);

//     fetch(`https://cbbb9lp878.execute-api.eu-west-2.amazonaws.com/dev/image-reco-emp12/${visitorImageName}.png`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'image/jpg',
//       },
//       body: image,
//     })
//       .then(async () => {
//         const response = await authenticate(visitorImageName);
//         if (response?.Message === 'Success') {
//           setAuth(true);
//           setUploadResultMessage(`Hi ${response.firstName} ${response.lastName}, welcome to work! Hope you have a productive day.`);
//         } else {
//           setAuth(false);
//           setUploadResultMessage('Authentication Failed: This person is not an employee.');
//         }
//       })
//       .catch((error) => {
//         setAuth(false);
//         setUploadResultMessage('There was an error during the authentication process. Please try again.');
//         console.error(error);
//       });
//   }

//   return (
//     <div className="App">
//       <h2>Felix's Facial Recognition System</h2>
//       <form onSubmit={sendImage}>
//         <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />
//         <button type="submit">Authenticate</button>
//       </form>
//       <div className={isAuth ? 'success' : 'failure'}>{uploadResultMessage}</div>
//       <img src={`./visitors/${visitorName}`} alt="Visitor" height={250} width={250} />
//     </div>
//   );
// }

// export default App;









// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';  
// import './App.css';

// function App() {
//   const defaultImage = process.env.PUBLIC_URL + '/visitors/placeholder.jpg'; // ✅ Correct default image path
//   const [image, setImage] = useState(null);
//   const [previewImage, setPreviewImage] = useState(defaultImage);  
//   const [uploadResultMessage, setUploadResultMessage] = useState('Please upload an image for authentication');
//   const [visitorName, setVisitorName] = useState('placeholder.jpg');
//   const [isAuth, setAuth] = useState(false);

//   async function authenticate(visitorImageName) {
//     const requestUrl = `https://cbbb9lp878.execute-api.eu-west-2.amazonaws.com/dev/employee?${new URLSearchParams({
//       objectKey: `${visitorImageName}.jpg`,
//     })}`;

//     try {
//       const response = await fetch(requestUrl, {
//         method: 'GET',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//       });
//       return await response.json();
//     } catch (error) {
//       console.error('Error during authentication:', error);
//       return null;
//     }
//   }

//   function sendImage(e) {
//     e.preventDefault();

//     if (!image) {
//       setUploadResultMessage('No image selected. Please choose an image.');
//       return;
//     }

//     const visitorImageName = uuidv4();
//     setVisitorName(image.name);
    
//     // Display the selected image as preview
//     const imageURL = URL.createObjectURL(image);
//     setPreviewImage(imageURL);

//     fetch(`https://cbbb9lp878.execute-api.eu-west-2.amazonaws.com/dev/image-reco-emp12/${visitorImageName}.png`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'image/jpg',
//       },
//       body: image,
//     })
//       .then(async () => {
//         const response = await authenticate(visitorImageName);
//         if (response?.Message === 'Success') {
//           setAuth(true);
//           setUploadResultMessage(`Hi ${response.firstName} ${response.lastName}, welcome to work! Have a great day!`);
//         } else {
//           setAuth(false);
//           setUploadResultMessage('Authentication Failed: This person is not an employee.');
//         }
//       })
//       .catch((error) => {
//         setAuth(false);
//         setUploadResultMessage('There was an error during the authentication process. Please try again.');
//         console.error(error);
//       });
//   }

//   return (
//     <div className="App">
//       <h2>Felix's Facial Recognition System</h2>
//       <form onSubmit={sendImage}>
//         <input type="file" name="image" accept="image/*" onChange={(e) => {
//           setImage(e.target.files[0]); 
//           setPreviewImage(URL.createObjectURL(e.target.files[0]));  
//         }} />
//         <button type="submit">Authenticate</button>
//       </form>
//       <div className={isAuth ? 'success' : 'failure'}>{uploadResultMessage}</div>
//       <img src={previewImage} alt="Visitor" height={250} width={250} />
//     </div>
//   );
// }

// export default App;































import { useState } from 'react';
import './App.css';

function App() {
  const defaultImage = '/visitors/placeholder.jpg';
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(defaultImage);
  const [uploadResultMessage, setUploadResultMessage] = useState('Please upload an image for authentication');
  const [isAuth, setAuth] = useState(false);

  function sendImage(e) {
    e.preventDefault();

    if (!image) {
      setUploadResultMessage('No image selected. Please choose an image.');
      return;
    }

    const imageName = image.name.toLowerCase();

    // Display the selected image as preview
    const imageURL = URL.createObjectURL(image);
    setPreviewImage(imageURL);

    // Simulate authentication logic
    if (imageName === 'shubham_kumar.jpg' || imageName === 'rajnish_kumar.jpg') {
      setAuth(true);
      setUploadResultMessage(`Hi ${imageName}, you are authenticated. Have a great day!`);
    } else {
      setAuth(false);
      setUploadResultMessage(`${imageName} - Authentication Failed: This person is not an employee.`);
    }
  }

  return (
    <div className="App">
      <h2>Felix's Facial Recognition System</h2>
      <form onSubmit={sendImage}>
        <input 
          type="file" 
          name="image" 
          accept="image/*" 
          onChange={(e) => {
            const file = e.target.files[0];
            setImage(file);
            if (file) {
              setPreviewImage(URL.createObjectURL(file));
            }
          }} 
        />
        <button type="submit">Authenticate</button>
      </form>
      <div className={isAuth ? 'success' : 'failure'}>
        {uploadResultMessage}
      </div>
      <img src={previewImage} alt="Visitor" height={250} width={250} />
    </div>
  );
}

export default App;

































// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import './App.css';

// function App() {
//   const [image, setImage] = useState(null);
//   const [uploadResultMessage, setUploadResultMessage] = useState('Please upload an image for authentication');
//   const [visitorName, setVisitorName] = useState(`${process.env.PUBLIC_URL}/visitors/placeholder.jpg`);
//   const [isAuth, setAuth] = useState(false);

//   async function authenticateVisitor(visitorImageName) {
//     const requestUrl = `https://9tew3gt0a0.execute-api.eu-west-2.amazonaws.com/dev/employee?${new URLSearchParams({
//       objectKey: `${visitorImageName}.jpg`
//     })}`;

//     try {
//       const response = await fetch(requestUrl, {
//         method: 'GET',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         }
//       });

//       return await response.json();
//     } catch (error) {
//       console.error('Error in authentication:', error);
//       return null;
//     }
//   }

//   async function sendImage(e) {
//     e.preventDefault();
//     if (!image) {
//       setUploadResultMessage('No image selected. Please choose an image.');
//       return;
//     }

//     const visitorImageName = uuidv4();
//     setVisitorName(URL.createObjectURL(image)); // Show preview immediately

//     try {
//       await fetch(`https://9tew3gt0a0.execute-api.eu-west-2.amazonaws.com/dev/image-reco-emp12/${visitorImageName}.png`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': image.type // Set correct MIME type
//         },
//         body: image
//       });

//       const response = await authenticateVisitor(visitorImageName);
//       if (response?.Message === 'Success') {
//         setAuth(true);
//         setUploadResultMessage(`Hi ${response.firstName} ${response.lastName}, welcome to work!`);
//       } else {
//         setAuth(false);
//         setUploadResultMessage('Authentication Failed: This person is not an employee.');
//       }
//     } catch (error) {
//       setAuth(false);
//       setUploadResultMessage('Error during authentication. Please try again.');
//       console.error(error);
//     }
//   }

//   return (
//     <div className="App">
//       <h2>Felix's Facial Recognition System</h2>
//       <form onSubmit={sendImage}>
//         <input 
//           type="file" 
//           name="image" 
//           onChange={e => {
//             const file = e.target.files[0];
//             if (file) {
//               setImage(file);
//               setVisitorName(URL.createObjectURL(file)); // Preview uploaded image
//             }
//           }} 
//         />
//         <button type="submit">Authenticate</button>
//       </form>
//       <div className={isAuth ? 'success' : 'failure'}>{uploadResultMessage}</div>
//       <img src={visitorName} alt="Visitor" height={250} width={250} />
//     </div>
//   );
// }

// export default App;
