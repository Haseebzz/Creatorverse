import { supabase } from "../client";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaTwitch, FaInstagram, FaTwitter, FaYoutube, } from "react-icons/fa";
const AddCreator = () => {
  const [name, setName] = useState('');
  const [youtubeurl, setYoutubeUrl] = useState('');
  const [twitchurl, setTwitchUrl] = useState('');
  const [twitterurl, setTwitterUrl] = useState('');
  const [description, setDescription] = useState('');
  const [instagramurl, setInstagramUrl] = useState('');
  const [imageURL, setImageURL] = useState('');
  const navigate = useNavigate();

  const isValidURL = (url) => {
    // Regular expression pattern for URL validation
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!name || !description || !imageURL) {
      window.alert('Please fill in all required fields');
      return;
    }

    // Check if at least one URL is provided and validate the URLs
    if (!youtubeurl && !twitchurl && !twitterurl && !instagramurl) {
      window.alert('Please provide at least one URL (YouTube, Twitch, Twitter, or Instagram)');
      return;
    }
    if (youtubeurl && !isValidURL(youtubeurl)) {
      window.alert('Invalid YouTube URL');
      return;
    }

    if (twitchurl && !isValidURL(twitchurl)) {
      window.alert('Invalid Twitch URL');
      return;
    }

    if (twitterurl && !isValidURL(twitterurl)) {
      window.alert('Invalid Twitter URL');
      return;
    }
    
    if (instagramurl && !isValidURL(instagramurl)) {
      window.alert('Invalid Instagram URL');
      return;
    }

    try {
      // Prepare the creator data to be inserted
      const creatorData = {
        name,
        description,
        imageURL,
      };

      // Add the URL fields to the creator data if they are provided
      if (youtubeurl) creatorData.youtubeurl = youtubeurl;
      if (twitchurl) creatorData.twitchurl = twitchurl;
      if (twitterurl) creatorData.twitterurl = twitterurl;
      if(instagramurl) creatorData.instagramurl = instagramurl;
      // Add the creator to the database
      const { error } = await supabase.from('creators').insert([creatorData]);

      if (error) {
        window.alert('A creator with this URL already exists');
      } else {
        console.log('Creator added successfully');
        window.alert('Creator added successfully');
        // Clear the input fields after successful addition
        setName('');
        setYoutubeUrl('');
        setTwitchUrl('');
        setTwitterUrl('');
        setDescription('');
        setImageURL('');
        navigate(`/`); // Navigate back to the home page
        window.location.reload();
      }
    } catch (error) {
      console.error('Error adding creator:', error);
      window.alert('An error occurred while adding the creator.');
    }
  };

  return (
    <div className='py-16 max-w-[600px] mx-auto w-full'>
  <h1 className='text-4xl text-center font-bold'>Add Creator</h1>
  <form onSubmit={handleSubmit} className='flex flex-col mt-3'>
    <label className='font-bold text-2xl'>
      Name
    </label>
    <input
      className='mt-3 w-full h-[70px] text-1xl rounded-md p-2 text-black'
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <br />
    <label>
      <h1 className='font-bold text-2xl'>Image</h1>
      <p>Provide a link to an image of your creator. Be sure to include the http://</p>
    </label>
    <input
      type="text"
      value={imageURL}
      onChange={(e) => setImageURL(e.target.value)}
    />
    <br />
    <label>
      <h1 className='font-bold text-2xl'>Description</h1>
      <p>Provide a description of the creator. Who are they? What makes them interesting?</p>
    </label>
    <textarea
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
    <br />
    <h1 className='text-3xl font-bold'>Social Media Links</h1>
    <p>Provide at least one of the social media links</p>
    <label className='flex items-center mt-2'>
      <h1 className='mr-4 text-2xl'><FaTwitch /></h1>
      <h1 className='font-bold text-2xl'>Twitch URL</h1>
    </label>
    <input
      type="text"
      value={twitchurl}
      onChange={(e) => setTwitchUrl(e.target.value)}
    />
    <br />
    <label className='flex items-center mt-2'>
      <h1 className='mr-4 text-2xl'><FaYoutube /></h1>
      <h1 className='font-bold text-2xl'>YouTube URL</h1>
    </label>
    <input
      type="text"
      value={youtubeurl}
      onChange={(e) => setYoutubeUrl(e.target.value)}
    />
    <br />
    <label className='flex items-center mt-2'>
      <h1 className='mr-4 text-2xl'><FaTwitter /></h1>
      <h1 className='font-bold text-2xl'>Twitter URL</h1>
    </label>
    <input
      type="text"
      value={twitterurl}
      onChange={(e) => setTwitterUrl(e.target.value)}
    />
    <br />
    <label className='flex items-center mt-2'>
      <h1 className='mr-4 text-2xl'><FaInstagram /></h1>
      <h1 className='font-bold text-2xl'>Instagram URL</h1>
    </label>
    <input
      type="text"
      value={instagramurl}
      onChange={(e) => setInstagramUrl(e.target.value)}
    />
    <br />
    <div className='flex items-center justify-center text-2xl text-white'>
      <button className='bg-blue-600 w-[200px] rounded-md font-medium my-6 mr-8 py-4' type="submit">Submit</button>
      
    </div>
  </form>
</div>

  );
};

export default AddCreator;
